/*
 * Shoe size calculator — flatfeetshoeguide.com
 *
 * Reference dataset mirrors the conversion table printed on this page.
 * EU and CM columns are set from the real definitions of each scale
 * (EU/Paris point = 2/3 cm per size; US point = 1/3 inch per size),
 * anchored on the widely-cited EU 42 = US M9 = UK 8 = 27cm equivalence.
 * US Women's = US Men's + 1.5 and UK = US Men's - 1, the standard
 * offsets used across most general size charts. Because real brands
 * round differently, treat every result as an estimate — see the
 * disclaimer printed with each result.
 */
(function () {
  "use strict";

  var TABLE = [
    { eu: 35, usM: 3.5, cm: 22.5 },
    { eu: 36, usM: 4.5, cm: 23.0 },
    { eu: 37, usM: 5.0, cm: 23.5 },
    { eu: 38, usM: 6.0, cm: 24.5 },
    { eu: 39, usM: 6.5, cm: 25.0 },
    { eu: 40, usM: 7.5, cm: 25.5 },
    { eu: 41, usM: 8.0, cm: 26.5 },
    { eu: 42, usM: 9.0, cm: 27.0 },
    { eu: 43, usM: 10.0, cm: 27.5 },
    { eu: 44, usM: 10.5, cm: 28.5 },
    { eu: 45, usM: 11.5, cm: 29.0 },
    { eu: 46, usM: 12.0, cm: 29.5 },
    { eu: 47, usM: 13.0, cm: 30.5 },
    { eu: 48, usM: 13.5, cm: 31.0 },
    { eu: 49, usM: 14.5, cm: 31.5 },
    { eu: 50, usM: 15.5, cm: 32.5 }
  ];

  // Table bounds (EU 35-50) are what we can interpolate precisely.
  // PLAUSIBLE bounds are wider "this is still a real shoe size" limits,
  // used only to decide whether to show a clamped estimate (with a
  // caveat) or refuse outright because the input isn't a shoe size at all.
  var PLAUSIBLE = {
    eu: [30, 52],
    usM: [1, 17],
    usW: [2.5, 19],
    uk: [0, 16],
    cm: [18, 34]
  };

  var SYSTEM_LABELS = {
    eu: "EU",
    usM: "US (erkaklar)",
    usW: "US (ayollar)",
    uk: "UK",
    cm: "sm"
  };

  function roundHalf(x) {
    return Math.round(x * 2) / 2;
  }

  function formatSize(n) {
    return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, "");
  }

  function toKeyAndTarget(system, value) {
    if (system === "eu") return { key: "eu", target: value };
    if (system === "cm") return { key: "cm", target: value };
    if (system === "usM") return { key: "usM", target: value };
    if (system === "usW") return { key: "usM", target: value - 1.5 };
    if (system === "uk") return { key: "usM", target: value + 1 };
    return null;
  }

  // Convert any system's input value to its US Men's-scale equivalent
  // (except eu/cm, which are looked up directly), then interpolate
  // across the table to derive every other system.
  function convert(system, rawValue) {
    var value = parseFloat(rawValue);
    if (isNaN(value) || value <= 0) {
      return { error: "Iltimos, to'g'ri o'lchamni kiriting, masalan 9 yoki 9.5." };
    }

    var plausible = PLAUSIBLE[system];
    if (!plausible) {
      return { error: "Noma'lum o'lcham tizimi." };
    }
    if (value < plausible[0] || value > plausible[1]) {
      return {
        error:
          SYSTEM_LABELS[system] +
          " o'lchamlari odatda kattalar uchun " +
          formatSize(plausible[0]) +
          " dan " +
          formatSize(plausible[1]) +
          " gacha bo'ladi. Kiritilgan qiymatni va tanlagan tizimingizni qayta tekshiring."
      };
    }

    var mapped = toKeyAndTarget(system, value);
    var key = mapped.key;
    var target = mapped.target;

    var first = TABLE[0];
    var last = TABLE[TABLE.length - 1];
    var beyondTable = false;
    var clamped = target;

    if (target < first[key]) {
      beyondTable = true;
      clamped = first[key];
    } else if (target > last[key]) {
      beyondTable = true;
      clamped = last[key];
    }

    var lower = TABLE[0];
    var upper = TABLE[TABLE.length - 1];
    for (var i = 0; i < TABLE.length - 1; i++) {
      if (clamped >= TABLE[i][key] && clamped <= TABLE[i + 1][key]) {
        lower = TABLE[i];
        upper = TABLE[i + 1];
        break;
      }
    }

    var span = upper[key] - lower[key];
    var fraction = span === 0 ? 0 : (clamped - lower[key]) / span;

    var eu = lower.eu + fraction * (upper.eu - lower.eu);
    var cm = lower.cm + fraction * (upper.cm - lower.cm);
    var usM = lower.usM + fraction * (upper.usM - lower.usM);

    return {
      eu: roundHalf(eu),
      usM: roundHalf(usM),
      usW: roundHalf(usM + 1.5),
      uk: roundHalf(usM - 1),
      cm: roundHalf(cm),
      beyondTable: beyondTable
    };
  }

  function renderResult(container, system, result) {
    if (result.error) {
      container.hidden = false;
      container.innerHTML = '<p class="calc-error" role="alert">' + result.error + "</p>";
      return;
    }

    var items = [
      { key: "eu", label: "EU", value: formatSize(result.eu) },
      { key: "usM", label: "US (erkaklar)", value: formatSize(result.usM) },
      { key: "usW", label: "US (ayollar)", value: formatSize(result.usW) },
      { key: "uk", label: "UK", value: formatSize(result.uk) },
      { key: "cm", label: "sm", value: formatSize(result.cm) }
    ];

    var html = '<div class="calc-result-grid">';
    items.forEach(function (item) {
      var isInput = item.key === system;
      html +=
        '<div class="calc-result-item' + (isInput ? " is-input" : "") + '">' +
        '<span class="calc-label">' + item.label + "</span>" +
        '<span class="calc-value">' + item.value + "</span>" +
        "</div>";
    });
    html += "</div>";

    if (result.beyondTable) {
      html +=
        '<p class="calc-error">Bu o\'lcham bizning EU 35–50 ma\'lumotnoma jadvalimiz chegarasidan tashqarida, shuning uchun bu aniq interpolatsiya emas, balki eng yaqin chegaraviy taxmin. Iltimos, ishlab chiqaruvchining o\'z o\'lcham jadvalini tekshiring.</p>';
    } else {
      html +=
        '<p class="calc-note">Yuqoridagi ma\'lumotnoma jadvalini interpolatsiya qilish orqali taxmin qilingan. Moslik brend va qolipga qarab farq qiladi — sotib olishdan oldin har doim ishlab chiqaruvchining rasmiy o\'lcham jadvali bilan solishtiring, ayniqsa EU 42–45 va yarim o\'lchamlar uchun.</p>';
    }

    container.hidden = false;
    container.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("size-calculator");
    var result = document.getElementById("calc-result");
    var valueInput = document.getElementById("calc-value");
    var systemSelect = document.getElementById("calc-system");
    if (!form || !result || !valueInput || !systemSelect) return;

    var PLACEHOLDERS = { eu: "masalan 42", usM: "masalan 9.5", usW: "masalan 11", uk: "masalan 8.5", cm: "masalan 27" };

    function syncBoundsToSystem() {
      var bounds = PLAUSIBLE[systemSelect.value];
      if (!bounds) return;
      valueInput.min = String(bounds[0]);
      valueInput.max = String(bounds[1]);
      valueInput.placeholder = PLACEHOLDERS[systemSelect.value] || "";
    }

    systemSelect.addEventListener("change", syncBoundsToSystem);
    syncBoundsToSystem();

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = valueInput.value;
      var system = systemSelect.value;
      renderResult(result, system, convert(system, value));
    });
  });
})();
