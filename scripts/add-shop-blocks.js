#!/usr/bin/env node
/*
 * Adds affiliate "shop" blocks to hand-written English pages. Safe to re-run:
 * each block sits between <!-- shop:NAME --> markers and is rewritten in place.
 *
 *   node scripts/add-shop-blocks.js
 *
 * - Hand-written roundups (best-* pages not built by gen-buying-guides.js):
 *   a photo strip of the page's picks under the table of contents, an id on
 *   every product card, and a buy button in each card header.
 * - Guides in GUIDES below: a short "products that help" strip before the FAQ.
 * - Homepage: the flagship's top three picks under the hero.
 *
 * Product data comes from assets/js/products-data.js (reviewed products) and
 * scripts/buying-guides-data.js (roundup products).
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { pickList, NEW_TAB, REL } = require("./shop-components");
const { PAGES, PRODUCTS, TAG } = require("./buying-guides-data");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");

const ctx = {};
vm.runInNewContext(read("assets/js/products-data.js").replace(/^var FFSG_PRODUCTS/m, "this.FFSG_PRODUCTS"), ctx);
const REVIEWED = ctx.FFSG_PRODUCTS;

// A product by id from either data set, as pickCard() input (minus label).
function product(id) {
  const r = REVIEWED[id];
  if (r) return { href: r.href, img: r.img, name: r.name, brand: r.brand, more: r.review };
  const p = PRODUCTS[id];
  if (p) return { href: `https://www.amazon.com/dp/${p.asin}?tag=${TAG}&linkCode=ll1&language=en_US`, img: p.img, name: p.name, brand: p.brand };
  throw new Error(`Unknown product id "${id}"`);
}

function block(name, body) {
  return `<!-- shop:${name} -->\n${body}\n<!-- /shop:${name} -->`;
}

// Replace an existing marked block, or insert a new one with insert().
function upsert(html, name, body, insert) {
  const re = new RegExp(`<!-- shop:${name} -->[\\s\\S]*?<!-- /shop:${name} -->`);
  if (re.test(html)) return html.replace(re, () => block(name, body));
  const out = insert(html, block(name, body));
  if (out === html) throw new Error(`no insertion point for shop:${name}`);
  return out;
}

const slugify = (s) => s.toLowerCase().replace(/&[a-z]+;/g, "").replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ---------- Hand-written roundups ----------
function roundup(file) {
  let html = read(file);
  const picks = [];
  html = html.replace(/<div class="product-card"(?: id="[^"]*")?>([\s\S]*?)<div class="affiliate-cta">/g, (whole, inner) => {
    const h3 = inner.match(/<h3>(?:<span class="rank-badge">\d+<\/span>)?([\s\S]*?)<\/h3>/);
    const href = inner.match(/href="(https:\/\/www\.amazon\.com[^"]+)"/);
    const img = inner.match(/<img src="([^"]+)"/);
    if (!h3 || !href || !img) throw new Error(`${file}: unparseable product card`);
    const [name, label] = h3[1].split(/\s*&mdash;\s*/);
    const bestFor = inner.match(/<dt>Best for<\/dt><dd>([^<]+)<\/dd>/);
    const id = slugify(name);
    picks.push({ href: href[1], img: img[1], name, label: label || (bestFor && bestFor[1]) || "Our pick", more: `#${id}` });
    if (!inner.includes("card-cta")) {
      inner = inner.replace("</dl>", `</dl>\n            <a class="btn btn-primary btn-sm card-cta" href="${href[1]}" ${REL}>Check Price on Amazon${NEW_TAB}</a>`);
    }
    return `<div class="product-card" id="${id}">${inner}<div class="affiliate-cta">`;
  });
  if (!picks.length) return false;
  picks.forEach((p, i) => (p.label = `#${i + 1} &middot; ${p.label}`));
  // Goes right after the article-body block that holds the table of contents.
  html = upsert(html, "top-picks", `      ${pickList(picks, { ranked: true })}`, (h, b) =>
    h.replace(/(<div class="toc">[\s\S]*?<\/ol>\s*<\/div>[\s\S]*?\n {6}<\/div>\r?\n)/, `$1\n      ${b}\n`)
  );
  fs.writeFileSync(path.join(ROOT, file), html);
  return picks.length;
}

