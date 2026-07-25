// Fixes a real heading-order accessibility bug (Lighthouse-flagged): the
// author-box and who-grid components render <h4> immediately after an <h2>
// with no intervening <h3>, skipping a level. Hub-page pros/cons <h4>s
// ("What we liked" etc.) are correctly nested under an <h3> product header
// already and must NOT be touched, so this targets only the two offending
// components by locating their class markers and rewriting h4->h3 within a
// bounded window right after each marker.
const fs = require("fs");
const path = require("path");

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".git" || entry.name === "node_modules") continue;
      walk(full, out);
    } else if (entry.name.endsWith(".html")) {
      out.push(full);
    }
  }
}

function fixWindow(html, marker, window) {
  let result = "";
  let cursor = 0;
  let count = 0;
  while (true) {
    const idx = html.indexOf(marker, cursor);
    if (idx === -1) {
      result += html.slice(cursor);
      break;
    }
    const windowEnd = Math.min(idx + window, html.length);
    result += html.slice(cursor, idx + marker.length);
    let chunk = html.slice(idx + marker.length, windowEnd);
    const before = chunk;
    chunk = chunk.replace(/<h4>/g, "<h3>").replace(/<\/h4>/g, "</h3>");
    if (chunk !== before) count += (before.match(/<h4>/g) || []).length;
    result += chunk;
    cursor = windowEnd;
  }
  return { html: result, count };
}

const files = [];
walk(process.cwd(), files);

let totalFixed = 0;
let filesChanged = 0;

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");
  const before = html;
  let fixedHere = 0;

  ({ html, count: fixedHere } = fixWindow(html, 'class="author-box"', 500));
  totalFixed += fixedHere;
  let c2;
  ({ html, count: c2 } = fixWindow(html, 'class="who-grid"', 700));
  totalFixed += c2;

  if (html !== before) {
    fs.writeFileSync(file, html, "utf8");
    filesChanged++;
  }
}

console.log(`Fixed ${totalFixed} h4->h3 occurrences across ${filesChanged} files.`);
