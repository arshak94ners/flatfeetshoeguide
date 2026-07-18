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
      '<label for="db-category">Category</label>' +
      '<select id="db-category"><option value="">All categories</option>' +
      cats.map(function (c) { return '<option value="' + c.value + '"' + (state.category === c.value ? " selected" : "") + ">" + c.label + "</option>"; }).join("") +
      "</select></div>" +
      '<div class="db-filter">' +
      '<label for="db-price">Max price tier</label>' +
      '<select id="db-price">' +
      '<option value="">Any price</option>' +
      '<option value="1"' + (state.price === "1" ? " selected" : "") + ">$ only</option>" +
      '<option value="2"' + (state.price === "2" ? " selected" : "") + ">$$ and under</option>" +
      '<option value="3"' + (state.price === "3" ? " selected" : "") + ">$$$ and under</option>" +
      "</select></div>" +
      '<div class="db-filter">' +
      '<label for="db-sort">Sort by</label>' +
      '<select id="db-sort">' +
      '<option value="overall"' + (state.sort === "overall" ? " selected" : "") + ">Overall score</option>" +
      '<option value="stability"' + (state.sort === "stability" ? " selected" : "") + ">Stability</option>" +
      '<option value="cushioning"' + (state.sort === "cushioning" ? " selected" : "") + ">Cushioning</option>" +
      '<option value="wideFoot"' + (state.sort === "wideFoot" ? " selected" : "") + ">Wide-foot friendliness</option>" +
      '<option value="value"' + (state.sort === "value" ? " selected" : "") + ">Value</option>" +
      '<option value="durability"' + (state.sort === "durability" ? " selected" : "") + ">Durability</option>" +
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
      root.innerHTML = '<p class="muted">No products match those filters. Try widening your price range or category.</p>';
      return;
    }

    var rows = keys.map(function (key) {
      var p = FFSG_PRODUCTS[key];
      return (
        "<tr>" +
        '<td><a href="' + p.href + '" rel="sponsored nofollow noopener" target="_blank"><img src="' + p.img + '" alt="' + escapeHtml(p.alt) + '" width="72" height="48" loading="lazy"><span class="visually-hidden"> (opens in a new tab)</span></a></td>' +
        "<td><strong>" + escapeHtml(p.name) + "</strong><br><span class=\"muted\">" + escapeHtml(p.categoryLabel) + "</span></td>" +
        "<td>" + escapeHtml(p.bestFor) + "</td>" +
        "<td>" + escapeHtml(p.widthOptions) + "</td>" +
        "<td>" + ffsgPriceLabel(p.priceTier) + "</td>" +
        "<td><strong>" + ffsgOverallScore(key).toFixed(1) + "</strong> / 10</td>" +
        '<td><a class="btn btn-secondary btn-sm" href="' + p.review + '">Review</a></td>' +
        "</tr>"
      );
    }).join("");

    root.innerHTML =
      '<div class="table-wrap"><table class="compare"><thead><tr>' +
      '<th scope="col"></th><th scope="col">Product</th><th scope="col">Best for</th><th scope="col">Width options</th><th scope="col">Price</th><th scope="col">Score</th><th scope="col"></th>' +
      "</tr></thead><tbody>" + rows + "</tbody></table></div>" +
      '<p class="muted" style="margin-top:1rem;">Showing ' + keys.length + " of " + Object.keys(FFSG_PRODUCTS).length + " products.</p>";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var filterRoot = document.getElementById("db-filters-root");
    if (!filterRoot) return;
    var state = { category: "", price: "", sort: "overall" };
    renderFilters(filterRoot, state);
    renderTable(state);
  });
})();
