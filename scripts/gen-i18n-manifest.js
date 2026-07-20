const fs = require("fs");
const path = require("path");
const ROOT = String.raw`C:\Users\Lenovo\Desktop\flatfeetshoeguide-live`;
const LANGS = ["hy", "az", "be", "et", "ka", "kk", "ky", "lv", "lt", "ro", "ru", "tg", "tk", "uk", "uz"];

function walk(dir, files) {
  files = files || [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (LANGS.indexOf(entry.name) !== -1) continue;
      if (entry.name === "scripts") continue;
      walk(full, files);
    } else if (entry.name === "index.html") {
      files.push(full);
    }
  }
  return files;
}

const files = walk(ROOT).sort();
const pages = files.map((f) => {
  let relPath = path.relative(ROOT, path.dirname(f)).split(path.sep).join("/");
  relPath = relPath === "" || relPath === "." ? "" : relPath + "/";
  const lines = [];
  lines.push(`<link rel="alternate" hreflang="en" href="https://flatfeetshoeguide.com/${relPath}">`);
  lines.push(`<link rel="alternate" hreflang="x-default" href="https://flatfeetshoeguide.com/${relPath}">`);
  for (const lang of LANGS) {
    lines.push(`<link rel="alternate" hreflang="${lang}" href="https://flatfeetshoeguide.com/${lang}/${relPath}">`);
  }
  return {
    relPath,
    sourceFile: path.relative(ROOT, f).split(path.sep).join("/"),
    hreflangBlock: lines.join("\n"),
  };
});

fs.writeFileSync(
  path.join(ROOT, "scripts", "i18n-manifest.json"),
  JSON.stringify({ langs: LANGS, pages }, null, 2),
  "utf8"
);
console.log(`Wrote manifest with ${pages.length} pages.`);
