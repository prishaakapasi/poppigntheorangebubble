/* Club page: one column, one card at a time. */
(function () {
  var P = window.Pop, C = window.POP_DATA.club, app = document.getElementById('app');
  var esc = P.escapeHtml, icon = P.icon;
  var CARD_ICONS = ['key', 'cal', 'user', 'eye'];
  var i = 0;

  var facts = C.facts.split(' · ');
  var FACT_ICONS = ['gauge', 'clock', 'cal'];
  var factsHtml = facts.map(function (f, k) {
    return '<span style="display:inline-flex;align-items:center;gap:6px">' + icon(FACT_ICONS[k] || 'sparkle') + esc(f) + '</span>';
  }).join('');

  app.innerHTML =
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

  function render() {
    var c = C.cards[i];
    var label = '<p class="eyebrow" style="display:flex;align-items:center;gap:8px">' + icon(CARD_ICONS[i]) + esc(c.label) + '</p>';
    card.innerHTML = c.quote
      ? '<figure class="card-inner slide">' + label + '<blockquote>' + esc(c.quote) + '</blockquote><figcaption>' + esc(c.by) + '</figcaption></figure>'
      : '<div class="card-inner slide">' + label + '<p class="statement">' + esc(c.text) + '</p></div>';
    dots.forEach(function (d, k) { d.className = k === i ? 'on' : ''; });
    prev.hidden = i === 0;
    var last = i === C.cards.length - 1;
    next.innerHTML = last
      ? icon('refresh') + 'Start over'
      : esc(C.cards[i + 1].label) + icon('arrow');
  }

  next.addEventListener('click', function () { i = (i + 1) % C.cards.length; render(); });
  prev.addEventListener('click', function () { i = Math.max(0, i - 1); render(); });
  render();
})();
