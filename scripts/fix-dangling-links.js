const fs = require("fs");
const path = require("path");

const ROOT = String.raw`C:\Users\Lenovo\Desktop\flatfeetshoeguide-live`;
const LANGS = ["ru", "hy", "uk", "uz", "kk"];

function exists(relPath) {
  // relPath like "shoe-finder/" or "" for homepage
  const p = path.join(ROOT, relPath, "index.html");
  return fs.existsSync(p);
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === "index.html") files.push(full);
  }
  return files;
}

let totalFixed = 0;
for (const lang of LANGS) {
  const langDir = path.join(ROOT, lang);
  if (!fs.existsSync(langDir)) continue;
  const files = walk(langDir);
  for (const f of files) {
    let html = fs.readFileSync(f, "utf8");
    let fileFixed = 0;
    const re = new RegExp(`href="/${lang}/([a-zA-Z0-9\\-_/]*)"`, "g");
    html = html.replace(re, (match, relPath) => {
      // check if this lang-prefixed path exists
      const langRelPath = path.join(lang, relPath);
      if (fs.existsSync(path.join(ROOT, langRelPath, "index.html"))) {
        return match; // fine, leave as-is
      }
      // check English fallback exists
      if (exists(relPath)) {
        fileFixed++;
        return `href="/${relPath}"`;
      }
      return match; // truly broken (English also missing) - leave for manual review
    });
    if (fileFixed > 0) {
      fs.writeFileSync(f, html);
      totalFixed += fileFixed;
    }
  }
}
console.log(`Fixed ${totalFixed} dangling internal links across ${LANGS.join(", ")}`);
