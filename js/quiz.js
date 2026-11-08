/* Find your clubs: four tap-only questions. The bubble inflates with each
   answer and pops into the short list. */
(function () {
  var P = window.Pop, D = window.POP_DATA, Q = D.quiz;
  var esc = P.escapeHtml, icon = P.icon;
  var art = document.getElementById('art'), panel = document.getElementById('panel');
  var bar = document.getElementById('bar'), progress = bar.parentNode;
  var OPTION_ICONS = [
    ['briefcase', 'code', 'music', 'heart'],
    ['leaf', 'clock', 'flame', 'sparkle'],
    ['key', 'door', 'shuffle', 'help'],
    ['user', 'users', 'users', 'sparkle']
  ];
  var NOTES = ['Let’s find your people.', 'Getting warmer…', 'Almost there…', 'One more…'];
  var step = 0, answers = [null, null, null, null];

  document.getElementById('logo').innerHTML = '<span>p</span>' + P.bubble({ stroke: 6 }) + '<span>p</span>';
  document.getElementById('exit').innerHTML = icon('x') + 'Exit';

  function renderArt() {
    if (step >= Q.length) {
      art.innerHTML = P.BIG_BURST + '<span class="pop-word" aria-hidden="true">pop!</span>';
      return;
    }
    var scale = [0.45, 0.6, 0.75, 0.9][step];
    var existing = art.querySelector('.quiz-bubble');
    if (existing) { existing.style.transform = 'scale(' + scale + ')'; art.querySelector('.quiz-note').textContent = NOTES[step]; return; }
    art.innerHTML = '<span class="quiz-bubble" style="transform:scale(' + scale + ')">' +
      P.bubble({ stroke: 2.4, extra: '<circle cx="22" cy="51" r="2.6" fill="#FFFDF8"/>' }) + '</span>' +
      '<p class="quiz-note">' + NOTES[step] + '</p>';
  }

  function renderQuestion() {
    var q = Q[step];
    var tiles = q.opts.map(function (o, k) {
      return '<button class="tile" type="button" data-pick="' + k + '" aria-pressed="' + (answers[step] === k) + '">' +
        '<span style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><span class="t">' + esc(o.t) + '</span>' + icon(OPTION_ICONS[step][k]) + '</span>' +
        '<span class="s">' + esc(o.d) + '</span></button>';
    }).join('');
    panel.innerHTML =
      '<div class="rise"><p class="eyebrow">Find your clubs · ' + (step + 1) + ' of ' + Q.length + '</p><h1>' + esc(q.q) + '</h1></div>' +
      '<div class="tiles rise">' + tiles + '</div>' +
      '<div class="quiz-foot">' +
        (step > 0 ? '<button class="link-btn" type="button" data-back style="padding-left:0;display:inline-flex;gap:4px;align-items:center">' + icon('left') + 'Back</button>' : '') +
        '<button class="link-btn" type="button" data-skip>Skip this one</button>' +
        '<span class="privacy">Your answers stay on your device.</span>' +
      '</div>';
  }

  function renderResults() {
    var pick = function (qi, fallback) { return answers[qi] === null ? fallback : Q[qi].opts[answers[qi]].k; };
    var interest = pick(0, 'biz'), time = pick(1, '3–5 hrs'), apply = pick(2, 'either');
    var label = { biz: 'business', tech: 'tech', arts: 'arts', serve: 'service' }[interest];
    var applyNote = { selective: 'competitive application', open: 'open to everyone', either: 'mix of open and selective' }[apply];
    var whys = ['Matches your ' + label + ' interest · fits ' + time + ' a week', 'Popular with freshmen · ' + applyNote, 'Members say it’s a good first club · flexible time'];
    var list = D.quizResults[interest].map(function (c, k) {
      return '<a class="rise" href="' + c[1] + '"><span class="n">0' + (k + 1) + '</span>' +
        '<span style="flex:1"><span class="name">' + esc(c[0]) + ' (sample)</span><span class="why">' + esc(whys[k]) + '</span></span>' + icon('arrow') + '</a>';
    }).join('');
    panel.innerHTML =
      '<div class="rise"><p class="eyebrow">Your short list</p><h1>Three clubs worth a look.</h1>' +
      '<p style="margin:10px 0 0;color:var(--text-2)">Sample results for the prototype, based on your answers.</p></div>' +
      '<div class="results">' + list + '</div>' +
      '<div class="results-actions"><a class="btn pill" href="ask.html">' + icon('chat') + 'Ask Pop about these</a>' +
      '<button class="link-btn" type="button" data-restart style="display:inline-flex;gap:6px;align-items:center">' + icon('refresh') + 'Retake the quiz</button></div>';
  }

  function render() {
    var done = step >= Q.length;
    var pct = Math.round(Math.min(step, Q.length) / Q.length * 100);
    bar.style.width = pct + '%';
    progress.setAttribute('aria-valuenow', Math.min(step, Q.length));
    renderArt();
    if (done) renderResults(); else renderQuestion();
  }

  panel.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-pick]');
    if (t) {
      answers[step] = Number(t.getAttribute('data-pick'));
      t.setAttribute('aria-pressed', 'true');
      setTimeout(function () { step++; render(); }, 260);
      return;
    }
    if (ev.target.closest('[data-back]')) { step = Math.max(0, step - 1); render(); return; }
    if (ev.target.closest('[data-skip]')) { step++; render(); return; }
    if (ev.target.closest('[data-restart]')) { step = 0; answers = [null, null, null, null]; art.innerHTML = ''; render(); }
  });

  render();
})();
