/* Shared helpers: nav, footer, icons, bubble art.
   Plain script (no build step), so the site works by opening index.html. */
(function () {
  var ICONS = {
    chat: '<path d="M20.5 12a8.5 8.5 0 0 1-12.4 7.6L3.5 21l1.4-4.4A8.5 8.5 0 1 1 20.5 12z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8"/><path d="M18 14.8c1.8.7 3 2.4 3.5 5.2"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v14H5.5A1.5 1.5 0 0 0 4 18.5z"/><path d="M4 18.5A1.5 1.5 0 0 0 5.5 20H20"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    left: '<path d="M15 18l-6-6 6-6"/>',
    right: '<path d="M9 18l6-6-6-6"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    music: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    heart: '<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-5"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>',
    quote: '<path d="M9 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3M20 7h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    door: '<path d="M5 21V4a1 1 0 0 1 1-1h9l4 2v16"/><path d="M3 21h18M12 12h.01"/>',
    shuffle: '<path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5V14M12 17h.01"/>',
    send: '<path d="M4 12l16-8-6 16-2-6z"/>',
    flame: '<path d="M12 21c4 0 7-2.7 7-6.5 0-4.5-4-6.5-4.5-10.5C11 6 9 9 9 11c-1-.5-1.5-1.5-1.7-2.5C6 10 5 12 5 14.5 5 18.3 8 21 12 21z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    leaf: '<path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19l8-8"/>'
  };

  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>';
  }

  // The illustrated "sticker" bubble used everywhere.
  function bubble(opts) {
    opts = opts || {};
    var fill = opts.fill || '#EE8A3A';
    var stroke = opts.stroke || 4;
    var shine = opts.shine === false ? '' :
      '<path d="M27 38 Q33 24 49 20" fill="none" stroke="#FFFDF8" stroke-width="' + (stroke * 1.6) + '" stroke-linecap="round"/>';
    return '<svg viewBox="0 0 108 108" aria-hidden="true">' +
      '<circle cx="56" cy="56" r="46" fill="#1D1B18"/>' +
      '<circle cx="50" cy="50" r="46" fill="' + fill + '" stroke="#1D1B18" stroke-width="' + stroke + '"/>' +
      shine + (opts.extra || '') + '</svg>';
  }

  function burstLines(width) {
    return '<svg viewBox="-70 -70 140 140" aria-hidden="true"><g stroke="#1D1B18" stroke-width="' + width + '" stroke-linecap="round">' +
      '<path d="M52 0H66M36.8 36.8L46.7 46.7M0 52V66M-36.8 36.8L-46.7 46.7M-52 0H-66M-36.8 -36.8L-46.7 -46.7M0 -52V-66M36.8 -36.8L46.7 -46.7"/></g></svg>';
  }

  var BIG_BURST = '<svg class="pop-burst" viewBox="-70 -70 140 140" aria-hidden="true">' +
    '<g stroke="#1D1B18" stroke-width="3" stroke-linecap="round"><path d="M50 0H66M35.4 35.4L46.7 46.7M0 50V66M-35.4 35.4L-46.7 46.7M-50 0H-66M-35.4 -35.4L-46.7 -46.7M0 -50V-66M35.4 -35.4L46.7 -46.7"/></g>' +
    '<g fill="#EE8A3A" stroke="#1D1B18" stroke-width="1.5"><circle cx="30" cy="-12" r="5"/><circle cx="-26" cy="18" r="4"/><circle cx="-8" cy="-30" r="3.5"/><circle cx="14" cy="28" r="4.5"/></g></svg>';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var LINKS = [
    { label: 'Ask Pop', href: 'ask.html', icon: 'chat', id: 'ask' },
    { label: 'Clubs', href: 'clubs.html', icon: 'users', id: 'clubs' },
    { label: 'Find your clubs', href: 'quiz.html', icon: 'compass', id: 'quiz' },
    { label: 'Explore the Street', href: 'clubs.html?view=street', icon: 'pin', id: 'street' },
    { label: 'Classes', href: '#', icon: 'book', id: 'classes' },
    { label: 'Timeline', href: '#', icon: 'cal', id: 'timeline' }
  ];

  var LOGO = '<a class="logo" href="index.html" aria-label="pop, home"><span>p</span>' +
    bubble({ stroke: 6 }) + '<span>p</span></a>';

  function renderHeader(el, current) {
    var links = LINKS.map(function (l) {
      return '<a href="' + l.href + '"' + (l.id === current ? ' aria-current="page"' : '') + '>' + icon(l.icon) + l.label + '</a>';
    }).join('');
    el.className = 'site-header';
    el.innerHTML = '<div class="container">' + LOGO +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav">' + icon('menu') + 'Menu</button>' +
      '<nav class="nav" id="main-nav" aria-label="Main">' + links + '</nav>' +
      '<a class="nav-cta" href="add.html"' + (current === 'add' ? ' aria-current="page"' : '') + '>' + icon('plus') + 'Add what you know</a></div>';
    var btn = el.querySelector('.menu-btn');
    btn.addEventListener('click', function () {
      var open = el.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.innerHTML = icon(open ? 'x' : 'menu') + (open ? 'Close' : 'Menu');
    });
  }

  function renderFooter(el) {
    el.className = 'site-footer';
    el.innerHTML = '<div class="container"><span>Made by students, for every freshman.</span>' +
      '<span>Not affiliated with Princeton University.</span></div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('[data-header]');
    if (header) renderHeader(header, header.getAttribute('data-header'));
    var footer = document.querySelector('[data-footer]');
    if (footer) renderFooter(footer);
  });

  function slug(t) { return String(t).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60); }
  window.Pop = { slug: slug, icon: icon, bubble: bubble, burstLines: burstLines, BIG_BURST: BIG_BURST, escapeHtml: escapeHtml, LOGO: LOGO };
})();
