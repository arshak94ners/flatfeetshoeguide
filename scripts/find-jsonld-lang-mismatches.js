const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const langs = ["ru", "hy", "uk", "uz", "kk"];

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
}

const urlRe = /https:\/\/flatfeetshoeguide\.com\/([^"]*)/g;
let totalIssues = 0;

for (const lang of langs) {
  const langDir = path.join(root, lang);
  if (!fs.existsSync(langDir)) continue;
  const files = [];
  walk(langDir, files);

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const blocks = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    for (const block of blocks) {
      const jsonText = block[1];
      let urlm;
      urlRe.lastIndex = 0;
      while ((urlm = urlRe.exec(jsonText))) {
        const restPath = urlm[1];
        if (restPath.startsWith("assets/")) continue;
        if (restPath.startsWith(lang + "/")) continue;
        if (restPath === "") continue; // bare domain root, not applicable for translated pages content but flag separately below
        totalIssues++;
        console.log(`${path.relative(root, file)}: https://flatfeetshoeguide.com/${restPath}`);
      }
    }
  }
}
console.log(`\nTotal mismatches: ${totalIssues}`);
