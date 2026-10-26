/*
 * Flat Feet Shoe Guide — minimal vanilla JS.
 * FAQ accordions use native <details>/<summary> so no JS is needed there.
 * This file handles the mobile nav toggle, the header dropdowns (menus and
 * language switcher), and the back-to-top button. All menu links are real
 * links in the HTML, so navigation still works if this script fails to load.
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.documentElement.classList.toggle("nav-open", isOpen);
  });
})();

(function () {
  "use strict";

  // Disclosure buttons: <button data-disclosure aria-controls="panel-id">.
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-disclosure]"));
  if (!buttons.length) return;

  function panelOf(btn) {
    return document.getElementById(btn.getAttribute("aria-controls"));
  }

  function setOpen(btn, open) {
    var panel = panelOf(btn);
    if (!panel) return;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) panel.removeAttribute("hidden");
    else panel.setAttribute("hidden", "");
  }

  function closeAll(except) {
    buttons.forEach(function (b) {
      if (b !== except) setOpen(b, false);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = btn.getAttribute("aria-expanded") !== "true";
      closeAll(btn);
      setOpen(btn, willOpen);
    });
  });

  document.addEventListener("click", function (event) {
    buttons.forEach(function (btn) {
      var panel = panelOf(btn);
      if (panel && !panel.contains(event.target)) setOpen(btn, false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    buttons.forEach(function (btn) {
      if (btn.getAttribute("aria-expanded") === "true") {
        setOpen(btn, false);
        if (panelOf(btn).contains(document.activeElement)) btn.focus();
      }
    });
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

(function () {
  "use strict";

  // Single-product reviews: once the main "Check Price" button scrolls out of
  // view, a slim buy bar slides up from the bottom (phones only, via CSS).
  if (!/\/shoe-reviews\/[^/]+\/$/.test(location.pathname)) return;
  var source = document.querySelector('.product-card a.btn-primary[rel~="sponsored"]');
  var title = document.querySelector(".product-card h3");
  if (!source || !title || !("IntersectionObserver" in window)) return;

  var bar = document.createElement("div");
  bar.className = "sticky-cta";
  var name = document.createElement("span");
  name.className = "sticky-cta-name";
  name.textContent = title.textContent;
  var button = source.cloneNode(true);
  button.classList.add("btn-sm");
  button.tabIndex = -1;
  bar.setAttribute("aria-hidden", "true");
  bar.appendChild(name);
  bar.appendChild(button);
  document.body.appendChild(bar);
  document.documentElement.classList.add("has-sticky-cta");

  new IntersectionObserver(function (entries) {
    var e = entries[0];
    // Show only after the button has scrolled up past the top of the screen.
    bar.classList.toggle("is-visible", !e.isIntersecting && e.boundingClientRect.top < 0);
  }).observe(source);
})();
