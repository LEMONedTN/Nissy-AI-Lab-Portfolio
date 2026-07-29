/* ==========================================================================
   DEBAN LP - main.js
   1. ハンバーガーメニュー
   2. アンカーリンクのスムーススクロール（固定ヘッダー分オフセット）
   3. スクロール連動フェードイン
   4. 数値カウントアップ
   5. FAQアコーディオン
   6. スマホ用固定CTAの表示制御
   7. フォームの簡易バリデーション（デモ用）
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------------------
     1. ハンバーガーメニュー
     ---------------------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var gnav = document.getElementById('gnav');

  function closeNav() {
    if (!hamburger || !gnav) return;
    hamburger.classList.remove('is-open');
    gnav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'メニューを開く');
  }

  if (hamburger && gnav) {
    hamburger.addEventListener('click', function () {
      var willOpen = !hamburger.classList.contains('is-open');
      hamburger.classList.toggle('is-open', willOpen);
      gnav.classList.toggle('is-open', willOpen);
      hamburger.setAttribute('aria-expanded', String(willOpen));
      hamburger.setAttribute('aria-label', willOpen ? 'メニューを閉じる' : 'メニューを開く');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ----------------------------------------------------------------------
     2. スムーススクロール
     ---------------------------------------------------------------------- */
  function headerHeight() {
    var header = document.getElementById('header');
    return header ? header.offsetHeight : 0;
  }

  Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      var target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      closeNav();

      var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight() + 1;
      window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* ----------------------------------------------------------------------
     3. フェードイン ＋ 4. カウントアップ
     ---------------------------------------------------------------------- */
  function countUp(el) {
    var goal = parseInt(el.getAttribute('data-count'), 10) || 0;
    if (reduceMotion || goal === 0) {
      el.textContent = goal.toLocaleString();
      return;
    }
    var duration = 1300;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(goal * eased).toLocaleString();
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  var fadeTargets = document.querySelectorAll('.js-fade');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');

        Array.prototype.forEach.call(
          entry.target.querySelectorAll('[data-count]'),
          function (num) {
            if (num.dataset.counted) return;
            num.dataset.counted = '1';
            countUp(num);
          }
        );
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    Array.prototype.forEach.call(fadeTargets, function (el) { observer.observe(el); });
  } else {
    Array.prototype.forEach.call(fadeTargets, function (el) { el.classList.add('is-in'); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-count]'), function (n) {
      n.textContent = (parseInt(n.getAttribute('data-count'), 10) || 0).toLocaleString();
    });
  }

  /* ----------------------------------------------------------------------
     5. FAQアコーディオン
     ---------------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('.faq__item'), function (item) {
    var btn = item.querySelector('.faq__q');
    var panel = item.querySelector('.faq__a');
    if (!btn || !panel) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      if (isOpen) {
        panel.style.maxHeight = null;
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // 画面幅が変わったときに開いているパネルの高さを追従させる
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      Array.prototype.forEach.call(document.querySelectorAll('.faq__item.is-open'), function (item) {
        var panel = item.querySelector('.faq__a');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    }, 200);
  });

  /* ----------------------------------------------------------------------
     6. スマホ固定CTA
     ---------------------------------------------------------------------- */
  var spcta = document.getElementById('spcta');
  var entry = document.getElementById('entry');

  function toggleSpCta() {
    if (!spcta) return;

    var showAfter = window.innerHeight * 0.6;
    var scrolled = window.pageYOffset > showAfter;

    // 最終CTAが見えているときは固定バーを隠す（重なり防止）
    var overlapped = false;
    if (entry) {
      var rect = entry.getBoundingClientRect();
      overlapped = rect.top < window.innerHeight && rect.bottom > 0;
    }
    spcta.classList.toggle('is-show', scrolled && !overlapped);
  }

  window.addEventListener('scroll', toggleSpCta, { passive: true });
  window.addEventListener('resize', toggleSpCta);
  toggleSpCta();

  /* ----------------------------------------------------------------------
     7. フォーム（デモ動作）
     ※ 実装時は action / method を実際の登録エンドポイントに差し替えてください
     ---------------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('.entryform'), function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input) return;

      var value = input.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      if (!valid) {
        input.focus();
        input.setCustomValidity('メールアドレスの形式をご確認ください');
        input.reportValidity();
        return;
      }
      input.setCustomValidity('');
      window.alert('【デモ】この内容で会員登録ページへ進みます：' + value);
    });

    var email = form.querySelector('input[type="email"]');
    if (email) {
      email.addEventListener('input', function () { email.setCustomValidity(''); });
    }
  });

  /* ----------------------------------------------------------------------
     8. ヒーロー背景スライドショー（フェード切り替え）
     ---------------------------------------------------------------------- */
  var slides = document.querySelectorAll('.hero__slide');
  if (slides.length > 1) {
    var currentSlide = 0;
    var slideInterval = 5000; // 5秒ごとに切り替え

    setInterval(function () {
      slides[currentSlide].classList.remove('is-active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('is-active');
    }, slideInterval);
  }
})();
