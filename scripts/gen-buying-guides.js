#!/usr/bin/env node
/*
 * Generates the product-roundup ("best X for flat feet") pages defined in
 * scripts/buying-guides-data.js, then run `node scripts/build.js` (the
 * pre-commit hook does it for you) to stamp in the shared head/header/footer.
 *
 *   node scripts/gen-buying-guides.js            generate every page in the data file
 *   node scripts/gen-buying-guides.js <slug>     generate just one
 *
 * Product cards deliberately show no Amazon product photos or Amazon star
 * ratings/prices: the Associates agreement only allows those via SiteStripe
 * or the Product Advertising API, and prices/ratings go stale. A brand tile
 * links to the listing instead.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { PAGES, PRODUCTS, TAG } = require("./buying-guides-data");

const ROOT = path.resolve(__dirname, "..");
const SITE = "https://flatfeetshoeguide.com";

function amazonUrl(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}&amp;linkCode=ll1&amp;language=en_US`;
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").replace(/&mdash;/g, "—").replace(/&ndash;/g, "–").replace(/&amp;/g, "&").replace(/&rsquo;/g, "'").replace(/&nbsp;/g, " ");
}

function jsonld(obj) {
  return `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`;
}

const NEW_TAB = '<span class="visually-hidden"> (opens in a new tab)</span>';

function productCard(pick, rank) {
  const p = PRODUCTS[pick.id];
  if (!p) throw new Error(`Unknown product id "${pick.id}"`);
  const url = amazonUrl(p.asin);
  return `<div class="product-card" id="${pick.id}">
        <div class="product-card-header">
          <a class="product-photo product-monogram" href="${url}" rel="sponsored nofollow noopener" target="_blank">
            <span class="mono-brand">${p.brand}</span>
            <span class="mono-kind">${p.kind}</span>${NEW_TAB}
          </a>
          <div>
            <h3><span class="rank-badge">${rank}</span>${p.name}</h3>
            <p><span class="best-for">${pick.bestFor}</span></p>
            <dl class="spec-list">
${p.specs.map(([k, v]) => `              <dt>${k}</dt><dd>${v}</dd>`).join("\n")}
            </dl>
          </div>
        </div>
        <p>${pick.blurb}</p>
        <div class="pros-cons">
          <div class="pros">
            <h4>Why it suits flat feet</h4>
            <ul>
${pick.pros.map((x) => `              <li>${x}</li>`).join("\n")}
            </ul>
          </div>
          <div class="cons">
            <h4>Drawbacks</h4>
            <ul>
${pick.cons.map((x) => `              <li>${x}</li>`).join("\n")}
            </ul>
          </div>
        </div>
        <div class="who-grid">
          <div>
            <h3>Who should buy it</h3>
            <p>${pick.buyFor}</p>
          </div>
          <div>
            <h3>Who should skip it</h3>
            <p>${pick.avoidFor}</p>
          </div>
        </div>
        <div class="affiliate-cta">
          <a class="btn btn-primary" href="${url}" rel="sponsored nofollow noopener" target="_blank">Check Price on Amazon${NEW_TAB}</a>
          <span class="price-note">Price and available sizes vary &mdash; check current options on Amazon.</span>
        </div>
      </div>`;
}

function quickPicks(page) {
  const rows = page.picks
    .map((pick, i) => {
      const p = PRODUCTS[pick.id];
      return `            <tr>
              <td><a href="#${pick.id}">${i + 1}. ${p.name}</a></td>
              <td>${pick.bestFor}</td>
              <td><a href="${amazonUrl(p.asin)}" rel="sponsored nofollow noopener" target="_blank">See on Amazon${NEW_TAB}</a></td>
            </tr>`;
    })
    .join("\n");
  return `<div class="table-wrap quick-picks">
        <table class="compare">
          <caption class="visually-hidden">Quick picks summary</caption>
          <thead>
            <tr><th scope="col">Pick</th><th scope="col">Best for</th><th scope="col">Shop</th></tr>
          </thead>
          <tbody>
${rows}
          </tbody>
        </table>
      </div>`;
}

const METHOD = `<div class="callout">
          <strong>How these picks were chosen</strong>
          These are research-based picks, not a claim that I've worn every pair on this page. I compared manufacturer specifications against the features that matter most for flat feet &mdash; heel-counter firmness, midsole stability, a removable insole for orthotics, and wide-size availability &mdash; and read through patterns in verified buyer feedback. See <a href="/about/">how I evaluate shoes</a> and the <a href="/medical-disclaimer/">medical disclaimer</a>.
        </div>`;

const AUTHOR_BOX = `<section class="section section-alt" style="padding-block:2.5rem;">
    <div class="container">
      <div class="author-box">
        <div class="author-avatar">
          <img src="/assets/images/logo-icon.svg" alt="" width="56" height="56" loading="lazy">
        </div>
        <div>
          <h3>Written by Arshak Nersisyan</h3>
          <p>I'm 32, based in Yerevan, Armenia, and I have grade 2 flat feet myself. Roundups like this one combine that first-hand perspective with manufacturer specifications and verified buyer feedback, not clinical training. Read more <a href="/about/">about my approach</a>, or see my <a href="/medical-disclaimer/">medical disclaimer</a>.</p>
        </div>
      </div>
    </div>
  </section>`;

function renderPage(page) {
  const url = `${SITE}/${page.slug}/`;
  const breadcrumb = [
    { name: "Home", path: "" },
    { name: "Best Shoes for Flat Feet", path: "best-shoes-for-flat-feet/" },
    { name: page.breadcrumbName, path: `${page.slug}/` }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((b, i) => ({ "@type": "ListItem", position: i + 1, name: b.name, item: `${SITE}/${b.path}` }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: stripTags(page.h1),
      description: page.metaDescription,
      author: { "@type": "Person", name: "Arshak Nersisyan", url: `${SITE}/about/` },
      publisher: { "@type": "Organization", name: "Flat Feet Shoe Guide", logo: { "@type": "ImageObject", url: `${SITE}/assets/images/apple-touch-icon.png` } },
      mainEntityOfPage: url,
      image: `${SITE}/assets/images/og-default.png`,
      datePublished: page.date,
      dateModified: page.date
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({ "@type": "Question", name: stripTags(f.q), acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) } }))
    }
  ];

  const toc = [{ id: "picks", label: "Quick picks" }, ...page.sections.map((s) => ({ id: s.id, label: s.toc || stripTags(s.h2) })), { id: "faq", label: "FAQ" }];
  const related = page.related
    .map((r) => `        <a class="category-card" href="${r.href}">
          <span class="tag">${r.tag}</span>
          <h3>${r.title}</h3>
          <p class="muted">${r.text}</p>
        </a>`)
    .join("\n");

  const monthYear = new Date(page.date + "T00:00:00Z").toLocaleString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/assets/css/style.css">
<title>${page.title}</title>
<meta name="description" content="${page.metaDescription}">
<link rel="canonical" href="${url}">

<!-- Open Graph -->
<meta property="og:type" content="article">
<meta property="og:site_name" content="Flat Feet Shoe Guide">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.metaDescription}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/images/og-default.png">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.metaDescription}">
<meta name="twitter:image" content="${SITE}/assets/images/og-default.png">

<!-- layout:head -->
<!-- /layout:head -->
${schema.map(jsonld).join("\n")}
</head>
<body>
<!-- layout:header -->
<!-- /layout:header -->

<main id="main">
  <nav class="breadcrumbs container" aria-label="Breadcrumb">
    <ol>
${breadcrumb.map((b, i) => (i === breadcrumb.length - 1 ? `      <li aria-current="page">${b.name}</li>` : `      <li><a href="/${b.path}">${b.name}</a></li>`)).join("\n")}
    </ol>
  </nav>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="article-body">
        <p class="eyebrow">Updated ${monthYear}</p>
        <h1>${page.h1}</h1>
        <p class="lede">${page.lede}</p>

        <div class="disclosure-banner">This page contains Amazon affiliate links. If you buy through them, I may earn a commission at no extra cost to you. See the <a href="/affiliate-disclosure/">affiliate disclosure</a>.</div>

        <div class="toc">
          <h2>On this page</h2>
          <ol>
${toc.map((t) => `            <li><a href="#${t.id}">${t.label}</a></li>`).join("\n")}
          </ol>
        </div>

        <h2 id="picks">Quick picks</h2>
        <p>${page.picksIntro}</p>
      </div>

      ${quickPicks(page)}

      <div class="article-body">
        ${METHOD}
      </div>

      ${page.picks.map((pick, i) => productCard(pick, i + 1)).join("\n\n      ")}

      <div class="article-body">
${page.sections.map((s) => `        <h2 id="${s.id}">${s.h2}</h2>\n${s.html}`).join("\n\n")}

        <h2 id="faq">Frequently asked questions</h2>
${page.faq.map((f) => `        <details class="faq-item">
          <summary>${f.q}</summary>
          <p class="faq-answer">${f.a}</p>
        </details>`).join("\n")}
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Keep reading</p>
        <h2>Related guides</h2>
      </div>
      <div class="grid grid-3">
${related}
      </div>
    </div>
  </section>

  ${AUTHOR_BOX}
</main>

<!-- layout:footer -->
<!-- /layout:footer -->
</body>
</html>
`;

  const out = path.join(ROOT, page.slug, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log("wrote /" + page.slug + "/");
}

const only = process.argv[2];
for (const page of PAGES) if (!only || page.slug === only) renderPage(page);
