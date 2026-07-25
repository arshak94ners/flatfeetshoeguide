// One-off generator for 10 new English content pages (topic-gap fill).
// Reuses the site's existing shell (header/footer/schema conventions) so
// output is indistinguishable from hand-authored pages.
const fs = require("fs");
const path = require("path");

const HREFLANG = (relPath) => `<link rel="alternate" hreflang="en" href="https://flatfeetshoeguide.com/${relPath}">
<link rel="alternate" hreflang="x-default" href="https://flatfeetshoeguide.com/${relPath}">
<link rel="alternate" hreflang="hy" href="https://flatfeetshoeguide.com/hy/${relPath}">
<link rel="alternate" hreflang="kk" href="https://flatfeetshoeguide.com/kk/${relPath}">
<link rel="alternate" hreflang="ru" href="https://flatfeetshoeguide.com/ru/${relPath}">
<link rel="alternate" hreflang="uk" href="https://flatfeetshoeguide.com/uk/${relPath}">
<link rel="alternate" hreflang="uz" href="https://flatfeetshoeguide.com/uz/${relPath}">`;

function navActive(section) {
  const items = [
    ["/", "Home", "home"],
    ["/best-shoes-for-flat-feet/", "Best Shoes", "shoes"],
    ["/shoe-finder/", "Shoe Finder", "finder"],
    ["/shoe-reviews/", "Reviews", "reviews"],
    ["/comparisons/", "Comparisons", "comparisons"],
    ["/guides/", "Guides", "guides"],
    ["/about/", "About", "about"],
  ];
  return items
    .map(([href, label, key]) => `<li><a href="${href}"${key === section ? ' aria-current="page"' : ""}>${label}</a></li>`)
    .join("\n        ");
}

