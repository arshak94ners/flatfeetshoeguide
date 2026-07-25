// One-off migration: add Review/Product/Rating JSON-LD to shoe-review pages
// that only have generic Article schema. Positional extraction (not label
// text) so it works identically across all language directories.
const fs = require("fs");
const path = require("path");

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git") continue;
      walk(full, out);
    } else if (entry.isFile() && entry.name === "index.html") {
      const parentDir = path.dirname(full);
      const parentName = path.basename(parentDir);
      const grandparentName = path.basename(path.dirname(parentDir));
      if (grandparentName === "shoe-reviews" && parentName !== "shoe-reviews") {
        out.push(full);
      }
    }
  }
}

const files = [];
walk(process.cwd(), files);

let processed = 0, skipped = 0;
const log = [];

for (const file of files) {
  let html = fs.readFileSync(file, "utf8");

  if (/"@type":\s*"Review"/.test(html) || /"@type":\s*"Product"/.test(html)) {
    skipped++;
    continue;
  }

  const articleBlockRe = /<script type="application\/ld\+json">\s*\{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"Article"[\s\S]*?\}\s*<\/script>/;
  const articleMatch = html.match(articleBlockRe);
  if (!articleMatch) {
    log.push(`NO ARTICLE BLOCK: ${file}`);
    continue;
  }

  let articleJson;
  try {
    const jsonText = articleMatch[0].replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "").trim();
    articleJson = JSON.parse(jsonText);
  } catch (e) {
    log.push(`PARSE FAIL: ${file} — ${e.message}`);
    continue;
  }

  const productCardIdx = html.indexOf('class="product-card"');
  if (productCardIdx === -1) {
    log.push(`NO PRODUCT CARD: ${file}`);
    continue;
  }
  const afterCard = html.slice(productCardIdx);

  const nameMatch = afterCard.match(/<h3>([^<]+)<\/h3>/);
  const brandMatch = afterCard.match(/<dl class="spec-list">\s*<dt>[^<]*<\/dt><dd>([^<]+)<\/dd>/);
  const imgMatch = afterCard.match(/class="product-photo">[\s\S]*?<img src="([^"]+)"/);
  const scoreMatch = html.match(/<span class="score-value">([\d.]+)<\/span>/);

  if (!nameMatch || !brandMatch || !imgMatch || !scoreMatch) {
    log.push(`MISSING FIELD(S): ${file} name=${!!nameMatch} brand=${!!brandMatch} img=${!!imgMatch} score=${!!scoreMatch}`);
    continue;
  }

  const productName = nameMatch[1];
  const brand = brandMatch[1];
  let image = imgMatch[1];
  if (image.startsWith("/")) image = `https://flatfeetshoeguide.com${image}`;
  const score10 = parseFloat(scoreMatch[1]);
  const rating5 = Math.round((score10 / 10) * 5 * 10) / 10;

  const author = articleJson.author;
  const publisher = articleJson.publisher;
  const datePublished = articleJson.datePublished;
  const dateModified = articleJson.dateModified || articleJson.datePublished;

  const reviewBlock = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "${productName}",
    "brand": { "@type": "Brand", "name": "${brand}" },
    "image": "${image}"
  },
  "author": ${JSON.stringify(author)},
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "${rating5.toFixed(1)}",
    "bestRating": "5",
    "worstRating": "1"
  },
  "datePublished": "${datePublished}",
  "dateModified": "${dateModified}",
  "publisher": ${JSON.stringify(publisher)}
}
</script>`;

  html = html.replace(articleBlockRe, reviewBlock);
  fs.writeFileSync(file, html, "utf8");
  processed++;
  log.push(`OK: ${file} — "${productName}" (${brand}) rating ${rating5.toFixed(1)}/5`);
}

console.log(log.join("\n"));
console.log(`\nProcessed: ${processed}, Skipped (already had Review/Product): ${skipped}, Total scanned: ${files.length}`);
