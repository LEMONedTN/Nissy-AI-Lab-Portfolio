/* ============================================
   AEGIS CYBER 採用サイト（B案）共通スクリプト
   - モバイルナビ開閉
   - 社員インタビューのモーダル表示
   - エントリーフォームのダミー送信
   ============================================ */
(function () {
  "use strict";

  /* ---------- モバイルナビ ---------- */
  var hamburger = document.getElementById("hamburger");
  var gnav = document.getElementById("gnav");
  if (hamburger && gnav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      gnav.classList.toggle("open");
    });
    gnav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        hamburger.classList.remove("open");
        gnav.classList.remove("open");
      });
    });
  }

  /* ---------- 社員インタビュー モーダル ----------
     各 .member（ボタン）に data-* を持たせ、クリックで
     #memberModal を内容差し替えして開く。
  --------------------------------------------------- */
  var modal = document.getElementById("memberModal");
  if (modal) {
    var mRole = modal.querySelector("[data-m='role']");
    var mName = modal.querySelector("[data-m='name']");
    var mNameEn = modal.querySelector("[data-m='name-en']");
    var mDept = modal.querySelector("[data-m='dept']");
    var mPh = modal.querySelector("[data-m='ph']");
    var mBody = modal.querySelector("[data-m='body']");
    var closeBtn = modal.querySelector(".modal__close");
    var overlay = modal.querySelector(".modal__overlay");

    function openModal(btn) {
      mRole.textContent = btn.getAttribute("data-role") || "";
      mName.textContent = btn.getAttribute("data-name") || "";
      mNameEn.textContent = btn.getAttribute("data-name-en") || "";
      mDept.textContent = btn.getAttribute("data-dept") || "";
      if (mPh) mPh.setAttribute("data-label", btn.getAttribute("data-photo") || "社員写真");

      // Q&A は data-qa（JSON）から生成
      var qaRaw = btn.getAttribute("data-qa");
      mBody.innerHTML = "";
      try {
        var qa = JSON.parse(qaRaw);
        qa.forEach(function (item) {
          var wrap = document.createElement("div");
          wrap.className = "qa";
          var q = document.createElement("div");
          q.className = "q";
          q.appendChild(document.createTextNode(item.q));
          var a = document.createElement("div");
          a.className = "a";
          a.textContent = item.a;
          wrap.appendChild(q);
          wrap.appendChild(a);
          mBody.appendChild(wrap);
        });
      } catch (e) {
        mBody.textContent = "内容を読み込めませんでした。";
      }

      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".member").forEach(function (btn) {
      btn.addEventListener("click", function () { openModal(btn); });
    });
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (overlay) overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------- エントリーフォーム（ダミー送信） ---------- */
  var form = document.getElementById("entryForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.getElementById("formMsg");
      if (msg) {
        msg.classList.add("show");
        msg.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }
})();
