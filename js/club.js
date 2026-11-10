/* Clubs: a directory (clubs.html), the eating clubs on the Street
   (clubs.html?view=street), or one club, one card at a time (clubs.html?club=<id>). */
(function () {
  var P = window.Pop, CLUBS = window.POP_DATA.clubs, app = document.getElementById('app');
  var esc = P.escapeHtml, icon = P.icon;
  var params = new URLSearchParams(location.search);
  var id = params.get('club'), view = params.get('view');

  // Directory sections. Only ids that exist in data.js are shown.
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

  var STREET = ['Cannon Dial Elm', 'Cap and Gown', 'Charter', 'Cloister', 'Colonial', 'Cottage', 'Ivy', 'Quadrangle', 'Terrace', 'Tiger Inn', 'Tower'];
  var STREET_IDS = { 'Cottage': 'cottage' };

  function row(href, iconName, name, blurb, muted) {
    return '<a class="dir-row' + (muted ? ' muted' : '') + '" href="' + href + '">' +
      '<span class="dir-icon">' + icon(iconName) + '</span>' +
      '<span class="dir-text"><span class="dir-name">' + esc(name) + '</span><span class="dir-blurb">' + esc(blurb) + '</span></span>' +
      icon(muted ? 'plus' : 'arrow') + '</a>';
  }

  function head(eyebrow, title, lead) {
    return '<div class="club-head"><p class="eyebrow">' + esc(eyebrow) + '</p><h1>' + esc(title) + '</h1>' +
      '<p class="vibe">' + esc(lead) + '</p></div>';
  }

  if (view === 'street') {
    document.title = 'Explore the Street · pop';
    app.innerHTML = head('Explore the Street', 'Eating clubs', 'Every club on Prospect Ave. Tap one to see what students say, or add what you know.') +
      '<div class="dir-list">' + STREET.map(function (n) {
        var cid = STREET_IDS[n];
        return cid && CLUBS[cid]
          ? row('clubs.html?club=' + cid, 'pin', n, CLUBS[cid].category)
          : row('#', 'pin', n, 'No info yet · add what you know', true);
      }).join('') + '</div>';
    return;
  }

  var C = CLUBS[id];
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

  document.title = C.name + ' · pop';
  var factsHtml = C.facts.map(function (f) {
    return '<span style="display:inline-flex;align-items:center;gap:6px">' + icon(f[0]) + esc(f[1]) + '</span>';
  }).join('');
  var back = id === 'cottage' ? ['clubs.html?view=street', 'All eating clubs'] : ['clubs.html', 'All clubs'];

  app.innerHTML =
    '<a class="back-link" href="' + back[0] + '">' + icon('left') + back[1] + '</a>' +
    '<div class="club-head">' +
      '<p class="eyebrow">' + esc(C.category) + '</p>' +
      '<h1>' + esc(C.name) + '</h1>' +
      '<p class="vibe">' + esc(C.vibe) + '</p>' +
      '<p class="facts" style="display:flex;flex-wrap:wrap;gap:8px 20px">' + factsHtml + '</p>' +
    '</div>' +
    '<section aria-label="About this club">' +
      '<div class="card" id="card" aria-live="polite"></div>' +
      '<div class="card-nav">' +
        '<div class="dots" aria-hidden="true">' + C.cards.map(function () { return '<span></span>'; }).join('') + '</div>' +
        '<button class="round-btn" id="prev" type="button" aria-label="Previous">' + icon('left') + '</button>' +
        '<button class="btn pill" id="next" type="button"></button>' +
      '</div>' +
    '</section>' +
    '<a class="ask-link" href="ask.html" style="display:inline-flex;align-items:center;gap:8px">' + icon('chat') + 'Have a question about this club? Ask Pop</a>';

  var card = document.getElementById('card');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var dots = app.querySelectorAll('.dots span');
  var i = 0;

  function render() {
    var c = C.cards[i];
    var label = '<p class="eyebrow" style="display:flex;align-items:center;gap:8px">' + icon(c.icon) + esc(c.label) + '</p>';
    card.innerHTML = c.quote
      ? '<figure class="card-inner slide">' + label + '<blockquote>' + esc(c.quote) + '</blockquote><figcaption>' + esc(c.by) + '</figcaption></figure>'
      : c.title
        ? '<div class="card-inner slide">' + label + '<h2 class="statement" style="font-weight:400">' + esc(c.title) + '</h2><p class="card-text">' + esc(c.text) + '</p></div>'
        : '<div class="card-inner slide">' + label + '<p class="statement">' + esc(c.text) + '</p></div>';
    dots.forEach(function (d, k) { d.className = k === i ? 'on' : ''; });
    prev.hidden = i === 0;
    var last = i === C.cards.length - 1;
    next.innerHTML = last
      ? icon('refresh') + 'Start over'
      : esc(C.cards[i + 1].title || C.cards[i + 1].label) + icon('arrow');
  }

  next.addEventListener('click', function () { i = (i + 1) % C.cards.length; render(); });
  prev.addEventListener('click', function () { i = Math.max(0, i - 1); render(); });
  render();
})();
