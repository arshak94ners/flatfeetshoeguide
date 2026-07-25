const { renderPage } = require("./gen-new-pages");
const { PAGES } = require("./new-pages-data");

for (const p of PAGES) {
  renderPage(p);
}
console.log(`\nGenerated ${PAGES.length} pages.`);
