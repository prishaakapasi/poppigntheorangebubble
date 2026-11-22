/* Find your clubs: up to five tap-only questions, matched against every group
   in js/orgs.js. The bubble inflates with each answer and pops into a short list.
   Interest decides which groups are in the running. Time, applying and goals
   only re-rank groups that have student info, since that is all we know. */
(function () {
  var P = window.Pop, D = window.POP_DATA, Q = D.quiz;
  var ORGS = window.POP_ORGS || [], PAGES = window.POP_ORG_PAGES || {}, CATS = window.POP_ORG_CATS || {};
  var esc = P.escapeHtml, icon = P.icon;
  var art = document.getElementById('art'), panel = document.getElementById('panel');
  var bar = document.getElementById('bar'), progress = bar.parentNode;
  var NOTES = ['Let’s find your people.', 'Getting warmer…', 'Keep going…', 'Almost there…', 'One more…'];
  var ENTRY = { audition: 'Audition', application: 'Application', tryout: 'Tryouts', open: 'Open to all' };
  var s, shown;

  document.getElementById('logo').innerHTML = '<span>p</span>' + P.bubble({ stroke: 6 }) + '<span>p</span>';
  document.getElementById('exit').innerHTML = icon('x') + 'Exit';

  function reset() { s = { step: 0, a: {} }; shown = 5; }

  // The questions for this run: interest, an optional follow-up, then time, applying, goal.
  function steps() {
    var list = [{ id: 'interest', q: 'What are you into?', opts: Q.interests, cols: true }];
    var it = s.a.interest != null ? Q.interests[s.a.interest] : null;
    if (it && it.follow) list.push({ id: 'follow', q: it.follow.q, opts: it.follow.opts });
    list.push({ id: 'time', q: Q.time.q, opts: Q.time.opts });
    list.push({ id: 'apply', q: Q.apply.q, opts: Q.apply.opts });
    list.push({ id: 'goal', q: Q.goal.q, opts: Q.goal.opts });
    return list;
  }
  function total() { return s.a.interest == null ? 5 : steps().length; }

  function matches() {
    var it = Q.interests[s.a.interest == null ? 0 : s.a.interest];
    var sub = it.follow && s.a.follow != null ? it.follow.opts[s.a.follow] : null;
    var re = sub && sub.re ? new RegExp(sub.re, 'i') : null;
    var time = s.a.time != null ? Q.time.opts[s.a.time].range : null;
    var apply = s.a.apply != null ? Q.apply.opts[s.a.apply].k : 'either';
    var goal = s.a.goal != null ? Q.goal.opts[s.a.goal].k : null;
    var seen = {}, out = [];
    ORGS.forEach(function (o) {
      if (it.cats.indexOf(o[2]) < 0) return;
      var named = re ? re.test(o[0]) : false;
      if (re && !named) return;
      var id = PAGES[o[0]] || P.slug(o[0]);
      if (seen[id]) return; seen[id] = true;
      var page = D.clubs[id], meta = D.quizMeta[id] || {}, why = [], score = Math.random() * 0.5;
      if (page) {
        score += 3;
        if (meta.hours && time && meta.hours[0] <= time[1] && meta.hours[1] >= time[0]) { score += 1; why.push('Fits your time'); }
        if (meta.entry && apply === 'open') { if (meta.entry === 'open') { score += 2; } else { score -= 1; } }
        if (meta.entry && apply === 'selective' && meta.entry !== 'open') score += 1;
        if (goal && meta.goals && meta.goals.indexOf(goal) >= 0) { score += 1; why.push('Matches what you want'); }
      }
      out.push({ name: page ? page.name : o[0], href: 'clubs.html?club=' + id, page: page, meta: meta, why: why, score: score, cat: o[2] });
    });
    return out.sort(function (a, b) { return b.score - a.score; });
  }

  function renderArt() {
    var n = total();
    if (s.step >= n) { art.innerHTML = P.BIG_BURST + '<span class="pop-word" aria-hidden="true">pop!</span>'; return; }
    var scale = 0.45 + 0.5 * (s.step / (n - 1));
    var existing = art.querySelector('.quiz-bubble');
    if (existing) { existing.style.transform = 'scale(' + scale + ')'; art.querySelector('.quiz-note').textContent = NOTES[s.step]; return; }
    art.innerHTML = '<span class="quiz-bubble" style="transform:scale(' + scale + ')">' +
      P.bubble({ stroke: 2.4, extra: '<circle cx="22" cy="51" r="2.6" fill="#FFFDF8"/>' }) + '</span>' +
      '<p class="quiz-note">' + NOTES[s.step] + '</p>';
  }

  function renderQuestion() {
    var st = steps()[s.step];
    var tiles = st.opts.map(function (o, k) {
      return '<button class="tile' + (st.cols ? ' compact' : '') + '" type="button" data-pick="' + k + '" aria-pressed="' + (s.a[st.id] === k) + '">' +
        '<span style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><span class="t">' + esc(o.t) + '</span>' + icon(o.icon) + '</span>' +
        '<span class="s">' + esc(o.d) + '</span></button>';
    }).join('');
    panel.innerHTML =
      '<div class="rise"><p class="eyebrow">Find your clubs · ' + (s.step + 1) + ' of ' + total() + '</p><h1 tabindex="-1">' + esc(st.q) + '</h1></div>' +
      '<div class="tiles rise">' + tiles + '</div>' +
      '<div class="quiz-foot">' +
        (s.step > 0 ? '<button class="link-btn" type="button" data-back style="padding-left:0;display:inline-flex;gap:4px;align-items:center">' + icon('left') + 'Back</button>' : '') +
        (s.step > 0 ? '<button class="link-btn" type="button" data-skip>Skip this one</button>' : '') +
        '<span class="privacy">Your answers stay on your device.</span>' +
      '</div>';
  }

  function blurb(m) {
    if (!m.page) return 'No student info yet · ' + (CATS[m.cat] || 'Student group');
    var parts = [m.page.category.split(' · ')[0]];
    if (m.meta.entry) parts.push(ENTRY[m.meta.entry]);
    if (m.meta.hours) parts.push(m.meta.hours[0] === m.meta.hours[1] ? 'about ' + m.meta.hours[0] + ' hrs a week' : m.meta.hours[0] + '–' + m.meta.hours[1] + ' hrs a week');
    return parts.join(' · ');
  }

  function renderResults() {
    var all = matches(), it = Q.interests[s.a.interest];
    var sub = it.follow && s.a.follow != null ? it.follow.opts[s.a.follow] : null;
    var topic = sub && sub.re ? sub.t : it.t;
    var withInfo = all.filter(function (m) { return m.page; }).length;
    var list = all.slice(0, shown).map(function (m, k) {
      return '<a class="rise" href="' + m.href + '"><span class="n">' + (k < 9 ? '0' : '') + (k + 1) + '</span>' +
        '<span style="flex:1"><span class="name">' + esc(m.name) + '</span><span class="why">' + esc(blurb(m)) + '</span>' +
        (m.why.length ? '<span class="fit">' + m.why.map(function (w) { return '<span>' + icon('sparkle') + esc(w) + '</span>'; }).join('') + '</span>' : '') +
        '</span>' + icon('arrow') + '</a>';
    }).join('');
    var head = all.length
      ? '<h1 tabindex="-1">' + all.length + (all.length === 1 ? ' group' : ' groups') + ' in ' + esc(topic) + '.</h1>' +
        '<p style="margin:10px 0 0;color:var(--text-2)">' + (withInfo
          ? 'The ' + (withInfo === 1 ? 'one' : withInfo) + ' with student info ' + (withInfo === 1 ? 'comes' : 'come') + ' first, ranked by your answers.'
          : 'No one has added student info for these yet, so they’re in no particular order.') + '</p>'
      : '<h1 tabindex="-1">Nothing matched that one.</h1><p style="margin:10px 0 0;color:var(--text-2)">Try a different answer, or browse every group.</p>';
    panel.innerHTML =
      '<div class="rise"><p class="eyebrow">Your short list</p>' + head + '</div>' +
      '<div class="results">' + list + '</div>' +
      '<div class="results-actions">' +
        (all.length > shown ? '<button class="btn pill" type="button" data-more>Show ' + Math.min(5, all.length - shown) + ' more</button>' : '') +
        '<a class="btn pill outline" href="clubs.html?cat=' + it.cats[0] + '">' + icon('users') + 'Browse all ' + esc(it.t) + '</a>' +
        '<button class="link-btn" type="button" data-restart style="display:inline-flex;gap:6px;align-items:center">' + icon('refresh') + 'Retake the quiz</button></div>';
  }

  function render(focus) {
    var n = total(), done = s.step >= n;
    bar.style.width = Math.round(Math.min(s.step, n) / n * 100) + '%';
    progress.setAttribute('aria-valuemax', n);
    progress.setAttribute('aria-valuenow', Math.min(s.step, n));
    renderArt();
    if (done) renderResults(); else renderQuestion();
    if (focus) { var h = panel.querySelector('h1'); if (h) h.focus({ preventScroll: true }); }
  }

  var busy = false;
  panel.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-pick]');
    if (t) {
      if (busy) return;
      var st = steps()[s.step], k = Number(t.getAttribute('data-pick'));
      if (st.id === 'interest' && s.a.interest !== k) s.a = {};   // a new interest resets the follow-up
      s.a[st.id] = k;
      panel.querySelectorAll('[data-pick]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === t)); });
      busy = true;
      setTimeout(function () { busy = false; s.step++; render(true); }, 240);
      return;
    }
    if (ev.target.closest('[data-back]')) { s.step = Math.max(0, s.step - 1); render(true); return; }
    if (ev.target.closest('[data-skip]')) { delete s.a[steps()[s.step].id]; s.step++; render(true); return; }
    if (ev.target.closest('[data-more]')) { shown += 5; renderResults(); return; }
    if (ev.target.closest('[data-restart]')) { reset(); art.innerHTML = ''; render(true); }
  });

  reset();
  render(false);
})();
