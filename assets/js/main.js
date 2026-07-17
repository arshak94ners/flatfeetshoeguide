/*
 * Flat Feet Shoe Guide — minimal vanilla JS.
 * FAQ accordions use native <details>/<summary> so no JS is needed there.
 * This file only handles the mobile nav toggle.
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A" && window.matchMedia("(max-width: 859px)").matches) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

(function () {
  "use strict";

  var backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  window.addEventListener(
    "scroll",
    function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 800);
    },
    { passive: true }
  );
})();
