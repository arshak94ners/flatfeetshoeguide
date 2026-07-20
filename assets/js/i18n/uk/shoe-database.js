/*
 * Shoe database — flatfeetshoeguide.com
 * Requires products-data.js to be loaded first (defines FFSG_PRODUCTS).
 */
(function () {
  "use strict";

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function allCategories() {
    var seen = {};
    var list = [];
    Object.keys(FFSG_PRODUCTS).forEach(function (key) {
      var p = FFSG_PRODUCTS[key];
      if (!seen[p.category]) {
        seen[p.category] = true;
        list.push({ value: p.category, label: p.categoryLabel });
      }
    });
    return list;
  }

  function renderFilters(root, state) {
    var cats = allCategories();
    var html =
      '<div class="db-filters">' +
      '<div class="db-filter">' +
      '<label for="db-category">Категорія</label>' +
      '<select id="db-category"><option value="">Усі категорії</option>' +
      cats.map(function (c) { return '<option value="' + c.value + '"' + (state.category === c.value ? " selected" : "") + ">" + c.label + "</option>"; }).join("") +
      "</select></div>" +
      '<div class="db-filter">' +
      '<label for="db-price">Максимальний ціновий рівень</label>' +
      '<select id="db-price">' +
      '<option value="">Будь-яка ціна</option>' +
      '<option value="1"' + (state.price === "1" ? " selected" : "") + ">Тільки $</option>" +
      '<option value="2"' + (state.price === "2" ? " selected" : "") + ">$$ і нижче</option>" +
      '<option value="3"' + (state.price === "3" ? " selected" : "") + ">$$$ і нижче</option>" +
      "</select></div>" +
      '<div class="db-filter">' +
      '<label for="db-sort">Сортувати за</label>' +
      '<select id="db-sort">' +
      '<option value="overall"' + (state.sort === "overall" ? " selected" : "") + ">Загальна оцінка</option>" +
      '<option value="stability"' + (state.sort === "stability" ? " selected" : "") + ">Стабільність</option>" +
      '<option value="cushioning"' + (state.sort === "cushioning" ? " selected" : "") + ">Амортизація</option>" +
      '<option value="wideFoot"' + (state.sort === "wideFoot" ? " selected" : "") + ">Комфорт для широкої стопи</option>" +
      '<option value="value"' + (state.sort === "value" ? " selected" : "") + ">Співвідношення ціна/якість</option>" +
      '<option value="durability"' + (state.sort === "durability" ? " selected" : "") + ">Довговічність</option>" +
      "</select></div>" +
      "</div>";
    root.innerHTML = html;

    document.getElementById("db-category").addEventListener("change", function (e) {
      state.category = e.target.value;
      renderTable(state);
    });
    document.getElementById("db-price").addEventListener("change", function (e) {
      state.price = e.target.value;
      renderTable(state);
    });
    document.getElementById("db-sort").addEventListener("change", function (e) {
      state.sort = e.target.value;
      renderTable(state);
    });
  }

  function scoreFor(key, sortField) {
    return sortField === "overall" ? ffsgOverallScore(key) : FFSG_PRODUCTS[key].scores[sortField];
  }

  function renderTable(state) {
    var root = document.getElementById("db-results");
    if (!root) return;

    var keys = Object.keys(FFSG_PRODUCTS).filter(function (key) {
      var p = FFSG_PRODUCTS[key];
      if (state.category && p.category !== state.category) return false;
      if (state.price && p.priceTier > parseInt(state.price, 10)) return false;
      return true;
    });

    keys.sort(function (a, b) {
      return scoreFor(b, state.sort) - scoreFor(a, state.sort);
    });

    if (keys.length === 0) {
      root.innerHTML = '<p class="muted">Жоден товар не відповідає цим фільтрам. Спробуйте розширити ціновий діапазон або категорію.</p>';
      return;
    }

    var rows = keys.map(function (key) {
      var p = FFSG_PRODUCTS[key];
      return (
        "<tr>" +
        '<td><a href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank"><img src="' + p.img + '" alt="' + escapeHtml(p.alt) + '" width="72" height="48" loading="lazy"><span class="visually-hidden"> (відкривається у новій вкладці)</span></a></td>' +
        "<td><strong>" + escapeHtml(p.name) + "</strong><br><span class=\"muted\">" + escapeHtml(p.categoryLabel) + "</span></td>" +
        "<td>" + escapeHtml(p.bestFor) + "</td>" +
        "<td>" + escapeHtml(p.widthOptions) + "</td>" +
        "<td>" + ffsgPriceLabel(p.priceTier) + "</td>" +
        "<td><strong>" + ffsgOverallScore(key).toFixed(1) + "</strong> / 10</td>" +
        '<td><a class="btn btn-secondary btn-sm" href="' + p.review + '">Огляд</a></td>' +
        "</tr>"
      );
    }).join("");

    root.innerHTML =
      '<div class="table-wrap"><table class="compare"><thead><tr>' +
      '<th scope="col"></th><th scope="col">Товар</th><th scope="col">Найкраще підходить для</th><th scope="col">Варіанти повноти</th><th scope="col">Ціна</th><th scope="col">Оцінка</th><th scope="col"></th>' +
      "</tr></thead><tbody>" + rows + "</tbody></table></div>" +
      '<p class="muted" style="margin-top:1rem;">Показано ' + keys.length + " з " + Object.keys(FFSG_PRODUCTS).length + " товарів.</p>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var filterRoot = document.getElementById("db-filters-root");
    if (!filterRoot) return;
    var state = { category: "", price: "", sort: "overall" };
    renderFilters(filterRoot, state);
    renderTable(state);
  });
})();