function header(section) {
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="/">
      <img src="/assets/images/logo-icon.svg" alt="" width="32" height="32">
      <span>Flat Feet Shoe Guide<span class="brand-sub">Real-world guidance, not guesswork</span></span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">
      <span class="bar"></span>
      <span class="visually-hidden">Menu</span>
    </button>
    <nav class="main-nav" id="main-nav" aria-label="Primary">
      <ul>
        ${navActive(section)}
        <li class="lang-switcher-item">
          <button type="button" class="lang-switcher-toggle" id="lang-switcher-btn" aria-expanded="false" aria-haspopup="true" aria-controls="lang-switcher-menu">
            <span class="lang-switcher-current">EN</span>
            <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <ul class="lang-switcher-menu" id="lang-switcher-menu" hidden>
            <li><a href="#" data-lang="en">English</a></li>
            <li><a href="#" data-lang="hy">Հայերեն</a></li>
            <li><a href="#" data-lang="kk">Қазақша</a></li>
            <li><a href="#" data-lang="ru">Русский</a></li>
            <li><a href="#" data-lang="uk">Українська</a></li>
            <li><a href="#" data-lang="uz">Oʻzbekcha</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</header>`;
}

const FOOTER = `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h2>Flat Feet Shoe Guide</h2>
        <p>Independent, first-hand reviews and buying guides for people with flat feet and low arches. We test the claims so you don't have to guess.</p>
      </div>
      <div>
        <h2>Explore</h2>
        <ul>
          <li><a href="/shoe-finder/">Shoe Finder Quiz</a></li>
          <li><a href="/foot-pain/">What Hurts? Pain Guide</a></li>
          <li><a href="/compare/">Compare Tool</a></li>
          <li><a href="/shoe-database/">Shoe Database</a></li>
          <li><a href="/best-shoes-for-flat-feet/">Best Shoes for Flat Feet</a></li>
          <li><a href="/best-running-shoes-flat-feet/">Running Shoes</a></li>
          <li><a href="/best-walking-shoes-flat-feet/">Walking Shoes</a></li>
          <li><a href="/best-work-shoes-flat-feet/">Work Shoes</a></li>
          <li><a href="/best-gym-shoes-flat-feet/">Gym Shoes</a></li>
          <li><a href="/best-sandals-for-flat-feet/">Sandals</a></li>
          <li><a href="/best-insoles-for-flat-feet/">Insoles</a></li>
          <li><a href="/shoe-size-conversion-chart/">Shoe Size Chart</a></li>
        </ul>
      </div>
      <div>
        <h2>Company</h2>
        <ul>
          <li><a href="/about/">About Us</a></li>
          <li><a href="/contact/">Contact</a></li>
          <li><a href="/affiliate-disclosure/">Affiliate Disclosure</a></li>
          <li><a href="/medical-disclaimer/">Medical Disclaimer</a></li>
          <li><a href="/privacy-policy/">Privacy Policy</a></li>
          <li><a href="/sitemap/">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Flat Feet Shoe Guide. All rights reserved.</p>
      <p>As an Amazon Associate, we earn from qualifying purchases.</p>
    </div>
  </div>
</footer>
<a href="#main" class="back-to-top" aria-label="Back to top">↑</a>
<script src="/assets/js/main.js?v=20260718d" defer></script>
<script src="/assets/js/lang-switcher.js?v=20260718d" defer></script>
</body>
</html>
`;

const AUTHOR_BOX = `<section class="section section-alt" style="padding-block:2.5rem;">
    <div class="container">
      <div class="author-box">
        <div class="author-avatar">
          <img src="/assets/images/logo-icon.svg" alt="" width="56" height="56">
        </div>
        <div>
          <h3>Written by Arshak Nersisyan</h3>
          <p>I'm 32, based in Yerevan, Armenia, and I have grade 2 flat feet myself. Every review, guide, and comparison on this site is based on my own first-hand experience shopping for and wearing footwear, not clinical training. Read more <a href="/about/">about my approach</a>, or see my <a href="/medical-disclaimer/">medical disclaimer</a>.</p>
        </div>
      </div>
    </div>
  </section>`;

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };
}

function faqHtml(items) {
  return items
    .map(
      (q) => `<details class="faq-item">
          <summary>${q.q}</summary>
          <p class="faq-answer">${q.a}</p>
        </details>`
    )
    .join("\n        ");
}

function productCard({ rank, name, img, link, alt, blurb, pros, cons, buyFor, avoidFor, reviewHref, badge }) {
  return `<div class="product-card">
        <div class="product-card-header">
          <div class="product-photo">
            <a href="${link}" rel="sponsored nofollow noopener" target="_blank"><img src="${img}" alt="${alt}" width="240" height="160" loading="lazy"><span class="visually-hidden"> (opens in a new tab)</span></a>
          </div>
          <div>
            <h3><span class="rank-badge">${rank}</span>${name}</h3>
            <p class="rating">${badge}</p>
          </div>
        </div>
        <p>${blurb}</p>
        <div class="pros-cons">
          <div class="pros">
            <h4>What we liked</h4>
            <ul>
              ${pros.map((p) => `<li>${p}</li>`).join("\n              ")}
            </ul>
          </div>
          <div class="cons">
            <h4>Drawbacks</h4>
            <ul>
              ${cons.map((c) => `<li>${c}</li>`).join("\n              ")}
            </ul>
          </div>
        </div>
        <div class="who-grid">
          <div>
            <h3>Who should buy it</h3>
            <p>${buyFor}</p>
          </div>
          <div>
            <h3>Who should avoid it</h3>
            <p>${avoidFor}</p>
          </div>
        </div>
        <p><a href="${reviewHref}">Read our full ${name} review &rarr;</a></p>
        <div class="affiliate-cta">
          <a class="btn btn-primary" href="${link}" rel="sponsored nofollow noopener" target="_blank">Check Price on Amazon<span class="visually-hidden"> (opens in a new tab)</span></a>
          <span class="price-note">Price varies by size/color &mdash; check current price on Amazon.</span>
        </div>
      </div>`;
}

function renderPage(p) {
  const relPath = p.relPath;
  const breadcrumbItems = p.breadcrumb
    .map((b, i) => `{ "@type": "ListItem", "position": ${i + 1}, "name": "${b.name}", "item": "https://flatfeetshoeguide.com/${b.path}" }`)
    .join(",\n    ");
  const breadcrumbHtml = p.breadcrumb
    .map((b, i) => (i === p.breadcrumb.length - 1 ? `<li>${b.name}</li>` : `<li><a href="/${b.path}">${b.name}</a></li>`))
    .join("\n      ");

  const jsonldBreadcrumb = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    ${breadcrumbItems}
  ]
}
</script>`;

  const jsonldArticle = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${p.title}",
  "description": "${p.metaDescription}",
  "author": { "@type": "Person", "name": "Arshak Nersisyan", "url": "https://flatfeetshoeguide.com/about/" },
  "publisher": { "@type": "Organization", "name": "Flat Feet Shoe Guide", "logo": { "@type": "ImageObject", "url": "https://flatfeetshoeguide.com/assets/images/favicon.svg" } },
  "mainEntityOfPage": "https://flatfeetshoeguide.com/${relPath}",
  "datePublished": "2026-07-25",
  "dateModified": "2026-07-25"
}
</script>`;

  const jsonldFaq = `<script type="application/ld+json">
