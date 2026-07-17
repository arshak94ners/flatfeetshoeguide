# Flat Feet Shoe Guide

A fully static, no-build affiliate content site for flatfeetshoeguide.com. Plain HTML5, modern CSS, and a few lines of vanilla JS — no framework, no bundler, no backend.

## Folder structure

Every page lives at `slug/index.html` so it's served at a clean, extensionless URL (`/about/`, not `/about.html`). This works on any static host with zero configuration — it's plain directory-index serving, the same mechanism that already makes `/guides/` and `/shoe-reviews/` work.

```
/
├── index.html                                     Homepage (served at /)
├── about/index.html                                /about/
├── contact/index.html                              /contact/
├── privacy-policy/index.html                       /privacy-policy/
├── affiliate-disclosure/index.html                 /affiliate-disclosure/
├── medical-disclaimer/index.html                   /medical-disclaimer/
├── best-shoes-for-flat-feet/index.html             Flagship roundup (pillar page)
├── best-running-shoes-flat-feet/index.html         Category pillar page
├── best-walking-shoes-flat-feet/index.html         Category pillar page
├── best-work-shoes-flat-feet/index.html            Category pillar page
├── best-gym-shoes-flat-feet/index.html             Category pillar page
├── best-sandals-for-flat-feet/index.html           Category pillar page
├── best-insoles-for-flat-feet/index.html           Category pillar page
├── shoe-size-conversion-chart/index.html           EU/US/UK/CM chart + calculator
├── shoe-reviews/
│   ├── index.html                                  /shoe-reviews/
│   └── example-shoe-review/index.html              Single-product deep-dive review
├── comparisons/
│   ├── index.html                                  /comparisons/
│   └── example-comparison/index.html               Head-to-head comparison + table
├── guides/
│   ├── index.html                                  /guides/
│   ├── example-buying-guide/index.html              Educational buying guide
│   ├── flat-feet-vs-plantar-fasciitis-vs-overpronation/index.html
│   └── shoe-and-foot-glossary/index.html
├── sitemap/index.html                              Human-readable page listing every URL
├── assets/
│   ├── css/style.css                               Entire design system (one file, no build step)
│   ├── js/main.js                                  Mobile nav toggle + back-to-top button
│   ├── js/size-calculator.js                       Vanilla-JS size converter
│   └── images/                                     Logo, favicon, OG image, diagrams, placeholders
├── 404.html                                        Stays at root — Cloudflare Pages looks for it here
├── _headers                                        Security headers, CSP, and caching rules
├── _redirects                                      www→apex + legacy .html→clean-URL redirects
├── site.webmanifest
├── robots.txt
└── sitemap.xml                                     Machine-readable, with <lastmod> on every entry
```

All internal links use root-relative paths (e.g. `/about/`, `/assets/css/style.css`), so the site works identically no matter how deep a page lives in the folder tree.

**Trailing slash is canonical.** `/about/` is the real URL; a request to `/about` (no slash) gets redirected to it automatically by the static host — this is standard directory-index behavior, not something this site configures. Every canonical tag, OG url, JSON-LD reference, and sitemap entry already uses the trailing-slash form.

## Running locally

Any static file server works. From the project root:

```bash
npx serve .
# or
python -m http.server 8080
```

Then open the printed local URL. No install/build step is required — you're serving the files as-is.

## Deploying to Cloudflare Pages

1. Push this folder to a Git repository (GitHub/GitLab), or use Cloudflare Pages' direct upload option if you don't want to use Git.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** (or **Upload assets** for direct upload).
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (the repo root)
4. Deploy. Cloudflare Pages serves static files directly, including the clean-URL directory structure, with no server-side config needed.
5. Add your custom domain (`flatfeetshoeguide.com`) under the Pages project's **Custom domains** tab and follow the DNS instructions (Cloudflare will handle this automatically if the domain's nameservers are already on Cloudflare).
6. `404.html` at the root is picked up automatically by Cloudflare Pages as the not-found page — don't move it into a folder.

`_headers` and `_redirects` are already included at the root and need no setup — Cloudflare Pages reads both automatically on deploy:

- **`_headers`** sets a Content-Security-Policy, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy` on every response, plus a one-year immutable cache for everything under `/assets/`. This was verified locally against a header-injecting test server driving every page in a real browser (nav toggle, FAQ accordion, the size calculator, external stylesheet) with zero CSP violations before shipping. If you later add third-party analytics or embeds, you'll likely need to extend `connect-src`/`script-src`/`frame-src` in the CSP to allow them — check the browser console for "Refused to..." errors after adding anything new and adjust `_headers` accordingly.
- **`_redirects`** canonicalizes `www.flatfeetshoeguide.com` → `flatfeetshoeguide.com` (only takes effect once `www` is added as a second custom domain on the Pages project) and defensively 301s every old `.html` URL to its clean equivalent, in case a pre-launch `.html` link was ever shared or bookmarked.

## Before you launch: required customization

The site is fully built and functional, but a few things are placeholders that **must** be replaced before this goes live:

| Item | Where | What to do |
|---|---|---|
| Amazon Associate tag | Every `Check Price on Amazon` link | Done — all 20 links use the real approved tag `flatfeetshoeg-20`. |
| Analytics | `assets/js/analytics.js` + gtag loader in every `<head>` | Done — GA4 (`G-TYN4PKDMQK`), verified live sending real hits with zero CSP violations. |
| Google Search Console | External | Done — domain verified via DNS TXT record (no code changes needed for that method). |
| Domain + hosting | Cloudflare Pages | Done — live at `flatfeetshoeguide.com`, deployed from [github.com/arshak94ners/flatfeetshoeguide](https://github.com/arshak94ners/flatfeetshoeguide), auto-deploys on every push to `main`. |
| Product photos | `assets/images/product-placeholder.svg` references in review/comparison/pillar pages | Still placeholders. Replace with real product photography or licensed images (with descriptive alt text) once available — highest-value remaining item. |
| Legal pages | [privacy-policy/index.html](privacy-policy/index.html), [affiliate-disclosure/index.html](affiliate-disclosure/index.html), [medical-disclaimer/index.html](medical-disclaimer/index.html) | Content is complete and accurate to how the site actually works, but still worth a quick pass against your local jurisdiction's requirements. |
| `og-default.png` | `assets/images/` | A branded placeholder is included (1200×630). Swap for your own design if you want something more custom. |

Contact is intentionally simple: the [contact page](contact/index.html) is a direct `mailto:` link to `arshak94nersisyan@gmail.com` — no form, no third-party form-processing service, no extra account to manage. If you'd rather not expose that inbox directly to spam crawlers later, consider a forwarding alias, but nothing needs to change in the code to launch.

## Medical / trust positioning

This site is written by one person sharing personal experience (grade 2 flat feet), not a medical professional. That's stated explicitly and repeatedly — in the footer of every page (**Medical Disclaimer** link), on the [about page](about/index.html), the [contact page](contact/index.html), and inline callouts on the insoles guide and the flat-feet/plantar-fasciitis/overpronation guide. Don't soften or remove this language; it's both honest and legally sensible for a site that talks about foot health, even informally.

## SEO implementation notes

- **Meta tags:** every page has a unique title, meta description, canonical URL, Open Graph tags, and Twitter Card tags.
- **Clean URLs:** no `.html` in any published URL; every page is `slug/index.html` served at `/slug/`, with defensive 301s in `_redirects` from the old `.html` paths.
- **Structured data (JSON-LD):** `Organization` + `WebSite` on the homepage; `Person` (Arshak Nersisyan) as `author` on Article/Review pages; `BreadcrumbList` on every inner page; `Article` on pillar/guide/comparison pages; `Review` (single-author rating, not a fabricated `AggregateRating`) on the product review page; `FAQPage` wherever an FAQ accordion appears; `DefinedTermSet` on the glossary. Test any page in [Google's Rich Results Test](https://search.google.com/test/rich-results) before launch. Deliberately **not** used: `Product`/`Offer` schema on affiliate roundup pages — this site doesn't sell or control real-time price/availability for these products, and Google's merchant-listing structured data guidelines expect that data to be accurate and current, so adding it here would be exactly the kind of unsupported claim the project brief asked to avoid.
- **robots.txt / sitemap.xml:** both present at the root, using clean URLs, each entry stamped with `<lastmod>`, and cross-linked. A human-readable [/sitemap/](sitemap/index.html) page also exists for visitors and as an extra internal-link path for crawlers to discover everything from one place.
- **Internal linking:** every long-form page (pillar guides, reviews, comparisons, educational guides) ends with a consistent "Written by Arshak Nersisyan" author-bio block linking to `/about/` and `/medical-disclaimer/` — real E-E-A-T signal, not just a homepage mention.
- **Accessibility:** skip link, semantic landmarks, visible focus states, `aria-current` on active nav items, `aria-label`s on nav/breadcrumbs, alt text on all images, native `<details>/<summary>` for FAQs (fully keyboard- and screen-reader-accessible with zero JS), and a visually-hidden "(opens in a new tab)" cue on every `target="_blank"` affiliate button so screen reader users get the same warning sighted users get from convention alone.
- **Performance:** no external fonts (system font stack — zero font requests), no CSS/JS frameworks, one small CSS file, minimal JS (mobile nav toggle, back-to-top button, and the size calculator, each scoped to the pages that need them), SVG icons/diagrams instead of raster images where possible, `loading="lazy"` on below-the-fold images and `fetchpriority="high"` on the hero/LCP image, and a one-year immutable cache on `/assets/*` via `_headers` so repeat visits reload almost nothing.
- **Icons:** SVG favicon (scales cleanly, tiny), plus a generated 180×180 `apple-touch-icon.png` for iOS home-screen bookmarks, and `theme-color` meta tags matched to light/dark mode.
- **Security headers (Lighthouse "Best Practices"):** CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and a locked-down `Permissions-Policy`, all in `_headers` — see the deployment section above for how this was verified.

## Adding new content

Every page follows the same pattern: copy the closest existing example folder, rename the slug, then edit the `<title>`, meta description, canonical URL, JSON-LD blocks, breadcrumb, and body content — and update every internal link you copied to point at the *new* slug, not the one you copied from.

- **New review:** copy `shoe-reviews/example-shoe-review/` to `shoe-reviews/your-slug/`, add a card to `shoe-reviews/index.html`, and add a `<url>` entry (with `<lastmod>`) to `sitemap.xml`.
- **New comparison:** copy `comparisons/example-comparison/`, same pattern.
- **New guide:** copy one of the `guides/*/` folders, same pattern.
- **New pillar/category page:** copy one of the `best-*-flat-feet/` folders.

Whichever type you add, also link it from `sitemap/index.html` (the human-readable one) so it isn't an orphan page, and remember the `sitemap.xml` entry — it's easy to skip since nothing breaks visibly if you forget it, it just means slower discovery by search engines.

### A note on scaling past ~30-50 pages

This project intentionally has no build step, per the project requirements — every page is hand-authored HTML with a duplicated header/footer. That's the right tradeoff at this size. If you grow past roughly 30-50 pages and find yourself editing the header or footer across dozens of files by hand, it's worth introducing a static site generator (e.g. Eleventy/11ty or Astro) purely as a *local build tool* — it still outputs the exact same plain HTML/CSS/JS to deploy on Cloudflare Pages, with no server or database involved, just a templating layer at build time. The clean-URL folder structure this site already uses (`slug/index.html`) is exactly what those generators produce by default, so migrating later is straightforward.

### Future features mentioned in the brief (not built yet, by design)

- **Search:** Cloudflare Pages has no built-in search; consider Pagefind (static, no backend) once there's enough content to search.
- **Newsletter:** wire up a provider's embed/API (e.g. ConvertKit, Buttondown) — still no backend required on your side.
- **Additional affiliate programs:** the `.product-card` / `.affiliate-cta` components are generic and not Amazon-specific, so adding another program's buttons alongside the existing ones is a matter of adding another `<a class="btn ...">` in the same block.

### Pages worth considering next

Built so far covers shoes (5 categories), insoles, sandals, sizing, and 3 educational guides. Natural next additions: a dress/formal shoe category, a kids'-flat-feet guide (different audience, different products), and a plantar-fasciitis-specific insoles/shoes page now that the terminology guide exists to support it.
