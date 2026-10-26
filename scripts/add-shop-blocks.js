#!/usr/bin/env node
/*
 * Adds affiliate "shop" blocks to hand-written pages in every language. Safe to
 * re-run: each block sits between <!-- shop:NAME --> markers and is rewritten
 * in place.
 *
 *   node scripts/add-shop-blocks.js
 *
 * - Hand-written roundups (best-* pages not built by gen-buying-guides.js):
 *   a photo strip of the page's picks under the table of contents, an id on
 *   every product card, and a copy of the card's buy button in its header.
 * - Guides in GUIDES below: a short "products that help" strip before the FAQ.
 * - Homepages: the flagship's top three picks under the hero.
 *
 * Roundup labels and buttons are read from each page, so they are already in
 * its language; everything else comes from UI and GUIDES below. Product data
 * comes from assets/js/products-data.js (reviewed products) and
 * scripts/buying-guides-data.js (roundup products).
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { pickList } = require("./shop-components");
const { PAGES, PRODUCTS, TAG } = require("./buying-guides-data");

const ROOT = path.resolve(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const LANGS = ["en", "hy", "kk", "ru", "uk", "uz"];
// "/ru" for a translation, "" for English.
const prefix = (lang) => (lang === "en" ? "" : `/${lang}`);
// A local URL in this language if that page exists, else null.
const localUrl = (lang, url) => (url && exists(`${prefix(lang)}${url}index.html`) ? `${prefix(lang)}${url}` : null);

const ctx = {};
vm.runInNewContext(read("assets/js/products-data.js").replace(/^var FFSG_PRODUCTS/m, "this.FFSG_PRODUCTS"), ctx);
const REVIEWED = ctx.FFSG_PRODUCTS;

// ---------- Interface text ----------
const UI = {
  en: {
    cta: "Check Price", newTab: " (opens in a new tab)",
    note: `Affiliate links: if you buy through them, I may earn a commission at no extra cost to you. See the <a href="/affiliate-disclosure/">affiliate disclosure</a>.`,
    seeAll: "See all our picks &rarr;",
    home: { eyebrow: "Editor's picks", h2: "Our top three shoes for flat feet", labels: ["Best overall", "Best for overpronation", "Best for wide feet"], more: "See the full roundup &rarr;" }
  },
  ru: {
    cta: "Узнать цену", newTab: " (открывается в новой вкладке)",
    note: `Партнёрские ссылки: если вы покупаете по ним, я могу получить комиссию без дополнительных затрат для вас. Подробнее — в <a href="/ru/affiliate-disclosure/">раскрытии партнёрских связей</a>.`,
    seeAll: "Все наши рекомендации &rarr;",
    home: { eyebrow: "Выбор редакции", h2: "Три лучшие модели при плоскостопии", labels: ["Лучший выбор", "Лучшие при гиперпронации", "Лучшие для широкой стопы"], more: "Смотреть весь обзор &rarr;" }
  },
  uk: {
    cta: "Дізнатися ціну", newTab: " (відкриється в новій вкладці)",
    note: `Партнерські посилання: якщо ви купуєте за ними, я можу отримати комісію без додаткових витрат для вас. Докладніше — у <a href="/uk/affiliate-disclosure/">розкритті партнерських зв'язків</a>.`,
    seeAll: "Усі наші рекомендації &rarr;",
    home: { eyebrow: "Вибір редакції", h2: "Три найкращі моделі при плоскостопості", labels: ["Найкращий вибір", "Найкращі при гіперпронації", "Найкращі для широкої стопи"], more: "Дивитися весь огляд &rarr;" }
  },
  hy: {
    cta: "Տեսնել գինը", newTab: " (բացվում է նոր ներդիրում)",
    note: `Աֆիլիեյթ հղումներ. եթե գնում եք դրանցով, ես կարող եմ կոմիսիոն ստանալ՝ առանց ձեզ համար լրացուցիչ ծախսի։ Տեսեք <a href="/hy/affiliate-disclosure/">աֆիլիեյթ բացահայտումը</a>։`,
    seeAll: "Մեր բոլոր ընտրությունները &rarr;",
    home: { eyebrow: "Խմբագրի ընտրություն", h2: "Լավագույն երեք կոշիկները տափակ ոտքերի համար", labels: ["Լավագույնն ընդհանուր առմամբ", "Լավագույնը գերպրոնացիայի համար", "Լավագույնը լայն ոտքերի համար"], more: "Տեսնել ամբողջական ակնարկը &rarr;" }
  },
  kk: {
    cta: "Бағасын көру", newTab: " (жаңа бетте ашылады)",
    note: `Серіктестік сілтемелер: олар арқылы сатып алсаңыз, мен сізге қосымша шығынсыз комиссия алуым мүмкін. <a href="/kk/affiliate-disclosure/">Серіктестік ашықтығын</a> қараңыз.`,
    seeAll: "Барлық таңдауларымыз &rarr;",
    home: { eyebrow: "Редактор таңдауы", h2: "Жалпақ табанға арналған үздік үш аяқ киім", labels: ["Жалпы үздігі", "Артық пронация үшін үздігі", "Кең табан үшін үздігі"], more: "Толық шолуды қарау &rarr;" }
  },
  uz: {
    cta: "Narxni ko'rish", newTab: " (yangi oynada ochiladi)",
    note: `Hamkorlik havolalari: ular orqali xarid qilsangiz, sizga qo'shimcha xarajatsiz komissiya olishim mumkin. <a href="/uz/affiliate-disclosure/">Hamkorlik oshkoraligini</a> ko'ring.`,
    seeAll: "Barcha tanlovlarimiz &rarr;",
    home: { eyebrow: "Muharrir tanlovi", h2: "Yassi tovon uchun eng yaxshi uchta poyabzal", labels: ["Umuman eng yaxshisi", "Ortiqcha pronatsiya uchun eng yaxshisi", "Keng oyoq uchun eng yaxshisi"], more: "To'liq sharhni ko'rish &rarr;" }
  }
};

// A product by id from either data set, as pickCard() input (minus label).
function product(id, lang) {
  const ui = { cta: UI[lang].cta, newTab: `<span class="visually-hidden">${UI[lang].newTab}</span>` };
  const r = REVIEWED[id];
  if (r) return { ...ui, href: r.href, img: r.img, name: r.name, brand: r.brand, more: localUrl(lang, r.review) };
  const p = PRODUCTS[id];
  if (p) return { ...ui, href: `https://www.amazon.com/dp/${p.asin}?tag=${TAG}&linkCode=ll1&language=en_US`, img: p.img, name: p.name, brand: p.brand };
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
function roundup(file, lang) {
  let html = read(file);
  const picks = [];
  const card = /<div class="product-card"(?: id="[^"]*")?>([\s\S]*?)<div class="affiliate-cta">(\s*<a class="btn btn-primary"[^>]*>[\s\S]*?<\/a>)/g;
  html = html.replace(card, (whole, inner, button) => {
    const h3 = inner.match(/<h3>(?:<span class="rank-badge">\d+<\/span>)?([\s\S]*?)<\/h3>/);
    const href = inner.match(/href="(https:\/\/www\.amazon\.com[^"]+)"/);
    const img = inner.match(/<img src="([^"]+)"/);
    if (!h3 || !href || !img) throw new Error(`${file}: unparseable product card`);
    const [name, label] = h3[1].split(/\s*(?:&mdash;|—)\s*/);
    const id = slugify(name);
    picks.push({ href: href[1], img: img[1], name, label, more: `#${id}`, cta: UI[lang].cta, newTab: `<span class="visually-hidden">${UI[lang].newTab}</span>` });
    if (!inner.includes("card-cta")) {
      const headerButton = button.trim().replace('class="btn btn-primary"', 'class="btn btn-primary btn-sm card-cta"');
      inner = inner.replace("</dl>", `</dl>\n            ${headerButton}`);
    }
    return `<div class="product-card" id="${id}">${inner}<div class="affiliate-cta">${button}`;
  });
  if (!picks.length) return 0;
  picks.forEach((p, i) => (p.label = p.label ? `#${i + 1} &middot; ${p.label}` : `#${i + 1}`));
  // Goes right after the article-body block that holds the table of contents.
  html = upsert(html, "top-picks", `      ${pickList(picks, { ranked: true })}`, (h, b) =>
    h.replace(/(<div class="toc">[\s\S]*?<\/ol>\s*<\/div>[\s\S]*?\n {6}<\/div>\r?\n)/, `$1\n      ${b}\n`)
  );
  fs.writeFileSync(path.join(ROOT, file), html);
  return picks.length;
}