${JSON.stringify(faqSchema(p.faq), null, 2)}
</script>`;

  const tocHtml = p.toc
    ? `<div class="toc">
          <h2>On this page</h2>
          <ol>
            ${p.toc.map((t) => `<li><a href="#${t.id}">${t.label}</a></li>`).join("\n            ")}
          </ol>
        </div>`
    : "";

  const disclosureHtml = p.hasProducts
    ? `<div class="disclosure-banner">This post contains Amazon affiliate links. We may earn a commission on qualifying purchases at no extra cost to you. See our <a href="/affiliate-disclosure/">affiliate disclosure</a>.</div>`
    : "";

  const picksHtml = p.picks
    ? `<h2 id="picks" class="article-body">${p.picksHeading}</h2>\n\n      ${p.picks.map(productCard).join("\n\n      ")}\n`
    : "";

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/assets/css/style.css?v=20260718d">
<title>${p.title}</title>
<meta name="description" content="${p.metaDescription}">
<link rel="canonical" href="https://flatfeetshoeguide.com/${relPath}">
${HREFLANG(relPath)}

<meta property="og:type" content="article">
<meta property="og:site_name" content="Flat Feet Shoe Guide">
<meta property="og:title" content="${p.title}">
<meta property="og:description" content="${p.ogDescription}">
<meta property="og:url" content="https://flatfeetshoeguide.com/${relPath}">
<meta property="og:image" content="https://flatfeetshoeguide.com/assets/images/og-default.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p.title}">
<meta name="twitter:description" content="${p.ogDescription}">

<link rel="icon" href="/assets/images/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
<meta name="theme-color" content="#0d6e6e" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#12181a" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="/site.webmanifest">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TYN4PKDMQK"></script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1962254015859489"
     crossorigin="anonymous"></script>
<script src="/assets/js/analytics.js" defer></script>
${jsonldBreadcrumb}
${jsonldArticle}
${jsonldFaq}
</head>
<body>
${header(p.navSection)}
<main id="main">
  <nav class="breadcrumbs container" aria-label="Breadcrumb">
    <ol>
      ${breadcrumbHtml}
    </ol>
  </nav>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="article-body">
        <p class="eyebrow">${p.eyebrow}</p>
        <h1>${p.h1}</h1>
        <p class="lede">${p.lede}</p>

        ${disclosureHtml}

        ${tocHtml}
      </div>

      ${picksHtml}
      <div class="article-body">
        ${p.bodyHtml}

        <h2 id="faq">Frequently asked questions</h2>
      </div>
      <div class="article-body">
        ${faqHtml(p.faq)}
      </div>
    </div>
  </section>

  ${AUTHOR_BOX}
</main>
${FOOTER}`;

  const outPath = path.join(process.cwd(), relPath, "index.html");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
  console.log("wrote", relPath);
}

module.exports = { renderPage };
