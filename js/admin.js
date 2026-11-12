/* Team review page: approve or reject submissions, and see questions Ask Pop couldn't answer. */
(function () {
  var P = window.Pop, D = window.POP_DATA, app = document.getElementById('app');
  var esc = P.escapeHtml, icon = P.icon;
  var key = '';
  try { key = sessionStorage.getItem('pop-admin') || ''; } catch (e) {}

  function api(method, payload) {
    return fetch(D.apiBase + '/api/review', {
      method: method, headers: { 'Content-Type': 'application/json', 'x-admin-key': key },
      body: payload ? JSON.stringify(payload) : undefined
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.error || 'Something went wrong.'); return j; }); });
  }

  function login(msg) {
    app.innerHTML = '<div class="club-head"><p class="eyebrow">Team only</p><h1>Review submissions</h1><p class="vibe">Enter the review key to see what students have sent in.</p></div>' +
      '<form class="field" id="login"><label for="k">Review key</label><div class="field-row"><input id="k" type="password" autocomplete="off">' +
      '<button class="btn pill" type="submit">Open</button></div><p class="form-error" role="alert">' + esc(msg || '') + '</p></form>';
    document.getElementById('login').addEventListener('submit', function (ev) {
      ev.preventDefault(); key = document.getElementById('k').value; load();
    });
  }

  function load() {
    app.innerHTML = '<p class="vibe">Loading…</p>';
    api('GET').then(function (data) {
      try { sessionStorage.setItem('pop-admin', key); } catch (e) {}
      var subs = data.pending.map(function (s) {
        return '<article class="card review" data-id="' + esc(s.id) + '"><p class="eyebrow">' + esc(s.type) + ' · ' + esc(s.targetName) + ' · ' + esc(s.connection) + (s.classYear ? ' · ’' + esc(s.classYear.slice(-2)) : '') + '</p>' +
          s.answers.map(function (a) { return '<div><p class="review-q">' + esc(a.label) + '<span class="kind ' + esc(a.kind) + '">' + (a.kind === 'fact' ? 'Fact' : 'Take') + '</span></p><p class="card-text">' + esc(a.a) + '</p></div>'; }).join('') +
          '<div style="display:flex;gap:10px;margin-top:8px"><button class="btn pill" type="button" data-act="approve">Approve</button><button class="btn pill outline" type="button" data-act="reject">Reject</button></div></article>';
      }).join('');
      var qs = data.questions.map(function (q) { return '<li>' + esc(q.q) + ' <span class="optional">' + esc(new Date(q.at).toLocaleDateString()) + '</span></li>'; }).join('');
      app.innerHTML = '<div class="club-head"><p class="eyebrow">Team only</p><h1>Review submissions</h1>' +
        '<p class="vibe">Approve what’s fair and useful. Reject anything that names people, generalizes about who belongs, or isn’t true.</p></div>' +
        '<section class="dir-section"><h2 class="dir-title">Waiting for review (' + data.pending.length + ')</h2>' + (subs || '<p class="card-text">Nothing waiting. Nice.</p>') + '</section>' +
        '<section class="dir-section"><h2 class="dir-title">Questions Ask Pop couldn’t answer (' + data.questions.length + ')</h2>' + (qs ? '<ul class="open-qs">' + qs + '</ul>' : '<p class="card-text">None yet.</p>') + '</section>';
    }).catch(function (e) { login(e.message); });
  }

  app.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-act]');
    if (!b) return;
    var card = b.closest('[data-id]');
    card.querySelectorAll('button').forEach(function (x) { x.disabled = true; });
    api('POST', { id: card.getAttribute('data-id'), action: b.getAttribute('data-act') }).then(load).catch(function () { load(); });
  });

  if (key) load(); else login();
})();
