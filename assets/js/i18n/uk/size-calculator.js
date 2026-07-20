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

  var PLAUSIBLE = {
    eu: [30, 52],
    usM: [1, 17],
    usW: [2.5, 19],
    uk: [0, 16],
    cm: [18, 34]
  };

  var SYSTEM_LABELS = {
    eu: "EU",
    usM: "US (чол.)",
    usW: "US (жін.)",
    uk: "UK",
    cm: "см"
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

  function convert(system, rawValue) {
    var value = parseFloat(rawValue);
    if (isNaN(value) || value <= 0) {
      return { error: "Будь ласка, введіть коректний розмір, наприклад 9 або 9.5." };
    }

    var plausible = PLAUSIBLE[system];
    if (!plausible) {
      return { error: "Невідома система розмірів." };
    }
    if (value < plausible[0] || value > plausible[1]) {
      return {
        error:
          "Розміри " + SYSTEM_LABELS[system] +
          " зазвичай знаходяться між " +
          formatSize(plausible[0]) +
          " і " +
          formatSize(plausible[1]) +
          " для дорослих. Перевірте значення й обрану систему."
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
      { key: "usM", label: "US (чол.)", value: formatSize(result.usM) },
      { key: "usW", label: "US (жін.)", value: formatSize(result.usW) },
      { key: "uk", label: "UK", value: formatSize(result.uk) },
      { key: "cm", label: "см", value: formatSize(result.cm) }
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
        '<p class="calc-error">Цей розмір виходить за межі нашої довідкової таблиці EU 35–50, тож це найближча оцінка на межі, а не точна інтерполяція. Будь ласка, перевірте офіційну таблицю розмірів виробника.</p>';
    } else {
      html +=
        '<p class="calc-note">Оцінено шляхом інтерполяції довідкової таблиці вище. Посадка залежить від бренду й колодки — завжди звіряйтеся з офіційною таблицею розмірів виробника перед покупкою, особливо для EU 42–45 і половинних розмірів.</p>';
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

    var PLACEHOLDERS = { eu: "напр. 42", usM: "напр. 9.5", usW: "напр. 11", uk: "напр. 8.5", cm: "напр. 27" };

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