// ---------- Guides ----------
// ids: [product id, label per language]. all: the roundup to point to.
// English names the roundup in its link; translations use UI.seeAll.
const GUIDES = {
  "custom-vs-otc-orthotics": {
    h2: { en: "OTC insoles worth trying first" },
    ids: [["superfeetGreen", { en: "Firm, structured support" }], ["powerstepPinnacle", { en: "Semi-rigid, more cushion" }], ["sofSole", { en: "Budget starter insole" }]],
    all: ["/best-insoles-for-flat-feet/", "Best Insoles for Flat Feet"]
  },
  "flat-feet-and-knee-pain": {
    h2: { en: "Shoes and insoles that limit inward roll" },
    ids: [["brooksAdrenaline", { en: "Guided stability shoe" }], ["asicsGelKayano", { en: "Firmer medial support" }], ["powerstepPinnacle", { en: "Insole for shoes you own" }]],
    all: ["/best-shoes-for-overpronation/", "Best Shoes for Overpronation"]
  },
  "flat-feet-exercises-and-stretches": {
    h2: { en: "Tools that make the routine easier" },
    ids: [["strongtekSlantBoard", { en: "Calf stretch" }], ["theraflowRoller", { en: "Arch massage" }], ["mindBodhiToeSpacers", { en: "Toe splay work" }]],
    all: ["/best-foot-care-tools-for-flat-feet/", "Best Foot-Care Tools for Flat Feet"]
  },
  "flat-feet-in-children": {
    h2: { en: "Supportive shoes for kids" },
    ids: [["asicsGt1000Kids", { en: "Big kids, stability" }], ["nb888Kids", { en: "Hook-and-loop, cushioned" }]],
    all: ["/best-kids-shoes-for-flat-feet/", "Best Kids' Shoes for Flat Feet"]
  },
  "flat-feet-vs-plantar-fasciitis-vs-overpronation": {
    h2: { en: "Where to start for each problem", ru: "С чего начать при каждой проблеме", uk: "З чого почати при кожній проблемі", uz: "Har bir muammo uchun nimadan boshlash kerak" },
    ids: [
      ["brooksAdrenaline", { en: "Flat feet &amp; overpronation", ru: "Плоскостопие и гиперпронация", uk: "Плоскостопість і гіперпронація", uz: "Yassi tovon va ortiqcha pronatsiya" }],
      ["tulisHeelCups", { en: "Heel pain, in any shoe", ru: "Боль в пятке, в любой обуви", uk: "Біль у п'яті, у будь-якому взутті", uz: "Tovon og'rig'i, har qanday poyabzalda" }],
      ["braceabilityNightSplint", { en: "Morning heel pain", ru: "Утренняя боль в пятке", uk: "Ранковий біль у п'яті", uz: "Ertalabki tovon og'rig'i" }]
    ],
    all: ["/best-shoes-for-plantar-fasciitis-and-flat-feet/", "Best Shoes for Plantar Fasciitis and Flat Feet"]
  },
  "how-to-tell-if-you-have-flat-feet": {
    h2: { en: "If the test says flat: where to start", ru: "Если тест показал плоскостопие: с чего начать", uk: "Якщо тест показав плоскостопість: з чого почати", uz: "Agar test yassi tovonni ko'rsatsa: nimadan boshlash kerak" },
    ids: [
      ["brooksAdrenaline", { en: "Supportive everyday shoe", ru: "Поддерживающая обувь на каждый день", uk: "Підтримуюче взуття на щодень", uz: "Har kungi tayanchli poyabzal" }],
      ["superfeetGreen", { en: "Arch support for shoes you own", ru: "Поддержка свода для вашей обуви", uk: "Підтримка склепіння для вашого взуття", uz: "O'z poyabzalingiz uchun gumbaz tayanchi" }],
      ["newBalance990", { en: "Wide, stable lifestyle shoe", ru: "Широкая устойчивая повседневная модель", uk: "Широка стійка повсякденна модель", uz: "Keng, barqaror kundalik poyabzal" }]
    ],
    all: ["/best-shoes-for-flat-feet/", "Best Shoes for Flat Feet"]
  },
  "minimalist-barefoot-shoes-flat-feet": {
    h2: { en: "Supportive basics while you transition" },
    ids: [["brooksAdrenaline", { en: "Supportive daily shoe" }], ["strongtekSlantBoard", { en: "Calf strength &amp; stretch" }], ["mindBodhiToeSpacers", { en: "Toe splay work" }]],
    all: ["/best-foot-care-tools-for-flat-feet/", "Best Foot-Care Tools for Flat Feet"]
  },
  "shoe-lifespan-and-rotation": {
    h2: { en: "Easy pairs to rotate", uk: "Пари, які легко чергувати" },
    ids: [
      ["brooksAdrenaline", { en: "Stability for active days", uk: "Стабільність для активних днів" }],
      ["hokaBondi", { en: "Cushion for hard floors", uk: "Амортизація для твердої підлоги" }],
      ["newBalance990", { en: "Stable casual pair", uk: "Стійка повсякденна пара" }]
    ],
    all: ["/best-shoes-for-flat-feet/", "Best Shoes for Flat Feet"]
  },
  "stability-vs-neutral-vs-motion-control": {
    h2: { en: "One example of each", ru: "По одному примеру каждого типа", uk: "По одному прикладу кожного типу", uz: "Har bir turdan bittadan misol" },
    ids: [
      ["brooksAdrenaline", { en: "Stability", ru: "Стабилизирующая", uk: "Стабілізуюча", uz: "Stabillik" }],
      ["asicsGelKayano", { en: "Firmer stability", ru: "Жёсткая стабилизация", uk: "Жорсткіша стабілізація", uz: "Kuchliroq stabillik" }],
      ["hokaBondi", { en: "Neutral, max cushion", ru: "Нейтральная, максимальная амортизация", uk: "Нейтральна, максимальна амортизація", uz: "Neytral, maksimal amortizatsiya" }]
    ],
    all: ["/best-shoes-for-overpronation/", "Best Shoes for Overpronation"]
  }
};

