/*
 * Shared product dataset — flatfeetshoeguide.com
 *
 * Single source of truth for the shoe finder, compare tool, and shoe
 * database. Exposed as a global (no build step, no modules) so any
 * page can include this script before the tool-specific script that
 * uses it.
 *
 * Score methodology (0-10 each, documented on /shoe-database/):
 *   stability   — how firm/structured the support is
 *   cushioning  — impact absorption / plushness
 *   wideFoot    — how well it accommodates a wider forefoot
 *   value       — support delivered relative to price
 *   durability  — how long it holds up under regular use
 * Every score is derived directly from claims already made in that
 * product's full review — not an independent rating system, so they
 * won't contradict the written review.
 */
var FFSG_PRODUCTS = {
  brooksAdrenaline: {
    name: "Brooks Adrenaline GTS",
    brand: "Brooks",
    category: "running",
    categoryLabel: "Бег",
    img: "/assets/images/products/brooks-adrenaline-gts.webp",
    alt: "Brooks Adrenaline GTS — стабилизирующие кроссовки для бега",
    review: "/ru/shoe-reviews/example-shoe-review/",
    href: "https://www.amazon.com/gp/aw/d/B0DM37CZS8?_encoding=UTF8&linkCode=ll2&tag=flatfeetshoeg-20&linkId=544401b6d8ddfd973c1d03638211f1a8&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Лёгкая и умеренная гиперпронация, ежедневные пробежки",
    supportType: "Направленная стабилизация (GuideRails)",
    drop: "~12 мм",
    widthOptions: "Стандартная, широкая, очень широкая",
    priceTier: 2,
    scores: { stability: 8, cushioning: 7.5, wideFoot: 8, value: 7.5, durability: 7.5 }
  },
  asicsGelKayano: {
    name: "ASICS Gel-Kayano",
    brand: "ASICS",
    category: "running",
    categoryLabel: "Бег",
    img: "/assets/images/products/asics-gel-kayano.webp",
    alt: "ASICS Gel-Kayano — стабилизирующие кроссовки для бега",
    review: "/ru/shoe-reviews/asics-gel-kayano-review/",
    href: "https://www.amazon.com/ASICS-Gel-Kayano-Running-Shoes-Black/dp/B0GY9M595L?linkCode=ll2&tag=flatfeetshoeg-20&linkId=1c115f037a1c342274cea27287461985&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Умеренная и выраженная гиперпронация, большие пробеги",
    supportType: "Система направленной стабилизации 4D Guidance System",
    drop: "~10 мм",
    widthOptions: "Стандартная, широкая",
    priceTier: 3,
    scores: { stability: 9.5, cushioning: 8.5, wideFoot: 7, value: 6.5, durability: 8.5 }
  },
  sauconyGuide: {
    name: "Saucony Guide",
    brand: "Saucony",
    category: "running",
    categoryLabel: "Бег",
    img: "/assets/images/products/saucony-guide.webp",
    alt: "Saucony Guide — беговые кроссовки",
    review: "/ru/shoe-reviews/saucony-guide-review/",
    href: "https://www.amazon.com/Saucony-Mens-Guide-Sneaker-SKYDIVER/dp/B0D31SKTH8?linkCode=ll2&tag=flatfeetshoeg-20&linkId=189c7beeee8a4a7c50fb37b2f52533d0&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Лёгкая гиперпронация, ограниченный бюджет",
    supportType: "Пена PWRRUN, поддерживающая медиальная конструкция",
    drop: "~8 мм",
    widthOptions: "Стандартная (узкий диапазон размеров)",
    priceTier: 1,
    scores: { stability: 6.5, cushioning: 7, wideFoot: 5.5, value: 8.5, durability: 6 }
  },
  newBalance928: {
    name: "New Balance 928",
    brand: "New Balance",
    category: "walking",
    categoryLabel: "Ходьба",
    img: "/assets/images/products/new-balance-928.webp",
    alt: "New Balance 928 — обувь для ходьбы",
    review: "/ru/shoe-reviews/new-balance-928-review/",
    href: "https://www.amazon.com/New-Balance-928v3-Walking-Black/dp/B01MXNYU7O?linkCode=ll2&tag=flatfeetshoeg-20&linkId=220f5270335c803b22d9694085de911b&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Ходьба весь день, работа стоя, повседневные дела",
    supportType: "Стабилизатор пятки Rollbar",
    drop: "Жёсткая, низкий профиль",
    widthOptions: "От узкой до очень широкой",
    priceTier: 2,
    scores: { stability: 9, cushioning: 6.5, wideFoot: 9.5, value: 7.5, durability: 8 }
  },
  hokaBondi: {
    name: "Hoka Bondi",
    brand: "Hoka",
    category: "walking",
    categoryLabel: "Ходьба",
    img: "/assets/images/products/hoka-bondi.webp",
    alt: "Hoka Bondi — обувь для ходьбы",
    review: "/ru/shoe-reviews/hoka-bondi-review/",
    href: "https://www.amazon.com/Hoka-Bondi-Sneaker-Black-White/dp/B0D5GCZYVJ?linkCode=ll2&tag=flatfeetshoeg-20&linkId=154e623ea0a5e8ea2442f31050983005&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Ходьба по твёрдым поверхностям, работа стоя",
    supportType: "Толстая, широкая промежуточная подошва",
    drop: "Высокая подошва, широкое основание",
    widthOptions: "Стандартная, широкая",
    priceTier: 2,
    scores: { stability: 7, cushioning: 9.5, wideFoot: 7, value: 7, durability: 7.5 }
  },
  skechersWork: {
    name: "Skechers Work Relaxed Fit",
    brand: "Skechers",
    category: "work",
    categoryLabel: "Работа",
    img: "/assets/images/products/skechers-work-relaxed-fit.webp",
    alt: "Skechers Work — нескользящая обувь",
    review: "/ru/shoe-reviews/skechers-work-relaxed-fit-review/",
    href: "https://www.amazon.com/Shoes-Crews-Everlight-Mens-Slip/dp/B0CXF9DRPP?linkCode=ll2&tag=flatfeetshoeg-20&linkId=af446db8bc8d2bd964d1446ed219c065&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Смены на ногах, без требования защитного носка",
    supportType: "Стелька с эффектом памяти, широкое основание",
    drop: "Стандартный",
    widthOptions: "Стандартная, широкая",
    priceTier: 2,
    scores: { stability: 5.5, cushioning: 8, wideFoot: 8, value: 8, durability: 6.5 }
  },
  timberlandPro: {
    name: "Timberland PRO Composite Toe",
    brand: "Timberland PRO",
    category: "work",
    categoryLabel: "Работа",
    img: "/assets/images/products/timberland-pro-composite-toe.webp",
    alt: "Timberland PRO — рабочая обувь с композитным носком",
    review: "/ru/shoe-reviews/timberland-pro-composite-toe-review/",
    href: "https://www.amazon.com/Timberland-PRO-Composite-Waterproof-Black-2024/dp/B0CJZXPYTL?linkCode=ll2&tag=flatfeetshoeg-20&linkId=9b70333a6609624dbac3ae8c3432671a&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Работа, требующая сертифицированной защиты носка",
    supportType: "Стелька против усталости, жёсткая платформа",
    drop: "Стандартный, усиленный",
    widthOptions: "Стандартная, широкая",
    priceTier: 3,
    scores: { stability: 8, cushioning: 6, wideFoot: 6.5, value: 6.5, durability: 9 }
  },
  nikeMetcon: {
    name: "Nike Metcon",
    brand: "Nike",
    category: "gym",
    categoryLabel: "Спортзал",
    img: "/assets/images/products/nike-metcon.webp",
    alt: "Nike Metcon — тренировочная обувь",
    review: "/ru/shoe-reviews/nike-metcon-review/",
    href: "https://www.amazon.com/Nike-Metcon-Sneaker-Black-Coconut/dp/B0DJGC9CFF?linkCode=ll2&tag=flatfeetshoeg-20&linkId=e19a8b2fe7dee6946ef4894427701202&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Тяжёлая работа со штангой",
    supportType: "Жёсткая, почти плоская пластина в пятке",
    drop: "Минимальный, плоский",
    widthOptions: "Стандартная, широкая",
    priceTier: 3,
    scores: { stability: 9.5, cushioning: 3.5, wideFoot: 6.5, value: 6.5, durability: 8.5 }
  },
  asicsGelQuantum: {
    name: "ASICS Gel-Quantum",
    brand: "ASICS",
    category: "gym",
    categoryLabel: "Спортзал",
    img: "/assets/images/products/asics-gel-quantum.webp",
    alt: "ASICS Gel-Quantum — обувь для кросс-тренинга",
    review: "/ru/shoe-reviews/asics-gel-quantum-review/",
    href: "https://www.amazon.com/Asics-Quantum-1203A305011-Trainers-Classic/dp/B0F5BM3H36?linkCode=ll2&tag=flatfeetshoeg-20&linkId=f378b2848fa2f4bdcc5ddba10656a63d&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Смешанное кардио и умеренная силовая нагрузка",
    supportType: "Умеренная амортизация, устойчивая пятка",
    drop: "Стандартный",
    widthOptions: "Стандартная, широкая",
    priceTier: 2,
    scores: { stability: 7, cushioning: 7.5, wideFoot: 6.5, value: 7.5, durability: 7 }
  },
  birkenstockArizona: {
    name: "Birkenstock Arizona",
    brand: "Birkenstock",
    category: "sandals",
    categoryLabel: "Сандалии",
    img: "/assets/images/products/birkenstock-arizona.webp",
    alt: "Birkenstock Arizona — сандалии",
    review: "/ru/shoe-reviews/birkenstock-arizona-review/",
    href: "https://www.amazon.com/Birkenstock-Arizona-Unisex-Suede-Sandal/dp/B000W0GWYQ?linkCode=ll2&tag=flatfeetshoeg-20&linkId=49ee020215bf5f72c035bb44cac23af4&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Повседневная носка, готовность разносить пробковую стельку",
    supportType: "Анатомическая пробково-латексная стелька",
    drop: "Не применимо (сандалии)",
    widthOptions: "Регулируемые ремешки",
    priceTier: 2,
    scores: { stability: 8.5, cushioning: 5.5, wideFoot: 7, value: 7.5, durability: 9 }
  },
  oofosOoahh: {
    name: "OOFOS OOahh",
    brand: "OOFOS",
    category: "sandals",
    categoryLabel: "Сандалии",
    img: "/assets/images/products/oofos-ooahh.webp",
    alt: "OOFOS OOahh — восстановительные сандалии",
    review: "/ru/shoe-reviews/oofos-ooahh-review/",
    href: "https://www.amazon.com/OOFOS-Unisex-Ooahh-Slide-Sandal/dp/B00BRC4L14?linkCode=ll2&tag=flatfeetshoeg-20&linkId=1a9d9cebda9ba05c16969a587b084c31&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Не требуют разнашивания, восстановление после тренировок",
    supportType: "Мягкая фирменная пена, анатомическая поддержка свода стопы",
    drop: "Не применимо (сандалии)",
    widthOptions: "Шлёпанцы, без регулировки",
    priceTier: 2,
    scores: { stability: 5.5, cushioning: 9, wideFoot: 6, value: 7.5, durability: 6 }
  },
  superfeetGreen: {
    name: "Superfeet GREEN",
    brand: "Superfeet",
    category: "insoles",
    categoryLabel: "Стельки",
    img: "/assets/images/products/superfeet-green.webp",
    alt: "Superfeet GREEN — стельки",
    review: "/ru/shoe-reviews/superfeet-green-review/",
    href: "https://www.amazon.com/Superfeet-Insoles-Professional-Grade-Orthotic-Green/dp/B0033BPBD4?linkCode=ll2&tag=flatfeetshoeg-20&linkId=7bc94e78dca91b007a245488878d9681&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Выраженное, заметное опущение свода стопы",
    supportType: "Жёсткий биомеханический каркас",
    drop: "Высокий, жёсткий",
    widthOptions: "Подрезаются по размеру",
    priceTier: 2,
    scores: { stability: 9.5, cushioning: 5.5, wideFoot: 5, value: 7, durability: 8.5 }
  },
  powerstepPinnacle: {
    name: "Powerstep Pinnacle",
    brand: "Powerstep",
    category: "insoles",
    categoryLabel: "Стельки",
    img: "/assets/images/products/powerstep-pinnacle.webp",
    alt: "Powerstep Pinnacle — ортопедические стельки",
    review: "/ru/shoe-reviews/powerstep-pinnacle-review/",
    href: "https://www.amazon.com/PowerStep-Pinnacle-Orthotics-Podiatrist-Recommended/dp/B000KPKMU8?linkCode=ll2&tag=flatfeetshoeg-20&linkId=a147d09ab298c5ca0d07b477e1619f9e&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Лёгкое и умеренное плоскостопие, повседневная носка",
    supportType: "Полужёсткий каркас, мягкий верхний слой",
    drop: "Умеренный",
    widthOptions: "Подрезаются по размеру",
    priceTier: 2,
    scores: { stability: 7, cushioning: 7, wideFoot: 6.5, value: 8, durability: 6.5 }
  },
  sofSole: {
    name: "Sof Sole Plantar Fasciitis Insoles",
    brand: "Sof Sole",
    category: "insoles",
    categoryLabel: "Стельки",
    img: "/assets/images/products/sof-sole-plantar-fasciitis-insoles.webp",
    alt: "Sof Sole — стельки от подошвенного фасциита",
    review: "/ru/shoe-reviews/sof-sole-plantar-fasciitis-insoles-review/",
    href: "https://www.amazon.com/Sof-Sole-Performance-Full-length-11-12-5/dp/B08J7X75X3?linkCode=ll2&tag=flatfeetshoeg-20&linkId=83fa7ab032ced82202975127b88f75ce&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Лёгкое плоскостопие, ограниченный бюджет",
    supportType: "Гелевая пятка, умеренная поддержка свода стопы",
    drop: "Низкий",
    widthOptions: "Подрезаются по размеру",
    priceTier: 1,
    scores: { stability: 5, cushioning: 7.5, wideFoot: 6.5, value: 9, durability: 5.5 }
  },
  newBalance990: {
    name: "New Balance 990 Series",
    brand: "New Balance",
    category: "casual",
    categoryLabel: "Повседневная обувь",
    img: "/assets/images/products/new-balance-990.webp",
    alt: "New Balance 990 — повседневные кроссовки с поддержкой",
    review: "/ru/shoe-reviews/new-balance-990-review/",
    href: "https://www.amazon.com/New-Balance-Running-Reflection-X-Wide/dp/B0D2BPNGP5?linkCode=ll2&tag=flatfeetshoeg-20&linkId=8e9a8b0a3a3f37cb6ad84219e1c3bb45&language=en_US&ref_=as_li_ss_tl",
    bestFor: "Повседневная носка, широкая стопа/плоскостопие",
    supportType: "Жёсткая двухплотная подошва (технология ENCAP)",
    drop: "Стандартный",
    widthOptions: "От узкой до очень широкой",
    priceTier: 3,
    scores: { stability: 7.5, cushioning: 6.5, wideFoot: 9.5, value: 6.5, durability: 7.5 }
  }
};

function ffsgOverallScore(key) {
  var s = FFSG_PRODUCTS[key].scores;
  var avg = (s.stability + s.cushioning + s.wideFoot + s.value + s.durability) / 5;
  return Math.round(avg * 10) / 10;
}

function ffsgPriceLabel(tier) {
  return tier === 1 ? "$" : tier === 2 ? "$$" : "$$$";
}
