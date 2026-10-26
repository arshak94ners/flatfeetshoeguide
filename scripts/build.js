#!/usr/bin/env node
/*
 * Layout build: stamps the shared <head> tags, header, and footer from /layout
 * into every HTML page, and cache-busts local CSS/JS references.
 *
 *   node scripts/build.js           update every page in place
 *   node scripts/build.js --check   exit 1 if any page is out of date (no writes)
 *
 * Each page holds three generated regions, delimited by comment markers:
 *   <!-- layout:head -->   ... <!-- /layout:head -->
 *   <!-- layout:header --> ... <!-- /layout:header -->
 *   <!-- layout:footer --> ... <!-- /layout:footer -->
 * Everything between a pair of markers is overwritten on every run, so edit the
 * templates in /layout instead. Everything outside the markers is left alone.
 *
 * It also keeps three site-wide files in sync with the pages that exist:
 *   - <link rel="alternate" hreflang> tags (only for translations that exist)
 *   - sitemap.xml (every indexable page, <lastmod> from git history)
 *   - the language-fallback block in _redirects (/ru/page/ -> /page/ until translated)
 *
 * The output is still plain static HTML (no client-side includes), so search
 * engines see every menu link and Cloudflare Pages needs no build step: commit
 * the regenerated pages and push as usual.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const LAYOUT = path.join(ROOT, "layout");
const config = require(path.join(LAYOUT, "config.js"));

const CHECK = process.argv.includes("--check");
const QUIET = process.argv.includes("--quiet");
const SKIP_DIRS = new Set([".git", ".githooks", "node_modules", "scripts", "layout", "assets"]);
const NON_DEFAULT_LANGS = config.langs.filter((l) => l !== config.defaultLang);

const templates = {
  head: fs.readFileSync(path.join(LAYOUT, "head.html"), "utf8"),
  header: fs.readFileSync(path.join(LAYOUT, "header.html"), "utf8"),
  footer: fs.readFileSync(path.join(LAYOUT, "footer.html"), "utf8")
};

const warnings = new Set();

// ---------- helpers ----------

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function pageExists(lang, relPath) {
  const prefix = lang === config.defaultLang ? "" : lang + "/";
  return fs.existsSync(path.join(ROOT, prefix + relPath, "index.html"));
}

function urlFor(lang, relPath) {
  return lang === config.defaultLang ? "/" + relPath : "/" + lang + "/" + relPath;
}

/** Translated page if it exists, else the English one, else null (skip link). */
function resolveHref(lang, relPath) {
  if (lang !== config.defaultLang && pageExists(lang, relPath)) return urlFor(lang, relPath);
  if (pageExists(config.defaultLang, relPath)) return urlFor(config.defaultLang, relPath);
  warnings.add(`skipped menu link to missing page /${relPath}`);
  return null;
}

function t(lang, key) {
  const value = (config.strings[lang] && config.strings[lang][key]) || config.strings[config.defaultLang][key];
  if (value === undefined) throw new Error(`Missing string "${key}" in layout/config.js`);
  return value;
}

const assetHashes = {};
function versioned(assetPath) {
  if (!(assetPath in assetHashes)) {
    const file = path.join(ROOT, assetPath);
    assetHashes[assetPath] = fs.existsSync(file)
      ? crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex").slice(0, 8)
      : null;
    if (!assetHashes[assetPath]) warnings.add(`referenced asset not found: ${assetPath}`);
  }
  return assetHashes[assetPath] ? `${assetPath}?v=${assetHashes[assetPath]}` : assetPath;
}

function fill(template, vars) {
  return template
    .replace(/\{\{asset:([^}]+)\}\}/g, (_, p) => versioned(p.trim()))
    .replace(/\{\{(\w+)\}\}/g, (_, key) => {
      if (!(key in vars)) throw new Error(`Unknown placeholder {{${key}}}`);
      return vars[key];
    });
}

// ---------- page context ----------

function pageContext(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  if (rel === "404.html") return { lang: "en", relPath: null, rel };
  let lang = config.defaultLang;
  let rest = rel;
  const first = rel.split("/")[0];
  if (NON_DEFAULT_LANGS.includes(first)) {
    lang = first;
    rest = rel.slice(first.length + 1);
  }
  const relPath = rest.replace(/index\.html$/, ""); // "" for a homepage, "about/" etc.
  return { lang, relPath, rel };
}

function isActive(item, ctx) {
  return ctx.relPath !== null && item.match.some((prefix) => ctx.relPath.startsWith(prefix));
}

