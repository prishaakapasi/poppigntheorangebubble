/* Home: ambient bubbles that pop on their own + one big bubble you can poke. */
(function () {
  var stage = document.getElementById('stage');
  var P = window.Pop;

  // Small background bubbles: [css position, size px, fill, delay class]
  var ambient = [
    ['left:6%;top:8%', 70, '#F6C59A', ''],
    ['right:4%;top:4%', 46, '#EE8A3A', 'd2'],
    ['right:10%;bottom:6%', 56, '#F6C59A', 'd3']
  ];

  var html = ambient.map(function (a) {
    var size = a[1], pad = Math.round(size * 0.31);
    var burstPos = a[0].replace(/(\d+)%/g, function (m) { return 'calc(' + m + ' - ' + pad + 'px)'; });
    return '<span class="ambient ' + a[3] + '" aria-hidden="true" style="' + a[0] + ';width:' + size + 'px;height:' + size + 'px">' +
      P.bubble({ fill: a[2], stroke: 4 }) + '</span>' +
      '<span class="ambient-burst ' + a[3] + '" aria-hidden="true" style="' + burstPos + ';width:' + (size + pad * 2) + 'px;height:' + (size + pad * 2) + 'px">' +
      P.burstLines(5) + '</span>';
  }).join('');

  html += '<div class="hero-bubble-wrap" id="hero"></div>';
  stage.innerHTML = html;

  var hero = document.getElementById('hero');
  var bigBubble = P.bubble({
    stroke: 2.2,
    extra: '<circle cx="22" cy="51" r="2.6" fill="#FFFDF8"/><path d="M70 82 Q78 76 82 66" fill="none" stroke="#F6C59A" stroke-width="2.5" stroke-linecap="round"/>'
  });

  function showBubble() {
    hero.innerHTML = '<div class="bob"><button class="hero-bubble" type="button" aria-label="Pop the bubble, just for fun">' + bigBubble + '</button></div>';
    hero.querySelector('button').addEventListener('click', pop);
  }

  function pop() {
    hero.innerHTML = P.BIG_BURST + '<span class="pop-word" aria-hidden="true">pop!</span>';
    setTimeout(showBubble, 900);
  }

  showBubble();
})();
