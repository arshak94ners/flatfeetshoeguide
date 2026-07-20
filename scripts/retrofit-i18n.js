const fs = require("fs");
const path = require("path");
const ROOT = String.raw`C:\Users\Lenovo\Desktop\flatfeetshoeguide-live`;
const OLD_V = "20260718c";
const NEW_V = "20260718d";

const LANGS = ["hy", "az", "be", "et", "ka", "kk", "ky", "lv", "lt", "ro", "ru", "tg", "tk", "uk", "uz"];

function walk(dir, files) {
  files = files || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (LANGS.indexOf(entry.name) !== -1) continue; // skip lang subtrees (don't exist yet, but future-proof)
      walk(full, files);
    } else if (entry.name === "index.html") {
      files.push(full);
    }
  }
  return files;
}

const files = walk(ROOT);
console.log(`Found ${files.length} English pages.`);

const SWITCHER_LI = `        <li class="lang-switcher-item">
          <button type="button" class="lang-switcher-toggle" id="lang-switcher-btn" aria-expanded="false" aria-haspopup="true" aria-controls="lang-switcher-menu">
            <span class="lang-switcher-current">EN</span>
            <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <ul class="lang-switcher-menu" id="lang-switcher-menu" hidden>
            <li><a href="#" data-lang="en">English</a></li>
            <li><a href="#" data-lang="hy">Հայերեն</a></li>
            <li><a href="#" data-lang="az">Azərbaycanca</a></li>
            <li><a href="#" data-lang="be">Беларуская</a></li>
            <li><a href="#" data-lang="et">Eesti</a></li>
            <li><a href="#" data-lang="ka">ქართული</a></li>
            <li><a href="#" data-lang="kk">Қазақша</a></li>
            <li><a href="#" data-lang="ky">Кыргызча</a></li>
            <li><a href="#" data-lang="lv">Latviešu</a></li>
            <li><a href="#" data-lang="lt">Lietuvių</a></li>
            <li><a href="#" data-lang="ro">Română</a></li>
            <li><a href="#" data-lang="ru">Русский</a></li>
            <li><a href="#" data-lang="tg">Тоҷикй</a></li>
            <li><a href="#" data-lang="tk">Türkmençe</a></li>
            <li><a href="#" data-lang="uk">Українська</a></li>
            <li><a href="#" data-lang="uz">Oʻzbekcha</a></li>
          </ul>
        </li>
`;

function hreflangBlock(relPath) {
  // relPath like "" (root) or "about/" or "shoe-reviews/hoka-bondi-review/"
  const lines = [];
  lines.push(`<link rel="alternate" hreflang="en" href="https://flatfeetshoeguide.com/${relPath}">`);
  lines.push(`<link rel="alternate" hreflang="x-default" href="https://flatfeetshoeguide.com/${relPath}">`);
  for (const lang of LANGS) {
    lines.push(`<link rel="alternate" hreflang="${lang}" href="https://flatfeetshoeguide.com/${lang}/${relPath}">`);
  }
  return lines.join("\n");
}

let modified = 0;
for (const f of files) {
  let html = fs.readFileSync(f, "utf8");
  const before = html;

  let relPath = path.relative(ROOT, path.dirname(f)).split(path.sep).join("/");
  if (relPath === "" || relPath === ".") relPath = "";
  else relPath = relPath + "/";

  // 1. Insert hreflang block right after the canonical <link> tag.
  if (!html.includes('hreflang="x-default"')) {
    html = html.replace(
      /(<link rel="canonical" href="[^"]+">\n)/,
      `$1${hreflangBlock(relPath)}\n`
    );
  }

  // 2. Insert language switcher <li> right before the main-nav's closing </ul></nav>.
  if (!html.includes("lang-switcher-item")) {
    html = html.replace(
      /(\s*)<\/ul>(\s*<\/nav>)/,
      `\n${SWITCHER_LI}      </ul>$2`
    );
  }

  // 3. Add lang-switcher.js script before </body>, right after main.js script line.
  if (!html.includes("lang-switcher.js")) {
    html = html.replace(
      /(<script src="\/assets\/js\/main\.js\?v=)[^"]*(" defer><\/script>)/,
      `$1${NEW_V}$2\n<script src="/assets/js/lang-switcher.js?v=${NEW_V}" defer></script>`
    );
  }

  // 4. Bump all other ?v=20260718c version strings to NEW_V (cache-busting for the CSS/JS edits).
  html = html.split(`?v=${OLD_V}`).join(`?v=${NEW_V}`);

  if (html !== before) {
    fs.writeFileSync(f, html, "utf8");
    modified++;
  }
}

console.log(`Modified ${modified} files.`);
