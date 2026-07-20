const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "scripts/i18n-manifest.json"), "utf8"));
const langs = ["ru", "hy", "uk", "uz", "kk"];

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      walk(full, files);
    } else if (entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
}

let changedFiles = 0;
let changedLinks = 0;

for (const lang of langs) {
  const langDir = path.join(root, lang);
  if (!fs.existsSync(langDir)) continue;

  const files = [];
  walk(langDir, files);

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    const original = content;

    for (const page of manifest.pages) {
      const relPath = page.relPath || "";
      const translatedFile = path.join(root, lang, relPath, "index.html");
      if (!fs.existsSync(translatedFile)) continue;

      // Rewrite href="/{relPath}" (English fallback) -> href="/{lang}/{relPath}"
      // Anchored on the closing quote so e.g. "/shoe-reviews/" doesn't also
      // match inside "/shoe-reviews/asics-gel-kayano-review/".
      const enHref = `href="/${relPath}"`;
      const langHref = `href="/${lang}/${relPath}"`;
      const count = content.split(enHref).length - 1;
      if (count > 0) {
        content = content.split(enHref).join(langHref);
        changedLinks += count;
      }
    }

    if (content !== original) {
      fs.writeFileSync(file, content);
      changedFiles++;
    }
  }
}

console.log(`Relinked ${changedLinks} hrefs across ${changedFiles} files.`);