function link(lang, ctx, relPath, labelKey, extraClass) {
  const href = resolveHref(lang, relPath);
  if (!href) return null;
  const current = ctx.relPath === relPath ? ' aria-current="page"' : "";
  const cls = extraClass ? ` class="${extraClass}"` : "";
  return `<a${cls} href="${href}"${current}>${escapeHtml(t(lang, labelKey))}</a>`;
}

// ---------- renderers ----------

const CHEVRON = '<svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function renderNav(ctx) {
  const { lang } = ctx;
  const pad = "        ";
  return config.nav
    .map((item) => {
      const active = isActive(item, ctx);
      if (!item.groups) {
        const a = link(lang, ctx, item.href, item.label);
        if (!a) return null;
        return `${pad}<li${active ? ' class="is-active"' : ""}>${a}</li>`;
      }
      const id = "nav-dd-" + item.label;
      const groups = item.groups
        .map((g) => {
          const links = g.items.map(([p, key]) => link(lang, ctx, p, key)).filter(Boolean);
          if (!links.length) return null;
          const title = g.title ? `\n${pad}      <p class="nav-dd-title">${escapeHtml(t(lang, g.title))}</p>` : "";
          return `${pad}    <div class="nav-dd-group">${title}\n${pad}      <ul>\n${links.map((a) => `${pad}        <li>${a}</li>`).join("\n")}\n${pad}      </ul>\n${pad}    </div>`;
        })
        .filter(Boolean);
      let all = "";
      if (item.footerLink) {
        const a = link(lang, ctx, item.footerLink[0], item.footerLink[1], "nav-dd-all");
        if (a) all = `\n${pad}    ${a.replace(/<\/a>$/, " &rarr;</a>")}`;
      }
      const wide = groups.length > 1 ? " nav-dd-panel-wide" : "";
      return (
        `${pad}<li class="nav-dd${active ? " is-active" : ""}">\n` +
        `${pad}  <button type="button" class="nav-dd-toggle" aria-expanded="false" aria-controls="${id}" data-disclosure>${escapeHtml(t(lang, item.label))}${CHEVRON}</button>\n` +
        `${pad}  <div class="nav-dd-panel${wide}" id="${id}" hidden>\n${groups.join("\n")}${all}\n${pad}  </div>\n` +
        `${pad}</li>`
      );
    })
    .filter(Boolean)
    .join("\n");
}

/** Same page in each language, or that language's homepage if not translated. */
function langTarget(targetLang, ctx) {
  if (ctx.relPath !== null && pageExists(targetLang, ctx.relPath)) return urlFor(targetLang, ctx.relPath);
  return urlFor(targetLang, "");
}

function renderLangMenu(ctx) {
  return config.langs
    .map((l) => {
      const current = l === ctx.lang ? ' aria-current="true"' : "";
      return `            <li><a href="${langTarget(l, ctx)}" hreflang="${l}" lang="${l}"${current}>${config.langNames[l]}</a></li>`;
    })
    .join("\n");
}

function renderLangLinks(ctx) {
  return config.langs
    .map((l) => {
      const current = l === ctx.lang ? ' aria-current="true"' : "";
      return `        <li><a href="${langTarget(l, ctx)}" hreflang="${l}" lang="${l}"${current}>${config.langNames[l]}</a></li>`;
    })
    .join("\n");
}

function renderFooterColumns(ctx) {
  return config.footerColumns
    .map((col) => {
      const links = col.items.map(([p, key]) => link(ctx.lang, ctx, p, key)).filter(Boolean);
      return (
        `      <div>\n        <h2>${escapeHtml(t(ctx.lang, col.title))}</h2>\n        <ul>\n` +
        links.map((a) => `          <li>${a}</li>`).join("\n") +
        `\n        </ul>\n      </div>`
      );
    })
    .join("\n");
}

function render(ctx) {
  const { lang } = ctx;
  const strings = {};
  for (const key of Object.keys(config.strings[config.defaultLang])) strings[key] = escapeHtml(t(lang, key));
  const vars = {
    ...strings,
    homeHref: urlFor(lang, ""),
    ctaHref: resolveHref(lang, config.cta[0]) || "/",
    ctaLabel: escapeHtml(t(lang, config.cta[1])),
    currentLangCode: lang.toUpperCase(),
    navItems: renderNav(ctx),
    langMenu: renderLangMenu(ctx),
    langLinks: renderLangLinks(ctx),
    footerColumns: renderFooterColumns(ctx),
    year: String(new Date().getFullYear())
  };
  return {
    head: fill(templates.head, vars),
    header: fill(templates.header, vars),
    footer: fill(templates.footer, vars)
  };
}

