/* Clubs: a directory (clubs.html), the eating clubs on the Street
   (clubs.html?view=street), or one club, one card at a time (clubs.html?club=<id>).
   Club pages also pull in approved "Add what you know" submissions. */
(function () {
  var P = window.Pop, D = window.POP_DATA, CLUBS = D.clubs, app = document.getElementById('app');
  var esc = P.escapeHtml, icon = P.icon;
  var params = new URLSearchParams(location.search);
  var id = params.get('club'), view = params.get('view');
  var EATING = {};
  D.eatingClubs.forEach(function (e) { EATING[e.id] = e; });

  var SECTIONS = [
    { title: 'Performing arts', items: [
      { id: 'dance', icon: 'music', blurb: 'Dance groups: skill-based auditions, no experience needed' },
      { id: 'acappella', icon: 'music', blurb: 'Eight Acaprez groups plus Old NasSoul and Shere Khan' }] },
    { title: 'Eating clubs', items: [
      { id: 'cottage', icon: 'pin', blurb: 'Bicker club · two days of quick conversations' }],
      more: { href: 'clubs.html?view=street', label: 'See all eating clubs on the Street' } },
    { title: 'Pre-professional', items: [
      { id: 'consulting', icon: 'briefcase', blurb: 'Sample club for the prototype' }] }
  ];

  function row(href, iconName, name, blurb, muted) {
    return '<a class="dir-row' + (muted ? ' muted' : '') + '" href="' + href + '">' +
      '<span class="dir-icon">' + icon(iconName) + '</span>' +
      '<span class="dir-text"><span class="dir-name">' + esc(name) + '</span><span class="dir-blurb">' + esc(blurb) + '</span></span>' +
      icon('arrow') + '</a>';
  }

  function head(eyebrow, title, lead) {
    return '<div class="club-head"><p class="eyebrow">' + esc(eyebrow) + '</p><h1>' + esc(title) + '</h1>' +
      '<p class="vibe">' + esc(lead) + '</p></div>';
  }

  // ---- Street list ----
  if (view === 'street') {
    document.title = 'Explore the Street · pop';
    app.innerHTML = head('Explore the Street', 'Eating clubs', 'Every club on Prospect Ave. Tap one to see what students say, or add what you know.') +
      '<div class="dir-list">' + D.eatingClubs.map(function (e) {
        return CLUBS[e.id]
          ? row('clubs.html?club=' + e.id, 'pin', e.name, CLUBS[e.id].category)
          : row('clubs.html?club=' + e.id, 'pin', e.name, 'Student info coming in · add what you know', true);
      }).join('') + '</div>';
    return;
  }

  // ---- Directory ----
  var C = CLUBS[id];
  if (!C && EATING[id]) {
    // Eating club with no hand-written page yet: built from submissions.
    C = { category: 'Eating club', name: EATING[id].name, vibe: 'What students say about ' + EATING[id].name + ', added through “Add what you know.”', facts: [], cards: [], generated: true };
  }
  if (!C) {
    document.title = 'Clubs · pop';
    app.innerHTML = head('Clubs', 'Find your people', 'What each group is really like, from students who’ve been in them.') +
      SECTIONS.map(function (s) {
        var items = s.items.filter(function (it) { return CLUBS[it.id]; });
        if (!items.length) return '';
        return '<section class="dir-section"><h2 class="dir-title">' + esc(s.title) + '</h2><div class="dir-list">' +
          items.map(function (it) { return row('clubs.html?club=' + it.id, it.icon, CLUBS[it.id].name, it.blurb); }).join('') +
          (s.more ? '<a class="ask-link" href="' + s.more.href + '" style="display:inline-flex;align-items:center;gap:8px;margin-top:12px">' + icon('pin') + esc(s.more.label) + '</a>' : '') +
          '</div></section>';
      }).join('') +
      '<a class="ask-link" href="quiz.html" style="display:inline-flex;align-items:center;gap:8px">' + icon('compass') + 'Not sure where to start? Take the club quiz</a>';
    return;
  }

  // ---- One club ----
  document.title = C.name + ' · pop';
  var isEating = !!EATING[id];
  var cards = C.cards.slice();
  var facts = C.facts.slice();
  if (C.updated) facts.push(['refresh', 'Updated ' + C.updated]);
  var back = isEating ? ['clubs.html?view=street', 'All eating clubs'] : ['clubs.html', 'All clubs'];
  var addHref = 'add.html?type=' + (isEating ? 'eating' : 'club') + '&target=' + encodeURIComponent(id);

  app.innerHTML =
    '<a class="back-link" href="' + back[0] + '">' + icon('left') + back[1] + '</a>' +
    '<div class="club-head">' +
      '<p class="eyebrow">' + esc(C.category) + '</p>' +
      '<h1>' + esc(C.name) + '</h1>' +
      '<p class="vibe">' + esc(C.vibe) + '</p>' +
      '<p class="facts" id="facts" style="display:flex;flex-wrap:wrap;gap:8px 20px"></p>' +
    '</div>' +
    '<section aria-label="About this club" id="cards-section"></section>' +
    '<div style="display:flex;flex-wrap:wrap;gap:12px 28px">' +
      '<a class="ask-link" href="ask.html" style="display:inline-flex;align-items:center;gap:8px">' + icon('chat') + 'Have a question? Ask Pop</a>' +
      '<a class="ask-link" href="' + addHref + '" style="display:inline-flex;align-items:center;gap:8px">' + icon('plus') + 'Know this ' + (isEating ? 'club' : 'group') + '? Add what you know</a>' +
    '</div>';

  var factsEl = document.getElementById('facts');
  var section = document.getElementById('cards-section');
  var i = 0;

  function renderFacts() {
    factsEl.innerHTML = facts.map(function (f) {
      return '<span style="display:inline-flex;align-items:center;gap:6px">' + icon(f[0]) + esc(f[1]) + '</span>';
    }).join('');
  }

  function kindTag(kind) {
    if (kind === 'fact') return '<span class="kind fact">Fact</span>';
    if (kind === 'take') return '<span class="kind take">Student take</span>';
    return '';
  }

  function buildSection() {
    if (!cards.length) {
      section.innerHTML = '<div class="card empty-card"><div class="card-inner">' +
        '<p class="eyebrow" style="display:flex;align-items:center;gap:8px">' + icon('sparkle') + 'Nothing here yet</p>' +
        '<p class="statement">No one has added info about ' + esc(C.name) + ' yet.</p>' +
        '<p class="card-text">Be the first. It takes about two minutes, and everything is reviewed before it goes up.</p>' +
        '<a class="btn pill" href="' + addHref + '" style="align-self:flex-start">' + icon('plus') + 'Add what you know</a></div></div>';
      return;
    }
    section.innerHTML =
      '<div class="card" id="card" aria-live="polite"></div>' +
      '<div class="card-nav">' +
        '<div class="dots" aria-hidden="true">' + cards.map(function () { return '<span></span>'; }).join('') + '</div>' +
        '<button class="round-btn" id="prev" type="button" aria-label="Previous">' + icon('left') + '</button>' +
        '<button class="btn pill" id="next" type="button"></button>' +
      '</div>';
    document.getElementById('next').addEventListener('click', function () { i = (i + 1) % cards.length; render(); });
    document.getElementById('prev').addEventListener('click', function () { i = Math.max(0, i - 1); render(); });
    render();
  }

  function render() {
    var c = cards[i];
    var card = document.getElementById('card');
    var label = '<p class="eyebrow" style="display:flex;align-items:center;gap:8px">' + icon(c.icon || 'sparkle') + esc(c.label) + kindTag(c.kind) + '</p>';
    card.innerHTML = c.quote
      ? '<figure class="card-inner slide">' + label + '<blockquote>' + esc(c.quote) + '</blockquote><figcaption>' + esc(c.by) + '</figcaption></figure>'
      : c.title
        ? '<div class="card-inner slide">' + label + '<h2 class="statement" style="font-weight:400">' + esc(c.title) + '</h2><p class="card-text">' + esc(c.text) + '</p></div>'
        : '<div class="card-inner slide">' + label + '<p class="statement' + (c.long ? ' long' : '') + '">' + esc(c.text) + '</p>' + (c.by ? '<p class="card-by">' + esc(c.by) + '</p>' : '') + '</div>';
    section.querySelectorAll('.dots span').forEach(function (d, k) { d.className = k === i ? 'on' : ''; });
    document.getElementById('prev').hidden = i === 0;
    var last = i === cards.length - 1;
    document.getElementById('next').innerHTML = last
      ? icon('refresh') + 'Start over'
      : esc(cards[i + 1].title || cards[i + 1].label) + icon('arrow');
  }

  renderFacts();
  buildSection();

  // Pull in approved student submissions for this club.
  var CONNECTION = { member: 'member', former: 'former member', applied: 'went through bicker/apps', friends: 'friends with members', outside: 'non-member', took: 'took the class', taking: 'taking the class' };
  fetch(D.apiBase + '/api/approved?target=' + encodeURIComponent(id))
    .then(function (r) { return r.ok ? r.json() : { items: [] }; })
    .then(function (data) {
      var extra = [];
      (data.items || []).slice(0, 8).forEach(function (s) {
        var who = 'From a student' + (s.classYear ? ' · Class of ’' + String(s.classYear).slice(-2) : '') + (CONNECTION[s.connection] ? ' · ' + CONNECTION[s.connection] : '');
        (s.answers || []).forEach(function (a) {
          if (!a.a || a.a.length < 3) return;
          extra.push({ icon: a.kind === 'fact' ? 'key' : 'quote', kind: a.kind, label: a.label || 'From a student', text: a.a, by: who, long: a.a.length > 140 });
        });
      });
      if (!extra.length) return;
      if (!C.updated && data.items[0] && data.items[0].reviewedAt) {
        facts.push(['refresh', 'Updated ' + new Date(data.items[0].reviewedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })]);
        renderFacts();
      }
      cards = cards.concat(extra.slice(0, 12));
      i = Math.min(i, cards.length - 1);
      buildSection();
    })
    .catch(function () { /* offline or no backend: the hand-written cards still show */ });
})();
