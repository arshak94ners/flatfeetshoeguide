const PRODUCTS = {
  brooksAdrenaline: {
    name: "Brooks Adrenaline GTS",
    img: "/assets/images/products/brooks-adrenaline-gts.webp",
    link: "https://www.amazon.com/gp/aw/d/B0DM37CZS8?_encoding=UTF8&amp;linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=544401b6d8ddfd973c1d03638211f1a8&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/brooks-adrenaline-gts-review/",
    alt: "Brooks Adrenaline GTS stability running shoe",
  },
  asicsGelKayano: {
    name: "ASICS Gel-Kayano",
    img: "/assets/images/products/asics-gel-kayano.webp",
    link: "https://www.amazon.com/ASICS-Gel-Kayano-Running-Shoes-Black/dp/B0GY9M595L?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=1c115f037a1c342274cea27287461985&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/asics-gel-kayano-review/",
    alt: "ASICS Gel-Kayano stability running shoe",
  },
  sauconyGuide: {
    name: "Saucony Guide",
    img: "/assets/images/products/saucony-guide.webp",
    link: "https://www.amazon.com/Saucony-Mens-Guide-Sneaker-SKYDIVER/dp/B0D31SKTH8?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=189c7beeee8a4a7c50fb37b2f52533d0&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/saucony-guide-review/",
    alt: "Saucony Guide stability running shoe",
  },
  hokaBondi: {
    name: "Hoka Bondi",
    img: "/assets/images/products/hoka-bondi.webp",
    link: "https://www.amazon.com/Hoka-Bondi-Sneaker-Black-White/dp/B0D5GCZYVJ?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=154e623ea0a5e8ea2442f31050983005&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/hoka-bondi-review/",
    alt: "Hoka Bondi maximalist cushioned shoe",
  },
  nb990: {
    name: "New Balance 990 Series",
    img: "/assets/images/products/new-balance-990.webp",
    link: "https://www.amazon.com/New-Balance-Running-Reflection-X-Wide/dp/B0D2BPNGP5?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=8e9a8b0a3a3f37cb6ad84219e1c3bb45&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/new-balance-990-review/",
    alt: "New Balance 990 Series shoe",
  },
  nb928: {
    name: "New Balance 928",
    img: "/assets/images/products/new-balance-928.webp",
    link: "https://www.amazon.com/New-Balance-928v3-Walking-Black/dp/B01MXNYU7O?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=220f5270335c803b22d9694085de911b&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/new-balance-928-review/",
    alt: "New Balance 928 walking shoe",
  },
  birkenstockArizona: {
    name: "Birkenstock Arizona",
    img: "/assets/images/products/birkenstock-arizona.webp",
    link: "https://www.amazon.com/Birkenstock-Arizona-Unisex-Suede-Sandal/dp/B000W0GWYQ?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=49ee020215bf5f72c035bb44cac23af4&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/birkenstock-arizona-review/",
    alt: "Birkenstock Arizona sandal",
  },
  superfeetGreen: {
    name: "Superfeet GREEN",
    img: "/assets/images/products/superfeet-green.webp",
    link: "https://www.amazon.com/Superfeet-Insoles-Professional-Grade-Orthotic-Green/dp/B0033BPBD4?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=7bc94e78dca91b007a245488878d9681&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/superfeet-green-review/",
    alt: "Superfeet GREEN orthotic insole",
  },
  powerstepPinnacle: {
    name: "Powerstep Pinnacle",
    img: "/assets/images/products/powerstep-pinnacle.webp",
    link: "https://www.amazon.com/PowerStep-Pinnacle-Orthotics-Podiatrist-Recommended/dp/B000KPKMU8?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=a147d09ab298c5ca0d07b477e1619f9e&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/powerstep-pinnacle-review/",
    alt: "Powerstep Pinnacle insole",
  },
  sofSole: {
    name: "Sof Sole Plantar Fasciitis Insoles",
    img: "/assets/images/products/sof-sole-plantar-fasciitis-insoles.webp",
    link: "https://www.amazon.com/Sof-Sole-Performance-Full-length-11-12-5/dp/B08J7X75X3?linkCode=ll2&amp;tag=flatfeetshoeg-20&amp;linkId=83fa7ab032ced82202975127b88f75ce&amp;language=en_US&amp;ref_=as_li_ss_tl",
    reviewHref: "/shoe-reviews/sof-sole-plantar-fasciitis-insoles-review/",
    alt: "Sof Sole Plantar Fasciitis insole",
  },
};

function pick(key, overrides) {
  const base = PRODUCTS[key];
  return { img: base.img, link: base.link, reviewHref: base.reviewHref, alt: base.alt, name: base.name, ...overrides };
}