// ---------- markers & one-time migration ----------

const NOTE = "generated by scripts/build.js from /layout, edits here are overwritten";
const open = (name) => `<!-- layout:${name} (${NOTE}) -->`;
const close = (name) => `<!-- /layout:${name} -->`;
const regionRe = (name) => new RegExp(`<!-- layout:${name}\\b[^>]*-->[\\s\\S]*?<!-- \\/layout:${name} -->`);

const LEGACY = {
  head: /<link rel="icon" href="\/assets\/images\/favicon\.svg"[\s\S]*?<script src="\/assets\/js\/analytics\.js[^"]*" defer><\/script>/,
  header: /<a class="skip-link"[\s\S]*?<\/header>/,
  footer: /<footer class="site-footer">[\s\S]*?<\/footer>(?:\s*<a href="#main" class="back-to-top"[^>]*>[^<]*<\/a>)?/
};
const LEGACY_CORE_SCRIPTS = /[ \t]*<script src="\/assets\/js\/(?:main|lang-switcher)\.js[^"]*" defer><\/script>\r?\n?/g;

function migrate(html, rel) {
  let out = html;
  for (const name of ["head", "header", "footer"]) {
    if (regionRe(name).test(out)) continue;
    if (!LEGACY[name].test(out)) throw new Error(`${rel}: can't find the ${name} to convert into a layout region`);
    out = out.replace(LEGACY[name], `${open(name)}\n${close(name)}`);
    if (name === "footer") {
      // main.js now ships inside the footer region; lang-switcher.js was merged into it.
      const [before, after] = out.split(close("footer"));
      out = before + close("footer") + after.replace(LEGACY_CORE_SCRIPTS, "");
    }
  }
  return out;
}

// ---------- hreflang ----------

/**
 * Rebuild the <link rel="alternate" hreflang> set from the pages that actually
 * exist, so no page ever points search engines at a translation that would
 * only redirect back to English.
 */
function applyHreflang(html, ctx) {
  if (ctx.relPath === null) return html;
  const lines = [];
  for (const l of config.langs) {
    if (pageExists(l, ctx.relPath)) {
      lines.push(`<link rel="alternate" hreflang="${l}" href="${config.siteUrl}${urlFor(l, ctx.relPath)}">`);
      if (l === config.defaultLang) {
        lines.push(`<link rel="alternate" hreflang="x-default" href="${config.siteUrl}${urlFor(l, ctx.relPath)}">`);
      }
    }
  }
  const stripped = html.replace(/^<link rel="alternate" hreflang="[^"]+" href="[^"]*">\n/gm, "");
  if (!/<link rel="canonical"[^>]*>\n/.test(stripped)) {
    warnings.add(`${ctx.rel}: no canonical tag, hreflang not updated`);
    return html;
  }
  return stripped.replace(/(<link rel="canonical"[^>]*>\n)/, (m) => m + lines.join("\n") + "\n");
}

// ---------- sitemap.xml & _redirects ----------

const today = new Date().toISOString().slice(0, 10);

function gitLastModified() {
  // Last commit date for every tracked file, from one `git log` pass.
  const dates = {};
  try {
    const out = require("child_process").execSync("git log --format=@%cs --name-only --no-renames", {
      cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024
    });
    let current = null;
    for (const line of out.split("\n")) {
      if (line.startsWith("@")) current = line.slice(1);
      else if (line && current && !(line in dates)) dates[line] = current;
    }
  } catch (e) {
    warnings.add("git unavailable, sitemap lastmod falls back to today");
  }
  return dates;
}

