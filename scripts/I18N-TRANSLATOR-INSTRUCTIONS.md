# Translation task: flatfeetshoeguide.com → one target language

You are producing a complete, natural, high-quality translation of every page on
flatfeetshoeguide.com into ONE target language (you will be told which). This is a real
affiliate content site about shoes for people with flat feet. Translate like a skilled
native-speaking copywriter localizing the site for that market — natural phrasing and
idiom, not literal word-for-word translation. Keep the same tone: direct, practical,
no fluff, no invented claims.

Site root: `C:\Users\Lenovo\Desktop\flatfeetshoeguide-live`
Manifest of all pages + precomputed hreflang blocks: `scripts\i18n-manifest.json`
(48 pages, each with `sourceFile`, `relPath`, and `hreflangBlock`)

## What NOT to translate (leave exactly as-is)

- The site name **"Flat Feet Shoe Guide"** — keep in English/Latin script everywhere, including in the `<title>`, headings, JSON-LD, footer, nav brand.
- All **product/brand names**: Brooks Adrenaline GTS, ASICS Gel-Kayano, Saucony Guide, New Balance 928, New Balance 990 (Series), Hoka Bondi, Skechers (Work Relaxed Fit), Timberland PRO (Composite Toe), Nike Metcon, ASICS Gel-Quantum, Birkenstock Arizona, OOFOS OOahh, Superfeet GREEN, Powerstep Pinnacle, Sof Sole (Plantar Fasciitis Insoles). Also brand-only mentions: Brooks, ASICS, Saucony, New Balance, Hoka, Skechers, Timberland PRO, Nike, Birkenstock, OOFOS, Superfeet, Powerstep, Sof Sole.
- The author's name **"Arshak Nersisyan"** and city **"Yerevan, Armenia"** (you may write the city/country in your target script if that's the natural local convention for place names, but do not alter meaning).
- All URLs, hrefs, file paths, CSS classes, `id`/`data-*` attribute values, script `src` paths.
- All Amazon affiliate links (`href="https://www.amazon.com/..."`) — copy byte-for-byte, never touch the query string or `tag=`.
- JSON-LD `@context`, `@type` keys and any schema.org URLs.
- Numbers, scores, percentages, dates, prices, mileage figures.
- Any inline `<script>` blocks and their contents (analytics, JSON-LD structural keys — but DO translate JSON-LD **text values** like `"name"`, `"description"`, question/answer text — see below).
- The language-switcher `<li class="lang-switcher-item">...</li>` block — copy it byte-for-byte from the English source into every translated page, unchanged. It already contains the correct native names for every language and is populated by JS at runtime.

## What TO translate

Everything else that's human-readable: page `<title>`, meta description, `og:title`/`og:description`/`twitter:title`/`twitter:description`, all visible headings/paragraphs/list items/table cells/captions, nav link labels (Home, Best Shoes, Shoe Finder, Reviews, Comparisons, Guides, About, Database, Compare, Contact...), footer link labels, breadcrumb labels, button/CTA text ("Check Price on Amazon" stays as a link label but should be translated e.g. to the target language's natural equivalent of "Check price on Amazon" — the destination is still Amazon so keep "Amazon" itself untranslated), image `alt` text (translate the descriptive part, keep the product name portion untranslated, e.g. `alt="Hoka Bondi walking shoe"` → translate "walking shoe" only), FAQ questions/answers (both the visible `<details>` markup AND the matching FAQPage JSON-LD `"name"`/`"text"` values — keep them word-for-word identical to each other, just like the English source does), JSON-LD `"description"`, `"headline"`, author bio text, disclosure banner text, score-card labels ("Overall", "Stability", "Cushioning", "Wide-Foot Friendliness"/"Wide-foot friendliness", "Value", "Durability" — translate the label text; leave the numeric score values untouched).

## Per-page mechanical changes

For every page, in addition to text translation:

