const fs = require('fs');
const path = require('path');
const ROOT = String.raw`C:\Users\Lenovo\Desktop\flatfeetshoeguide-live`;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === 'index.html' || entry.name === '404.html') files.push(full);
  }
  return files;
}

const files = walk(ROOT);
const existingPaths = new Set();
for (const f of files) {
  let p = '/' + path.relative(ROOT, f).split(path.sep).join('/');
  if (p.endsWith('/index.html')) p = p.slice(0, -'index.html'.length);
  existingPaths.add(p);
}
existingPaths.add('/');

let brokenCount = 0;
const anchorLinksToVerify = [];

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const hrefs = [...html.matchAll(/href="(\/[a-zA-Z0-9\-_/#.]*)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    const [cleanPath, anchor] = href.split('#');
    if (!cleanPath) continue;
    if (/\.(css|js|xml|txt|svg|png|webp|webmanifest)$/.test(cleanPath)) continue;
    if (!existingPaths.has(cleanPath)) {
      console.log(`BROKEN in ${path.relative(ROOT, f)}: ${href}`);
      brokenCount++;
    } else if (anchor) {
      anchorLinksToVerify.push({ file: f, targetPath: cleanPath, anchor, sourceFile: path.relative(ROOT, f) });
    }
  }
}

// Verify cross-page anchors actually exist on the target page
for (const link of anchorLinksToVerify) {
  const targetFile = path.join(ROOT, link.targetPath === '/' ? 'index.html' : link.targetPath.slice(1) + 'index.html');
  if (!fs.existsSync(targetFile)) continue; // already reported above if truly missing
  const targetHtml = fs.readFileSync(targetFile, 'utf8');
  const idRe = new RegExp(`id="${link.anchor}"`);
  if (!idRe.test(targetHtml)) {
    console.log(`BROKEN ANCHOR in ${link.sourceFile}: ${link.targetPath}#${link.anchor} (no matching id on target page)`);
    brokenCount++;
  }
}

console.log(`\n${brokenCount} broken internal links/anchors found out of ${files.length} files scanned.`);
