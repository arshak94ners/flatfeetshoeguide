const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "scripts/i18n-manifest.json"), "utf8"));
const sitemapPath = path.join(root, "sitemap.xml");
const langs = ["uk", "ru", "hy", "uz", "kk"];

let xml = fs.readFileSync(sitemapPath, "utf8");
const closeTag = "</urlset>";
if (!xml.includes(closeTag)) throw new Error("Could not find </urlset>");
xml = xml.slice(0, xml.indexOf(closeTag));

// Strip any previously-added translated-language <url> blocks so re-running is idempotent
const langPrefixRe = new RegExp(`  <url>\\n    <loc>https://flatfeetshoeguide\\.com/(${langs.join("|")})/[^<]*</loc>\\n(?:.*\\n)*?  </url>\\n`, "g");
xml = xml.replace(langPrefixRe, "");

const today = "2026-07-20";
let added = 0;
for (const lang of langs) {
  for (const page of manifest.pages) {
    const filePath = path.join(root, lang, page.relPath, "index.html");
    if (!fs.existsSync(filePath)) continue;
    const loc = `https://flatfeetshoeguide.com/${lang}/${page.relPath}`;
    xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
    added++;
  }
}
xml += closeTag + "\n";
fs.writeFileSync(sitemapPath, xml);
console.log(`Added ${added} translated URLs to sitemap.xml`);
