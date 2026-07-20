const fs = require('fs');
const m = require('./i18n-manifest.json');
const terms = ['Overall','Stability','Cushioning','Wide-Foot Friendliness','Wide-foot friendliness','Value','Durability','Frequently Asked Questions','Bottom Line','Pros','Cons','disclosure banner','As an Amazon Associate','commission','Jump to','Table of Contents','Last updated','Was this helpful','FAQ'];
function esc(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
for (const t of terms) {
  let count = 0, files = 0;
  for (const p of m.pages) {
    const c = fs.readFileSync(p.sourceFile, 'utf8');
    const re = new RegExp(esc(t), 'g');
    const n = (c.match(re) || []).length;
    if (n > 0) { count += n; files++; }
  }
  console.log(t.padEnd(30), 'occurrences:', count, 'files:', files);
}
