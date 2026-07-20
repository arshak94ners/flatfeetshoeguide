(function () {
  "use strict";

  var LANGS = ["hy", "az", "be", "et", "ka", "kk", "ky", "lv", "lt", "ro", "ru", "tg", "tk", "uk", "uz"];
  var NAMES = {
    en: "English", hy: "Հայերեն", az: "Azərbaycanca",
    be: "Беларуская", et: "Eesti",
    ka: "ქართული", kk: "Қазақша",
    ky: "Кыргызча", lv: "Latviešu", lt: "Lietuvių",
    ro: "Română", ru: "Русский",
    tg: "Тоҷикй", tk: "Türkmençe",
    uk: "Українська", uz: "Oʻzbekcha"
  };

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("lang-switcher-btn");
    var menu = document.getElementById("lang-switcher-menu");
    if (!btn || !menu) return;

    var path = window.location.pathname;
    var segments = path.split("/").filter(Boolean);
    var currentLang = "en";
    var restSegments = segments;
    if (segments.length && LANGS.indexOf(segments[0]) !== -1) {
      currentLang = segments[0];
      restSegments = segments.slice(1);
    }
    var restPath = restSegments.length ? "/" + restSegments.join("/") + "/" : "/";

    var currentLabel = btn.querySelector(".lang-switcher-current");
    if (currentLabel) currentLabel.textContent = currentLang.toUpperCase();

    var links = menu.querySelectorAll("a[data-lang]");
    for (var i = 0; i < links.length; i++) {
      var lang = links[i].getAttribute("data-lang");
      var href = lang === "en" ? restPath : "/" + lang + restPath;
      links[i].setAttribute("href", href);
      if (lang === currentLang) {
        links[i].setAttribute("aria-current", "true");
      } else {
        links[i].removeAttribute("aria-current");
      }
    }

    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = menu.hasAttribute("hidden") === false;
      if (isOpen) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      } else {
        menu.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
      }
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && event.target !== btn) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
})();