function renderSitemap(pages) {
  const dates = gitLastModified();
  const urls = pages
    .filter((p) => p.ctx.relPath !== null && !p.noindex)
    .map((p) => {
      const lastmod = p.changed || !dates[p.ctx.rel] ? today : dates[p.ctx.rel];
      return { loc: config.siteUrl + urlFor(p.ctx.lang, p.ctx.relPath), lastmod, depth: p.ctx.relPath.split("/").length, lang: p.ctx.lang };
    })
    // English first, then by URL depth, then alphabetically — stable and readable.
    .sort((a, b) => (a.lang === "en") === (b.lang === "en")
      ? a.lang.localeCompare(b.lang) || a.depth - b.depth || a.loc.localeCompare(b.loc)
      : a.lang === "en" ? -1 : 1);
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>\n`).join("") +
    "</urlset>\n";
}

const FALLBACK_START = "# --- BEGIN auto-generated language fallback redirects (scripts/build.js) ---";
const FALLBACK_END = "# --- END auto-generated language fallback redirects ---";

function renderRedirects(pages, current) {
  const rules = [];
  for (const l of NON_DEFAULT_LANGS) {
    for (const p of pages) {
      if (p.ctx.lang !== config.defaultLang || p.ctx.relPath === null) continue;
      if (!pageExists(l, p.ctx.relPath)) rules.push(`/${l}/${p.ctx.relPath}  /${p.ctx.relPath}  302`);
    }
  }
  const block = [
    FALLBACK_START,
    "# When a page has no translation yet for a given language, send /xx/page/ to the",
    "# English original instead of a 404. Temporary (302): a rule disappears on the next",
    "# build once that translation exists.",
    ...rules,
    FALLBACK_END
  ].join("\n");
  const start = current.search(/# --- BEGIN auto-generated language fallback redirects[^\n]*/);
  const end = current.indexOf(FALLBACK_END);
  if (start === -1 || end === -1) return current.replace(/\n*$/, "\n\n") + block + "\n";
  return current.slice(0, start) + block + current.slice(end + FALLBACK_END.length);
}

function writeIfChanged(file, content, changed) {
  const full = path.join(ROOT, file);
  const original = fs.existsSync(full) ? fs.readFileSync(full, "utf8") : "";
  const crlf = original.includes("\r\n");
  const out = crlf ? content.replace(/\r?\n/g, "\r\n") : content;
  if (out.replace(/\r\n/g, "\n") !== original.replace(/\r\n/g, "\n")) {
    changed.push(file);
    if (!CHECK) fs.writeFileSync(full, out);
  }
}

// ---------- main ----------

function build() {
  const files = walk(ROOT);
  const changed = [];
  const pages = [];
  for (const file of files) {
    const original = fs.readFileSync(file, "utf8");
    const ctx = pageContext(file);
    const crlf = original.includes("\r\n");
    let html = migrate(original.replace(/\r\n/g, "\n"), ctx.rel);
    const parts = render(ctx);
    for (const name of ["head", "header", "footer"]) {
      const block = `${open(name)}\n${parts[name].replace(/\n$/, "")}\n${close(name)}`;
      html = html.replace(regionRe(name), () => block);
    }
    html = applyHreflang(html, ctx);
    // Cache-bust every local stylesheet/script reference outside the regions too.
    html = html.replace(
      /(href|src)="(\/assets\/[^"?]+\.(?:css|js))(?:\?v=[^"]*)?"/g,
      (_, attr, p) => `${attr}="${versioned(p)}"`
    );
    if (crlf) html = html.replace(/\n/g, "\r\n");
    const pageChanged = html !== original;
    if (pageChanged) {
      changed.push(ctx.rel);
      if (!CHECK) fs.writeFileSync(file, html);
    }
    pages.push({ ctx, changed: pageChanged, noindex: /<meta name="robots" content="[^"]*noindex/.test(html) });
  }
  // A page edited since the last commit counts as changed today for <lastmod>.
  try {
    const dirty = require("child_process").execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" });
    const dirtySet = new Set(dirty.split("\n").map((l) => l.slice(3).trim().replace(/^"|"$/g, "")));
    for (const p of pages) if (dirtySet.has(p.ctx.rel)) p.changed = true;
  } catch (e) { /* not a git checkout: lastmod falls back to today */ }
  writeIfChanged("sitemap.xml", renderSitemap(pages), changed);
  writeIfChanged("_redirects", renderRedirects(pages, fs.readFileSync(path.join(ROOT, "_redirects"), "utf8").replace(/\r\n/g, "\n")), changed);

  for (const w of warnings) console.warn("warning: " + w);
  if (CHECK) {
    if (changed.length) {
      console.error(`${changed.length} page(s) are out of date with /layout. Run: node scripts/build.js`);
      process.exit(1);
    }
    if (!QUIET) console.log(`All ${files.length} pages are up to date.`);
    return;
  }
  if (!QUIET) console.log(`Built ${files.length} pages, ${changed.length} changed.`);
  // Machine-readable list for the pre-commit hook.
  if (process.env.LAYOUT_CHANGED_LIST) fs.writeFileSync(process.env.LAYOUT_CHANGED_LIST, changed.join("\n"));
}

build();
