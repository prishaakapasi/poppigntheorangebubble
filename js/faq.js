/* FAQ: questions grouped by topic. Content lives in js/data.js (faq). */
(function () {
  var P = window.Pop, D = window.POP_DATA, app = document.getElementById('app');
  var esc = P.escapeHtml, icon = P.icon;
  app.innerHTML = '<div class="club-head"><p class="eyebrow">FAQ</p><h1>Frequently asked questions</h1>' +
    '<p class="vibe">The things people ask most. Tap a question to see the answer.</p></div>' +
    D.faq.map(function (g) {
      return '<section class="dir-section"><h2 class="dir-title">' + esc(g.title) + '</h2><div class="faq-list">' +
        g.items.map(function (it) {
          return '<details class="faq"><summary>' + esc(it.q) + icon('down') + '</summary><div class="faq-a"><p>' + esc(it.a) + '</p>' +
            (it.link ? '<a href="' + it.link[1] + '">' + esc(it.link[0]) + icon('arrow') + '</a>' : '') + '</div></details>';
        }).join('') + '</div></section>';
    }).join('') +
    '<p class="card-text">Don’t see your question? If you know the answer to something freshmen ask, <a href="add.html">add what you know</a>.</p>';
})();
