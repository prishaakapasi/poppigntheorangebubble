/* Add what you know: a few taps decide which questions you see.
   What you're writing about + your connection to it = only the questions you can answer.
   Each question is marked Fact or Your take, so pages can keep the two apart. */
(function () {
  var P = window.Pop, D = window.POP_DATA, app = document.getElementById('app');
  var esc = P.escapeHtml, icon = P.icon;
  var params = new URLSearchParams(location.search);

  var TYPES = [
    { id: 'eating', t: 'An eating club', d: 'Bicker, sign-in, the vibe', icon: 'pin' },
    { id: 'club', t: 'A club or group', d: 'Getting in, time, what it’s like', icon: 'users' },
    { id: 'class', t: 'A class', d: 'Workload, tips, what it leads to', icon: 'book' }
  ];
  var CONNECTIONS = {
    eating: [['member', 'I’m a member'], ['applied', 'I went through bicker or sign-in'], ['friends', 'I have friends there or go often'], ['outside', 'I’m not connected to it']],
    club: [['member', 'I’m in it'], ['former', 'I used to be in it'], ['applied', 'I applied or auditioned'], ['outside', 'I’m not connected to it']],
    'class': [['took', 'I took it'], ['taking', 'I’m taking it now']]
  };
  var ALL = ['member', 'former', 'applied', 'friends', 'outside', 'took', 'taking'];
  var QUESTIONS = {
    eating: [
      { id: 'process', label: 'How getting in works', kind: 'fact', q: 'How does bicker or sign-in work at this club?', hint: 'How many days, and what the conversations or events are like.', who: ['member', 'applied'] },
      { id: 'tip', label: 'Biggest tip', kind: 'take', q: 'What’s your biggest tip for someone going through it?', who: ['member', 'applied'] },
      { id: 'space', label: 'The club', kind: 'fact', q: 'What’s the club itself like?', hint: 'Food, spaces, events.', who: ['member', 'friends'] },
      { id: 'vibe', label: 'The vibe', kind: 'take', q: 'How would you describe the vibe, from your own experience?', who: ['member', 'friends'] },
      { id: 'reputation', label: 'From the outside', kind: 'take', q: 'What’s its reputation, and how accurate do you think that is?', who: ['applied', 'friends', 'outside'] },
      { id: 'wish', label: 'Wish I’d known', kind: 'take', q: 'What do you wish you’d known about it as a freshman?', who: ALL }
    ],
    club: [
      { id: 'does', label: 'What it does', kind: 'fact', q: 'What does the group actually do?', who: ['member', 'former'] },
      { id: 'process', label: 'Getting in', kind: 'fact', q: 'How do you get in?', hint: 'Application, audition or interviews, and roughly when.', who: ['member', 'former', 'applied'] },
      { id: 'time', label: 'Time commitment', kind: 'fact', q: 'About how many hours a week does it take?', who: ['member', 'former'] },
      { id: 'vibe', label: 'The vibe', kind: 'take', q: 'How would you describe the vibe, from your own experience?', who: ['member', 'former'] },
      { id: 'leads', label: 'Where it leads', kind: 'take', q: 'What has it led to for you?', hint: 'Skills, opportunities, friendships.', who: ['member', 'former'] },
      { id: 'reputation', label: 'From the outside', kind: 'take', q: 'What’s its reputation, and how accurate do you think that is?', who: ['applied', 'outside'] },
      { id: 'wish', label: 'Wish I’d known', kind: 'take', q: 'What do you wish you’d known about it as a freshman?', who: ALL }
    ],
    'class': [
      { id: 'workload', label: 'Workload', kind: 'fact', q: 'Roughly how many hours a week, and what’s the work like?', who: ALL },
      { id: 'sequence', label: 'Where it fits', kind: 'fact', q: 'Does it fit into a sequence, or is there a good alternative?', hint: 'For example, taking an ECE class instead of a COS one.', who: ALL },
      { id: 'before', label: 'Wish I’d known', kind: 'take', q: 'What do you wish you’d known before taking it?', who: ALL },
      { id: 'who', label: 'Who should take it', kind: 'take', q: 'Who should take it, and what is it useful for?', who: ALL }
    ]
  };
  var GROUPS = [
    { id: 'dance', name: 'Naacho or Princeton Bhangra' },
    { id: 'acappella', name: 'An a cappella or singing group' }
  ];

  var s = { step: 0, type: null, target: null, targetName: '', connection: null, answers: {}, classYear: '', error: '', sending: false };

  var slug = P.slug, ORGS = window.POP_ORGS || [], PAGES = window.POP_ORG_PAGES || {};
  function orgId(name) { return PAGES[name] || slug(name); }
  function setTarget(id, name) { s.target = id; s.targetName = name; }

  // Arriving from a club page: skip the first two steps.
  (function prefill() {
    var type = params.get('type'), target = params.get('target');
    if (!CONNECTIONS[type]) return;
    s.type = type; s.step = 1;
    var e = D.eatingClubs.filter(function (x) { return x.id === target; })[0];
    var g = GROUPS.filter(function (x) { return x.id === target; })[0];
    if (type === 'eating' && e) { setTarget(e.id, e.name); s.step = 2; }
    if (type === 'club' && g) { setTarget(g.id, D.clubs[g.id].name); s.step = 2; }
    var o = ORGS.filter(function (x) { return slug(x[0]) === target; })[0];
    if (type === 'club' && !g && o) { setTarget(orgId(o[0]), o[0]); s.step = 2; }
  })();

  function head(n, title, lead) {
    return '<div class="club-head"><p class="eyebrow">Add what you know · step ' + n + ' of 4</p><h1>' + esc(title) + '</h1>' +
      (lead ? '<p class="vibe">' + esc(lead) + '</p>' : '') + '</div>';
  }
  function backBtn() {
    return s.step > 0 ? '<button class="link-btn" type="button" data-back style="align-self:flex-start;padding-left:0;display:inline-flex;gap:4px;align-items:center">' + icon('left') + 'Back</button>' : '';
  }
  function tile(attr, t, d, ic, on) {
    return '<button class="tile" type="button" ' + attr + ' aria-pressed="' + !!on + '"><span style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px"><span class="t">' + esc(t) + '</span>' + (ic ? icon(ic) : '') + '</span>' + (d ? '<span class="s">' + esc(d) + '</span>' : '') + '</button>';
  }

  function stepType() {
    return head(1, 'What do you know about?', 'Two minutes. Reviewed by the team before anything goes up, and never shown with your name.') +
      '<div class="tiles three">' + TYPES.map(function (t) { return tile('data-type="' + t.id + '"', t.t, t.d, t.icon, s.type === t.id); }).join('') + '</div>';
  }

  function stepTarget() {
    var body;
    if (s.type === 'eating') {
      body = '<div class="chips">' + D.eatingClubs.map(function (e) {
        return '<button class="chip" type="button" data-target="' + e.id + '" data-name="' + esc(e.name) + '" aria-pressed="' + (s.target === e.id) + '">' + esc(e.name) + '</button>';
      }).join('') + '</div>';
    } else {
      var isClass = s.type === 'class';
      body = '<form class="field" data-other><label for="other">' + (isClass ? 'Course code or name' : 'Search for the club or group') + '</label>' +
        '<div class="field-row"><input id="other" type="text" maxlength="80" autocomplete="off" placeholder="' + (isClass ? 'e.g. COS 126' : 'Start typing, e.g. Triangle') + '">' +
        '<button class="btn pill" type="submit">Next' + icon('arrow') + '</button></div>' +
        (isClass ? '' : '<p class="hint">Can’t find it? Type its full name and press Next.</p>') + '</form>' +
        (isClass ? '' : '<div class="chips" id="matches" aria-live="polite"></div>');
    }
    var titles = { eating: 'Which eating club?', club: 'Which club or group?', 'class': 'Which class?' };
    return backBtn() + head(2, titles[s.type]) + body;
  }

  function stepConnection() {
    return backBtn() + head(3, 'What’s your connection to ' + s.targetName + '?', 'This decides which questions you get, and it’s shown next to your answers so readers know where they come from.') +
      '<div class="tiles">' + CONNECTIONS[s.type].map(function (c) { return tile('data-conn="' + c[0] + '"', c[1], '', '', s.connection === c[0]); }).join('') + '</div>';
  }

  function questions() {
    return QUESTIONS[s.type].filter(function (q) { return q.who.indexOf(s.connection) >= 0; });
  }

  function stepQuestions() {
    var qs = questions();
    return backBtn() + head(4, 'Tell us about ' + s.targetName, 'Answer what you can and skip the rest. A sentence or two each is plenty.') +
      '<div class="guide">' + icon('sparkle') + '<span><strong>Keep it fair.</strong> Describe your own experience, don’t name individual people, and avoid sweeping claims about who belongs somewhere. Clubs change from class to class.</span></div>' +
      '<form data-form class="add-form" novalidate>' +
      qs.map(function (q) {
        return '<div class="field"><label for="q-' + q.id + '">' + esc(q.q) + '<span class="kind ' + q.kind + '">' + (q.kind === 'fact' ? 'Fact' : 'Your take') + '</span></label>' +
          (q.hint ? '<p class="hint">' + esc(q.hint) + '</p>' : '') +
          '<textarea id="q-' + q.id + '" data-q="' + q.id + '" rows="3" maxlength="600">' + esc(s.answers[q.id] || '') + '</textarea></div>';
      }).join('') +
      '<div class="field"><label for="year">Class year <span class="optional">(optional)</span></label>' +
      '<input id="year" type="text" inputmode="numeric" maxlength="4" placeholder="e.g. 2028" value="' + esc(s.classYear) + '" style="max-width:160px"></div>' +
      '<div class="hp" aria-hidden="true"><label for="website">Leave this empty</label><input id="website" type="text" tabindex="-1" autocomplete="off"></div>' +
      '<p class="form-error" role="alert" id="err">' + esc(s.error) + '</p>' +
      '<button class="btn pill" type="submit" style="align-self:flex-start"' + (s.sending ? ' disabled' : '') + '>' + (s.sending ? 'Sending…' : 'Send it in') + '</button>' +
      '</form>';
  }

  function stepThanks() {
    return '<div class="thanks"><div class="thanks-art">' + P.BIG_BURST + '<span class="pop-word" aria-hidden="true">pop!</span></div>' +
      '<div class="club-head"><p class="eyebrow">Thank you</p><h1>That’s one less thing a freshman has to guess.</h1>' +
      '<p class="vibe">We’ll review it, then it goes on the ' + esc(s.targetName) + ' page.</p></div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center"><button class="btn pill" type="button" data-again>' + icon('plus') + 'Add something else</button>' +
      '<a class="ask-link" href="clubs.html">Back to clubs</a></div></div>';
  }

  function render(focus) {
    app.innerHTML = [stepType, stepTarget, stepConnection, stepQuestions, stepThanks][s.step]();
    if (focus !== false) { var h = app.querySelector('h1'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } }
    window.scrollTo(0, 0);
  }

  function keepTyped() {
    app.querySelectorAll('[data-q]').forEach(function (t) { s.answers[t.getAttribute('data-q')] = t.value; });
    var y = document.getElementById('year'); if (y) s.classYear = y.value.trim();
  }

  app.addEventListener('click', function (ev) {
    var t;
    if ((t = ev.target.closest('[data-type]'))) { s.type = t.getAttribute('data-type'); s.target = null; s.connection = null; s.answers = {}; s.step = 1; return render(); }
    if ((t = ev.target.closest('[data-target]'))) { setTarget(t.getAttribute('data-target'), t.getAttribute('data-name')); s.step = 2; return render(); }
    if ((t = ev.target.closest('[data-conn]'))) { s.connection = t.getAttribute('data-conn'); s.error = ''; s.step = 3; return render(); }
    if (ev.target.closest('[data-back]')) { keepTyped(); s.error = ''; s.step = Math.max(0, s.step - 1); return render(); }
    if (ev.target.closest('[data-again]')) { s = { step: 0, type: null, target: null, targetName: '', connection: null, answers: {}, classYear: '', error: '', sending: false }; return render(); }
  });

  app.addEventListener('input', function (ev) {
    var box = document.getElementById('matches');
    if (ev.target.id !== 'other' || !box) return;
    var q = ev.target.value.trim().toLowerCase();
    box.innerHTML = q.length < 2 ? '' : ORGS.filter(function (o) { return o[0].toLowerCase().indexOf(q) >= 0; }).slice(0, 8).map(function (o) {
      return '<button class="chip" type="button" data-target="' + orgId(o[0]) + '" data-name="' + esc(o[0]) + '">' + esc(o[0]) + '</button>';
    }).join('');
  });

  app.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (ev.target.hasAttribute('data-other')) {
      var name = document.getElementById('other').value.trim();
      if (name.length < 2 || !slug(name)) return;
      var exact = s.type === 'club' && ORGS.filter(function (o) { return o[0].toLowerCase() === name.toLowerCase(); })[0];
      if (exact) name = exact[0];
      setTarget(s.type === 'club' ? orgId(name) : slug(name), name); s.step = 2; return render();
    }
    if (!ev.target.hasAttribute('data-form') || s.sending) return;
    keepTyped();
    var answers = questions().map(function (q) { return { id: q.id, label: q.label, kind: q.kind, a: (s.answers[q.id] || '').trim() }; })
      .filter(function (a) { return a.a.length > 0; });
    function fail(msg) { s.error = msg; s.sending = false; render(false); var e = document.getElementById('err'); if (e) e.scrollIntoView({ block: 'center' }); }
    if (!answers.some(function (a) { return a.a.length >= 10; })) return fail('Answer at least one question with a sentence or two.');
    if (s.classYear && !/^20[2-3]\d$/.test(s.classYear)) return fail('Class year should look like 2028.');
    var website = document.getElementById('website').value;
    s.sending = true; s.error = ''; render(false);
    fetch(D.apiBase + '/api/submit', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: s.type, target: s.target, targetName: s.targetName, connection: s.connection, classYear: s.classYear, answers: answers, website: website })
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (!res.ok) return fail(res.j.error || 'We couldn’t save that right now. Your answers are still here, so try again in a minute.');
        s.sending = false; s.step = 4; render();
      })
      .catch(function () { fail('We couldn’t reach the server. Your answers are still here, so check your connection and try again.'); });
  });

  render(false);
})();
