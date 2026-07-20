const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "scripts/i18n-manifest.json"), "utf8"));
const redirectsPath = path.join(root, "_redirects");
const langs = ["ru", "hy", "uk", "uz", "kk"];

const startMarker = "# --- BEGIN auto-generated language fallback redirects (scripts/update-lang-fallback-redirects.js) ---";
const endMarker = "# --- END auto-generated language fallback redirects ---";

let content = fs.readFileSync(redirectsPath, "utf8");
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);
if (startIdx !== -1 && endIdx !== -1) {
  content = content.slice(0, startIdx) + content.slice(endIdx + endMarker.length);
}
content = content.replace(/\n+$/, "\n");

const lines = [startMarker];
lines.push("# When a page has no translation yet for a given language, fall back to the");
lines.push("# English original instead of letting the request 404. Temporary (302) since");
lines.push("# entries here are removed automatically once a real translation is added.");

let added = 0;
for (const lang of langs) {
  for (const page of manifest.pages) {
    const relPath = page.relPath || "";
    const translatedFile = path.join(root, lang, relPath, "index.html");
    if (fs.existsSync(translatedFile)) continue;
    const src = `/${lang}/${relPath}`;
    const dest = `/${relPath}`;
    lines.push(`${src}  ${dest}  302`);
    added++;
  }
}
lines.push(endMarker);

content = content.replace(/\n*$/, "\n") + "\n" + lines.join("\n") + "\n";
fs.writeFileSync(redirectsPath, content);
console.log(`Added ${added} language-fallback redirect rules to _redirects`);
