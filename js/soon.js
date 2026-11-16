/* Coming soon pages for Classes and Timeline. */
(function () {
  var P = window.Pop, app = document.getElementById('app'), icon = P.icon;
  var which = new URLSearchParams(location.search).get('page') === 'timeline' ? 'timeline' : 'classes';
  var PAGES = {
    classes: { title: 'Classes', lead: 'Which classes are worth taking, how course sequences work, and what each one is useful for, from students who took them.',
      cta: '<a class="btn pill" href="add.html?type=class">' + icon('plus') + 'Took a class? Add what you know</a>' },
    timeline: { title: 'Timeline', lead: 'What to care about at each stage of your first two years, so nothing important sneaks up on you.',
      cta: '<a class="btn pill" href="clubs.html">' + icon('users') + 'Browse clubs for now</a>' }
  };
  var p = PAGES[which];
  document.title = p.title + ' · pop';
  app.innerHTML = '<div class="soon"><div class="soon-art">' + P.bubble({ stroke: 3 }) + '</div>' +
    '<div class="club-head"><p class="eyebrow">Coming soon</p><h1>' + p.title + '</h1><p class="vibe">' + p.lead + '</p></div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:12px 24px;align-items:center">' + p.cta +
    '<a class="ask-link" href="faq.html">Read the FAQ</a></div></div>';
})();
