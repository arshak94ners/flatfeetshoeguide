/*
 * Shared affiliate-link markup for the generated roundups
 * (gen-buying-guides.js) and the blocks add-shop-blocks.js injects into
 * hand-written pages, so every "top picks" strip looks and behaves the same.
 */
"use strict";

const NEW_TAB = '<span class="visually-hidden"> (opens in a new tab)</span>';
const REL = 'rel="sponsored nofollow noopener" target="_blank"';

// Attribute-safe: turns bare & into &amp; without double-escaping.
function escAmp(s) {
  return s.replace(/&(?!(?:amp|lt|gt|quot|#\d+|[a-z]+);)/g, "&amp;");
}

/*
 * One compact pick: photo, label, name and a buy button.
 *   href   Amazon affiliate URL      img   product photo path
 *   name   product name (HTML ok)    label short "best for" line
 *   more   optional on-site link for the name (an #anchor or a review URL)
 *   brand  shown on a tile instead of the photo when there is no img
 */
function pickCard({ href, img, name, label, more, brand }) {
  const url = escAmp(href);
  const title = more ? `<a href="${more}">${name}</a>` : name;
  const visual = img
    ? `<img src="${img}" alt="" width="240" height="160" loading="lazy">`
    : `<span class="pick-mono">${brand}</span>`;
  return `<li class="pick-card">
          <a class="pick-img" href="${url}" ${REL} tabindex="-1" aria-hidden="true">${visual}</a>
          <div class="pick-body">
            <span class="pick-label">${label}</span>
            <p class="pick-name">${title}</p>
            <a class="btn btn-primary btn-sm" href="${url}" ${REL}>Check Price${NEW_TAB}</a>
          </div>
        </li>`;
}

function pickList(picks, { ranked = false } = {}) {
  const tag = ranked ? "ol" : "ul";
  return `<${tag} class="top-picks">
        ${picks.map(pickCard).join("\n        ")}
      </${tag}>`;
}

module.exports = { NEW_TAB, REL, escAmp, pickCard, pickList };
