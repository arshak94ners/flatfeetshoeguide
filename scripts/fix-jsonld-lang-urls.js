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

let changedFiles = 0;
let changedUrls = 0;

for (const lang of langs) {
  const langDir = path.join(root, lang);
  if (!fs.existsSync(langDir)) continue;
  const files = [];
  walk(langDir, files);

  const bareRe = new RegExp(`https://flatfeetshoeguide\\.com/(?!${lang}/|assets/)`, "g");

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    let newContent = content;

    newContent = newContent.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, (full, jsonText) => {
      const count = (jsonText.match(bareRe) || []).length;
      if (count === 0) return full;
      changedUrls += count;
      const fixed = jsonText.replace(bareRe, `https://flatfeetshoeguide.com/${lang}/`);
      return `<script type="application/ld+json">${fixed}</script>`;
    });

    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      changedFiles++;
    }
  }
}

console.log(`Fixed ${changedUrls} JSON-LD URLs across ${changedFiles} files.`);
