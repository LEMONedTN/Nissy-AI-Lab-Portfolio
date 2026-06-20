// ===== ハンバーガーメニュー =====
(function () {
  var btn = document.getElementById('hamburger');
  var nav = document.getElementById('gnav');
  var overlay = document.getElementById('navOverlay');
  if (!btn || !nav) return;

  function close() {
    btn.classList.remove('open');
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  }
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
    if (overlay) overlay.classList.toggle('open', open);
  });
  if (overlay) overlay.addEventListener('click', close);
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });
})();

// ===== 社員インタビュー モーダル =====
(function () {
  var modal = document.getElementById('interviewModal');
  if (!modal) return;
  var panel = modal.querySelector('.modal__panel-content');

  document.querySelectorAll('.member[data-member]').forEach(function (card) {
    card.addEventListener('click', function () {
      var tpl = document.getElementById('member-' + card.getAttribute('data-member'));
      if (!tpl) return;
      panel.innerHTML = tpl.innerHTML;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  modal.addEventListener('click', function (e) {
    if (e.target === modal || e.target.classList.contains('modal__close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

// ===== 採用フォーム送信 =====
(function () {
  var form = document.getElementById('entryForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    var thanks = document.getElementById('formThanks');
    if (thanks) {
      thanks.classList.add('show');
      thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
})();