const PAGES = [
  // 1
  {
    relPath: "best-shoes-for-plantar-fasciitis-and-flat-feet/",
    navSection: "shoes",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Best Shoes for Plantar Fasciitis and Flat Feet", path: "best-shoes-for-plantar-fasciitis-and-flat-feet/" },
    ],
    title: "Best Shoes for Plantar Fasciitis and Flat Feet in 2026",
    metaDescription: "Shoes that address both flat feet and plantar fasciitis at once, chosen for heel cushioning, arch support, and a firm enough base to actually help both problems.",
    ogDescription: "Shoes chosen for people dealing with flat feet and plantar fasciitis together, not just one or the other.",
    eyebrow: "Updated July 2026",
    h1: "Best Shoes for Plantar Fasciitis and Flat Feet",
    lede: "Flat feet and plantar fasciitis show up together often enough that treating them as separate problems usually backfires &mdash; a shoe that fixes one can make the other worse. These picks are chosen for both at once.",
    hasProducts: true,
    toc: [
      { id: "why-linked", label: "Why these two overlap" },
      { id: "picks", label: "Our picks" },
      { id: "what-to-look-for", label: "What actually matters in a shoe" },
      { id: "faq", label: "FAQ" },
    ],
    picksHeading: "Our picks for plantar fasciitis and flat feet",
    picks: [
      productPick(1, pick("brooksAdrenaline", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best all-round pick</span>`,
        blurb: "Plantar fasciitis needs a firm, supportive base under the arch so the fascia isn't doing the stabilizing work itself, and flat feet need the same thing for a different reason. The Adrenaline GTS's GuideRails support hits both needs without feeling like a medical device.",
        pros: ["Firm enough arch support to rest the plantar fascia", "Comfortable for all-day wear, not just workouts", "Wide width available for swollen or wider feet"],
        cons: ["Not the softest heel strike for acute flare-ups", "Firmer than people expect coming from soft sneakers", "Overkill if your fasciitis is already resolving"],
        buyFor: "Anyone managing both flat feet and ongoing plantar fasciitis who needs one shoe for daily wear.",
        avoidFor: "Acute flare-ups needing maximum heel cushioning over arch support.",
      })),
      productPick(2, pick("hokaBondi", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best for acute heel pain</span>`,
        blurb: "When the heel itself is the main pain point, the Bondi's thick, soft midsole absorbs impact before it reaches the fascia's attachment point, which is often the most useful thing during an active flare-up.",
        pros: ["Exceptional heel cushioning for acute pain", "Rocker sole reduces strain through push-off", "Roomy toe box accommodates swelling"],
        cons: ["Less structured arch support than a true stability shoe", "Tall stack height feels unstable to some wearers", "Bulky look, not for dressier settings"],
        buyFor: "People in an active plantar fasciitis flare-up who need maximum shock absorption right now.",
        avoidFor: "Anyone whose main issue is arch collapse rather than heel pain specifically.",
      })),
      productPick(3, pick("superfeetGreen", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best insole add-in</span>`,
        blurb: "If your current shoes otherwise fit well, adding a rigid, deep-heel-cup insole like this one can rebuild the arch support that both conditions need, without buying an entirely new pair of shoes.",
        pros: ["Deep heel cup stabilizes the heel strike", "Rigid shell reduces arch strain through the day", "Works inside most existing supportive shoes"],
        cons: ["Too rigid to pair with already-soft, unstructured shoes", "Takes up volume — check fit before buying", "Not a substitute for a properly fitting shoe"],
        buyFor: "Anyone whose shoes fit well otherwise but lack enough built-in arch support.",
        avoidFor: "Soft, minimal shoes with no room for an aftermarket insole.",
      })),
    ],
    bodyHtml: `
        <h2 id="why-linked">Why plantar fasciitis and flat feet overlap so often</h2>
        <p>The plantar fascia is a thick band of tissue running along the bottom of the foot, from the heel to the base of the toes, and it plays a real role in holding the arch's shape under load. When the arch is already flattened, that band gets stretched further with every step, which is exactly the kind of repeated strain that leads to plantar fasciitis in the first place. That's why the two conditions show up together so often &mdash; it's not a coincidence, it's cause and effect.</p>
        <p>This also explains why treating them separately doesn't always work. A shoe built purely to cushion heel pain, with no real arch support, can leave the underlying flat-foot mechanics untouched, and the fasciitis often comes back. A shoe built purely for arch support without enough cushioning under the heel can aggravate an active flare-up. The shoes above are chosen because they handle both sides of the problem at the same time.</p>

        <div class="callout">
          <strong>Shoes help, but they're not the whole treatment</strong>
          Calf stretching, morning stretches before your first steps, and short bouts of rest from high-impact activity all matter alongside footwear. See our <a href="/guides/flat-feet-exercises-and-stretches/">flat feet exercises and stretches guide</a> for a routine that pairs well with the shoes above.
        </div>

        <h2 id="what-to-look-for">What actually matters in a shoe for both conditions</h2>
        <ul>
          <li><strong>A firm heel counter.</strong> This locks the heel in place at the moment of impact, reducing the strain that travels into the plantar fascia.</li>
          <li><strong>Real arch support, not just a soft footbed.</strong> A supportive midsole that resists collapsing inward takes over work the fascia would otherwise have to do.</li>
          <li><strong>Enough heel cushioning to absorb impact.</strong> Especially important during an active flare-up, before other structural support even becomes relevant.</li>
          <li><strong>A slight heel-to-toe drop.</strong> A completely flat (zero-drop) shoe increases tension through the calf and plantar fascia during the healing phase; a moderate 8-12mm drop is usually more comfortable.</li>
        </ul>
        <p>If pain persists for more than a few weeks despite a supportive shoe, or is severe enough to change how you walk, that's worth a visit to a podiatrist rather than trying to shoe your way out of it &mdash; see our <a href="/medical-disclaimer/">medical disclaimer</a> for more on where this site's advice ends and professional care should start.</p>`,
    faq: [
      { q: "Can the right shoes alone fix plantar fasciitis?", a: "Shoes can meaningfully reduce strain and discomfort, but plantar fasciitis usually responds best to a combination of supportive footwear, calf and foot stretching, and short-term activity modification. If pain persists for more than a few weeks, see a podiatrist." },
      { q: "Should I wear supportive shoes even at home?", a: "Yes, if that's practical for you. Walking barefoot or in unsupportive slippers at home is a common reason plantar fasciitis doesn't improve despite good shoes elsewhere in the day." },
      { q: "Do I need a shoe or an insole, or both?", a: "It depends on your current shoes. If they already fit well and just lack support, a rigid insole like the Superfeet GREEN can be enough. If the shoe itself is unsupportive, replacing it is usually more effective than adding an insole on top." },
    ],
  },

  // 2
  {
    relPath: "best-shoes-for-overpronation/",
    navSection: "shoes",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Best Shoes for Overpronation", path: "best-shoes-for-overpronation/" },
    ],
    title: "Best Shoes for Overpronation in 2026 — Not Just for Flat Feet",
    metaDescription: "The best stability and motion-control shoes for overpronation, whether or not you have flat feet, with honest pros, cons, and who each shoe actually suits.",
    ogDescription: "Overpronation isn't the same thing as flat feet. Here are shoes chosen specifically for controlling excess inward roll of the foot.",
    eyebrow: "Updated July 2026",
    h1: "Best Shoes for Overpronation",
    lede: "Overpronation and flat feet get treated as the same thing, but they're not &mdash; you can have one without the other. These picks target overpronation specifically, whatever your arch height looks like.",
    hasProducts: true,
    toc: [
      { id: "not-the-same", label: "Overpronation vs. flat feet" },
      { id: "picks", label: "Our picks" },
      { id: "how-to-tell", label: "How to tell if you overpronate" },
      { id: "faq", label: "FAQ" },
    ],
    picksHeading: "Our picks for overpronation",
    picks: [
      productPick(1, pick("asicsGelKayano", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best for significant overpronation</span>`,
        blurb: "For overpronation that's clearly visible in worn-out shoes or noticeable inward ankle roll, the Gel-Kayano's firmer, more structured medial support gives something concrete to push back against.",
        pros: ["Firm, well-documented medial support", "Plush cushioning offsets the firmer structure", "Durable outsole for higher mileage"],
        cons: ["Can feel like overkill for mild overpronation", "Narrower midfoot fit for some wearers", "Premium price point"],
        buyFor: "Runners and walkers with clearly significant overpronation, regardless of arch height.",
        avoidFor: "Mild overpronators who'd feel overcorrected by this much structure.",
      })),
      productPick(2, pick("brooksAdrenaline", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best for mild-to-moderate</span>`,
        blurb: "GuideRails support limits excess motion at the heel and forefoot from the outside, rather than forcing correction through the arch, which makes it a gentler entry point for people newly diagnosed with overpronation.",
        pros: ["Guides motion without feeling restrictive", "Comfortable enough for all-day wear", "Consistent, predictable fit release over release"],
        cons: ["Not enough structure for severe overpronation", "Heavier than neutral daily trainers", "Firmer ride than max-cushion shoes"],
        buyFor: "Anyone newly dealing with mild-to-moderate overpronation who wants a gentler starting point.",
        avoidFor: "Severe overpronators who've already outgrown lighter stability shoes.",
      })),
      productPick(3, pick("sauconyGuide", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best value</span>`,
        blurb: "A sensible, lower-cost way to test whether you actually need structured support before committing to a premium pair, without giving up real stability features.",
        pros: ["Lower price than most stability competitors", "Lighter feel than firmer options", "Good for figuring out how much support you actually need"],
        cons: ["Less structure for severe overpronation", "Shorter outsole lifespan than premium picks", "Narrower size range"],
        buyFor: "Budget-conscious buyers with mild overpronation who aren't sure how much shoe they need yet.",
        avoidFor: "Anyone who already knows they need firm, structured control.",
      })),
    ],
    bodyHtml: `
        <h2 id="not-the-same">Overpronation and flat feet aren't the same thing</h2>
        <p>Overpronation describes what your foot <em>does</em> when it lands &mdash; it rolls inward more than a "neutral" amount as your weight moves from heel to toe. Flat feet describe the <em>shape</em> of your arch when you're standing still. The two are correlated because a collapsed arch often leads to more inward roll, but plenty of people with flat feet don't overpronate significantly, and some people with normal-looking arches do. If you've been recommended a "stability shoe for flat feet" without anyone actually watching how your foot moves, it's worth understanding this distinction before buying.</p>
        <p>Because of that overlap, most of the shoes recommended for flat feet on this site are also solid overpronation picks and vice versa &mdash; the difference is which factor is actually driving your discomfort.</p>

        <h2 id="how-to-tell" style="margin-top:2rem;">How to tell if you actually overpronate</h2>
        <p>A few practical signals, none of which require special equipment:</p>
        <ul>
          <li><strong>Worn-out shoe pattern.</strong> Check the outsole of an old, well-worn pair. Wear concentrated along the inner edge of the heel and forefoot is a classic overpronation signature.</li>
          <li><strong>The wet footprint test.</strong> Wet the sole of your foot and step onto a dry, dark surface. A footprint showing almost the entire sole, with little to no arch curve, points toward a flatter arch that often (not always) comes with overpronation. See our full <a href="/guides/how-to-tell-if-you-have-flat-feet/">at-home flat feet test</a> for details.</li>
          <li><strong>Ankle position in a mirror.</strong> Stand naturally in front of a mirror and look at your ankles from behind. A noticeable inward lean of the ankle, rather than a straight vertical line, suggests overpronation during standing, which usually shows up more during walking and running too.</li>
        </ul>
        <p>None of these replace a proper gait analysis at a running specialty store or a podiatrist's assessment, but they're a reasonable starting point before buying a shoe based on a guess.</p>

        <div class="callout">
          <strong>Stability, not motion control, for most people</strong>
          Most overpronation, even when noticeable, is mild-to-moderate rather than severe. See our <a href="/guides/stability-vs-neutral-vs-motion-control/">stability vs. neutral vs. motion control guide</a> for how to figure out which category actually fits, rather than defaulting to the firmest option available.
        </div>`,
    faq: [
      { q: "Can you overpronate without having flat feet?", a: "Yes. Overpronation is about how the foot moves on impact, while flat feet describe arch height at rest. They're correlated but not identical, and some people with normal-looking arches still overpronate noticeably." },
      { q: "Do I need a podiatrist to know if I overpronate?", a: "Not necessarily. A worn-shoe check, the wet footprint test, and a mirror check of ankle position at rest are reasonable starting signals. A running specialty store gait analysis or a podiatrist visit is more precise if you want certainty before a purchase." },
      { q: "Is a firmer shoe always better for overpronation?", a: "No. Overcorrecting with a motion-control shoe when your overpronation is actually mild can feel rigid and uncomfortable without adding real benefit. Match the shoe's firmness to how significant your overpronation actually is." },
    ],
  },

  // 3
  {
    relPath: "best-shoes-for-wide-flat-feet/",
    navSection: "shoes",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Best Shoes for Wide Flat Feet", path: "best-shoes-for-wide-flat-feet/" },
    ],
    title: "Best Shoes for Wide Flat Feet in 2026",
    metaDescription: "Shoes for people dealing with both a flat arch and a wide forefoot, chosen for true wide-width options and toe boxes that don't pinch.",
    ogDescription: "Wide-width shoes chosen specifically for flat, wider feet — not just marketed as 'roomy'.",
    eyebrow: "Updated July 2026",
    h1: "Best Shoes for Wide Flat Feet",
    lede: "A collapsed arch tends to splay the forefoot wider under load, which is exactly why flat feet and wide feet show up together so often. These picks have genuine wide-width options, not just a slightly softer upper.",
    hasProducts: true,
    toc: [
      { id: "why-linked", label: "Why flat feet run wide" },
      { id: "picks", label: "Our picks" },
      { id: "checking-width", label: "How to check if you actually need wide" },
      { id: "faq", label: "FAQ" },
    ],
    picksHeading: "Our picks for wide flat feet",
    picks: [
      productPick(1, pick("nb990", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best wide-width selection</span>`,
        blurb: "New Balance has built its reputation partly on offering some of the broadest width ranges in mainstream footwear, and the 990 series pairs that with genuine arch support, not just a roomy upper.",
        pros: ["Wide and extra-wide options widely available", "Supportive enough for all-day wear", "Classic styling works in casual and semi-formal settings"],
        cons: ["Premium price point for a lifestyle shoe", "Bulkier silhouette than running-focused options", "Break-in period for the upper"],
        buyFor: "Anyone needing a genuinely wide fit alongside real arch support for daily wear.",
        avoidFor: "Runners wanting a dedicated performance running shoe.",
      })),
      productPick(2, pick("nb928", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best for all-day standing</span>`,
        blurb: "Built specifically for walking and standing rather than running, with the same reliable wide-width range and a firmer, more supportive base underfoot.",
        pros: ["Very wide width options available", "Firm, supportive sole for standing jobs", "Consistent, predictable fit"],
        cons: ["Not built for running or high-impact activity", "Dated styling compared to newer releases", "Heavier than lifestyle-focused shoes"],
        buyFor: "People on their feet all day who need a wide, stable base rather than a running shoe.",
        avoidFor: "Runners, or anyone wanting a lighter, more modern-looking shoe.",
      })),
      productPick(3, pick("brooksAdrenaline", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best wide running shoe</span>`,
        blurb: "Offers a genuine wide option without sacrificing the GuideRails support system that makes it a reliable stability pick in the first place.",
        pros: ["True wide width without losing support features", "Comfortable for running, walking, and standing", "Widely stocked, easy to try in person"],
        cons: ["Standard width runs snug for some wide feet", "Firmer ride than max-cushion neutral shoes", "Not ideal for severe overpronation"],
        buyFor: "Runners and walkers needing a wide stability shoe rather than a neutral or lifestyle option.",
        avoidFor: "Anyone needing motion control or a completely cushioned, structure-free ride.",
      })),
    ],
    bodyHtml: `
        <h2 id="why-linked">Why flat feet and wide feet go together</h2>
        <p>When the arch collapses under load, the foot doesn't just flatten vertically &mdash; it tends to spread horizontally too, since there's less arch structure holding the midfoot's width in check. That's why so many people with flat feet also find themselves squeezed in standard-width shoes, even when their foot didn't measure as wide in a specific fitting. The forefoot splay happens dynamically, under body weight, which a static measurement doesn't always capture.</p>
        <p>This matters because a shoe that has plenty of arch support but a narrow toe box can still cause real discomfort &mdash; pinching, numbness, or bunions made worse over time. The picks above were chosen because they combine genuine wide-width options with real arch support, rather than just one or the other.</p>

        <h2 id="checking-width">How to check if you actually need a wide width</h2>
        <ul>
          <li><strong>Check for pressure marks.</strong> Red marks or indentations on the sides of your feet after wearing standard-width shoes are a clear sign.</li>
          <li><strong>Trace your foot late in the day.</strong> Feet swell slightly through the day, especially if they're already flat and under more load. Trace both feet in the evening, standing, and compare the width to your current shoes' insole.</li>
          <li><strong>Don't rely on shoe size alone.</strong> Length and width are independent measurements. A correct length in a narrow width can still cause the same problems as buying too-short shoes.</li>
        </ul>
        <p>Most of the brands above offer a "D" (standard), "2E" (wide), and sometimes "4E" (extra-wide) range for men's sizing, and a similarly tiered system for women's &mdash; checking the specific width option before buying, rather than assuming "wide-looking" styling means a true wide fit, saves a lot of returns.</p>

        <div class="callout">
          <strong>Bunions change the calculation</strong>
          If width discomfort is concentrated specifically around the big toe joint rather than across the whole forefoot, that's more specifically a bunion issue. See our <a href="/best-shoes-for-bunions-and-flat-feet/">best shoes for bunions and flat feet guide</a> for picks chosen around that specific pressure point.
        </div>`,
    faq: [
      { q: "Does having flat feet always mean I need wide shoes?", a: "No, but it's common enough to check. A collapsed arch often causes the forefoot to spread wider under load, even if a static foot measurement doesn't show it. Checking for pressure marks after wearing standard-width shoes is a quick way to tell." },
      { q: "Is a wide toe box the same as a wide shoe?", a: "Not quite. A wide toe box refers to the front of the shoe specifically, while a wide-width shoe is sized wider throughout, including the midfoot. Some shoes offer a roomy toe box without a true wide-width option, which helps less if your midfoot is also wide." },
      { q: "Should I size up instead of buying a wide width?", a: "Sizing up adds length, not width, so it doesn't reliably fix a width problem and can create heel-slip issues instead. A true wide-width option in your correct length is almost always the better fix." },
    ],
  },

  // 4
  {
    relPath: "best-shoes-for-bunions-and-flat-feet/",
    navSection: "shoes",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Best Shoes for Bunions and Flat Feet", path: "best-shoes-for-bunions-and-flat-feet/" },
    ],
    title: "Best Shoes for Bunions and Flat Feet in 2026",
    metaDescription: "Shoes chosen for people managing bunions and flat feet together, with a roomy toe box, minimal seams over the joint, and real arch support.",
    ogDescription: "Shoes that address a bunion-friendly toe box and flat-foot arch support at the same time.",
    eyebrow: "Updated July 2026",
    h1: "Best Shoes for Bunions and Flat Feet",
    lede: "Flat feet put extra outward pressure on the big toe joint, which is part of why bunions and flat feet so often show up in the same person. These picks give the joint room without giving up arch support.",
    hasProducts: true,
    toc: [
      { id: "why-linked", label: "Why they overlap" },
      { id: "picks", label: "Our picks" },
      { id: "what-to-look-for", label: "What to look for" },
      { id: "faq", label: "FAQ" },
    ],
    picksHeading: "Our picks for bunions and flat feet",
    picks: [
      productPick(1, pick("hokaBondi", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best roomy toe box</span>`,
        blurb: "A genuinely wide, rounded toe box that doesn't taper sharply toward the big toe, which matters more for bunion comfort than almost any other single design feature.",
        pros: ["Rounded toe box avoids pressure on the bunion joint", "Soft upper material flexes rather than digging in", "Maximal cushioning reduces overall foot fatigue"],
        cons: ["Less structured arch support than a dedicated stability shoe", "Tall stack height feels unstable to some wearers", "Bulky look"],
        buyFor: "Anyone whose bunion pain is aggravated by any snugness across the forefoot.",
        avoidFor: "People needing firm, structured arch support above all else.",
      })),
      productPick(2, pick("nb990", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best balance of room and support</span>`,
        blurb: "Combines a genuine wide-width option with real arch support, which matters since a bunion-friendly toe box alone doesn't solve the flat-foot half of the problem.",
        pros: ["True wide and extra-wide options", "Supportive arch, not just a soft upper", "Durable enough for daily wear"],
        cons: ["Higher price point", "Break-in period for the upper material", "Bulkier than minimal lifestyle shoes"],
        buyFor: "Anyone needing both bunion room and genuine arch support in one shoe.",
        avoidFor: "Anyone wanting a lightweight athletic shoe over a supportive daily one.",
      })),
      productPick(3, pick("birkenstockArizona", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best adjustable option</span>`,
        blurb: "The adjustable straps let you fully customize where pressure sits across the forefoot, which is useful for a bunion that's uncomfortable with any fixed structure pressing on it.",
        pros: ["Fully adjustable strap placement avoids the bunion entirely", "Contoured cork footbed offers real arch shaping", "Breathable, open design reduces heat and friction"],
        cons: ["Open-back design isn't right for every setting", "Break-in period for the cork footbed", "Less structured support than a closed athletic shoe"],
        buyFor: "Warmer climates or casual settings where an open sandal is practical.",
        avoidFor: "Anyone needing closed-toe protection or firm structured support.",
      })),
    ],
    bodyHtml: `
        <h2 id="why-linked">Why bunions and flat feet overlap</h2>
        <p>A bunion forms when the big toe joint is pushed outward over time, and a collapsed arch changes how weight travels across the forefoot in a way that increases exactly that kind of pressure. It's not the only cause of bunions &mdash; genetics and footwear history both play a role &mdash; but flat feet are a well-documented contributing factor, which is why treating the two together, rather than picking shoes for one and hoping the other works out, tends to give better results.</p>
        <p>The core tension is that shoes built for aggressive arch support often use a more structured, narrower last through the forefoot, while shoes built for bunion comfort often skip real arch support entirely. The picks above were chosen specifically because they don't force that trade-off.</p>

        <h2 id="what-to-look-for">What actually matters for this combination</h2>
        <ul>
          <li><strong>A wide, rounded toe box</strong> that doesn't taper sharply toward the big toe &mdash; this is the single biggest factor in bunion comfort.</li>
          <li><strong>Minimal seams or overlays</strong> directly over the bunion joint, since stitching and material overlaps are common friction points.</li>
          <li><strong>Genuine arch support</strong> that doesn't rely on a narrow, structured last to deliver it.</li>
          <li><strong>Soft, flexible upper materials</strong> like mesh or soft leather that can flex around the joint rather than pressing into it rigidly.</li>
        </ul>

        <div class="callout">
          <strong>When shoes aren't enough</strong>
          For a mild, early-stage bunion, the right shoe can meaningfully reduce pain and slow progression. For a severe or rapidly worsening bunion, footwear changes alone won't reverse the joint deformity, and it's worth a podiatrist consultation about other options. See our <a href="/medical-disclaimer/">medical disclaimer</a> for where this site's guidance ends.
        </div>`,
    faq: [
      { q: "Can the right shoes fix a bunion?", a: "The right shoes can meaningfully reduce pain and may slow how quickly a mild bunion worsens, but they generally can't reverse an existing bunion deformity. For a severe or worsening bunion, a podiatrist consultation is worth having alongside footwear changes." },
      { q: "Do I need a wide shoe if I have a bunion but not wide feet otherwise?", a: "Often yes, specifically at the forefoot. A bunion pushes the big toe joint outward, which can need extra width right at that point even if the rest of your foot measures as standard width." },
      { q: "Are sandals better than closed shoes for bunions?", a: "Not universally, but an adjustable sandal like the Birkenstock Arizona can be more comfortable for some people because you control exactly where the straps sit relative to the bunion. Closed shoes with a wide, rounded toe box work well too, and offer more protection." },
    ],
  },

  // 5
  {
    relPath: "best-shoes-for-diabetics-with-flat-feet/",
    navSection: "shoes",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Best Shoes for Diabetics with Flat Feet", path: "best-shoes-for-diabetics-with-flat-feet/" },
    ],
    title: "Best Shoes for Diabetics with Flat Feet in 2026",
    metaDescription: "Shoe features that matter most for diabetic foot health combined with flat feet, plus picks with seamless interiors, protective cushioning, and depth for orthotics.",
    ogDescription: "What actually matters in a shoe when you're managing diabetes and flat feet together, with picks chosen for protection first.",
    eyebrow: "Updated July 2026",
    h1: "Best Shoes for Diabetics with Flat Feet",
    lede: "Diabetic foot care raises the stakes on shoe choice well beyond comfort &mdash; reduced sensation means a poorly fitting shoe can cause real damage before it's even felt. Here's what matters, with picks chosen around protection first.",
    hasProducts: true,
    toc: [
      { id: "why-different", label: "Why this is different from ordinary shoe shopping" },
      { id: "picks", label: "Our picks" },
      { id: "daily-checks", label: "Daily habits that matter as much as the shoe" },
      { id: "faq", label: "FAQ" },
    ],
    picksHeading: "Shoes worth considering",
    picks: [
      productPick(1, pick("nb990", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9733; <span class="muted" style="font-weight:400;">Best overall protective option</span>`,
        blurb: "A smooth, mostly seam-free interior and genuine depth for a custom or aftermarket insole make this a reasonable starting point, alongside its true wide-width availability for feet that need extra room without pressure points.",
        pros: ["Wide and extra-wide options reduce pressure-point risk", "Enough internal depth for a diabetic insole if prescribed", "Supportive, stable base reduces fall risk"],
        cons: ["Not marketed or certified specifically as a diabetic shoe", "Premium price point", "Break-in period for the upper"],
        buyFor: "A starting point for people wanting a well-fitting, protective everyday shoe alongside podiatrist guidance.",
        avoidFor: "Anyone who has been specifically prescribed a certified diabetic/therapeutic shoe by their doctor — follow that guidance instead.",
      })),
      productPick(2, pick("hokaBondi", {
        badge: `&#9733;&#9733;&#9733;&#9733;&#9734; <span class="muted" style="font-weight:400;">Best pressure-reducing cushioning</span>`,
        blurb: "Thick, even cushioning spreads pressure across a larger area of the foot rather than concentrating it at the heel or forefoot, which is a relevant consideration when sensation is reduced.",
        pros: ["Very even pressure distribution underfoot", "Soft upper avoids rigid pressure points", "Rocker sole reduces strain through the step"],
        cons: ["Less structured arch support than a stability shoe", "Tall stack height changes balance for some wearers", "Not a substitute for a properly measured therapeutic shoe"],
        buyFor: "People prioritizing even pressure distribution and softness over structured arch correction.",
        avoidFor: "Anyone needing firm arch support as the primary concern.",
      })),
    ],
    bodyHtml: `
        <div class="callout">
          <strong>Read this before anything else on this page</strong>
          Diabetic foot complications are a serious medical issue, and reduced sensation from neuropathy means injuries can go unnoticed until they're severe. This page reflects general, non-medical footwear guidance based on public information about diabetic foot care, not a substitute for guidance from your doctor or podiatrist. If you've been prescribed specific therapeutic or diabetic shoes, follow that guidance over anything suggested here. See our full <a href="/medical-disclaimer/">medical disclaimer</a>.
        </div>

        <h2 id="why-different">Why this is different from ordinary shoe shopping</h2>
        <p>For most people, an uncomfortable shoe causes noticeable pain that prompts a change before real damage happens. Diabetic neuropathy can blunt or eliminate that warning signal, which means a seam rubbing the wrong way, a pressure point from a poor fit, or a small object inside the shoe can cause a blister or wound without ever being felt. Combined with flat feet &mdash; which already redistribute pressure unevenly across the foot &mdash; the margin for error in shoe choice gets meaningfully smaller.</p>

        <h2 id="what-to-look-for" style="margin-top:2rem;">What to prioritize in a shoe</h2>
        <ul>
          <li><strong>Seamless or minimally-seamed interior.</strong> Internal seams are a common, preventable source of friction injuries.</li>
          <li><strong>Extra depth.</strong> Enough internal volume to accommodate a specialist-prescribed diabetic insole without cramming the foot.</li>
          <li><strong>Breathable materials.</strong> Reduces moisture buildup, which matters for skin integrity.</li>
          <li><strong>A wide, accommodating toe box.</strong> Reduces pressure points and lets toes sit naturally rather than crowded together.</li>
          <li><strong>A firm, stable base.</strong> Flat feet plus reduced sensation can affect balance; a stable sole reduces fall risk.</li>
        </ul>
        <p>If your doctor has prescribed a certified therapeutic or diabetic shoe (sometimes called an "A5500" shoe in the US, covered in some cases by insurance), that prescription should take priority over any general recommendation on this page.</p>

        <h2 id="daily-checks">Daily habits that matter as much as the shoe</h2>
        <p>Podiatrists commonly recommend a daily visual foot check (using a mirror if needed) to catch cuts, blisters, redness, or swelling before they become serious, precisely because reduced sensation means you can't rely on feeling a problem develop. Checking the inside of shoes for debris or worn interior linings before putting them on is a similarly low-effort habit worth building.</p>`,
    faq: [
      { q: "Is this page a substitute for a podiatrist's advice?", a: "No. This page reflects general, non-medical footwear guidance based on public information about diabetic foot care. If you have diabetes, regular podiatrist checkups and any specific footwear guidance from your doctor should take priority over anything suggested here." },
      { q: "What is a 'diabetic shoe' exactly?", a: "It typically refers to a therapeutic shoe designed with a seamless interior, extra depth, and pressure-reducing features, sometimes prescribed by a doctor and in some cases partially covered by insurance (in the US, often referred to as an A5500 shoe). Not every diabetic needs one, but they're worth asking a doctor about if you have neuropathy or a history of foot ulcers." },
      { q: "Why does flat feet make diabetic foot care more complicated?", a: "Flat feet already redistribute pressure unevenly across the foot, which combined with reduced sensation from neuropathy increases the risk of an unnoticed pressure injury developing in a spot that's taking more load than it should." },
    ],
  },

  // 6 - guide
  {
    relPath: "guides/flat-feet-exercises-and-stretches/",
    navSection: "guides",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Guides", path: "guides/" },
      { name: "Flat Feet Exercises and Stretches", path: "guides/flat-feet-exercises-and-stretches/" },
    ],
    title: "Flat Feet Exercises and Stretches That Actually Help",
    metaDescription: "A realistic look at which exercises and stretches help with flat feet discomfort, what they can and can't change, and a simple routine to start with.",
    ogDescription: "What exercises can and can't do for flat feet, plus a simple, realistic routine.",
    eyebrow: "Flat Feet Academy",
    h1: "Flat Feet Exercises and Stretches That Actually Help",
    lede: "Exercise won't rebuild a bone arch that's flat in adulthood, but it can meaningfully reduce discomfort by strengthening the muscles that support the foot and calf. Here's what's realistic, and a simple routine to start with.",
    hasProducts: false,
    toc: [
      { id: "what-exercise-can-do", label: "What exercise can (and can't) do" },
      { id: "calf-stretch", label: "Calf stretch" },
      { id: "short-foot", label: "Short foot exercise" },
      { id: "towel-scrunch", label: "Towel scrunches" },
      { id: "routine", label: "A simple starting routine" },
      { id: "faq", label: "FAQ" },
    ],
    bodyHtml: `
        <h2 id="what-exercise-can-do">What exercise can (and can't) do for flat feet</h2>
        <p>It's worth being honest about this upfront: in adults, the bones and ligaments that determine arch height are largely set, and no exercise routine will structurally rebuild a collapsed arch back to a "normal" shape. What exercise <em>can</em> do is strengthen the muscles running through the foot, ankle, and calf that support whatever arch structure you have, which in practice often means less fatigue, less pain, and better control of excess pronation during activity. That's a genuinely useful outcome even though it's a different one than "fixing" the arch itself.</p>
        <p>In children whose bones are still developing, flat feet often resolve naturally as arches form through normal growth and activity &mdash; see our guide on <a href="/guides/flat-feet-in-children/">flat feet in children</a> for that separate conversation, since the exercise expectations are different at that age.</p>

        <h2 id="calf-stretch">Calf stretch</h2>
        <p>Tight calf muscles increase strain on the plantar fascia and arch with every step, so this is usually the highest-value stretch to start with. Stand facing a wall, step one foot back, keep that back heel flat on the ground, and lean forward gently until you feel a stretch through the calf. Hold 30 seconds, switch legs, repeat 2-3 times per side. Do this daily, ideally both morning and evening.</p>

        <h2 id="short-foot">Short foot exercise</h2>
        <p>This targets the small stabilizing muscles along the arch directly. Sit with your foot flat on the floor, and without curling your toes, try to draw the ball of your foot toward your heel, shortening the foot slightly and lifting the arch a small amount. Hold 5 seconds, relax, repeat 10 times per foot. It feels subtle and slightly awkward at first &mdash; that's normal, and it gets easier to isolate the movement with practice.</p>

        <h2 id="towel-scrunch">Towel scrunches</h2>
        <p>Place a small towel flat on the floor, put your bare foot on one end, and use your toes to scrunch the towel toward you, then push it back out. This strengthens the intrinsic muscles along the sole of the foot. Do 2-3 sets of 10-15 scrunches per foot, a few times a week.</p>

        <div class="callout">
          <strong>Consistency matters more than intensity</strong>
          These exercises work through gradual strength gains, not a single dramatic session. A few minutes daily for several weeks will do more than an occasional long session. Pair this with supportive footwear during the day &mdash; exercises and shoes address different parts of the same problem, not one instead of the other.
        </div>

        <h2 id="routine">A simple starting routine</h2>
        <ol>
          <li><strong>Morning:</strong> Calf stretch, both sides (before your first steps, when calves are tightest).</li>
          <li><strong>A few times a week:</strong> Short foot exercise, 10 reps per foot, plus towel scrunches, 2-3 sets per foot.</li>
          <li><strong>Evening:</strong> Calf stretch again, both sides.</li>
        </ol>
        <p>Give it 4-6 weeks of reasonably consistent practice before judging whether it's helping &mdash; strength and control changes take longer to notice than a single stretch session would suggest. If pain is significant or worsening rather than gradually easing, that's a signal to see a podiatrist or physical therapist rather than continuing to self-manage.</p>`,
    faq: [
      { q: "Can exercises fix flat feet permanently?", a: "In adults, exercise can't structurally rebuild a flat arch back to a different shape, since the underlying bone and ligament structure is largely set. It can meaningfully reduce discomfort and improve control by strengthening supporting muscles, which is a realistic and worthwhile goal even though it's different from a structural fix." },
      { q: "How long before I notice a difference?", a: "Give a consistent routine 4-6 weeks before judging results. Strength and control improvements build gradually, unlike the immediate relief a stretch might provide in the moment." },
      { q: "Do these replace supportive shoes?", a: "No, they complement them. Exercises address muscle strength and control; shoes address the mechanical support your foot needs during daily activity. Most people managing flat feet discomfort benefit from both together, not one instead of the other." },
    ],
  },

  // 7 - guide
  {
    relPath: "guides/custom-vs-otc-orthotics/",
    navSection: "guides",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Guides", path: "guides/" },
      { name: "Custom vs. Over-the-Counter Orthotics", path: "guides/custom-vs-otc-orthotics/" },
    ],
    title: "Custom vs. Over-the-Counter Orthotics for Flat Feet",
    metaDescription: "When a $30-50 over-the-counter insole is enough for flat feet, and when a $300-600 custom orthotic is actually worth the extra cost.",
    ogDescription: "A practical comparison of custom and over-the-counter orthotics for flat feet, and how to decide which one you actually need.",
    eyebrow: "Flat Feet Academy",
    h1: "Custom vs. Over-the-Counter Orthotics: Which Do You Actually Need?",
    lede: "Custom orthotics can cost ten times more than a solid over-the-counter insole, and the honest answer is that most people with flat feet don't need to spend that much. Here's how to tell which category actually fits your situation.",
    hasProducts: false,
    toc: [
      { id: "the-difference", label: "What's actually different" },
      { id: "when-otc-is-enough", label: "When OTC is enough" },
      { id: "when-custom-helps", label: "When custom is worth it" },
      { id: "otc-options", label: "OTC options worth trying first" },
      { id: "faq", label: "FAQ" },
    ],
    bodyHtml: `
        <h2 id="the-difference">What's actually different between the two</h2>
        <p>An over-the-counter (OTC) insole is manufactured in standard shapes and sizes, then sold in a few firmness or arch-height variants that you choose based on your general arch type. A custom orthotic is built from a mold or 3D scan of your specific foot, typically prescribed and fitted by a podiatrist, and priced accordingly &mdash; often $300-600 versus $30-50 for a quality OTC option.</p>
        <p>The performance gap between the two is real but often smaller than the price gap suggests, especially for straightforward flat feet without a complicating medical condition. Custom orthotics earn their cost in specific situations, covered below, rather than being categorically "better" for everyone.</p>

        <h2 id="when-otc-is-enough">When an OTC insole is genuinely enough</h2>
        <ul>
          <li>Your flat feet are flexible (the arch reappears when you're not standing on it) rather than rigid.</li>
          <li>You don't have a diagnosed complicating condition like severe plantar fasciitis, diabetes-related foot issues, or a significant leg-length discrepancy.</li>
          <li>Your discomfort is mild-to-moderate rather than significantly limiting your activity.</li>
          <li>You haven't tried a quality OTC option yet &mdash; it's a reasonable, low-cost first step before considering custom.</li>
        </ul>
        <p>Our <a href="/best-insoles-for-flat-feet/">best insoles for flat feet guide</a> covers specific OTC picks in more depth, including <a href="/shoe-reviews/superfeet-green-review/">Superfeet GREEN</a> and <a href="/shoe-reviews/powerstep-pinnacle-review/">Powerstep Pinnacle</a>, both reasonable starting points.</p>

        <h2 id="when-custom-helps">When custom orthotics are actually worth it</h2>
        <ul>
          <li>You've tried a quality OTC insole for several weeks without meaningful improvement.</li>
          <li>Your flat feet are rigid rather than flexible, or asymmetric between your two feet.</li>
          <li>You have a diagnosed condition like severe plantar fasciitis, diabetes with neuropathy, or a significant biomechanical issue a podiatrist has identified.</li>
          <li>You're managing pain related to a specific sport or occupation where precise, individualized support meaningfully affects performance or injury risk.</li>
        </ul>
        <p>In these cases, a podiatrist assessment (sometimes covered partially by insurance) is worth the cost precisely because it accounts for details a mass-produced insole can't &mdash; asymmetries, specific pressure points, and how your particular gait pattern behaves under load.</p>

        <div class="callout">
          <strong>A reasonable order to try things in</strong>
          Start with a supportive shoe and a quality OTC insole. Give it several weeks of consistent use. If that's not enough, and especially if pain is significant or a doctor has flagged a specific condition, that's the point to look into a podiatrist consultation and custom orthotics &mdash; not the first step by default.
        </div>

        <h2 id="otc-options">OTC options worth trying first</h2>
        <p>Three reasonable starting points, depending on what you need:</p>
        <ul>
          <li><strong><a href="/shoe-reviews/superfeet-green-review/">Superfeet GREEN</a></strong> &mdash; a rigid, deep-heel-cup design for more significant arch collapse or high-impact activity.</li>
          <li><strong><a href="/shoe-reviews/powerstep-pinnacle-review/">Powerstep Pinnacle</a></strong> &mdash; a moderate, everyday option without maximal firmness, good for daily wear.</li>
          <li><strong><a href="/shoe-reviews/sof-sole-plantar-fasciitis-insoles-review/">Sof Sole Plantar Fasciitis Insoles</a></strong> &mdash; budget-friendly, focused specifically on heel and arch cushioning for fasciitis-related discomfort.</li>
        </ul>`,
    faq: [
      { q: "Is a custom orthotic always better than an OTC insole?", a: "Not for everyone. Custom orthotics earn their higher cost in specific situations: rigid or asymmetric flat feet, a diagnosed complicating condition, or when a quality OTC insole hasn't helped after several weeks. For straightforward, flexible flat feet, a good OTC insole is often enough." },
      { q: "Will insurance cover custom orthotics?", a: "Sometimes, partially, depending on your plan and whether a podiatrist documents medical necessity. It varies enough by provider and region that checking directly with your insurer before committing is worthwhile." },
      { q: "How long should I try an OTC insole before considering custom?", a: "A few weeks of consistent use is a reasonable trial period. If discomfort isn't improving by then, or is significant enough to limit your daily activity, that's a reasonable point to discuss custom orthotics with a podiatrist." },
    ],
  },

  // 8 - guide
  {
    relPath: "guides/minimalist-barefoot-shoes-flat-feet/",
    navSection: "guides",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Guides", path: "guides/" },
      { name: "Minimalist and Barefoot Shoes for Flat Feet", path: "guides/minimalist-barefoot-shoes-flat-feet/" },
    ],
    title: "Are Minimalist or Barefoot Shoes Safe for Flat Feet?",
    metaDescription: "An honest look at whether minimalist and barefoot shoes are a good idea for flat feet, who they might actually suit, and how to transition safely if you want to try.",
    ogDescription: "A balanced, non-hype look at minimalist and barefoot shoes for people with flat feet.",
    eyebrow: "Flat Feet Academy",
    h1: "Are Minimalist or Barefoot Shoes Safe for Flat Feet?",
    lede: "Minimalist and barefoot shoes get pitched as a natural fix for weak feet, but that pitch doesn't automatically apply if you have flat feet. Here's a straightforward look at the actual tradeoffs.",
    hasProducts: false,
    toc: [
      { id: "the-pitch", label: "The pitch, and where it's overstated" },
      { id: "the-case-for", label: "The honest case for minimalist shoes" },
      { id: "the-case-against", label: "The honest case against, for flat feet" },
      { id: "if-you-want-to-try", label: "If you still want to try" },
      { id: "faq", label: "FAQ" },
    ],
    bodyHtml: `
        <h2 id="the-pitch">The pitch, and where it's overstated</h2>
        <p>The argument for minimalist and zero-drop barefoot shoes is that cushioned, structured shoes let foot muscles get weak and lazy over years of wear, and going minimal forces those muscles back to work. There's a reasonable kernel of truth in that &mdash; foot and calf strength does respond to being challenged. Where the pitch gets overstated is in treating this as a universal fix that applies the same way regardless of your starting foot structure, which isn't how it works in practice for people with genuinely flat, low-arched feet.</p>
        <p>We haven't reviewed a specific minimalist or barefoot shoe on this site yet, so this page is a general guide to the tradeoffs rather than a product recommendation &mdash; our existing picks (like the <a href="/shoe-reviews/brooks-adrenaline-gts-review/">Brooks Adrenaline GTS</a>) are all built with structured support, which is a different, more conservative approach.</p>

        <h2 id="the-case-for">The honest case for minimalist shoes</h2>
        <ul>
          <li>Gradual strength gains in the feet and calves, similar in principle to the exercises in our <a href="/guides/flat-feet-exercises-and-stretches/">flat feet exercises guide</a>.</li>
          <li>Better proprioception (foot-ground awareness), which some people find genuinely improves balance and movement quality over time.</li>
          <li>For people with mild, flexible flat feet and no active pain, a slow, careful transition can be a reasonable experiment.</li>
        </ul>

        <h2 id="the-case-against">The honest case against, specifically for flat feet</h2>
        <ul>
          <li>Removing external arch support before the surrounding muscles are strong enough to compensate can increase strain on the plantar fascia and arch, particularly during the transition period.</li>
          <li>Rigid, low-flexible flat feet (as opposed to flexible ones) generally tolerate this transition worse, since there's less natural shock absorption to fall back on.</li>
          <li>Anyone with active plantar fasciitis, recent injury, or significant pain is taking on real risk by removing support at the same time their tissue is already under strain.</li>
        </ul>

        <div class="callout">
          <strong>This isn't an all-or-nothing decision</strong>
          You don't have to choose between fully structured stability shoes forever and a full minimalist transition. Some people use minimalist shoes for short, controlled sessions (like specific strength exercises) while keeping supportive shoes for daily wear and higher-impact activity. That's a lower-risk way to get some of the benefit without giving up support when you need it.
        </div>

        <h2 id="if-you-want-to-try">If you still want to try</h2>
        <ol>
          <li>Start only if you have flexible flat feet, no active pain, and no diagnosed condition like plantar fasciitis currently flaring up.</li>
          <li>Transition gradually &mdash; short walks first, building up over weeks or months, not switching your daily shoe overnight.</li>
          <li>Pair it with the strengthening exercises in our <a href="/guides/flat-feet-exercises-and-stretches/">exercises guide</a> so the muscles have a chance to catch up to the reduced external support.</li>
          <li>Stop and reassess if you notice new arch, heel, or shin pain during the transition &mdash; that's a sign to slow down or stop, not push through.</li>
        </ol>`,
    faq: [
      { q: "Are barefoot shoes bad for everyone with flat feet?", a: "Not universally, but they carry more real risk for flat feet than for a neutral-arched foot, especially if your flat feet are rigid rather than flexible, or if you have active pain or plantar fasciitis. A slow, careful transition suits some people with mild, flexible flat feet; it's not a good starting point for everyone." },
      { q: "Can minimalist shoes strengthen my arch over time?", a: "They can contribute to foot and calf strength gains, similar in principle to targeted foot exercises. They won't change the underlying bone structure of a flat arch, but improved muscle strength and control is a realistic, more modest benefit." },
      { q: "Do I have to choose between minimalist and supportive shoes?", a: "No. Some people use minimalist shoes for short, controlled activities like specific strengthening exercises, while keeping supportive shoes for daily wear and higher-impact activity. That combined approach carries less risk than a full-time switch." },
    ],
  },

  // 9 - guide
  {
    relPath: "guides/flat-feet-and-knee-pain/",
    navSection: "guides",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Guides", path: "guides/" },
      { name: "Flat Feet and Knee Pain", path: "guides/flat-feet-and-knee-pain/" },
    ],
    title: "The Flat Feet and Knee Pain Connection, Explained",
    metaDescription: "How flat feet and overpronation can contribute to knee pain, what the mechanism actually is, and when better shoes are likely to help.",
    ogDescription: "How flat feet mechanically contribute to knee pain, and when the right shoes are likely to help.",
    eyebrow: "Flat Feet Academy",
    h1: "The Flat Feet and Knee Pain Connection, Explained",
    lede: "Knee pain doesn't always start at the knee. When a flat arch changes how your lower leg rotates during each step, that stress has to go somewhere &mdash; and the knee is a common place it ends up.",
    hasProducts: false,
    toc: [
      { id: "the-mechanism", label: "The actual mechanism" },
      { id: "signs", label: "Signs your knee pain may be foot-related" },
      { id: "what-helps", label: "What actually helps" },
      { id: "when-to-see-someone", label: "When to see a professional instead" },
      { id: "faq", label: "FAQ" },
    ],
    bodyHtml: `
        <h2 id="the-mechanism">The actual mechanism, not just "it's all connected"</h2>
        <p>When a flat, overpronating foot rolls inward more than it should during a step, that inward roll doesn't stay isolated at the ankle &mdash; it creates a rotational force that travels up the lower leg. The shinbone rotates inward slightly more than it would with a neutral foot strike, and because the knee joint sits directly above the shin and below the thigh bone, that extra rotation changes the angle at which the kneecap tracks and the alignment the knee joint has to manage with every step. Multiply that by thousands of steps a day, and a small mechanical inefficiency becomes a real source of cumulative strain, often showing up as pain along the inner or front of the knee.</p>
        <p>This doesn't mean every case of knee pain is caused by flat feet &mdash; plenty of knee pain has nothing to do with foot mechanics. But it's a real, well-documented contributing pathway worth ruling in or out, especially if other explanations haven't panned out.</p>

        <h2 id="signs">Signs your knee pain may be foot-related</h2>
        <ul>
          <li>Pain concentrated on the inner side of the knee, rather than the back or outer side.</li>
          <li>Pain that worsens specifically during or after walking, running, or standing, rather than being constant regardless of activity.</li>
          <li>Visible overpronation when you check your gait, worn shoe pattern, or ankle position in a mirror (see our <a href="/best-shoes-for-overpronation/">overpronation guide</a> for how to check).</li>
          <li>Knee pain that improved noticeably when you happened to wear a more supportive shoe, even if you didn't buy it for that reason.</li>
        </ul>

        <h2 id="what-helps">What actually helps</h2>
        <p>If the mechanism above matches your situation, a shoe that controls excess inward roll can reduce the rotational stress reaching the knee. That's the same core logic behind our <a href="/best-running-shoes-flat-feet/">running shoe</a> and <a href="/best-shoes-for-overpronation/">overpronation</a> recommendations &mdash; stability shoes like the <a href="/shoe-reviews/brooks-adrenaline-gts-review/">Brooks Adrenaline GTS</a> or firmer options like the <a href="/shoe-reviews/asics-gel-kayano-review/">ASICS Gel-Kayano</a> address this directly by limiting that inward roll before it reaches the knee.</p>
        <p>Strengthening the hip and thigh muscles that control knee alignment independently of footwear also matters, and is a common focus in physical therapy for this exact pattern &mdash; shoes reduce the mechanical stress reaching the knee, but they don't replace the muscular control that also plays a role.</p>

        <div class="callout">
          <strong>A shoe swap is a reasonable first experiment</strong>
          If your knee pain fits the pattern above and you haven't tried a supportive stability shoe yet, it's a low-risk, low-cost thing to test before more involved options. Give it several weeks of regular wear before judging the result.
        </div>

        <h2 id="when-to-see-someone">When to see a professional instead</h2>
        <p>See a doctor or physical therapist if knee pain is severe, sudden, accompanied by swelling or instability, or doesn't improve after several weeks of a more supportive shoe and reasonable rest. Foot mechanics are one contributing factor among several possible causes of knee pain, and ruling out ligament, cartilage, or other joint issues is important when self-management isn't working.</p>`,
    faq: [
      { q: "Can flat feet really cause knee pain?", a: "Yes, through a well-documented mechanism: excess inward foot roll during walking or running creates rotational stress that travels up the shin to the knee joint, which can contribute to pain, especially on the inner side of the knee. It's not the only possible cause of knee pain, but it's a real contributing pathway." },
      { q: "Will a supportive shoe definitely fix my knee pain?", a: "Not definitely, since knee pain has multiple possible causes. If your pain matches the pattern described above (inner-knee pain worsening with activity, visible overpronation), a supportive shoe is a reasonable, low-risk thing to try first. If it doesn't help within a few weeks, see a doctor or physical therapist." },
      { q: "Should I see a podiatrist or a physical therapist first?", a: "Either is a reasonable starting point. A podiatrist focuses more on the foot and footwear side, while a physical therapist can assess the full kinetic chain including hip and thigh strength. If your primary concern is knee pain, a physical therapist or your regular doctor is often the more direct first stop." },
    ],
  },

  // 10 - guide
  {
    relPath: "guides/flat-feet-in-children/",
    navSection: "guides",
    breadcrumb: [
      { name: "Home", path: "" },
      { name: "Guides", path: "guides/" },
      { name: "Flat Feet in Children", path: "guides/flat-feet-in-children/" },
    ],
    title: "Flat Feet in Children: What's Normal, and When to Worry",
    metaDescription: "Why flat feet are extremely common and usually normal in young children, what signs actually warrant a doctor visit, and how this differs from flat feet in adults.",
    ogDescription: "Why flat feet in young children are usually normal, and the specific signs that actually warrant seeing a doctor.",
    eyebrow: "Flat Feet Academy",
    h1: "Flat Feet in Children: What's Normal, and When to Worry",
    lede: "Nearly all toddlers have flat-looking feet, and most of them develop a visible arch naturally over the following years without any treatment. Here's how to tell ordinary childhood development from something actually worth a doctor's visit.",
    hasProducts: false,
    toc: [
      { id: "why-common", label: "Why almost all young children look flat-footed" },
      { id: "what-usually-happens", label: "What usually happens as they grow" },
      { id: "when-to-worry", label: "Signs that actually warrant a doctor visit" },
      { id: "shoes-for-kids", label: "A note on kids' shoes" },
      { id: "faq", label: "FAQ" },
    ],
    bodyHtml: `
        <div class="callout">
          <strong>This page is general information, not a diagnosis</strong>
          Every child's development is different, and this page can't account for your specific child's history or exam findings. If you're worried, a pediatrician or pediatric podiatrist visit is a quick, low-stress way to get a specific answer rather than relying on general information. See our <a href="/medical-disclaimer/">medical disclaimer</a>.
        </div>

        <h2 id="why-common">Why almost all young children look flat-footed</h2>
        <p>Babies and toddlers are born with a fat pad in the arch area that makes the foot look flat regardless of the underlying bone and ligament structure developing underneath. On top of that, the ligaments that eventually hold an arch's shape are still loose and flexible at this age, which is entirely normal and necessary for a body that's still growing. This is why pointing out a "flat" foot on a two-year-old usually isn't meaningful information on its own &mdash; it's close to universal at that age.</p>

        <h2 id="what-usually-happens">What usually happens as children grow</h2>
        <p>As children grow, walk, and put weight through their feet over months and years, the arch typically develops gradually, most noticeably between about ages 3 and 10, though the exact timeline varies a lot between individual kids. By the early teenage years, most children have developed a visible arch consistent with what they'll carry into adulthood. A meaningful portion of children &mdash; often cited around 1 in 5 to 1 in 4 &mdash; will still have flexible flat feet as adults, and for most of them this causes no problems at all and needs no treatment.</p>

        <h2 id="when-to-worry">Signs that actually warrant a doctor visit</h2>
        <p>Most flat feet in children need no intervention, but a few specific signs are worth getting checked rather than waiting out:</p>
        <ul>
          <li><strong>Rigid flat feet</strong> &mdash; if the arch doesn't reappear at all when the child stands on tiptoes, unlike the flexible flat feet that resolve naturally.</li>
          <li><strong>Pain or limping</strong> &mdash; ordinary flexible flat feet in children are usually painless; persistent foot, leg, or knee pain is worth a proper evaluation.</li>
          <li><strong>One foot noticeably different from the other</strong> &mdash; significant asymmetry between the two feet is less likely to be typical developmental variation.</li>
          <li><strong>Stiffness or reduced range of motion</strong> in the ankle or foot joints.</li>
          <li><strong>No improvement at all by around age 8-10</strong>, especially combined with any of the above.</li>
        </ul>
        <p>None of these automatically mean something is seriously wrong, but they're the specific signals that shift this from "wait and see" to "worth a professional opinion," rather than general flat-footedness on its own.</p>

        <h2 id="shoes-for-kids">A note on kids' shoes</h2>
        <p>We haven't reviewed specific children's shoes on this site, since our testing and recommendations are based on our own adult, first-hand wear &mdash; see <a href="/about/">our approach</a> for why we're careful about that distinction. As a general principle pediatric podiatrists commonly mention: flexible, well-fitting shoes with enough room to grow and a reasonably wide toe box support natural foot development better than rigid, overly structured "corrective" footwear for a child with no diagnosed condition. If a doctor has recommended a specific orthotic or shoe type for your child, that guidance takes priority over general advice.</p>`,
    faq: [
      { q: "Is it normal for a toddler to have flat feet?", a: "Yes, it's close to universal. Nearly all toddlers have a fat pad in the arch area and loose, still-developing ligaments that make the foot look flat regardless of how it will eventually develop. On its own, this isn't a cause for concern." },
      { q: "At what age should a child's arch have developed?", a: "Development varies a lot between children, but a visible arch typically emerges gradually between about ages 3 and 10. A meaningful portion of children will still have flexible flat feet into adulthood, which for most people causes no problems." },
      { q: "What's the difference between flexible and rigid flat feet in children?", a: "Flexible flat feet show a visible arch when the child stands on tiptoes or when the foot isn't bearing weight, and are usually a normal developmental variation. Rigid flat feet show no arch in either position, which is less common and more likely to warrant a doctor's evaluation." },
    ],
  },
];

function productPick(rank, data) {
  data.rank = rank;
  return data;
}

module.exports = { PAGES };
