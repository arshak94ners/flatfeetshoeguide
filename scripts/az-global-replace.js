const fs = require('fs');
const path = require('path');
const m = require('./i18n-manifest.json');
const root = path.join(__dirname, '..');

// Ordered list of [find, replace] literal string replacements.
// Longer/more specific patterns are listed before shorter ones that could be substrings.
const pairs = [
  // Disclosure banners (two variants) - must come before generic footer/CTA replacements
  [
    '<div class="disclosure-banner">This post contains Amazon affiliate links. We may earn a commission on qualifying purchases at no extra cost to you. See our <a href="/az/affiliate-disclosure/">affiliate disclosure</a>.</div>',
    '<div class="disclosure-banner">Bu yazıda Amazon tərəfdaşlıq linkləri var. Uyğun alışlardan sizə heç bir əlavə xərc olmadan komissiya qazana bilərik. Ətraflı məlumat üçün <a href="/az/affiliate-disclosure/">tərəfdaşlıq bəyanatımıza</a> baxın.</div>'
  ],
  [
    '<div class="disclosure-banner">This tool links to products via Amazon affiliate links. We may earn a commission on qualifying purchases at no extra cost to you. See our <a href="/az/affiliate-disclosure/">affiliate disclosure</a>.</div>',
    '<div class="disclosure-banner">Bu alət məhsullara Amazon tərəfdaşlıq linkləri vasitəsilə keçid verir. Uyğun alışlardan sizə heç bir əlavə xərc olmadan komissiya qazana bilərik. Ətraflı məlumat üçün <a href="/az/affiliate-disclosure/">tərəfdaşlıq bəyanatımıza</a> baxın.</div>'
  ],

  // CTA button text (with and without visually-hidden span)
  ['Check Price on Amazon<span class="visually-hidden"> (opens in a new tab)</span>', 'Amazonda Qiymətə Bax<span class="visually-hidden"> (yeni vərəqdə açılır)</span>'],
  ['Check Price on Amazon', 'Amazonda Qiymətə Bax'],

  // Skip link / a11y chrome
  ['<a class="skip-link" href="#main">Skip to content</a>', '<a class="skip-link" href="#main">Əsas məzmuna keç</a>'],
  ['<span class="brand-sub">Real-world guidance, not guesswork</span>', '<span class="brand-sub">Təxminlərə deyil, real təcrübəyə əsaslanan bələdçilik</span>'],
  ['<span class="visually-hidden">Menu</span>', '<span class="visually-hidden">Menyu</span>'],
  ['aria-label="Primary"', 'aria-label="Əsas naviqasiya"'],
  ['aria-label="Breadcrumb"', 'aria-label="Naviqasiya izi"'],

  // Score-card labels (unambiguous due to class scoping)
  ['<span class="score-label">Overall</span>', '<span class="score-label">Ümumi</span>'],
  ['<span class="score-bar-label">Stability</span>', '<span class="score-bar-label">Sabitlik</span>'],
  ['<span class="score-bar-label">Cushioning</span>', '<span class="score-bar-label">Amortizasiya</span>'],
  ['<span class="score-bar-label">Wide-Foot Friendliness</span>', '<span class="score-bar-label">Geniş Ayaq Üçün Uyğunluq</span>'],
  ['<span class="score-bar-label">Value</span>', '<span class="score-bar-label">Dəyər</span>'],
  ['<span class="score-bar-label">Durability</span>', '<span class="score-bar-label">Davamlılıq</span>'],

  // Footer headings
  ['<h2>Explore</h2>', '<h2>Kəşf et</h2>'],
  ['<h2>Company</h2>', '<h2>Şirkət</h2>'],

  // Footer description paragraph (left column)
  [
    '<p>Independent, first-hand reviews and buying guides for people with flat feet and low arches. We test the claims so you don’t have to guess.</p>',
    '<p>Yastı ayaqları və alçaq qübbəsi olan insanlar üçün müstəqil, şəxsi təcrübəyə əsaslanan rəylər və alış bələdçiləri hazırlayırıq. İddiaları özümüz yoxlayırıq ki, siz təxmin etmək məcburiyyətində qalmayasınız.</p>'
  ],

  // Footer bottom
  ['<p>&copy; 2026 Flat Feet Shoe Guide. All rights reserved.</p>', '<p>&copy; 2026 Flat Feet Shoe Guide. Bütün hüquqlar qorunur.</p>'],
  ['<p>As an Amazon Associate, we earn from qualifying purchases.</p>', '<p>Amazon Associate proqramının üzvü kimi, uyğun alışlardan komissiya qazanırıq.</p>'],

  // Footer link labels (anchor-scoped, order matters: longer/specific before short "About")
  ['>Shoe Finder Quiz</a>', '>Ayaqqabı Seçici Testi</a>'],
  ['>What Hurts? Pain Guide</a>', '>Nə Ağrıyır? Ağrı Bələdçisi</a>'],
  ['>Compare Tool</a>', '>Müqayisə Aləti</a>'],
  ['>Shoe Database</a>', '>Ayaqqabı Bazası</a>'],
  ['>Best Shoes for Flat Feet</a>', '>Yastı Ayaqlar üçün Ən Yaxşı Ayaqqabılar</a>'],
  ['>Running Shoes</a>', '>Qaçış Ayaqqabıları</a>'],
  ['>Walking Shoes</a>', '>Gəzinti Ayaqqabıları</a>'],
  ['>Work Shoes</a>', '>İş Ayaqqabıları</a>'],
  ['>Gym Shoes</a>', '>İdman Zalı Ayaqqabıları</a>'],
  ['>Sandals</a>', '>Sandallar</a>'],
  ['>Insoles</a>', '>Taban Astarları</a>'],
  ['>Shoe Size Chart</a>', '>Ayaqqabı Ölçü Cədvəli</a>'],
  ['>About Us</a>', '>Haqqımızda</a>'],
  ['>Affiliate Disclosure</a>', '>Tərəfdaşlıq Bəyanatı</a>'],
  ['>Medical Disclaimer</a>', '>Tibbi Məsuliyyətdən İmtina</a>'],
  ['>Privacy Policy</a>', '>Məxfilik Siyasəti</a>'],
  ['>Sitemap</a>', '>Sayt Xəritəsi</a>'],
  ['>Contact</a>', '>Əlaqə</a>'],

  // Nav labels (anchor-scoped) - also matches identical breadcrumb link text
  ['>Best Shoes</a>', '>Ən Yaxşı Ayaqqabılar</a>'],
  ['>Shoe Finder</a>', '>Ayaqqabı Seçici</a>'],
  ['>Reviews</a>', '>Rəylər</a>'],
  ['>Comparisons</a>', '>Müqayisələr</a>'],
  ['>Guides</a>', '>Bələdçilər</a>'],
  ['>About</a>', '>Haqqımızda</a>'],
  ['>Home</a>', '>Ana səhifə</a>'],
];

let totalFiles = 0;
let changesLog = {};

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'index.html') processFile(full);
  }
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  for (const [find, replace] of pairs) {
    if (content.includes(find)) {
      const count = content.split(find).length - 1;
      content = content.split(find).join(replace);
      changesLog[find] = (changesLog[find] || 0) + count;
    }
  }
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalFiles++;
  }
}

walk(path.join(root, 'az'));
console.log('Files modified:', totalFiles);
console.log('Replacement counts:');
for (const [k, v] of Object.entries(changesLog)) {
  console.log(' ', JSON.stringify(k.slice(0, 60)), '->', v);
}
