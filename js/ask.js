/* Ask Pop: calm empty state with starter questions, then short answers
   that reveal more only when asked. */
(function () {
  var P = window.Pop, D = window.POP_DATA, app = document.getElementById('app');
  var ORDER = ['bicker', 'when', 'consult', 'intro'];
  var STARTER_ICONS = { bicker: 'users', when: 'cal', consult: 'briefcase', intro: 'book' };
  var state = { asked: [], typing: false, open: {} };
  var esc = P.escapeHtml, icon = P.icon;
  var mini = P.bubble({ stroke: 6 });

  function findKey(text) {
    var t = text.toLowerCase(), used = state.asked.map(function (a) { return a.key; });
    for (var i = 0; i < ORDER.length; i++) {
      var k = ORDER[i];
      if (used.indexOf(k) >= 0) continue;
      if (D.answers[k].keywords.some(function (w) { return t.indexOf(w) >= 0; })) return k;
    }
    return 'custom';
  }

  function ask(key, text) {
    state.asked.push({ key: key, text: text });
    state.typing = true;
    render(true);
    setTimeout(function () { state.typing = false; render(); }, 700);
  }

  function askBox(id, placeholder, label, btn) {
    return '<form class="ask-box" data-ask>' +
      '<label class="sr-only" for="' + id + '">' + label + '</label>' +
      '<input id="' + id + '" type="text" placeholder="' + placeholder + '" autocomplete="off">' +
      '<button class="btn" type="submit">' + btn + '</button></form>';
  }

  function renderEmpty() {
    var starters = ORDER.map(function (k) {
      return '<button class="starter" type="button" data-q="' + k + '"><span style="display:flex;gap:12px;align-items:center">' +
        icon(STARTER_ICONS[k]) + esc(D.answers[k].q) + '</span>' + icon('arrow') + '</button>';
    }).join('');
    return '<div class="ask-empty">' +
      '<div class="bobbing">' + P.bubble({ stroke: 3.5 }) + '</div>' +
      '<div class="rise"><h1>What do you want to know?</h1><p class="lead">Short answers, from students who’ve been there.</p></div>' +
      askBox('askfirst', 'Ask anything about Princeton…', 'Ask Pop a question', 'Ask') +
      '<div style="width:100%;display:flex;flex-direction:column;gap:12px;margin-top:16px">' +
      '<p class="eyebrow" style="color:var(--muted)">Or start with one of these</p>' +
      '<div class="starters">' + starters + '</div></div></div>';
  }

  function renderChat() {
    var out = '';
    state.asked.forEach(function (item, i) {
      var e = item.key === 'custom' ? null : D.answers[item.key];
      out += '<div class="msg-user rise">' + esc(e ? e.q : item.text) + '</div>';
      if (i === state.asked.length - 1 && state.typing) return;
      var a = e || { a: D.fallback, more: '', quote: '', quoteBy: '', sources: [] };
      var moreOpen = state.open['more' + i], quoteOpen = state.open['quote' + i];
      out += '<div class="msg-bot rise">' + mini + '<div class="msg-body"><p>' + esc(a.a) + '</p>';
      if (a.more && moreOpen) out += '<p class="more rise">' + esc(a.more) + '</p>';
      if (a.quote && quoteOpen) out += '<figure class="rise"><blockquote>' + esc(a.quote) + '</blockquote><figcaption>' + esc(a.quoteBy) + '</figcaption></figure>';
      out += '<div class="msg-actions">';
      if (a.more && !moreOpen) out += '<button type="button" data-toggle="more' + i + '">' + icon('down') + 'Tell me more</button>';
      if (a.quote && !quoteOpen) out += '<button type="button" data-toggle="quote' + i + '">' + icon('quote') + 'Hear from a student</button>';
      a.sources.forEach(function (s) { out += '<a href="' + s.href + '">' + icon('external') + esc(s.title) + '</a>'; });
      out += '</div></div></div>';
    });
    if (state.typing) out += '<div class="typing" aria-label="Pop is typing"><span></span><span></span><span></span></div>';
    var used = state.asked.map(function (a) { return a.key; });
    var unused = ORDER.filter(function (k) { return used.indexOf(k) < 0; }).slice(0, 2);
    if (!state.typing && unused.length) {
      out += '<div class="followups rise">' + unused.map(function (k) {
        return '<button class="chip" type="button" data-q="' + k + '">' + icon(STARTER_ICONS[k]) + esc(D.answers[k].q) + '</button>';
      }).join('') + '</div>';
    }
    return '<div class="chat"><div class="chat-top"><p class="eyebrow">Ask Pop</p>' +
      '<button class="chip" type="button" data-reset>' + icon('plus') + 'New question</button></div>' +
      out + askBox('askin', 'Ask a follow-up…', 'Ask a follow-up', icon('send') + 'Send') + '</div>';
  }

  function render(keepFocus) {
    app.innerHTML = state.asked.length ? renderChat() : renderEmpty();
    var input = app.querySelector('[data-ask] input');
    if (input && (keepFocus || state.asked.length)) input.focus({ preventScroll: true });
  }

  app.addEventListener('click', function (ev) {
    var q = ev.target.closest('[data-q]');
    if (q) { var k = q.getAttribute('data-q'); ask(k, D.answers[k].q); return; }
    var t = ev.target.closest('[data-toggle]');
    if (t) { var id = t.getAttribute('data-toggle'); state.open[id] = true; render(); return; }
    if (ev.target.closest('[data-reset]')) { state = { asked: [], typing: false, open: {} }; render(); }
  });

  app.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var input = ev.target.querySelector('input');
    var text = input.value.trim();
    if (!text) return;
    ask(findKey(text), text);
  });

  // Support questions passed from the home page: ask.html?q=...
  var initial = new URLSearchParams(location.search).get('q');
  if (initial && initial.trim()) ask(findKey(initial.trim()), initial.trim());
  else render();
})();