function guide(slug, cfg, lang) {
  const file = `${lang === "en" ? "" : `${lang}/`}guides/${slug}/index.html`;
  if (!exists(file)) return false;
  if (!cfg.h2[lang]) throw new Error(`${file}: no ${lang} text in GUIDES`);
  const picks = cfg.ids.map(([id, label]) => ({ ...product(id, lang), label: label[lang] }));
  // The matching roundup in this language, else this language's flagship.
  const allUrl = localUrl(lang, cfg.all[0]) || localUrl(lang, "/best-shoes-for-flat-feet/");
  const allText = lang === "en" ? `See every pick in ${cfg.all[1]} &rarr;` : UI[lang].seeAll;
  const body = `        <aside class="shop-box" aria-labelledby="shop-heading">
          <h2 id="shop-heading">${cfg.h2[lang]}</h2>
          <p class="shop-note">${UI[lang].note}</p>
          ${pickList(picks)}
          <p class="shop-more"><a href="${allUrl}">${allText}</a></p>
        </aside>`;
  const html = upsert(read(file), "guide", body, (h, b) => h.replace(/(\n\s*<h2 id="faq">)/, `\n${b}\n$1`));
  fs.writeFileSync(path.join(ROOT, file), html);
  return true;
}

// ---------- Homepages ----------
function home(lang) {
  const file = lang === "en" ? "index.html" : `${lang}/index.html`;
  const t = UI[lang].home;
  const picks = ["brooksAdrenaline", "asicsGelKayano", "newBalance990"].map((id, i) => ({ ...product(id, lang), label: `#${i + 1} &middot; ${t.labels[i]}` }));
  const body = `  <section class="section section-tight">
    <div class="container">
      <p class="eyebrow">${t.eyebrow}</p>
      <h2>${t.h2}</h2>
      <p class="shop-note">${UI[lang].note}</p>
      ${pickList(picks, { ranked: true })}
      <p class="shop-more"><a href="${localUrl(lang, "/best-shoes-for-flat-feet/")}">${t.more}</a></p>
    </div>
  </section>`;
  const html = upsert(read(file), "home", body, (h, b) => h.replace(/(<section class="hero">[\s\S]*?<\/section>\n)/, `$1\n${b}\n`));
  fs.writeFileSync(path.join(ROOT, file), html);
}

const generated = new Set(PAGES.map((p) => p.slug));
for (const lang of LANGS) {
  const base = lang === "en" ? "" : `${lang}/`;
  const roundups = fs
    .readdirSync(path.join(ROOT, base || "."))
    .filter((d) => d.startsWith("best-") && !generated.has(d) && exists(`${base}${d}/index.html`))
    .map((d) => `${d.replace(/^best-/, "")}:${roundup(`${base}${d}/index.html`, lang)}`);
  const guides = Object.entries(GUIDES).filter(([slug, cfg]) => guide(slug, cfg, lang)).length;
  home(lang);
  console.log(`${lang}: ${roundups.length} roundups (${roundups.join(" ")}), ${guides} guides, homepage`);
}
