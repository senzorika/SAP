(function () {
  'use strict';

  var CHAPTERS = [
    ['01_literatura_chut.html', 'Literatúra o chuti'],
    ['02_laboratorium.html', 'Podmienky laboratória'],
    ['03_iso_metody.html', 'ISO metódy'],
    ['04_metody_senzoriky.html', 'Senzorické metódy'],
    ['05_diskriminacne_metody.html', 'Diskriminačné metódy'],
    ['06_deskriptivne_profily.html', 'Deskriptívne profily'],
    ['07_skalovanie.html', 'Škálovanie'],
    ['08_spotrebitelska_veda.html', 'Spotrebiteľská senzorická veda'],
    ['09_claims.html', 'Senzorické claims'],
    ['10_shelf_life.html', 'Senzorická trvanlivosť'],
    ['11_vzorce.html', 'Vzorce a parametre'],
    ['12_overenie.html', 'Overenie zdrojov']
  ];

  var body = document.body;
  body.classList.add('sap');

  var file = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  var idx = -1;
  CHAPTERS.forEach(function (c, i) { if (c[0] === file) idx = i; });
  var toChapters = idx >= 0 ? '' : 'kapitoly/';
  var toRoot = idx >= 0 ? '../' : '';

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }

  // Top bar with chapter switcher and reading progress.
  var top = el('header', { class: 'sap-top' });
  top.appendChild(el('a', { class: 'sap-brand', href: toRoot + 'index.html' },
    '<span class="sap-brand-mark">SAP</span><span>Senzorická analýza <small>potravín</small></span>'));
  var menu = el('details', { class: 'sap-chapters' });
  menu.appendChild(el('summary', {}, idx >= 0 ? 'Kapitola ' + (idx + 1) + ' / ' + CHAPTERS.length : 'Kapitoly'));
  var list = el('ol');
  CHAPTERS.forEach(function (c, i) {
    var a = el('a', { href: toChapters + c[0] }, c[1]);
    if (i === idx) a.setAttribute('aria-current', 'page');
    var li = el('li'); li.appendChild(a); list.appendChild(li);
  });
  menu.appendChild(list);
  top.appendChild(menu);
  var progress = el('div', { class: 'sap-progress', 'aria-hidden': 'true' });
  top.appendChild(progress);
  body.insertBefore(top, body.firstChild);

  document.addEventListener('click', function (e) {
    if (menu.open && !menu.contains(e.target)) menu.open = false;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') menu.open = false;
  });

  // Horizontal scroll wrapper so wide tables never break the page on phones.
  Array.prototype.forEach.call(document.querySelectorAll('table'), function (t) {
    var p = t.parentElement;
    if (p.classList.contains('sap-table-wrap') || t.closest('#sait') || t.closest('svg')) return;
    if (p.style && p.style.overflowX === 'auto') { p.classList.add('sap-table-wrap'); return; }
    var w = el('div', { class: 'sap-table-wrap' });
    p.insertBefore(w, t);
    w.appendChild(t);
  });

  if (idx >= 0) {
    var hero = document.querySelector('.hero');
    var box = hero && hero.closest('.container');
    if (box) box.parentNode.insertBefore(hero, box);
    if (hero && !hero.querySelector('.sap-kicker')) {
      hero.insertBefore(el('span', { class: 'sap-kicker' }, 'Kapitola ' + (idx + 1)), hero.firstChild);
    }
  }

  // Previous / next chapter.
  var pager = el('nav', { class: 'sap-pager', 'aria-label': 'Ďalšie kapitoly' });
  if (idx > 0) pager.appendChild(el('a', { class: 'prev', href: CHAPTERS[idx - 1][0] },
    '<small>← Predchádzajúca</small><strong>' + CHAPTERS[idx - 1][1] + '</strong>'));
  if (idx >= 0 && idx < CHAPTERS.length - 1) pager.appendChild(el('a', { class: 'next', href: CHAPTERS[idx + 1][0] },
    '<small>Nasledujúca →</small><strong>' + CHAPTERS[idx + 1][1] + '</strong>'));
  var footer = document.querySelector('footer');
  if (idx >= 0) body.insertBefore(pager, footer || null);

  var toTop = el('button', { class: 'sap-totop', type: 'button', 'aria-label': 'Na začiatok stránky' },
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>');
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  body.appendChild(toTop);

  // Scrollspy for the chapter's own section nav.
  var navLinks = Array.prototype.filter.call(
    document.querySelectorAll('body > nav:not(.sap-pager) a[href^="#"]'),
    function (a) { return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))); });
  var targets = navLinks.map(function (a) { return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))); });
  var ticking = false;

  function update() {
    ticking = false;
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0) + '%';
    toTop.classList.toggle('show', window.scrollY > 800);

    var line = 140, current = -1;
    targets.forEach(function (t, i) { if (t.getBoundingClientRect().top <= line) current = i; });
    navLinks.forEach(function (a, i) {
      var on = i === current;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    if (current >= 0) {
      var a = navLinks[current], ul = a.closest('ul');
      if (ul && ul.scrollWidth > ul.clientWidth) {
        var r = a.getBoundingClientRect(), ur = ul.getBoundingClientRect();
        if (r.left < ur.left || r.right > ur.right) ul.scrollLeft += r.left - ur.left - 24;
      }
    }
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
