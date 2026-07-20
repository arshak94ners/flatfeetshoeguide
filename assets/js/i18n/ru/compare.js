/*
 * Side-by-side compare tool — flatfeetshoeguide.com
 * Requires products-data.js to be loaded first (defines FFSG_PRODUCTS).
 */
(function () {
  "use strict";

  var METRIC_LABELS = {
    stability: "Стабильность",
    cushioning: "Амортизация",
    wideFoot: "Удобство для широкой стопы",
    value: "Цена/качество",
    durability: "Долговечность"
  };

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function groupedOptions(selectedKey) {
    var byCategory = {};
    Object.keys(FFSG_PRODUCTS).forEach(function (key) {
      var p = FFSG_PRODUCTS[key];
      byCategory[p.categoryLabel] = byCategory[p.categoryLabel] || [];
      byCategory[p.categoryLabel].push(key);
    });
    var html = '<option value="">Выберите товар&hellip;</option>';
    Object.keys(byCategory).forEach(function (cat) {
      html += '<optgroup label="' + escapeHtml(cat) + '">';
      byCategory[cat].forEach(function (key) {
        var selected = key === selectedKey ? " selected" : "";
        html += '<option value="' + key + '"' + selected + ">" + escapeHtml(FFSG_PRODUCTS[key].name) + "</option>";
      });
      html += "</optgroup>";
    });
    return html;
  }

  function renderPicker(root, state) {
    var html = '<div class="compare-pickers">';
    [0, 1, 2].forEach(function (i) {
      html +=
        '<div class="compare-picker">' +
        '<label for="compare-slot-' + i + '">Обувь ' + (i + 1) + (i === 2 ? " (опционально)" : "") + "</label>" +
        '<select id="compare-slot-' + i + '" data-slot="' + i + '">' +
        groupedOptions(state[i]) +
        "</select>" +
        "</div>";
    });
    html += "</div>";
    root.innerHTML = html;

    root.querySelectorAll("select").forEach(function (select) {
      select.addEventListener("change", function () {
        var slot = parseInt(select.getAttribute("data-slot"), 10);
        state[slot] = select.value || null;
        renderTable(state);
      });
    });
  }

  function scoreRow(label, metric, keys) {
    var cells = keys
      .map(function (key) {
        var val = FFSG_PRODUCTS[key].scores[metric];
        return "<td>" + val.toFixed(1) + " / 10</td>";
      })
      .join("");
    return "<tr><td>" + label + "</td>" + cells + "</tr>";
  }

  function renderTable(state) {
    var tableRoot = document.getElementById("compare-table-root");
    if (!tableRoot) return;
    var keys = state.filter(Boolean);

    if (keys.length < 2) {
      tableRoot.innerHTML = '<p class="muted">Выберите минимум два товара выше, чтобы сравнить их.</p>';
      return;
    }

    var head = keys.map(function (key) {
      var p = FFSG_PRODUCTS[key];
      return (
        "<th scope=\"col\">" +
        '<a href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">' +
        '<img src="' + p.img + '" alt="' + escapeHtml(p.alt) + '" width="120" height="80" loading="lazy">' +
        "<span class=\"visually-hidden\"> (открывается в новой вкладке)</span>" +
        "</a><br>" + escapeHtml(p.name) +
        "</th>"
      );
    }).join("");

    function row(label, fn) {
      return "<tr><td>" + label + "</td>" + keys.map(function (key) { return "<td>" + fn(FFSG_PRODUCTS[key]) + "</td>"; }).join("") + "</tr>";
    }

    var overallRow =
      "<tr><td><strong>Общая оценка</strong></td>" +
      keys.map(function (key) { return "<td><strong>" + ffsgOverallScore(key).toFixed(1) + " / 10</strong></td>"; }).join("") +
      "</tr>";

    var html =
      '<div class="table-wrap"><table class="compare"><thead><tr><th scope="col">Характеристика</th>' + head + "</tr></thead><tbody>" +
      row("Категория", function (p) { return p.categoryLabel; }) +
      row("Лучше всего подходит для", function (p) { return p.bestFor; }) +
      row("Тип поддержки", function (p) { return p.supportType; }) +
      row("Перепад/высота подошвы", function (p) { return p.drop; }) +
      row("Варианты ширины", function (p) { return p.widthOptions; }) +
      row("Ценовой диапазон", function (p) { return ffsgPriceLabel(p.priceTier); }) +
      overallRow +
      Object.keys(METRIC_LABELS).map(function (metric) { return scoreRow(METRIC_LABELS[metric], metric, keys); }).join("") +
      "</tbody></table></div>";

    html += '<div class="grid grid-3" style="margin-top:1.5rem;">';
    keys.forEach(function (key) {
      var p = FFSG_PRODUCTS[key];
      html +=
        '<div class="card">' +
        "<h3>" + escapeHtml(p.name) + "</h3>" +
        '<a class="btn btn-primary btn-sm" href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank">Посмотреть цену на Amazon<span class="visually-hidden"> (открывается в новой вкладке)</span></a> ' +
        '<a class="btn btn-secondary btn-sm" href="' + p.review + '">Читать полный обзор</a>' +
        "</div>";
    });
    html += "</div>";

    tableRoot.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var picker = document.getElementById("compare-picker");
    if (!picker) return;

    var params = new URLSearchParams(window.location.search);
    var state = [params.get("a"), params.get("b"), params.get("c")].map(function (v) {
      return v && FFSG_PRODUCTS[v] ? v : null;
    });

    renderPicker(picker, state);
    renderTable(state);
  });
})();