1. `<html lang="en">` → `<html lang="{code}">` (the 2-letter code you were given).
2. `<link rel="canonical" href="...">` → point at `https://flatfeetshoeguide.com/{code}/{relPath}` (use the exact `relPath` from the manifest; root page has `relPath: ""`).
3. Same for `og:url`.
4. Replace the existing hreflang block (the group of `<link rel="alternate" hreflang="...">` tags right after canonical) with the **exact `hreflangBlock` string from the manifest for that page** — it's identical regardless of which language version you're building, so just paste it verbatim.
5. Every **internal** link (nav, footer, breadcrumbs, in-content cross-links to other pages on this site, e.g. `href="/guides/"`, `href="/shoe-reviews/hoka-bondi-review/"`, `href="/shoe-finder/"`) gets prefixed with `/{code}`, e.g. `href="/{code}/guides/"`. Do **not** prefix: `/assets/...` paths, `/sitemap.xml`, `/ads.txt`, `/site.webmanifest`, `mailto:`, `tel:`, Amazon links, or anything already absolute (`https://...` other than flatfeetshoeguide.com self-links — those DO get the prefix).
6. Script tags for `main.js`, `lang-switcher.js`, `analytics.js`, `products-data.js`, `shoe-finder.js`, `compare.js`, `shoe-database.js`, `lifespan-calculator.js` — keep the same `src` and version query string EXCEPT on the four tool pages (see below), where the tool-specific scripts point at your translated copies instead.
7. Write the output file to `C:\Users\Lenovo\Desktop\flatfeetshoeguide-live\{code}\{relPath}index.html` (for the root page, that's `{code}\index.html`).

## The four interactive tool pages — extra step

`shoe-finder/index.html`, `compare/index.html`, `shoe-database/index.html`, and
`guides/shoe-lifespan-and-rotation/index.html` render most of their content via JS at
runtime, reading text strings out of these files:
`assets/js/products-data.js`, `assets/js/shoe-finder.js`, `assets/js/compare.js`,
`assets/js/shoe-database.js`, `assets/js/lifespan-calculator.js`.

For your language, create translated copies of all five files at:
`C:\Users\Lenovo\Desktop\flatfeetshoeguide-live\assets\js\i18n\{code}\products-data.js`
(and the other four, same directory, same filenames).

Rules for these copies:
- Keep 100% of the code structure, variable/function names, object keys (`stability`, `cushioning`, `wideFoot`, `value`, `durability`, `bestFor`, `supportType`, etc.), and logic identical — you are ONLY translating string literal **values** that are human-facing text.
- In `products-data.js`: translate `categoryLabel`, `bestFor`, `supportType`, `drop`, `widthOptions`, and the descriptive part of `alt` (not the product name part). Do NOT translate `name`, `brand`, `category`, `img`, `href`, `priceTier`, `scores`. Update the `review` field's path to add the `/{code}` prefix (e.g. `"/shoe-reviews/hoka-bondi-review/"` → `"/{code}/shoe-reviews/hoka-bondi-review/"`).
- In `shoe-finder.js`: translate every `question`, `label` (for options), the hardcoded UI strings ("Let's start", "Question X of Y" pattern — keep the JS string-concatenation logic identical, just translate the literal words), button text ("Check Price on Amazon", "Read full review", "&larr; Back", "Retake the quiz", "Best match", "Also worth a look", "Your recommendation"), the `why` explanation strings for every recommendation branch, and the `widthNote` strings, and the fallback error message.
- In `compare.js`: translate `METRIC_LABELS` values, "Choose a product…", "Shoe 1/2/3" + "(optional)", "Choose at least two products above to compare them.", row labels ("Category", "Best for", "Support type", "Drop / stack", "Width options", "Price range", "Overall score"), "Check Price on Amazon", "Read full review".
- In `shoe-database.js`: translate filter labels ("Category", "All categories", "Max price tier", "Any price", "$ only", "$$ and under", "$$$ and under", "Sort by", "Overall score", "Stability", "Cushioning", "Wide-foot friendliness", "Value", "Durability"), table headers ("Product", "Best for", "Width options", "Price", "Score"), "No products match those filters. Try widening your price range or category.", "Showing X of Y products.", "Review" button label.
- In `lifespan-calculator.js`: translate the week/month formatting strings ("week"/"weeks", "month"/"months" — adapt pluralization to your language's own rules, not English's), the two error messages, "Replace now", "Status", "Miles left", "Estimated time left", and the two `calc-note` explanatory paragraphs. Keep `MILES_PER_PAIR` and all numeric logic identical.

Then, in your translated `{code}/shoe-finder/index.html`, `{code}/compare/index.html`,
`{code}/shoe-database/index.html`, and `{code}/guides/shoe-lifespan-and-rotation/index.html`,
change those five script tags' `src` from `/assets/js/products-data.js` etc. to
`/assets/js/i18n/{code}/products-data.js` etc. (keep the same `?v=` version suffix as the
English source). All other pages keep the unmodified shared script paths.

## SVG diagrams (nice-to-have)

Two pages embed inline hand-authored SVGs with `<text>` labels: `foot-pain/index.html`
(overpronation-diagram.svg content, embedded or referenced — check the file) and
`guides/shoe-and-foot-glossary/index.html` (shoe-anatomy-diagram.svg). If these are
`<img>` references to `/assets/images/*.svg`, leave them as-is (translating the SVG file
itself is optional/out of scope — don't block on it). If the SVG markup is inlined
directly in the HTML with visible `<text>` elements, you may translate those labels if
time allows, but this is lower priority than the page copy itself.

## Quality bar

- No leftover English sentences except the explicitly-untranslated items above.
- No machine-translation artifacts — read each paragraph back and make sure it reads
  naturally to a native speaker, not like a literal transliteration.
- Preserve every HTML tag, attribute, and the overall document structure exactly —
  you're translating text content, not rewriting markup.
- Keep every JSON-LD block valid JSON (matching quotes, escaping) after translation.

## When done

Report back: number of pages written, the five JS i18n files written, and flag any
page where you were unsure about a term or made a judgment call.
