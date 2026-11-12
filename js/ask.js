/* Ask Pop: calm empty state with starter questions, then short answers
   that reveal more only when asked.
   Starter questions use answers written by the team (instant and reliable).
   Typed questions go to the backend (/api/ask, Gemini limited to this site's
   content). If the backend is off or unreachable, it falls back to keyword
   matching, so the prototype always works. */
(function () {
  var P = window.Pop, D = window.POP_DATA, app = document.getElementById('app');
  var ORDER = ['bicker', 'cottage', 'dance', 'acappella', 'consult', 'intro', 'when'];
  var STARTER_ICONS = { bicker: 'users', cottage: 'pin', dance: 'music', acappella: 'music', when: 'cal', consult: 'briefcase', intro: 'book' };
  var state = { asked: [], typing: false, open: {} };
  var esc = P.escapeHtml, icon = P.icon;
  var mini = P.bubble({ stroke: 6 });

  function usedKeys() { return state.asked.map(function (a) { return a.key; }); }

  function findKey(text) {
    var t = text.toLowerCase(), used = usedKeys();
    for (var i = 0; i < ORDER.length; i++) {
      var k = ORDER[i];
      if (used.indexOf(k) >= 0) continue;
      if (D.answers[k].keywords.some(function (w) { return t.indexOf(w) >= 0; })) return k;
    }
    return 'custom';
  }

  function pageName(id) {
    if (D.clubs[id]) return D.clubs[id].name;
    var e = D.eatingClubs.filter(function (x) { return x.id === id; })[0];
    return e ? e.name : '';
  }

  // A starter question: answer from the team's notes after a short pause.
  function askKnown(key) {
    state.asked.push({ key: key, text: D.answers[key].q });
    state.typing = true; render(true);
    setTimeout(function () { state.typing = false; render(); }, 600);
  }

  // A typed question: try the AI backend, fall back to keyword matching.
  function askTyped(text) {
    var item = { key: 'custom', text: text };
    state.asked.push(item);
    state.typing = true; render(true);
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 12000);
    fetch(D.apiBase + '/api/ask', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: text }), signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) { if (!r.ok) throw new Error('off'); return r.json(); })
      .then(function (j) {
        if (!j || !j.answer) throw new Error('empty');
        item.ai = { a: j.answer, known: !!j.known, source: j.source || '', sourceName: j.sourceName || '' };
      })
      .catch(function () {
        var k = findKey(text);            // backend off: use the team's notes if a keyword matches
        if (k !== 'custom') { item.key = k; item.typed = text; }
      })
      .then(function () { clearTimeout(timer); state.typing = false; render(); });
  }

  function askBox(id, placeholder, label, btn) {
    return '<form class="ask-box" data-ask>' +
      '<label class="sr-only" for="' + id + '">' + label + '</label>' +
      '<input id="' + id + '" type="text" maxlength="300" placeholder="' + placeholder + '" autocomplete="off">' +
      '<button class="btn" type="submit">' + btn + '</button></form>';
  }

  function renderEmpty() {
    var starters = ORDER.slice(0, 4).map(function (k) {
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

  function answerFor(item) {
    if (item.ai) {
      var srcName = item.ai.sourceName || pageName(item.ai.source);
      var src = item.ai.source && srcName ? [{ title: srcName, href: 'clubs.html?club=' + item.ai.source }] : [];
      return { a: item.ai.a, more: '', quote: '', quoteBy: '', sources: src, unknown: !item.ai.known };
    }
    if (item.key !== 'custom') return D.answers[item.key];
    return { a: D.fallback, more: '', quote: '', quoteBy: '', sources: [], unknown: true };
  }

  function renderChat() {
    var out = '';
    state.asked.forEach(function (item, i) {
      out += '<div class="msg-user rise">' + esc(item.typed || item.text) + '</div>';
      if (i === state.asked.length - 1 && state.typing) return;
      var a = answerFor(item);
      var moreOpen = state.open['more' + i], quoteOpen = state.open['quote' + i];
      out += '<div class="msg-bot rise">' + mini + '<div class="msg-body"><p>' + esc(a.a) + '</p>';
      if (a.more && moreOpen) out += '<p class="more rise">' + esc(a.more) + '</p>';
      if (a.quote && quoteOpen) out += '<figure class="rise"><blockquote>' + esc(a.quote) + '</blockquote><figcaption>' + esc(a.quoteBy) + '</figcaption></figure>';
      out += '<div class="msg-actions">';
      if (a.more && !moreOpen) out += '<button type="button" data-toggle="more' + i + '">' + icon('down') + 'Tell me more</button>';
      if (a.quote && !quoteOpen) out += '<button type="button" data-toggle="quote' + i + '">' + icon('quote') + 'Hear from a student</button>';
      a.sources.forEach(function (s) { out += '<a href="' + s.href + '">' + icon('external') + esc(s.title) + '</a>'; });
      if (a.unknown) out += '<a href="add.html">' + icon('plus') + 'Know the answer? Add what you know</a>';
      out += '</div></div></div>';
    });
    if (state.typing) out += '<div class="typing" aria-label="Pop is typing"><span></span><span></span><span></span></div>';
    var used = usedKeys();
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
    if (state.typing) return;
    var q = ev.target.closest('[data-q]');
    if (q) { askKnown(q.getAttribute('data-q')); return; }
    var t = ev.target.closest('[data-toggle]');
    if (t) { state.open[t.getAttribute('data-toggle')] = true; render(); return; }
    if (ev.target.closest('[data-reset]')) { state = { asked: [], typing: false, open: {} }; render(); }
  });

  app.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (state.typing) return;
    var text = ev.target.querySelector('input').value.trim();
    if (text.length < 3) return;
    askTyped(text);
  });

  // Support questions passed from the home page: ask.html?q=...
  var initial = (new URLSearchParams(location.search).get('q') || '').trim();
  if (initial.length >= 3) askTyped(initial); else render();
})();