// ---------- Guides ----------
const GUIDES = {
  "custom-vs-otc-orthotics": {
    h2: "OTC insoles worth trying first",
    ids: [["superfeetGreen", "Firm, structured support"], ["powerstepPinnacle", "Semi-rigid, more cushion"], ["sofSole", "Budget starter insole"]],
    all: ["/best-insoles-for-flat-feet/", "Best Insoles for Flat Feet"]
  },
  "flat-feet-and-knee-pain": {
    h2: "Shoes and insoles that limit inward roll",
    ids: [["brooksAdrenaline", "Guided stability shoe"], ["asicsGelKayano", "Firmer medial support"], ["powerstepPinnacle", "Insole for shoes you own"]],
    all: ["/best-shoes-for-overpronation/", "Best Shoes for Overpronation"]
  },
  "flat-feet-exercises-and-stretches": {
    h2: "Tools that make the routine easier",
    ids: [["strongtekSlantBoard", "Calf stretch"], ["theraflowRoller", "Arch massage"], ["mindBodhiToeSpacers", "Toe splay work"]],
    all: ["/best-foot-care-tools-for-flat-feet/", "Best Foot-Care Tools for Flat Feet"]
  },
  "flat-feet-in-children": {
    h2: "Supportive shoes for kids",
    ids: [["asicsGt1000Kids", "Big kids, stability"], ["nb888Kids", "Hook-and-loop, cushioned"]],
    all: ["/best-kids-shoes-for-flat-feet/", "Best Kids' Shoes for Flat Feet"]
  },
  "flat-feet-vs-plantar-fasciitis-vs-overpronation": {
    h2: "Where to start for each problem",
    ids: [["brooksAdrenaline", "Flat feet &amp; overpronation"], ["tulisHeelCups", "Heel pain, in any shoe"], ["braceabilityNightSplint", "Morning heel pain"]],
    all: ["/best-shoes-for-plantar-fasciitis-and-flat-feet/", "Best Shoes for Plantar Fasciitis and Flat Feet"]
  },
  "how-to-tell-if-you-have-flat-feet": {
    h2: "If the test says flat: where to start",
    ids: [["brooksAdrenaline", "Supportive everyday shoe"], ["superfeetGreen", "Arch support for shoes you own"], ["newBalance990", "Wide, stable lifestyle shoe"]],
    all: ["/best-shoes-for-flat-feet/", "Best Shoes for Flat Feet"]
  },
  "minimalist-barefoot-shoes-flat-feet": {
    h2: "Supportive basics while you transition",
    ids: [["brooksAdrenaline", "Supportive daily shoe"], ["strongtekSlantBoard", "Calf strength &amp; stretch"], ["mindBodhiToeSpacers", "Toe splay work"]],
    all: ["/best-foot-care-tools-for-flat-feet/", "Best Foot-Care Tools for Flat Feet"]
  },
  "shoe-lifespan-and-rotation": {
    h2: "Easy pairs to rotate",
    ids: [["brooksAdrenaline", "Stability for active days"], ["hokaBondi", "Cushion for hard floors"], ["newBalance990", "Stable casual pair"]],
    all: ["/best-shoes-for-flat-feet/", "Best Shoes for Flat Feet"]
  },
  "stability-vs-neutral-vs-motion-control": {
    h2: "One example of each",
    ids: [["brooksAdrenaline", "Stability"], ["asicsGelKayano", "Firmer stability"], ["hokaBondi", "Neutral, max cushion"]],
    all: ["/best-shoes-for-overpronation/", "Best Shoes for Overpronation"]
  }
};

const NOTE = `<p class="shop-note">Affiliate links: if you buy through them, I may earn a commission at no extra cost to you. See the <a href="/affiliate-disclosure/">affiliate disclosure</a>.</p>`;

function guide(slug, cfg) {
  const file = `guides/${slug}/index.html`;
  const picks = cfg.ids.map(([id, label]) => ({ ...product(id), label }));
  const body = `        <aside class="shop-box" aria-labelledby="shop-heading">
          <h2 id="shop-heading">${cfg.h2}</h2>
          ${NOTE}
          ${pickList(picks)}
          <p class="shop-more"><a href="${cfg.all[0]}">See every pick in ${cfg.all[1]} &rarr;</a></p>
        </aside>`;
  const html = upsert(read(file), "guide", body, (h, b) => h.replace(/(\n\s*<h2 id="faq">)/, `\n${b}\n$1`));
  fs.writeFileSync(path.join(ROOT, file), html);
}

// ---------- Homepage ----------
function home() {
  const picks = [
    ["brooksAdrenaline", "Best overall"],
    ["asicsGelKayano", "Best for overpronation"],
    ["newBalance990", "Best for wide feet"]
  ].map(([id, label], i) => ({ ...product(id), label: `#${i + 1} &middot; ${label}` }));
  const body = `  <section class="section section-tight">
    <div class="container">
      <p class="eyebrow">Editor's picks</p>
      <h2>Our top three shoes for flat feet</h2>
      ${NOTE}
      ${pickList(picks, { ranked: true })}
      <p class="shop-more"><a href="/best-shoes-for-flat-feet/">See the full roundup &rarr;</a></p>
    </div>
  </section>`;
  const html = upsert(read("index.html"), "home", body, (h, b) => h.replace(/(<section class="hero">[\s\S]*?<\/section>\n)/, `$1\n${b}\n`));
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
}

const generated = new Set(PAGES.map((p) => p.slug));
for (const dir of fs.readdirSync(ROOT).filter((d) => d.startsWith("best-") && !generated.has(d))) {
  const n = roundup(`${dir}/index.html`);
  console.log(`${dir}: ${n || 0} picks`);
}
for (const [slug, cfg] of Object.entries(GUIDES)) guide(slug, cfg);
console.log(`${Object.keys(GUIDES).length} guides`);
home();
console.log("homepage");
