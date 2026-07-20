const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const removeLangs = ["az", "be", "et", "ka", "ky", "lv", "lt", "ro", "tg", "tk"];

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

const files = [];
walk(root, files);

let changedCount = 0;
for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  for (const lang of removeLangs) {
    // hreflang <link> lines (anchored to start of line, consumes only its own line)
    const hreflangRe = new RegExp(`^<link rel="alternate" hreflang="${lang}" href="[^"]*">\\r?\\n`, "gm");
    content = content.replace(hreflangRe, "");
    // lang switcher dropdown <li> entries (anchored to start of line, consumes only its own line)
    const dataLangRe = new RegExp(`^[ \\t]*<li><a href="#" data-lang="${lang}">[^<]*</a></li>\\r?\\n`, "gm");
    content = content.replace(dataLangRe, "");
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedCount++;
  }
}

console.log(`Scanned ${files.length} HTML files, modified ${changedCount}.`);
