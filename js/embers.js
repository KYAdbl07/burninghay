(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var container = document.getElementById('embers');
  if (!container) return;

  var COLORS = [
    '#e8571a',
    '#f0a052',
    '#f5c866',
    '#c84012',
    '#e87838',
  ];

  function spawn() {
    var el = document.createElement('span');
    el.className = 'ember';

    var size  = (Math.random() * 2.8 + 0.7).toFixed(1);
    var x     = (Math.random() * 100).toFixed(1);
    var dur   = (Math.random() * 5 + 4.5).toFixed(1);
    var delay = (Math.random() * 1.2).toFixed(2);
    var drift = ((Math.random() - 0.5) * 90).toFixed(0);
    var color = COLORS[Math.floor(Math.random() * COLORS.length)];
    var blur  = Math.random() > 0.6 ? '0.6px' : '0px';

    el.style.cssText =
      'left:'                  + x     + '%;' +
      'width:'                 + size  + 'px;' +
      'height:'                + size  + 'px;' +
      'background:'            + color + ';' +
      'box-shadow:0 0 '        + Math.ceil(parseFloat(size) * 2.5) + 'px ' + color + ';' +
      'filter:blur('           + blur  + ');' +
      'animation-duration:'    + dur   + 's;' +
      'animation-delay:'       + delay + 's;' +
      '--drift:'               + drift + 'px;';

    container.appendChild(el);

    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, (parseFloat(dur) + parseFloat(delay)) * 1000 + 600);
  }

  // Staggered initial burst across the first 5 seconds
  for (var i = 0; i < 22; i++) {
    (function (offset) {
      setTimeout(spawn, offset);
    }(Math.random() * 5000));
  }

  // Steady stream thereafter
  setInterval(spawn, 380);
}());
