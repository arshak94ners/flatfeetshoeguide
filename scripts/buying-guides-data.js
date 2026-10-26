/*
 * Content for the roundup pages built by scripts/gen-buying-guides.js.
 *
 * Every ASIN below was checked against its live amazon.com/dp/ listing on
 * 2026-10-26 (title matched the product named here). Product facts in specs,
 * blurbs and pros come from those listings or the manufacturer; nothing here
 * claims hands-on wear-testing. Re-check a listing before reusing its ASIN
 * if this file is edited much later.
 */
"use strict";

const TAG = "flatfeetshoeg-20";
const DATE = "2026-10-26";

// ---------- Products ----------
// img: the listing's main photo, saved from Amazon on 2026-10-26 as a 480x320
// webp. kind: label on the brand tile shown when there is no img.
// specs: [label, value] rows.
const PRODUCTS = {
  // Hiking
  merrellMoab3Men: {
    asin: "B098KWS49L", img: "/assets/images/products/merrell-moab-3-men.webp", brand: "Merrell", name: "Merrell Moab 3 (Men's)", kind: "Hiking shoe",
    specs: [["For", "Men"], ["Support", "Contoured Kinetic Fit footbed, heel Air Cushion"], ["Insole", "Removable"], ["Outsole", "Vibram TC5+"]]
  },
  merrellMoab3Women: {
    asin: "B0BCR19BZ6", img: "/assets/images/products/merrell-moab-3-women.webp", brand: "Merrell", name: "Merrell Moab 3 (Women's)", kind: "Hiking shoe",
    specs: [["For", "Women"], ["Support", "Contoured Kinetic Fit footbed with reinforced heel"], ["Insole", "Removable"], ["Extras", "Protective toe cap, bellows tongue"]]
  },
  keenTarghee3Mid: {
    asin: "B01N23HMEY", img: "/assets/images/products/keen-targhee-3-mid.webp", brand: "KEEN", name: "KEEN Targhee 3 Mid Waterproof", kind: "Hiking boot",
    specs: [["For", "Men"], ["Support", "External support shank, heel cradle, mid-cut ankle"], ["Insole", "Removable, with arch support"], ["Fit", "KEEN Original Fit, roomy toe box"]]
  },
  obozSawtoothX: {
    asin: "B09RSG13XP", img: "/assets/images/products/oboz-sawtooth-x.webp", brand: "Oboz", name: "Oboz Sawtooth X Low", kind: "Hiking shoe",
    specs: [["For", "Men"], ["Support", "O FIT insole: molded shell, deep heel cup"], ["Heel", "TPU heel counter"], ["Drop", "8 mm"]]
  },
  salomonXUltra360: {
    asin: "B0D8GJK9ZT", img: "/assets/images/products/salomon-xultra-360.webp", brand: "Salomon", name: "Salomon X Ultra 360 GORE-TEX", kind: "Hiking shoe",
    specs: [["For", "Men"], ["Support", "Stability-focused low hiker"], ["Waterproof", "GORE-TEX"], ["Closure", "Bungee quick-lace"]]
  },

  // Dress
  vionicUptownLoafer: {
    asin: "B0GNB9B5ZD", img: "/assets/images/products/vionic-uptown-loafer.webp", brand: "Vionic", name: "Vionic Uptown Loafer", kind: "Women's loafer",
    specs: [["For", "Women"], ["Support", "Built-in VIO MOTION orthotic footbed, deep heel cup"], ["Heel height", "About 1.1 in"], ["Insole", "Removable EVA"]]
  },
  orthofeetLincolnCenter: {
    asin: "B07CC47PFP", img: "/assets/images/products/orthofeet-lincoln-center.webp", brand: "Orthofeet", name: "Orthofeet Lincoln Center Oxford", kind: "Men's oxford",
    specs: [["For", "Men"], ["Support", "Orthotic insole with anatomical arch support"], ["Closure", "Adjustable single strap"], ["Fit", "Wide toe box"]]
  },
  rockportStyleLeader2: {
    asin: "B09JTGNH49", img: "/assets/images/products/rockport-style-leader-2.webp", brand: "Rockport", name: "Rockport Style Leader 2 Apron Toe", kind: "Men's dress shoe",
    specs: [["For", "Men"], ["Support", "Cushioned heel; fits your own orthotic"], ["Insole", "Removable memory foam"], ["Sizes", "Extended sizes and widths"]]
  },
  clarksTildenPlain: {
    asin: "B00SMJHB6C", img: "/assets/images/products/clarks-tilden-plain.webp", brand: "Clarks", name: "Clarks Tilden Plain Oxford", kind: "Men's oxford",
    specs: [["For", "Men"], ["Upper", "Smooth leather"], ["Feel", "Lightweight, cushioned"], ["Best with", "An arch-support insert"]]
  },
  naturalizerMichelle: {
    asin: "B0128DB2QM", img: "/assets/images/products/naturalizer-michelle.webp", brand: "Naturalizer", name: "Naturalizer Michelle Pump", kind: "Women's pump",
    specs: [["For", "Women"], ["Heel", "3 in, with 1/2 in platform"], ["Comfort", "Contour+ Comfort technology"], ["Upper", "Leather or patent"]]
  },

  // Nurses / standing all day
  danskoProfessional: {
    asin: "B0017KUQ2Y", img: "/assets/images/products/dansko-professional.webp", brand: "Dansko", name: "Dansko Professional Clog", kind: "Work clog",
    specs: [["For", "Men &amp; women (EU sizing)"], ["Support", "Contoured footbed, stable inner frame"], ["Sole", "Rocker bottom, polyurethane"], ["Upper", "Leather"]]
  },
  brooksAddictionWalker2: {
    asin: "B0BNWZ64MX", img: "/assets/images/products/brooks-addiction-walker-2.webp", brand: "Brooks", name: "Brooks Addiction Walker 2", kind: "Walking shoe",
    specs: [["For", "Men &amp; women"], ["Support", "Motion control for overpronation and low arches"], ["Upper", "Leather, roomier fit"], ["Insole", "Removable"]]
  },
  brooksGlycerinGts21: {
    asin: "B0CH1X67Q2", img: "/assets/images/products/brooks-glycerin-gts-21.webp", brand: "Brooks", name: "Brooks Glycerin GTS 21", kind: "Stability shoe",
    specs: [["For", "Women"], ["Support", "GuideRails holistic support system"], ["Cushioning", "DNA LOFT v3, max soft"], ["Recognition", "APMA Seal of Acceptance"]]
  },
  brooksGhostMax: {
    asin: "B0BYTFJYC5", img: "/assets/images/products/brooks-ghost-max.webp", brand: "Brooks", name: "Brooks Ghost Max", kind: "Max-cushion shoe",
    specs: [["For", "Women"], ["Support", "Broad base, GlideRoll Rocker"], ["Category", "Neutral"], ["Recognition", "APMA Seal; PDAC A5500 diabetic shoe"]]
  },
  skechersArchFitEasyChic: {
    asin: "B0CLYP47RN", img: "/assets/images/products/skechers-arch-fit-easy-chic.webp", brand: "Skechers", name: "Skechers Arch Fit 2.0 Easy Chic", kind: "Slip-in sneaker",
    specs: [["For", "Women"], ["Support", "Arch Fit insole system"], ["Entry", "Hands-free Slip-ins, heel pillow"], ["Care", "Machine washable"]]
  },

  // Slippers
  vionicGemma: {
    asin: "B07933RPCG", img: "/assets/images/products/vionic-gemma.webp", brand: "Vionic", name: "Vionic Gemma Mule Slipper", kind: "Women's slipper",
    specs: [["For", "Women"], ["Support", "VIO MOTION orthotic footbed, deep heel cup"], ["Recognition", "APMA Seal of Acceptance"], ["Closure", "Adjustable hook-and-loop"]]
  },
  vionicRelax: {
    asin: "B0059DOFQI", img: "/assets/images/products/vionic-relax.webp", brand: "Vionic", name: "Vionic Relax Slipper", kind: "Women's slipper",
    specs: [["For", "Women"], ["Support", "Built-in orthotic footbed"], ["Upper", "Terrycloth, open toe"], ["Closure", "Adjustable hook-and-loop"]]
  },
  orthofeetAsheville: {
    asin: "B008BALVFE", img: "/assets/images/products/orthofeet-asheville.webp", brand: "Orthofeet", name: "Orthofeet Asheville Slipper", kind: "Men's slipper",
    specs: [["For", "Men"], ["Support", "Orthotic insole with anatomical arch support"], ["Closure", "Dual fully-opening straps"], ["Lining", "Faux fur"]]
  },
  orthofeetLorin: {
    asin: "B0DCHHPWFR", img: "/assets/images/products/orthofeet-lorin.webp", brand: "Orthofeet", name: "Orthofeet Lorin Slipper", kind: "Women's slipper",
    specs: [["For", "Women"], ["Support", "Orthotic insole with anatomical arch support"], ["Entry", "Hands-free slip-on"], ["Wear", "Indoor and outdoor"]]
  },
  haflingerGrizzly: {
    asin: "B001C0Y05S", img: "/assets/images/products/haflinger-grizzly.webp", brand: "Haflinger", name: "Haflinger Grizzly GZ Clog", kind: "Wool clog slipper",
    specs: [["For", "Men &amp; women (EU sizing)"], ["Support", "Cork-latex footbed that molds to the foot"], ["Upper", "Boiled wool felt"], ["Sole", "Slip-resistant rubber"]]
  },

  // Kids
  asicsGt1000Kids: {
    asin: "B0CT9K56D9", img: "/assets/images/products/asics-gt-1000-kids.webp", brand: "ASICS", name: "ASICS GT-1000 13 Grade School", kind: "Kids' stability shoe",
    specs: [["For", "Big kids"], ["Support", "Kids' version of ASICS' GT-1000 stability line"], ["Cushioning", "Rearfoot GEL"], ["Closure", "Laces"]]
  },
  nb888Kids: {
    asin: "B08LLWGWFX", img: "/assets/images/products/nb-888-kids.webp", brand: "New Balance", name: "New Balance 888 V2 Hook &amp; Loop", kind: "Kids' running shoe",
    specs: [["For", "Little &amp; big kids"], ["Midsole", "ABZORB cushioning with compression resistance"], ["Upper", "Suede and mesh"], ["Closure", "Hook-and-loop"]]
  },
  nb680Kids: {
    asin: "B0BK8KMTS3", brand: "New Balance", name: "New Balance 680 V6 Hook &amp; Loop", kind: "Kids' running shoe",
    specs: [["For", "Little &amp; big kids"], ["Midsole", "ABZORB cushioning"], ["Upper", "Leather and open mesh"], ["Closure", "Hook-and-loop"]]
  },

  // Court
  asicsGelResolution: {
    asin: "B0BG6DWJK8", img: "/assets/images/products/asics-gel-resolution.webp", brand: "ASICS", name: "ASICS Gel-Resolution", kind: "Tennis shoe",
    specs: [["For", "Men &amp; women (choose on Amazon)"], ["Stability", "DYNAWALL midfoot support"], ["Fit", "DYNALACING lockdown"], ["Durability", "AHARPLUS heel rubber"]]
  },
  asicsGelRenma: {
    asin: "B096FF7BQ3", img: "/assets/images/products/asics-gel-renma.webp", brand: "ASICS", name: "ASICS Gel-Renma", kind: "Pickleball / indoor court",
    specs: [["For", "Men"], ["Stability", "TRUSSTIC midfoot shank, wider gauge"], ["Cushioning", "Forefoot GEL"], ["Fit note", "Runs narrow (per listing)"]]
  },
  kswissExpressLight: {
    asin: "B09X74ZJDC", img: "/assets/images/products/kswiss-express-light.webp", brand: "K-Swiss", name: "K-Swiss Express Light Pickleball", kind: "Pickleball shoe",
    specs: [["For", "Women"], ["Stability", "Built as a stability shoe for lateral moves"], ["Insole", "OrthoLite sock liner"], ["Durability", "DragGuard toe and heel"]]
  },
  skechersViperCourtPro2: {
    asin: "B0FM48G8Y6", img: "/assets/images/products/skechers-viper-court-pro-2.webp", brand: "Skechers", name: "Skechers Viper Court Pro 2.0", kind: "Pickleball shoe",
    specs: [["For", "Men"], ["Support", "Removable Arch Fit insole"], ["Recognition", "APMA Seal of Acceptance"], ["Outsole", "Goodyear rubber"]]
  },
  nb696v5: {
    asin: "B09YGVKDF2", img: "/assets/images/products/nb-696v-5.webp", brand: "New Balance", name: "New Balance 696 V5 Hard Court", kind: "Tennis shoe",
    specs: [["For", "Men"], ["Fit", "Locked-down upper"], ["Outsole", "Ndurance, herringbone"], ["Surface", "Hard court"]]
  },

  // Foot-care tools
  theraflowRoller: {
    asin: "B00SMJIYNG", img: "/assets/images/products/theraflow-roller.webp", brand: "TheraFlow", name: "TheraFlow Foot Roller", kind: "Massage roller",
    specs: [["Type", "Wooden foot roller"], ["Use", "Self-massage along the arch and sole"], ["Base", "Non-slip"]]
  },
  strongtekSlantBoard: {
    asin: "B091CHH147", img: "/assets/images/products/strongtek-slant-board.webp", brand: "StrongTek", name: "StrongTek Slant Board", kind: "Calf stretcher",
    specs: [["Type", "Adjustable slant board"], ["Angles", "5 incline levels"], ["Surface", "Non-slip, with heel lip"]]
  },
  viveArchBrace: {
    asin: "B01IBTX95E", img: "/assets/images/products/vive-arch-brace.webp", brand: "Vive", name: "Vive Foot Arch Support Brace (Pair)", kind: "Arch brace",
    specs: [["Type", "Compression arch wrap"], ["Support", "Pouch for up to 3 gel inserts"], ["Fit", "Adjustable strap, fits in most shoes"]]
  },
  tulisHeelCups: {
    asin: "B000MSZT4C", img: "/assets/images/products/tulis-heel-cups.webp", brand: "Tuli's", name: "Tuli's Classic Gel Heel Cups", kind: "Heel cups",
    specs: [["Type", "Multi-cell gel heel cup"], ["Use", "Heel shock absorption in most closed shoes"], ["Material", "Latex-free gel"]]
  },
  braceabilityNightSplint: {
    asin: "B00SSBP33C", img: "/assets/images/products/braceability-night-splint.webp", brand: "BraceAbility", name: "BraceAbility Night Splint Sock", kind: "Night splint",
    specs: [["Type", "Soft night splint sock"], ["Use", "Holds the foot flexed overnight"], ["Fit", "Adjustable toe strap, left or right"]]
  },
  mindBodhiToeSpacers: {
    asin: "B07M5C72VQ", img: "/assets/images/products/mind-bodhi-toe-spacers.webp", brand: "Mind Bodhi", name: "Mind Bodhi Toe Separators", kind: "Toe spacers",
    specs: [["Type", "Gel toe spacers"], ["Material", "BPA- and latex-free gel"], ["Sizing", "Women 6–10, men 7–9 (regular)"]]
  },

  // ----- Second batch (verified 2026-10-26) -----

  // Boots
  orthofeetFlorence: {
    asin: "B0CP8HZ5TX", img: "/assets/images/products/orthofeet-florence.webp", brand: "Orthofeet", name: "Orthofeet Florence Waterproof Boot", kind: "Women's boot",
    specs: [["For", "Women"], ["Support", "Orthotic insole with anatomical arch support"], ["Closure", "Two hook-and-loop straps"], ["Weather", "Waterproof leather"]]
  },
  blundstone500: {
    asin: "B0030XZW0C", img: "/assets/images/products/blundstone-500.webp", brand: "Blundstone", name: "Blundstone Original 500 Chelsea Boot", kind: "Chelsea boot",
    specs: [["For", "Men &amp; women"], ["Stability", "Steel shank"], ["Cushioning", "SPS Max Comfort system"], ["Footbed", "Removable"]]
  },
  columbiaNewtonRidge: {
    asin: "B0CT9226RW", img: "/assets/images/products/columbia-newton-ridge.webp", brand: "Columbia", name: "Columbia Newton Ridge Plus II Waterproof", kind: "Hiking boot",
    specs: [["For", "Men (wide available)"], ["Closure", "Lace-up"], ["Weather", "Waterproof leather and mesh"], ["Traction", "Omni-Grip"]]
  },
  sorelCaribou: {
    asin: "B001OTYZC0", img: "/assets/images/products/sorel-caribou.webp", brand: "Sorel", name: "Sorel Caribou Waterproof", kind: "Winter boot",
    specs: [["For", "Men"], ["Liner", "Removable 9 mm felt inner boot"], ["Shell", "Vulcanized rubber, seam-sealed"], ["Use", "Snow and deep cold"]]
  },
  timberlandPremium6: {
    asin: "B09PLFY7ZB", img: "/assets/images/products/timberland-premium-6.webp", brand: "Timberland", name: "Timberland Premium 6-Inch Waterproof", kind: "Classic boot",
    specs: [["For", "Men (wide available)"], ["Comfort", "Anti-fatigue system adopted from Timberland PRO"], ["Weather", "Seam-sealed waterproof leather"], ["Insulation", "PrimaLoft"]]
  },

  // Basketball
  uaLockdown7: {
    asin: "B0F8BX23S6", img: "/assets/images/products/ua-lockdown-7.webp", brand: "Under Armour", name: "Under Armour Lockdown 7", kind: "Basketball shoe",
    specs: [["For", "Men &amp; women"], ["Upper", "Mesh with leather and film support overlays"], ["Midsole", "EVA"], ["Outsole", "Herringbone rubber"]]
  },
  uaJet23: {
    asin: "B0BGR6L3L3", img: "/assets/images/products/ua-jet-23.webp", brand: "Under Armour", name: "Under Armour Jet '23", kind: "Basketball shoe",
    specs: [["For", "Men"], ["Upper", "Mixed-material, targeted support"], ["Midsole", "Full-length Micro G"], ["Sockliner", "Plush foam"]]
  },
  nikeGiannisImmortality4: {
    asin: "B0DZXMRPR8", img: "/assets/images/products/nike-giannis-immortality-4.webp", brand: "Nike", name: "Nike Giannis Immortality 4", kind: "Basketball shoe",
    specs: [["For", "Men &amp; women"], ["Lockdown", "Internal containment system"], ["Heel", "Padded heel for sudden stops"], ["Traction", "Multidirectional"]]
  },
  nikePrecision7: {
    asin: "B0D945K7H7", img: "/assets/images/products/nike-precision-7.webp", brand: "Nike", name: "Nike Precision 7", kind: "Basketball shoe",
    specs: [["For", "Men &amp; women"], ["Midsole", "Sculpted foam"], ["Collar", "Plush foam collar and tongue"], ["Traction", "Herringbone"]]
  },
  adidasDameCertified: {
    asin: "B0B5YYXYZ6", img: "/assets/images/products/adidas-dame-certified.webp", brand: "adidas", name: "adidas Dame Certified", kind: "Basketball shoe",
    specs: [["For", "Men &amp; women"], ["Cushioning", "Bounce"], ["Profile", "Low to the ground"], ["Outsole", "Rubber"]]
  },

  // Golf
  footjoyFuel: {
    asin: "B0D2NPHFPY", img: "/assets/images/products/footjoy-fuel.webp", brand: "FootJoy", name: "FootJoy FJ Fuel Spikeless", kind: "Golf shoe",
    specs: [["For", "Men"], ["Stability", "Patented Stability Bridge"], ["Midsole", "Stratolite EVA"], ["Fit", "Standard forefoot, slightly narrow heel"]]
  },
  eccoBiomHybrid3: {
    asin: "B085VSN242", img: "/assets/images/products/ecco-biom-hybrid-3.webp", brand: "ECCO", name: "ECCO Biom Hybrid 3 GORE-TEX", kind: "Golf shoe",
    specs: [["For", "Men"], ["Outsole", "Tri-Fi-Grip with stability zone"], ["Insole", "Removable Ortholite (extra-width option)"], ["Weather", "GORE-TEX"]]
  },
  skechersGoGolfArchFit: {
    asin: "B0D4JTL42T", img: "/assets/images/products/skechers-go-golf-arch-fit.webp", brand: "Skechers", name: "Skechers GO GOLF Arch Fit", kind: "Golf shoe",
    specs: [["For", "Men"], ["Support", "Arch Fit insole"], ["Cushioning", "ULTRA GO"], ["Outsole", "Spikeless Goodyear rubber"]]
  },
  nbFreshFoamLinksPro: {
    asin: "B08NYV9RWZ", img: "/assets/images/products/nb-fresh-foam-links-pro.webp", brand: "New Balance", name: "New Balance Fresh Foam LinksPro", kind: "Golf shoe",
    specs: [["For", "Men"], ["Structure", "TPU eyestay and exoskeleton outsole"], ["Midsole", "Fresh Foam, 10 mm drop"], ["Cleats", "Removable"]]
  },
  adidasCodechaos: {
    asin: "B096JNTTTF", img: "/assets/images/products/adidas-codechaos.webp", brand: "adidas", name: "adidas Codechaos Spikeless", kind: "Golf shoe",
    specs: [["For", "Men"], ["Midsole", "BOOST foam"], ["Outsole", "CHAOS Traction with TwistGrip"], ["Weather", "Waterproof"]]
  },

  // Seniors
  propetLifeWalker: {
    asin: "B000BW19ZW", img: "/assets/images/products/propet-life-walker.webp", brand: "Propét", name: "Propét LifeWalker Strap", kind: "Walking shoe",
    specs: [["For", "Men"], ["Support", "Contoured heel stabilizer, arch-support midsole"], ["Insole", "Removable cushioned orthotic"], ["Closure", "Dual hook-and-loop straps"]]
  },
  orthofeetCoral: {
    asin: "B095NB3MFJ", img: "/assets/images/products/orthofeet-coral.webp", brand: "Orthofeet", name: "Orthofeet Coral Sneaker", kind: "Women's sneaker",
    specs: [["For", "Women"], ["Support", "Orthotic insole with anatomical arch support"], ["Upper", "Stretch knit, seam-free"], ["Fit", "Wide toe box"]]
  },
  nb813: {
    asin: "B0BZ5R6TFW", img: "/assets/images/products/nb-813.webp", brand: "New Balance", name: "New Balance 813 Hook &amp; Loop", kind: "Walking shoe",
    specs: [["For", "Men"], ["Closure", "Hook-and-loop"], ["Upper", "Leather, soft collar"], ["Medicare", "HCPCS A5500 eligible"]]
  },
  nb577: {
    asin: "B003UHUM5S", img: "/assets/images/products/nb-577.webp", brand: "New Balance", name: "New Balance 577 Hook &amp; Loop", kind: "Walking shoe",
    specs: [["For", "Women"], ["Cushioning", "Abzorb heel"], ["Midsole", "Polyurethane, stable"], ["Medicare", "HCPCS A5500 eligible"]]
  },
  skechersCambridge: {
    asin: "B0CTNLLT6F", img: "/assets/images/products/skechers-cambridge.webp", brand: "Skechers", name: "Skechers Max Cushioning Arch Fit 2.0 Slip-ins", kind: "Slip-in sneaker",
    specs: [["For", "Women"], ["Support", "Arch Fit insole system"], ["Entry", "Hands-free, heel pillow"], ["Outsole", "Goodyear anti-slip rubber"]]
  },

  // Socks
  feeturesPfRelief: {
    asin: "B08CF3B4SR", img: "/assets/images/products/feetures-pf-relief.webp", brand: "Feetures", name: "Feetures Plantar Fasciitis Relief Crew", kind: "PF relief sock",
    specs: [["Type", "Light-cushion crew sock"], ["Compression", "Targeted, three zones"], ["Toe", "Seamless"]]
  },
  bitlyPfSleeves: {
    asin: "B08HYKCMHR", img: "/assets/images/products/bitly-pf-sleeves.webp", brand: "Bitly", name: "Bitly Plantar Fasciitis Compression Sleeves", kind: "Foot sleeves",
    specs: [["Type", "Open-toe compression foot sleeve"], ["Support", "Compression through the arch"], ["Sizing", "By the brand's size chart"]]
  },
  cepRunTall4: {
    asin: "B0BHMVF681", img: "/assets/images/products/cep-run-tall-4.webp", brand: "CEP", name: "CEP The Run Tall Compression Socks 4.0", kind: "Running compression",
    specs: [["Type", "Knee-high compression sock"], ["Compression", "Targeted at the arch and ankle"], ["For", "Men (women's version sold separately)"]]
  },
  swiftwickAspire: {
    asin: "B0829FB29Y", img: "/assets/images/products/swiftwick-aspire.webp", brand: "Swiftwick", name: "Swiftwick ASPIRE Ankle Socks", kind: "Compression ankle sock",
    specs: [["Type", "Ultra-light ankle sock, 3-pack"], ["Compression", "Firm contoured"], ["Heel", "Y-shaped for a snug fit"]]
  }
};

// ---------- Shared related-guide cards ----------
const R = {
  insoles: { href: "/best-insoles-for-flat-feet/", tag: "Insoles", title: "Best Insoles for Flat Feet", text: "Add structure to shoes you already own." },
  walking: { href: "/best-walking-shoes-flat-feet/", tag: "Walking", title: "Best Walking Shoes", text: "All-day comfort for errands, travel, and long walks." },
  work: { href: "/best-work-shoes-flat-feet/", tag: "Work", title: "Best Work Shoes", text: "Support for shifts spent standing on hard floors." },
  pf: { href: "/best-shoes-for-plantar-fasciitis-and-flat-feet/", tag: "Heel pain", title: "Plantar Fasciitis &amp; Flat Feet", text: "Shoes that handle both problems at once." },
  overpronation: { href: "/best-shoes-for-overpronation/", tag: "Stability", title: "Best Shoes for Overpronation", text: "When your ankles roll inward with every step." },
  wide: { href: "/best-shoes-for-wide-flat-feet/", tag: "Fit", title: "Best Shoes for Wide Flat Feet", text: "Room for the forefoot without losing support." },
  stretches: { href: "/guides/flat-feet-exercises-and-stretches/", tag: "Guide", title: "Exercises &amp; Stretches", text: "A short daily routine that pairs with good shoes." },
  children: { href: "/guides/flat-feet-in-children/", tag: "Guide", title: "Flat Feet in Children", text: "What's normal, and when to see a doctor." },
  gym: { href: "/best-gym-shoes-flat-feet/", tag: "Training", title: "Best Gym Shoes", text: "Stable footing for lifting and HIIT." },
  running: { href: "/best-running-shoes-flat-feet/", tag: "Running", title: "Best Running Shoes", text: "Stability picks for daily miles." },
  sandals: { href: "/best-sandals-for-flat-feet/", tag: "Sandals", title: "Best Sandals", text: "Warm-weather picks that hold an arch shape." },
  orthotics: { href: "/guides/custom-vs-otc-orthotics/", tag: "Guide", title: "Custom vs. OTC Orthotics", text: "Which kind of arch support you actually need." },
  stability: { href: "/guides/stability-vs-neutral-vs-motion-control/", tag: "Guide", title: "Stability vs. Neutral", text: "What shoe categories actually mean for your feet." },
  knee: { href: "/guides/flat-feet-and-knee-pain/", tag: "Guide", title: "Flat Feet &amp; Knee Pain", text: "How your arches affect everything above them." },
  howToTell: { href: "/guides/how-to-tell-if-you-have-flat-feet/", tag: "Guide", title: "Do You Have Flat Feet?", text: "A simple at-home test." }
};

// ---------- Pages ----------
const PAGES = [
  // ===================== HIKING =====================
  {
    slug: "best-hiking-shoes-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Hiking Shoes for Flat Feet",
    title: "Best Hiking Shoes &amp; Boots for Flat Feet (2026)",
    metaDescription: "Hiking shoes and boots for flat feet, chosen for firm heel counters, supportive footbeds, and stable platforms on uneven trails. Honest pros, cons, and fit notes.",
    h1: "Best Hiking Shoes and Boots for Flat Feet",
    lede: "Trails are where flat feet get found out. Every rock and root asks your arch to stabilize the foot, and a soft, flexible hiker leaves it to do that alone. These picks put structure under the arch and around the heel instead.",
    picksIntro: "Five hikers with real structure underfoot, from a do-everything classic to a waterproof mid boot for ankle support.",
    picks: [
      {
        id: "merrellMoab3Men", bestFor: "Best overall (men)",
        blurb: "The Moab is the default recommendation for a reason: a contoured, removable footbed with a reinforced heel, an air-cushioned heel for stability, and a Vibram outsole, at a price well below most technical hikers. For flat feet, the big win is that the stock footbed is removable, so you can swap in a firmer orthotic if the built-in support isn't enough.",
        pros: ["Contoured footbed with reinforced heel cushioning", "Heel Air Cushion adds shock absorption and stability", "Removable footbed makes room for your own orthotic", "Proven, widely available design with a huge buyer base"],
        cons: ["Stock support is medium, not firm; strong overpronators may need an insert", "Not the lightest hiker for fast, long days", "Low cut leaves ankles unsupported on rough ground"],
        buyFor: "Day hikers with flexible flat feet who want a dependable, affordable shoe they can upgrade with an insole.",
        avoidFor: "Hikers carrying heavy packs on technical terrain who need a stiffer, higher boot."
      },
      {
        id: "merrellMoab3Women", bestFor: "Best overall (women)",
        blurb: "The women's Moab 3 shares the same platform: a contoured Kinetic Fit insole with reinforced heel cushioning, a protective toe cap, and a removable insole. It's built on a women's-specific last rather than a shrunk-down men's shoe, which matters for heel lockdown, and heel lockdown matters a lot when the arch is low.",
        pros: ["Same supportive, contoured footbed as the men's version", "Protective toe cap and bellows tongue keep debris out", "Removable insole for custom orthotics", "Women's-specific fit"],
        cons: ["Medium support out of the box", "Suede upper needs occasional care", "Waterproof versions run warmer in summer"],
        buyFor: "Women who want a versatile, supportive day hiker that's easy to customize.",
        avoidFor: "Anyone who needs a high-cut boot for ankle stability."
      },
      {
        id: "keenTarghee3Mid", bestFor: "Best for ankle support",
        blurb: "If your flat feet come with ankles that roll on uneven ground, a mid-cut boot adds a second line of defense. The Targhee 3 Mid pairs an external support shank and a heel cradle with a removable arch-support footbed, and KEEN's roomy Original Fit gives wide forefeet space to spread.",
        pros: ["External support shank resists twisting through the midfoot", "Heel cradle and mid cut add ankle stability", "Removable footbed with arch support", "Generous toe box suits wide flat feet"],
        cons: ["Heavier and warmer than a low hiker", "Roomy fit can feel loose on narrow heels", "Needs some break-in time"],
        buyFor: "Hikers with flat feet and wide forefeet, or anyone whose ankles roll on rocky descents.",
        avoidFor: "People with narrow feet, or anyone hiking mainly on smooth, groomed trails."
      },
      {
        id: "obozSawtoothX", bestFor: "Best built-in arch support",
        blurb: "Most hiking shoes ship with a flat foam liner. Oboz is the exception: the O FIT insole has a molded shell, a deep heel cup, and a medium-to-high arch profile, closer to an aftermarket orthotic than a stock liner. Add a TPU heel counter and an 8 mm drop, and it's one of the more structured low hikers out of the box.",
        pros: ["O FIT insole with molded shell and deep heel cup", "TPU heel counter firms up heel control", "Wide sizes available", "Durable nubuck upper and heavy-duty tread"],
        cons: ["Medium-to-high arch can feel intrusive at first on very flat, rigid feet", "Heavier than mesh trail runners", "Fewer stores stock it to try on"],
        buyFor: "Hikers who want real arch support without buying a separate insole.",
        avoidFor: "People with rigid flat feet who find pronounced arch contours uncomfortable."
      },
      {
        id: "salomonXUltra360", bestFor: "Best lightweight waterproof",
        blurb: "The X Ultra line is Salomon's long-running stable low hiker, and the 360 GTX is the waterproof, more cushioned take on it. It's not a motion-control shoe, but its stable platform and bungee quick-lace system hold the foot securely on mixed terrain in a low, boot-free package.",
        pros: ["Stable, cushioned platform for mixed terrain", "GORE-TEX waterproofing", "Bungee quick-lace is fast to snug down", "Low-cut and nimble compared with a boot"],
        cons: ["Less built-in arch support than the Oboz", "Narrower fit than KEEN or Merrell", "Waterproof membrane traps heat on hot days"],
        buyFor: "Faster hikers with mild flat feet who want a light, waterproof shoe.",
        avoidFor: "Wide feet, or anyone who needs firm arch support built in."
      }
    ],
    sections: [
      {
        id: "what-to-look-for", h2: "What matters in a hiking shoe for flat feet",
        html: `        <p>On pavement, a flat arch mostly costs you comfort. On a trail, it costs you stability too: every uneven step gives the foot another chance to roll inward, and that strain travels into the ankle, knee, and hip. These features do the most to prevent it:</p>
        <ul>
          <li><strong>A firm heel counter.</strong> Squeeze the back of the shoe. If it collapses easily, it won't control the heel when you land on a slanted rock.</li>
          <li><strong>Torsional rigidity.</strong> Hold the heel and forefoot and twist. A shoe with a shank or a stiff midsole resists this, which is what keeps the midfoot from collapsing on uneven ground.</li>
          <li><strong>A removable insole.</strong> Even the best stock footbeds are generic. A removable one means you can add an <a href="/best-insoles-for-flat-feet/">orthotic insole</a> if you need firmer support.</li>
          <li><strong>A wide enough toe box.</strong> Flat feet often splay longer and wider under load, especially on descents. A cramped forefoot causes blisters and black toenails.</li>
          <li><strong>Mid or low cut?</strong> Mid-cut boots don't support your arch, but they do help ankles that roll. If that's you, go mid.</li>
        </ul>`
      },
      {
        id: "fit-tips", h2: "Fit tips before a long hike",
        html: `        <p>Try hiking shoes on in the afternoon, wearing the socks you'll hike in, with your orthotic inside if you use one. Feet swell over a long day, and flat feet lengthen slightly as the arch drops under load, so a shoe that's snug in the morning can be tight by mile eight. Walk down a slope or a ramp in the store if you can: your toes shouldn't hit the front.</p>
        <p>Break new shoes in on short local walks before any long trip, and if you're new to hiking with flat feet, the <a href="/guides/flat-feet-exercises-and-stretches/">foot-strengthening exercises</a> in our guide make a noticeable difference to how tired your feet feel at the end of the day.</p>`
      }
    ],
    faq: [
      { q: "Are hiking boots better than hiking shoes for flat feet?", a: "Not automatically. Boots add ankle support, which helps if your ankles roll, but the arch support comes from the footbed and midsole in either case. Many people with flat feet do best in a low hiker with a firm heel counter and a good insole, and only move to a mid boot for rough terrain or heavy packs." },
      { q: "Can I put my orthotics in hiking shoes?", a: "Yes, as long as the shoe has a removable insole and enough volume. Take the stock insole out and put your orthotic in its place rather than stacking them. All five picks on this page have removable insoles." },
      { q: "Are trail runners OK for hiking with flat feet?", a: "For light day hikes, a stable trail runner can work, but most are softer and more flexible than hiking shoes, which gives a flat arch less help on uneven ground. If you prefer trail runners, choose one with a firm heel counter and consider adding an insole." }
    ],
    related: [R.insoles, R.overpronation, R.wide]
  },

  // ===================== DRESS =====================
  {
    slug: "best-dress-shoes-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Dress Shoes for Flat Feet",
    title: "Best Dress Shoes for Flat Feet: Men's &amp; Women's (2026)",
    metaDescription: "Dress shoes for flat feet that look office-ready but hide real arch support: orthotic footbeds, removable insoles, and walkable heels. Men's and women's picks.",
    h1: "Best Dress Shoes for Flat Feet (Men's and Women's)",
    lede: "Traditional dress shoes are about the worst thing you can put on a flat foot: thin, flat, unstructured soles and no room for an insert. The good news is that a few brands now hide genuine arch support inside shoes you can wear to an office or a wedding.",
    picksIntro: "Two shoes with orthotic support built in, two that take your own orthotic, and one pump for when heels aren't optional.",
    picks: [
      {
        id: "vionicUptownLoafer", bestFor: "Best for women",
        blurb: "Vionic's whole brand is built around one idea: putting an orthotic-style footbed inside normal-looking shoes. The Uptown Loafer has a built-in VIO MOTION footbed with contoured arch support and a deep heel cup, under a low heel (about 1.1 inches) that works from office to dinner.",
        pros: ["Built-in orthotic footbed with contoured arch support", "Deep heel cup for stability", "Low, walkable heel", "Looks like a regular loafer, not a medical shoe"],
        cons: ["Vionic recommends a 1–2 week adjustment period", "Loafers offer less lockdown than a lace-up", "Arch contour may feel firm if you're used to flat shoes"],
        buyFor: "Women who want genuine arch support in a polished, everyday office shoe.",
        avoidFor: "Anyone who already wears a custom orthotic, which needs a shoe with more depth."
      },
      {
        id: "orthofeetLincolnCenter", bestFor: "Most supportive (men)",
        blurb: "Orthofeet designs specifically for foot problems, and the Lincoln Center lists flat feet and overpronation among its target conditions. It ships with an orthotic insole that has anatomical arch support, a wide toe box, and an adjustable strap closure that's easy to manage if your feet swell during the day.",
        pros: ["Orthotic insole with anatomical arch support included", "Wide toe box, true-to-size fit", "Adjustable strap suits swelling feet", "Leather upper is polished enough for business wear"],
        cons: ["Strap closure looks less traditional than laces", "Roomier silhouette than a slim Italian oxford", "Fewer style options than mainstream brands"],
        buyFor: "Men with flat feet plus heel pain, bunions, or swelling who need maximum comfort in a dress shoe.",
        avoidFor: "Anyone after a sleek, narrow dress-shoe look."
      },
      {
        id: "rockportStyleLeader2", bestFor: "Best for your own orthotics",
        blurb: "If you already have orthotics you like, the most important dress-shoe feature is a removable insole, and that's the Style Leader 2's headline. Rockport's listing says the memory-foam insoles are designed to come out to accommodate orthotic inserts, and the shoe comes in extended sizes and widths.",
        pros: ["Removable insole designed to make room for orthotics", "Cushioned heel for hard office floors", "Extended sizes and widths", "Lightweight for a leather dress shoe"],
        cons: ["Stock insole is cushioning, not arch support", "Casual-leaning apron-toe style", "Without an orthotic, it's comfortable rather than supportive"],
        buyFor: "Men who already wear an orthotic and need a dress shoe it actually fits in.",
        avoidFor: "Anyone expecting built-in arch support with no insert."
      },
      {
        id: "clarksTildenPlain", bestFor: "Best budget oxford",
        blurb: "The Tilden is a simple, lightweight leather oxford with a cushioned feel, usually at a friendlier price than the shoes above. On its own it's a comfort shoe, not a support shoe, so think of it as a good-looking, well-made shell for a slim arch-support insert.",
        pros: ["Classic plain-toe leather oxford", "Lightweight and cushioned", "Often among the cheapest of these picks", "Works with a slim arch-support insert"],
        cons: ["No meaningful arch support built in", "Fewer ratings than the others on this page", "Leather needs a short break-in"],
        buyFor: "Men on a budget who'll pair it with an insole.",
        avoidFor: "Anyone with significant overpronation who won't add an insert."
      },
      {
        id: "naturalizerMichelle", bestFor: "Best pump / heel",
        blurb: "Heels and flat feet don't mix well, so if you need one, minimize the damage: the Michelle has a moderate 3-inch heel with a half-inch platform, which lowers the effective pitch, and Naturalizer's Contour+ comfort footbed. It's one of the more walkable pumps around, with a huge base of buyer feedback.",
        pros: ["Half-inch platform softens the effective heel angle", "Contour+ comfort footbed", "Classic round-toe pump that suits formal wear", "Long-running model with thousands of ratings"],
        cons: ["Any 3-inch heel shifts load onto the forefoot", "No real arch support for overpronation", "Best kept for events, not all-day wear"],
        buyFor: "Women who need a heel for work or events and want the most comfortable version of one.",
        avoidFor: "Daily all-day wear; choose the Vionic loafer for that."
      }
    ],
    sections: [
      {
        id: "what-to-look-for", h2: "How to find a dress shoe that won't wreck flat feet",
        html: `        <ul>
          <li><strong>A removable insole, or a real orthotic footbed.</strong> Most dress shoes have a thin, glued-in liner. Either buy a shoe with support built in (Vionic, Orthofeet) or one whose insole comes out, so an orthotic fits (Rockport).</li>
          <li><strong>A firm heel counter.</strong> Even a dress shoe should hold your heel upright. Soft, collapsible backs let a flat foot roll in.</li>
          <li><strong>Laces or a strap over a slip-on.</strong> Adjustable closures hold the foot against the footbed. Loose slip-ons make your toes grip to keep the shoe on.</li>
          <li><strong>A low, wide heel.</strong> For women's shoes, under 2 inches with a broad base is the comfortable zone. Platforms help by reducing the effective angle.</li>
          <li><strong>Enough depth.</strong> If you'll add an orthotic, try the shoe with it in. Many slim dress shoes simply don't have the room.</li>
        </ul>`
      },
      {
        id: "insole-option", h2: "Already own dress shoes you love?",
        html: `        <p>A slim, three-quarter-length orthotic can turn a comfortable-but-flat dress shoe into a supportive one, without needing as much depth as a full-length insert. Our <a href="/best-insoles-for-flat-feet/">insoles guide</a> covers which types fit low-volume shoes, and the <a href="/guides/custom-vs-otc-orthotics/">custom vs. over-the-counter orthotics guide</a> explains when a prescription insert is worth it.</p>`
      }
    ],
    faq: [
      { q: "Can I wear high heels with flat feet?", a: "Occasionally, yes, but choose a lower, wider heel (or a platform that reduces the effective height) and save them for shorter events. High heels push weight onto the forefoot and don't support a collapsing arch, so they tend to be the least comfortable choice for flat feet." },
      { q: "Do orthotics fit in dress shoes?", a: "Slim or three-quarter-length orthotics fit in many dress shoes, especially ones with a removable insole. Full-length sports orthotics usually need more depth than a dress shoe has. Always try the shoe on with the orthotic in place." },
      { q: "Are loafers bad for flat feet?", a: "Plain loafers with a flat, thin sole offer very little support. Loafers with a built-in orthotic footbed and a firm heel cup, like the Vionic Uptown, are a much better option for flat feet." }
    ],
    related: [R.insoles, R.orthotics, R.work]
  },

  // ===================== NURSES =====================
  {
    slug: "best-shoes-for-nurses-with-flat-feet",
    date: DATE,
    breadcrumbName: "Best Shoes for Nurses with Flat Feet",
    title: "Best Shoes for Nurses with Flat Feet (12-Hour Shifts, 2026)",
    metaDescription: "The best shoes for nurses and anyone standing all day with flat feet: supportive clogs, stability sneakers, and motion-control walkers for long shifts on hard floors.",
    h1: "Best Shoes for Nurses and Standing All Day with Flat Feet",
    lede: "A 12-hour shift on hospital floors is the hardest test a flat foot can face: hours of standing, short fast walks, and no chance to sit down and rest your arches. These are the shoes healthcare workers with low arches tend to swear by, and why.",
    picksIntro: "A clog, two stability sneakers, a maximum-cushion option, and a hands-free slip-in for shifts where every second counts.",
    picks: [
      {
        id: "danskoProfessional", bestFor: "Classic nursing clog",
        blurb: "There's a reason you see Dansko Professionals on every hospital ward. The clog has a contoured footbed, a firm inner frame that keeps the foot stable, and a rocker bottom that rolls you forward so your arches and calves do less work over a long shift. It's one of the most-rated work shoes on Amazon.",
        pros: ["Contoured footbed with firm, stable base", "Rocker bottom reduces fatigue over long shifts", "Leather upper wipes clean", "Enormous base of buyer feedback from healthcare workers"],
        cons: ["Stiff and heavy compared with sneakers", "Open back means less heel lockdown", "European sizing; fit is personal, so check the size guide", "Rocker sole takes a few days to get used to"],
        buyFor: "Nurses who stand more than they walk and want a durable, easy-clean shoe.",
        avoidFor: "Anyone with unstable ankles, or whose shift involves a lot of fast walking."
      },
      {
        id: "brooksAddictionWalker2", bestFor: "Most support for low arches",
        blurb: "Brooks describes the Addiction Walker 2 as giving \"maximum support for your low arches and control for your overpronation\", which is exactly the brief for flat feet. It's a motion-control walking shoe with a leather upper that wipes clean and a roomier fit for swelling feet late in a shift.",
        pros: ["Motion control built for low arches and overpronation", "Leather upper is easy to keep clean", "Roomier fit for swelling feet", "Removable insole if you use orthotics"],
        cons: ["Heavy and firm; not a sleek look", "Feels stiff if you're used to soft sneakers", "Too much shoe for mild flat feet"],
        buyFor: "Nurses with significant flat feet or overpronation who need maximum control.",
        avoidFor: "Mild flat feet; a stability sneaker will feel lighter and more natural."
      },
      {
        id: "brooksGlycerinGts21", bestFor: "Best cushioned stability",
        blurb: "The Glycerin GTS pairs Brooks' softest cushioning with GuideRails, its support system that keeps excess motion in check. That combination of plush underfoot and stable through the stride is ideal for long shifts, and the shoe carries the APMA Seal of Acceptance.",
        pros: ["GuideRails support controls excess motion", "Very soft DNA LOFT v3 cushioning for hard floors", "Broad, stable platform", "APMA Seal of Acceptance"],
        cons: ["Premium price", "Knit upper is harder to clean than leather", "Max-soft feel isn't for everyone"],
        buyFor: "Nurses who want sneaker comfort with real stability for 12-hour days.",
        avoidFor: "Anyone who needs a fluid-resistant upper."
      },
      {
        id: "brooksGhostMax", bestFor: "Max cushion, inherent stability",
        blurb: "The Ghost Max is technically a neutral shoe, but its broad base gives it a lot of inherent stability, and a rocker sole smooths each step. It's also a certified PDAC A5500 diabetic shoe with the APMA Seal, which says something about how protective it is underfoot.",
        pros: ["Very broad, stable base", "GlideRoll Rocker smooths heel-to-toe transitions", "APMA Seal and PDAC A5500 diabetic certification", "Generous cushioning for concrete and tile"],
        cons: ["Neutral shoe, with no dedicated pronation control", "Tall stack takes some getting used to", "Pair it with an insole if you overpronate"],
        buyFor: "Nurses with mild flat feet whose main complaint is aching, tired feet.",
        avoidFor: "Strong overpronators who need structured support."
      },
      {
        id: "skechersArchFitEasyChic", bestFor: "Best hands-free slip-in",
        blurb: "For quick changes between home and ward, Skechers' Slip-ins go on without hands, and the Arch Fit insole system, which Skechers markets as podiatrist-designed arch support, gives more structure than a typical slip-on. A heel pillow keeps the heel seated, and the shoe is machine washable.",
        pros: ["Hands-free entry", "Arch Fit insole gives more arch support than most slip-ons", "Heel pillow holds the heel in place", "Machine washable and budget-friendly"],
        cons: ["Less stable than a laced stability shoe", "Knit upper isn't fluid-resistant", "Support is moderate"],
        buyFor: "Nurses with mild flat feet who value convenience and want a washable shoe.",
        avoidFor: "Moderate to severe overpronation."
      }
    ],
    sections: [
      {
        id: "why-standing-is-hard", h2: "Why standing all day is harder than walking",
        html: `        <p>Walking at least changes which muscles are working with each step. Standing still keeps the same tissues loaded for hours, and with flat feet that load sits on the plantar fascia and the tendons trying to hold up the arch. By the end of a shift, many nurses with flat feet describe a deep ache in the arch, heel pain, or tired knees and lower back.</p>
        <p>The fix is a combination: a shoe with a stable base and support under the arch, cushioning that suits hard floors, and a fit that allows for swelling. Rotating two pairs between shifts also helps, because foam recovers its cushioning between wears. See our <a href="/guides/shoe-lifespan-and-rotation/">shoe lifespan guide</a>.</p>`
      },
      {
        id: "clog-or-sneaker", h2: "Clog or sneaker?",
        html: `        <p><strong>Clogs</strong> like the Dansko suit people who mostly stand. The stiff base and rocker sole reduce fatigue, and leather wipes clean. <strong>Stability sneakers</strong> like the Glycerin GTS suit people who walk a lot during a shift, because they're lighter, lock the heel in better, and are more forgiving for fast movement. Plenty of nurses own one of each and switch depending on the unit or the day.</p>
        <div class="callout">
          <strong>Compression socks help too</strong>
          Many healthcare workers pair supportive shoes with graduated compression socks to reduce leg fatigue and swelling. If you have circulation issues or diabetes, check with your doctor first.
        </div>`
      }
    ],
    faq: [
      { q: "Are clogs good for nurses with flat feet?", a: "Supportive clogs with a contoured footbed and a firm base, like the Dansko Professional, work well for many nurses with flat feet, especially for standing-heavy shifts. Their open back gives less heel control, though, so people with unstable ankles often do better in a laced stability sneaker." },
      { q: "How often should nurses replace work shoes?", a: "Cushioning breaks down faster under daily long shifts. A common rule of thumb is every 6 to 12 months for nurses working full time, or sooner if the midsole looks creased, the shoe leans when placed on a flat surface, or aches return." },
      { q: "Should I add insoles to my nursing shoes?", a: "If your shoes have a removable insole and you still feel arch fatigue, a supportive over-the-counter insole is a cheap upgrade. Replace the stock insole rather than stacking a second one on top." }
    ],
    related: [R.work, R.pf, R.walking]
  },

  // ===================== SLIPPERS =====================
  {
    slug: "best-slippers-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Slippers for Flat Feet",
    title: "Best Slippers with Arch Support for Flat Feet (2026)",
    metaDescription: "Supportive slippers and house shoes for flat feet, with orthotic footbeds, deep heel cups, and adjustable straps, so going home doesn't undo a day of good shoes.",
    h1: "Best Slippers with Arch Support for Flat Feet",
    lede: "You can wear great shoes all day and still end up with sore arches if you spend the evening barefoot on tile or in flat, floppy slippers. A supportive house shoe is one of the cheapest, most overlooked upgrades for flat feet.",
    picksIntro: "Five house shoes with built-in support, from spa-style mules to a wool clog that molds to your foot.",
    picks: [
      {
        id: "vionicGemma", bestFor: "Best overall (women)",
        blurb: "The Gemma puts Vionic's VIO MOTION orthotic footbed, with contoured arch support and a deep heel cup, inside a plush, spa-style mule. It carries the APMA Seal of Acceptance, and the adjustable hook-and-loop strap holds your foot onto the footbed instead of letting it slide around.",
        pros: ["Orthotic footbed with contoured arch and deep heel cup", "APMA Seal of Acceptance", "Adjustable strap for a secure fit", "Durable outsole for quick trips outside"],
        cons: ["Firmer than a typical fluffy slipper", "Vionic suggests a 1–2 week adjustment period", "Open heel offers less control than a closed shoe"],
        buyFor: "Women who want a cozy slipper that actually supports the arch.",
        avoidFor: "Anyone who wants a soft, unstructured slipper."
      },
      {
        id: "vionicRelax", bestFor: "Best for warm weather",
        blurb: "A simpler, lighter Vionic: an open-toe terrycloth slide with the same orthotic-footbed idea built in, and an adjustable strap across the top. It has one of the largest buyer bases of any supportive slipper.",
        pros: ["Built-in orthotic footbed", "Light terrycloth suits warm homes", "Adjustable strap", "Huge base of buyer feedback"],
        cons: ["No heel coverage", "Terrycloth shows wear over time", "Indoor use only"],
        buyFor: "Anyone who runs warm and wants an easy, supportive slide around the house.",
        avoidFor: "Cold floors or winter; choose a closed slipper."
      },
      {
        id: "orthofeetAsheville", bestFor: "Best for men",
        blurb: "Orthofeet's Asheville comes with an orthotic insole that has anatomical arch support, and its two side straps open completely, which makes it easy to get on with swollen feet or limited mobility. The faux-fur lining and suede-and-leather upper make it a proper winter slipper.",
        pros: ["Orthotic insole with anatomical arch support", "Fully opening dual straps for swollen feet", "Wide toe box", "Warm faux-fur lining"],
        cons: ["Bulkier than a slide", "Too warm for summer", "Premium price for a slipper"],
        buyFor: "Men with flat feet, especially with swelling, diabetes, or heel pain.",
        avoidFor: "Warm climates or anyone who wants a minimal slipper."
      },
      {
        id: "orthofeetLorin", bestFor: "Best hands-free (women)",
        blurb: "The Lorin is a hands-free slipper-shoe: you slide in without bending down, and it's built to go outdoors too. Like other Orthofeet models, it includes an orthotic insole with anatomical arch support and a wide toe box.",
        pros: ["Hands-free slip-on entry", "Orthotic insole with anatomical arch support", "Indoor and outdoor wear", "Wide toe box"],
        cons: ["Warm lining isn't for summer", "Heavier than a house slide", "Premium price"],
        buyFor: "Women who want supportive slipper-shoes that are easy to get on.",
        avoidFor: "Anyone who prefers a light, open slipper."
      },
      {
        id: "haflingerGrizzly", bestFor: "Best natural-material clog",
        blurb: "Haflinger's boiled-wool clogs have a cork-latex footbed that molds to your foot over time, with a contoured heel seat, so the support becomes yours, a little like a Birkenstock for the house. Wool keeps feet warm in winter and wicks moisture year-round.",
        pros: ["Cork-latex footbed molds to your arch", "Contoured heel seat", "Boiled wool is warm and breathable", "Slip-resistant rubber sole for indoor and outdoor use"],
        cons: ["Firm at first while the footbed molds", "European sizing; measure before you order", "Open back"],
        buyFor: "Anyone who likes cork footbeds and natural materials.",
        avoidFor: "People who want cushion-soft comfort from day one."
      }
    ],
    sections: [
      {
        id: "why-slippers-matter", h2: "Why house shoes matter more than you think",
        html: `        <p>Many people with flat feet spend 10+ hours a day at home, and much of that on hard floors. Going barefoot puts the full load of standing on an arch with no support, and flimsy slippers aren't much better. For people with plantar fasciitis, those first barefoot steps out of bed are often the most painful of the day.</p>
        <p>A supportive slipper by the bed and the door means your feet get some support across the whole day, not just while you're out. It's one of the easiest habit changes there is, and much cheaper than a new pair of shoes.</p>`
      },
      {
        id: "what-to-look-for", h2: "What makes a slipper supportive",
        html: `        <ul>
          <li><strong>A contoured footbed</strong> with a raised arch area, not a flat foam sheet.</li>
          <li><strong>A heel cup</strong> that cradles the heel, so it doesn't roll inward.</li>
          <li><strong>An adjustable strap</strong> so the foot stays on the footbed without your toes gripping.</li>
          <li><strong>A firm sole</strong> that doesn't fold in half when you bend it.</li>
        </ul>`
      }
    ],
    faq: [
      { q: "Is walking barefoot bad for flat feet?", a: "Short periods barefoot on soft surfaces can help build foot strength, but standing and walking barefoot on hard floors for hours often aggravates arch and heel pain for people with flat feet. A supportive slipper for most of your time at home is a sensible middle ground." },
      { q: "Do slippers with arch support help plantar fasciitis?", a: "They can help, especially for the painful first steps in the morning. Keeping a supportive slipper beside the bed means you never take those steps barefoot. For persistent heel pain, see a podiatrist." },
      { q: "Can I wear Vionic slippers outside?", a: "The Gemma has a durable outsole designed for indoor and outdoor use, and Orthofeet's slippers are also built for quick trips outside. Lighter terrycloth slides like the Vionic Relax are best kept indoors." }
    ],
    related: [R.sandals, R.pf, R.stretches]
  },

  // ===================== KIDS =====================
  {
    slug: "best-kids-shoes-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Kids' Shoes for Flat Feet",
    title: "Best Kids' Shoes for Flat Feet: A Parent's Guide (2026)",
    metaDescription: "Supportive shoes for kids with flat feet: stable heel counters, cushioned midsoles, and secure closures, plus when a child's flat feet are normal and when to see a doctor.",
    h1: "Best Kids' Shoes for Flat Feet",
    lede: "First, the reassuring part: most young children have flat-looking feet, and most grow out of it. But if your child's feet ache, tire quickly, or the shoes wear unevenly, a well-made shoe with a stable heel can make everyday play more comfortable.",
    picksIntro: "Three proven, widely available kids' shoes with stable heels and supportive builds. Bring any concerns to a pediatrician first.",
    picks: [
      {
        id: "asicsGt1000Kids", bestFor: "Most supportive (big kids)",
        blurb: "The GT-1000 is ASICS' long-running stability trainer, and this is the grade-school version, one of the few kids' shoes built on a stability platform rather than just scaled down. Rearfoot GEL cushioning helps with impact, and the mesh upper holds the foot securely.",
        pros: ["Kids' edition of an adult stability shoe", "Rearfoot GEL for impact absorption", "Supportive mesh upper", "Lace-up for a secure, adjustable fit"],
        cons: ["Laces can be a hassle for younger kids", "Grade-school sizes only", "Pricier than basic kids' sneakers"],
        buyFor: "Older kids with flat feet who are active in running sports.",
        avoidFor: "Young children who can't tie laces yet."
      },
      {
        id: "nb888Kids", bestFor: "Best overall (velcro)",
        blurb: "The 888 is a parent favorite with thousands of ratings, and it's a smart pick for flat feet because it's sturdy: an ABZORB midsole that combines cushioning with compression resistance, a durable rubber outsole, and a suede-and-mesh upper. Hook-and-loop straps mean a snug fit even when kids put the shoes on themselves.",
        pros: ["ABZORB midsole resists packing down", "Durable suede-and-mesh upper", "Hook-and-loop closure kids can manage", "Huge base of positive parent feedback"],
        cons: ["Not a dedicated stability shoe", "Suede gets scuffed on the playground"],
        buyFor: "Most kids with flexible flat feet who need an everyday school and play shoe.",
        avoidFor: "Kids with a diagnosed condition who need an orthotic-specific shoe; follow your clinician's advice."
      },
      {
        id: "nb680Kids", bestFor: "Best value",
        blurb: "A simpler, typically cheaper New Balance with the same ABZORB cushioning and a leather-and-mesh upper with stitched reinforcements, which New Balance says is designed for support and durability. A good school-shoe pick when growing feet mean frequent replacements.",
        pros: ["ABZORB cushioning", "Leather and mesh upper with reinforced toe", "Hook-and-loop closure", "Usually lower priced"],
        cons: ["Less structured than the GT-1000", "Fewer reviews than the 888", "Basic insole"],
        buyFor: "Parents who need a solid everyday shoe and replace them often.",
        avoidFor: "Kids who need maximum heel control."
      }
    ],
    sections: [
      {
        id: "normal-or-not", h2: "Is my child's flat foot normal?",
        html: `        <p>Most toddlers look flat-footed because of a fat pad under the arch and loose ligaments, and arches typically develop through early childhood. The common pattern is a <strong>flexible flat foot</strong>: the arch disappears when standing but appears when your child stands on tiptoe or sits with their feet hanging. That's usually not a concern.</p>
        <div class="callout callout-warn">
          <strong>See a pediatrician or podiatrist if:</strong>
          your child has pain in the feet, ankles, or legs; the foot looks flat even on tiptoe (a rigid flat foot); only one foot is affected; they tire much faster than other kids; or they limp. Our <a href="/guides/flat-feet-in-children/">flat feet in children guide</a> explains these signs in more detail.
        </div>`
      },
      {
        id: "what-to-look-for", h2: "What to look for in a kids' shoe",
        html: `        <ul>
          <li><strong>A firm heel counter</strong> that doesn't collapse when you squeeze it.</li>
          <li><strong>Flex at the toes, not the middle.</strong> Bend the shoe: it should bend where the toes bend, not fold in the arch.</li>
          <li><strong>A secure closure.</strong> Laces or hook-and-loop straps keep the heel seated. Avoid floppy slip-ons for everyday wear.</li>
          <li><strong>Room to grow, but not too much.</strong> About a thumb's width past the longest toe. Too much room makes a child grip with their toes.</li>
          <li><strong>Replace them often.</strong> Kids outgrow shoes every few months, and hand-me-downs carry the previous child's wear pattern.</li>
        </ul>`
      }
    ],
    faq: [
      { q: "At what age do children develop arches?", a: "Arches usually develop gradually through early childhood, with many children showing a visible arch by around age 6. Some people keep flexible flat feet into adulthood with no problems at all." },
      { q: "Do kids with flat feet need orthotics?", a: "Most children with flexible, painless flat feet don't need orthotics. If your child has pain, a rigid flat foot, or other concerns, a pediatrician or pediatric podiatrist can tell you whether orthotics or other treatment would help." },
      { q: "Should kids go barefoot if they have flat feet?", a: "For healthy kids, barefoot play on safe, natural surfaces is generally encouraged for foot development. Supportive shoes matter more for long days on hard surfaces, school, and sports. Ask your pediatrician if your child has pain." }
    ],
    related: [R.children, R.howToTell, R.running]
  },

  // ===================== COURT =====================
  {
    slug: "best-tennis-and-pickleball-shoes-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Tennis &amp; Pickleball Shoes for Flat Feet",
    title: "Best Tennis &amp; Pickleball Shoes for Flat Feet (2026)",
    metaDescription: "Court shoes for flat feet: tennis and pickleball shoes with midfoot stability, lateral support, and room for orthotics. Why running shoes aren't safe on court.",
    h1: "Best Tennis and Pickleball Shoes for Flat Feet",
    lede: "Running shoes are built to move forward. Court sports are all side-to-side cuts, sudden stops, and lunges, which is exactly when a flat foot rolls hardest. You need a shoe built for lateral stability, and these five are.",
    picksIntro: "Two ASICS court staples, a pickleball-specific stability shoe, an APMA-recognized Skechers, and a durable budget tennis shoe.",
    picks: [
      {
        id: "asicsGelResolution", bestFor: "Best overall tennis shoe",
        blurb: "The Gel-Resolution is one of the most stable shoes in tennis. DYNAWALL technology reinforces the midfoot, DYNALACING locks the foot down during fast changes of direction, and the heel's FF BLAST PLUS foam is designed for stable landings. Very durable AHARPLUS rubber in the heel suits heavy draggers.",
        pros: ["DYNAWALL midfoot support for lateral stability", "DYNALACING locks the foot in during cuts", "Stable heel landings", "Very durable outsole"],
        cons: ["Firm and stiff in the first few hits", "Premium price", "The listing covers several colors and sizes, so check you've picked the right model"],
        buyFor: "Regular tennis players with flat feet who need maximum lateral stability.",
        avoidFor: "Casual players who want a soft, lightweight feel."
      },
      {
        id: "asicsGelRenma", bestFor: "Best for indoor pickleball",
        blurb: "A pickleball and indoor court shoe with TRUSSTIC technology, a midfoot shank that resists twisting, plus a wrap-up outsole and wider base for balanced lateral moves. Forefoot GEL softens the quick, low movements pickleball demands.",
        pros: ["TRUSSTIC midfoot shank improves stability", "Wrap-up outsole and wider base for lateral moves", "Forefoot GEL cushioning", "Good for indoor courts"],
        cons: ["The listing notes it runs narrow", "Indoor-oriented outsole wears faster outdoors", "Moderate arch support; add an insole if needed"],
        buyFor: "Indoor pickleball and badminton players with narrow-to-medium flat feet.",
        avoidFor: "Wide feet; choose the Skechers or New Balance instead."
      },
      {
        id: "kswissExpressLight", bestFor: "Best pickleball stability (women)",
        blurb: "K-Swiss says it designed the Express Light \"as a stability shoe for the short lateral and front/back movement\" of pickleball. It has an OrthoLite liner and reinforced toe and heel to resist dragging, and K-Swiss notes the stable fit may take some adjustment if you're coming from a neutral sneaker.",
        pros: ["Designed specifically as a pickleball stability shoe", "OrthoLite sock liner", "Reinforced toe and heel resist dragging", "Light build for quick footwork"],
        cons: ["Takes time to adjust coming from neutral sneakers", "Moderate arch support built in", "Stability fit feels firm at first"],
        buyFor: "Women pickleball players who want stability without a heavy shoe.",
        avoidFor: "Players who want a soft, plush feel."
      },
      {
        id: "skechersViperCourtPro2", bestFor: "Best built-in arch support",
        blurb: "The Viper Court Pro 2.0 ships with Skechers' removable Arch Fit insole, and the listing says the design carries the APMA Seal of Acceptance, which is rare for a court shoe. A Goodyear rubber outsole supports controlled slides, and it's also suitable for padel and tennis.",
        pros: ["Removable Arch Fit insole with arch support", "APMA Seal of Acceptance", "Durable Goodyear rubber outsole", "Works for pickleball, padel, and tennis"],
        cons: ["Lighter build gives a little less lockdown than ASICS", "Arch Fit contour isn't for everyone", "Newer model with fewer reviews"],
        buyFor: "Pickleball players who want arch support built in without buying an insole.",
        avoidFor: "Anyone who already uses custom orthotics, which would replace the main benefit."
      },
      {
        id: "nb696v5", bestFor: "Best budget hard-court",
        blurb: "A durable, affordable hard-court tennis shoe with a locked-down upper and a full-length Ndurance outsole with a herringbone pattern. It's not the most supportive shoe here, but it's a stable court shoe at an approachable price, and it pairs well with an insole.",
        pros: ["Locked-down fit for lateral movement", "Durable Ndurance outsole", "Herringbone pattern for hard-court grip", "Usually affordable"],
        cons: ["Less midfoot technology than the ASICS picks", "Basic stock insole", "Hard-court specific"],
        buyFor: "Recreational players who want a stable court shoe and will add an insole.",
        avoidFor: "Anyone needing maximum built-in support."
      }
    ],
    sections: [
      {
        id: "why-not-running-shoes", h2: "Why you shouldn't play in running shoes",
        html: `        <p>Running shoes have tall, soft heels and flared bases designed for straight-line motion. On a court, that softness lets the foot roll over the edge of the midsole during a side step, and with flat feet that roll starts from an already-collapsed position. Court shoes are lower, firmer, and reinforced along the sides so the foot stays on top of the platform when you change direction.</p>
        <p>The outsole matters too: court shoes use flatter, more durable rubber with patterns like herringbone that grip a hard court without catching, while running-shoe lugs can grab and twist an ankle.</p>`
      },
      {
        id: "what-to-look-for", h2: "What to look for with flat feet",
        html: `        <ul>
          <li><strong>Midfoot stability features</strong> (DYNAWALL, TRUSSTIC, shanks) that resist twisting.</li>
          <li><strong>Lateral reinforcement</strong> on the upper to keep the foot on the platform.</li>
          <li><strong>A removable insole</strong> so you can add an <a href="/best-insoles-for-flat-feet/">arch-support insole</a>.</li>
          <li><strong>The right outsole for your surface:</strong> hard-court, clay, or indoor.</li>
        </ul>`
      }
    ],
    faq: [
      { q: "Can I use tennis shoes for pickleball?", a: "Yes. Tennis shoes are generally a good choice for pickleball because both sports need lateral support and court-specific outsoles. Pickleball-specific shoes tend to be a bit lighter and lower to the ground." },
      { q: "Are court shoes good for flat feet?", a: "Court shoes with midfoot stability features and lateral reinforcement are a much better choice than running shoes for court sports with flat feet. Adding a supportive insole to a stable court shoe is a common, effective combination." },
      { q: "How often should I replace pickleball or tennis shoes?", a: "Frequent players often wear through outsoles or compress midsoles within a few months. Replace them when the tread is worn smooth in the forefoot or the shoe no longer feels stable during lateral moves." }
    ],
    related: [R.gym, R.overpronation, R.insoles]
  },

  // ===================== FOOT-CARE TOOLS =====================
  {
    slug: "best-foot-care-tools-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Foot-Care Tools for Flat Feet",
    title: "Best At-Home Tools for Flat Feet &amp; Arch Pain (2026)",
    metaDescription: "At-home tools that help with flat feet and arch pain: foot rollers, slant boards for tight calves, arch braces, heel cups, night splints, and toe spacers. What each one is for.",
    h1: "Best At-Home Tools for Flat Feet and Arch Pain",
    lede: "Shoes and insoles support your feet while you're on them. These inexpensive tools work on the other half of the problem, tight calves, a stiff plantar fascia, and weak foot muscles, in a few minutes a day at home.",
    picksIntro: "Six tools, each for a different job. You don't need all of them: start with the one that matches your main complaint.",
    picks: [
      {
        id: "theraflowRoller", bestFor: "Arch ache &amp; tight soles",
        blurb: "Rolling the sole of your foot over a ridged roller is one of the simplest ways to ease a tight, tired arch. TheraFlow's wooden roller has massage rows and nubs that follow the arch of the foot, plus a non-slip base, and it's one of the most-rated foot-care products on Amazon.",
        pros: ["Ridged rows and nubs massage the whole sole", "Shaped to follow the foot's arch", "Non-slip base, use it under a desk", "No batteries, very durable"],
        cons: ["Firm wood can feel intense on sore feet at first", "Doesn't stretch the calf", "Massage relief is temporary"],
        buyFor: "Anyone whose arches ache at the end of the day.",
        avoidFor: "Acute injuries or swelling; see a professional first."
      },
      {
        id: "strongtekSlantBoard", bestFor: "Tight calves &amp; Achilles",
        blurb: "Tight calves pull on the heel and increase strain on the arch and plantar fascia, and they're common with flat feet. A slant board makes calf stretching easy and consistent: just stand on it. The StrongTek has five incline settings, a non-slip surface, and a heel lip.",
        pros: ["Five adjustable angles to progress gradually", "Non-slip surface and heel lip", "Light, compact, portable", "Also useful for squats and mobility work"],
        cons: ["Easy to overdo at steep angles", "Plastic board, not as solid as wood", "Needs consistent daily use to help"],
        buyFor: "Anyone with tight calves, Achilles tightness, or plantar fasciitis.",
        avoidFor: "Anyone with an acute Achilles injury; get it assessed first."
      },
      {
        id: "viveArchBrace", bestFor: "Extra arch support in any shoe",
        blurb: "A compression wrap around the midfoot with a pouch for up to three gel inserts, which Vive says lifts and supports the arch while standing. It's a lightweight way to add support to shoes that don't have room for a full orthotic.",
        pros: ["Adjustable compression around the arch", "Gel insert pouch for adjustable lift", "Thin enough for most shoes", "Comes as a pair"],
        cons: ["Can feel warm over long wear", "Less precise support than a structured insole", "Strap fit takes some trial and error"],
        buyFor: "People who want arch support in shoes that won't fit an insole.",
        avoidFor: "Those who already wear orthotics, since the two don't combine well."
      },
      {
        id: "tulisHeelCups", bestFor: "Heel pain on hard floors",
        blurb: "When the heel is what hurts, a cushioned heel cup absorbs impact before it reaches the fascia's attachment point. Tuli's multi-cell gel cups are latex-free, fit most closed shoes, and list excessive pronation and plantar fasciitis among their uses.",
        pros: ["Multi-cell gel absorbs heel impact", "Fits in most closed-toe shoes", "Latex-free and light", "Made in the USA"],
        cons: ["Heel only, with no arch support", "Raises the heel slightly in the shoe", "Needs a shoe with some heel room"],
        buyFor: "People with heel pain who stand on hard floors.",
        avoidFor: "Arch pain without heel pain; an insole will help more."
      },
      {
        id: "braceabilityNightSplint", bestFor: "Painful first steps in the morning",
        blurb: "If your first steps out of bed are the worst, it's often because the plantar fascia and Achilles tighten overnight. A night splint sock gently holds the foot flexed while you sleep. This one is a soft sock with an adjustable toe strap, much easier to sleep in than a rigid boot.",
        pros: ["Soft, low-profile design", "Adjustable strap controls the stretch", "Fits left or right foot", "Lighter than hard night splints"],
        cons: ["Takes a few nights to get used to", "Mixed reviews: some find it uncomfortable or hot", "Use one foot at a time; buy two for both feet"],
        buyFor: "People with morning heel pain from plantar fasciitis.",
        avoidFor: "Anyone with circulation problems or diabetes, unless their doctor approves."
      },
      {
        id: "mindBodhiToeSpacers", bestFor: "Toe alignment &amp; foot strength",
        blurb: "Toe spacers gently spread toes that shoes have squeezed together, and many people use them during foot-strengthening routines. Mind Bodhi's are made from medical-grade, latex-free gel, can be worn barefoot or in roomy shoes, and have tens of thousands of ratings.",
        pros: ["Soft, latex-free medical-grade gel", "Wear barefoot, with socks, or in roomy shoes", "Pairs well with foot exercises", "Inexpensive"],
        cons: ["Won't change arch structure on their own", "Sizing is limited (regular fits women 6–10, men 7–9)", "Don't fit in narrow shoes"],
        buyFor: "Anyone doing foot-strengthening exercises, or with toes cramped by tight shoes.",
        avoidFor: "Anyone expecting arch support; these work on the toes."
      }
    ],
    sections: [
      {
        id: "where-to-start", h2: "Which tool should you start with?",
        html: `        <div class="table-wrap"><table class="compare">
          <thead><tr><th scope="col">If your main problem is…</th><th scope="col">Start with</th></tr></thead>
          <tbody>
            <tr><td>Aching arches at the end of the day</td><td>Foot roller</td></tr>
            <tr><td>Tight calves or Achilles</td><td>Slant board</td></tr>
            <tr><td>Painful first steps in the morning</td><td>Night splint + slant board</td></tr>
            <tr><td>Heel pain on hard floors</td><td>Gel heel cups</td></tr>
            <tr><td>Shoes with no room for an insole</td><td>Arch brace</td></tr>
            <tr><td>Building foot strength</td><td>Toe spacers + <a href="/guides/flat-feet-exercises-and-stretches/">exercises</a></td></tr>
          </tbody>
        </table></div>`
      },
      {
        id: "tools-plus-shoes", h2: "Tools work best alongside good shoes",
        html: `        <p>None of these replace a supportive shoe or insole. They work on flexibility, strength, and recovery, while your footwear handles support during the day. The combination of a <a href="/best-shoes-for-flat-feet/">supportive shoe</a>, a daily stretching habit, and something to help recovery tends to work better than any one of them alone.</p>
        <div class="callout callout-warn">
          <strong>When to see a professional</strong>
          If pain is sharp, getting worse, keeps you awake, or hasn't improved after a few weeks of sensible self-care, see a podiatrist or physical therapist. And if you have diabetes or circulation problems, check with your doctor before using braces, splints, or massage tools.
        </div>`
      }
    ],
    faq: [
      { q: "Do foot rollers help flat feet?", a: "A foot roller won't change the structure of a flat foot, but rolling the sole can ease tightness and aching in the arch and plantar fascia, especially at the end of the day. It works best as part of a routine with stretching and supportive shoes." },
      { q: "Is a slant board good for plantar fasciitis?", a: "Calf stretching is one of the most commonly recommended self-care steps for plantar fasciitis, and a slant board makes it easy to do consistently. Start at a gentle angle and increase gradually." },
      { q: "Do toe spacers fix flat feet?", a: "No. Toe spacers spread and realign the toes, which some people find comfortable and helpful during strengthening exercises, but they don't build or support an arch on their own." }
    ],
    related: [R.stretches, R.pf, R.insoles]
  },

  // ===================== BOOTS =====================
  {
    slug: "best-boots-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Boots for Flat Feet",
    title: "Best Boots for Flat Feet: Casual &amp; Winter (2026)",
    metaDescription: "Casual and winter boots for flat feet, chosen for shanks, firm heels, and removable footbeds that fit an orthotic. Chelsea, hiking, snow, and orthopedic picks.",
    h1: "Best Casual and Winter Boots for Flat Feet",
    lede: "Boots look sturdy, but plenty of them are just a stiff leather shell around a flat, glued-in footbed. For flat feet, the boot to buy has a shank or firm midsole for structure, a heel that holds you upright, and a footbed you can swap for real arch support.",
    picksIntro: "Five boots for different jobs: an orthopedic winter boot, an everyday Chelsea, a waterproof hiker, a snow boot, and the classic 6-inch.",
    picks: [
      {
        id: "orthofeetFlorence", bestFor: "Most arch support (women)",
        blurb: "The only boot here with real arch support built in. Orthofeet ships it with an orthotic insole with anatomical arch support and lists flat feet and overpronation among its target conditions. Two hook-and-loop straps open wide for easy entry, and the leather is fully waterproof.",
        pros: ["Orthotic insole with anatomical arch support included", "Waterproof leather for rain and slush", "Straps open wide for easy on and off", "Wide toe box"],
        cons: ["Strap closure isn't as sleek as laces or a Chelsea", "Fewer ratings than the classics on this page", "Orthopedic styling won't suit everyone"],
        buyFor: "Women with flat feet who want a winter boot that supports the arch with no extra insert.",
        avoidFor: "Anyone after a fashion-first boot."
      },
      {
        id: "blundstone500", bestFor: "Best everyday Chelsea",
        blurb: "Blundstones are famous for lasting for years, and the Original 500 has two features flat feet benefit from: a steel shank that adds stability through the midfoot, and a removable footbed, so you can slot in your own orthotic. The SPS Max Comfort system cushions the heel.",
        pros: ["Steel shank adds midfoot stability", "Removable footbed fits an orthotic", "Cushioned SPS Max Comfort heel", "Pulls on easily, very durable"],
        cons: ["Stock footbed has little arch support", "Elastic sides give less lockdown than laces", "Firm until broken in"],
        buyFor: "Anyone who wants one do-everything boot and will add an insole.",
        avoidFor: "Overpronators who need a laced boot that holds the heel firmly."
      },
      {
        id: "columbiaNewtonRidge", bestFor: "Best value waterproof",
        blurb: "A lace-up, waterproof leather boot with a cushioned midsole and Omni-Grip traction, at a friendly price and with a huge base of buyer feedback. Lacing locks the heel down better than a pull-on, and wide sizes are available for flat feet that splay.",
        pros: ["Lace-up closure for a secure heel", "Waterproof leather and mesh", "Wide sizes available", "Affordable and widely reviewed"],
        cons: ["Moderate built-in arch support", "Not insulated for deep cold", "Heavier than a sneaker for town wear"],
        buyFor: "People who want a waterproof, laced boot for wet weather, trails, and errands.",
        avoidFor: "Deep snow and extreme cold."
      },
      {
        id: "sorelCaribou", bestFor: "Best for deep snow",
        blurb: "For serious winter, the Caribou's seam-sealed rubber shell keeps snow out, and its removable 9 mm felt inner boot can come out to dry. The rubber lower is firm and enclosing, which holds the heel steady on ice and slush.",
        pros: ["Seam-sealed waterproof construction", "Removable felt liner", "Firm rubber shell holds the foot steady", "Built for deep cold and snow"],
        cons: ["Heavy and bulky for walking long distances", "Liner adds volume, so a thick orthotic may not fit", "No real arch support built in"],
        buyFor: "Shoveling snow, cold commutes, and winter dog walks.",
        avoidFor: "Long walks or mild winters."
      },
      {
        id: "timberlandPremium6", bestFor: "Classic style, with comfort tech",
        blurb: "The classic 6-inch Premium (not the PRO work boot) now includes an anti-fatigue comfort system that Timberland adapted from its PRO line, plus seam-sealed waterproof leather and PrimaLoft insulation. It's a style pick first, so plan to pair it with an arch-support insole.",
        pros: ["Anti-fatigue comfort system from Timberland PRO", "Seam-sealed waterproof leather", "PrimaLoft insulation", "Wide widths available"],
        cons: ["Stiff leather needs break-in", "Limited built-in arch support", "Heavy compared with a hiker"],
        buyFor: "People who want the iconic boot and will add an insole.",
        avoidFor: "Anyone who needs support without an insert."
      }
    ],
    sections: [
      {
        id: "what-to-look-for", h2: "What to look for in a boot with flat feet",
        html: `        <ul>
          <li><strong>A shank or firm midsole.</strong> A shank (steel, fiberglass, or TPU) stiffens the midfoot so it can't fold in half. That's what stops a flat arch collapsing further on uneven ground.</li>
          <li><strong>A removable footbed.</strong> Most boot footbeds are flat foam. If it comes out, an <a href="/best-insoles-for-flat-feet/">arch-support insole</a> can go in.</li>
          <li><strong>Laces or straps for lockdown.</strong> Pull-on boots are convenient, but a laced boot holds the heel against the footbed better.</li>
          <li><strong>Room for the insole.</strong> Try boots on with your insole in, and with the socks you'll wear in winter.</li>
        </ul>`
      },
      {
        id: "winter-tips", h2: "Winter-specific tips",
        html: `        <p>Cold, icy ground makes people with flat feet tense their feet and shorten their stride, which tires the arch faster. Good traction matters as much as support: a slip-resistant outsole lets you walk normally. Thick winter socks also take up room, so if you're between sizes, size up and use an insole to fill the extra volume.</p>`
      }
    ],
    faq: [
      { q: "Are Chelsea boots good for flat feet?", a: "They can be if they have a shank and a removable footbed, like the Blundstone 500, so you can add arch support. Elastic sides give less heel control than laces, so strong overpronators often do better in a laced boot." },
      { q: "Can I put orthotics in winter boots?", a: "Usually yes, if the boot has a removable footbed or liner. Take the stock footbed out and put the orthotic in its place. Liner boots like the Sorel Caribou have less spare room, so try them on with the orthotic in." },
      { q: "Are Timberland boots good for flat feet?", a: "The classic 6-inch Premium now has an anti-fatigue comfort system, but its built-in arch support is limited. It works well for many people with flat feet when paired with a supportive insole." }
    ],
    related: [{ href: "/best-hiking-shoes-for-flat-feet/", tag: "Hiking", title: "Best Hiking Shoes &amp; Boots", text: "Trail stability where flat feet roll most." }, R.insoles, R.work]
  },

  // ===================== BASKETBALL =====================
  {
    slug: "best-basketball-shoes-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Basketball Shoes for Flat Feet",
    title: "Best Basketball Shoes for Flat Feet (2026)",
    metaDescription: "Basketball shoes for flat feet: models with supportive uppers, heel lockdown, and stable cushioning for cuts and landings, plus how to add arch support.",
    h1: "Best Basketball Shoes for Flat Feet",
    lede: "Basketball loads flat feet from every direction: hard landings, sudden stops, and sharp lateral cuts. Most basketball shoes don't have much arch support built in, so the job is to choose one that locks the heel down and holds the foot over a stable base, then add an insole if you need one.",
    picksIntro: "Five well-reviewed basketball shoes with strong heel lockdown and stable platforms, from budget picks to signature models.",
    picks: [
      {
        id: "uaLockdown7", bestFor: "Best budget pick",
        blurb: "The Lockdown 7 earns its name with leather and film overlays on a mesh upper that add support where the foot pushes against the shoe, plus a solid herringbone outsole. It's affordable, has thousands of ratings, and its standard EVA insole is easy to swap for an arch-support insert.",
        pros: ["Leather and film overlays add support", "Herringbone rubber for on-court control", "Very widely reviewed", "Budget-friendly"],
        cons: ["Basic EVA cushioning", "Little arch support built in", "Not built for heavy, high-flying players"],
        buyFor: "Recreational players and growing teens who want a supportive, affordable shoe.",
        avoidFor: "Heavy players who need premium impact protection."
      },
      {
        id: "uaJet23", bestFor: "Best cushioned landings",
        blurb: "The Jet '23 adds a full-length Micro G midsole and a plush foam sockliner for softer landings, with a mixed-material upper that Under Armour says puts support where you need it. A good step up from the Lockdown if your feet ache after games.",
        pros: ["Full-length Micro G cushioning", "Plush foam sockliner", "Mixed-material upper with targeted support", "Durable rubber outsole"],
        cons: ["Softer feel gives slightly less court feel", "Moderate arch support", "Pricier than the Lockdown 7"],
        buyFor: "Players who want more cushioning for jumping and landing.",
        avoidFor: "Players who prefer a firm, low-to-the-ground feel."
      },
      {
        id: "nikeGiannisImmortality4", bestFor: "Best lockdown",
        blurb: "Nike built the Immortality 4 around an internal containment system that keeps the foot over the footbed during cuts, plus a padded heel shape designed to support you through sudden stops. That heel control is exactly what helps a flat foot avoid rolling inward on lateral moves.",
        pros: ["Internal containment system for lockdown", "Padded heel for support in sudden stops", "Multidirectional traction", "Light and quick"],
        cons: ["Moderate cushioning for heavier players", "Basic insole", "Fewer ratings than the Under Armour picks"],
        buyFor: "Quick, guard-style players who cut a lot.",
        avoidFor: "Bigger players who need maximum impact protection."
      },
      {
        id: "nikePrecision7", bestFor: "Best budget Nike",
        blurb: "A simple, affordable Nike with a sculpted foam midsole that Nike describes as soft and supportive, plush foam around the collar and tongue, and herringbone traction. It's low-profile, so many flat-footed players pair it with a supportive insole.",
        pros: ["Soft, supportive foam midsole", "Plush collar and tongue around the ankle", "Herringbone traction", "Good price"],
        cons: ["Low-profile build has little arch support", "Less structured upper than the Giannis", "Best for recreational play"],
        buyFor: "Casual players who want an affordable Nike and will add an insole.",
        avoidFor: "Competitive players who need maximum support."
      },
      {
        id: "adidasDameCertified", bestFor: "Best low-to-the-ground feel",
        blurb: "Damian Lillard's value line uses lightweight Bounce cushioning and a grippy rubber outsole on a low, stable platform. A lower platform means less leverage for the foot to roll over the edge of the shoe, which suits flat-footed guards who add their own arch support.",
        pros: ["Low, stable platform", "Lightweight Bounce cushioning", "Grippy rubber outsole", "Breathable upper"],
        cons: ["Minimal built-in arch support", "Not much impact protection for heavy players", "Listing mixes men's and women's sizing, so check carefully"],
        buyFor: "Guards who like court feel and use an arch-support insole.",
        avoidFor: "Bigger players who need more cushioning."
      }
    ],
    sections: [
      {
        id: "what-to-look-for", h2: "What matters in a basketball shoe for flat feet",
        html: `        <ul>
          <li><strong>Heel lockdown.</strong> The heel should not lift or slide when you stop hard. A sliding heel lets a flat foot roll inward.</li>
          <li><strong>A wide, stable base.</strong> A flared, low outsole resists rolling over during cuts.</li>
          <li><strong>A removable insole.</strong> Basketball insoles are usually flat foam. Swap in an <a href="/best-insoles-for-flat-feet/">arch-support insole</a> for real structure.</li>
          <li><strong>High tops?</strong> A high collar adds some ankle proprioception, but heel lockdown and a stable base matter more than collar height.</li>
        </ul>`
      },
      {
        id: "insoles", h2: "Why an insole matters most here",
        html: `        <p>Very few basketball shoes have meaningful arch support, because brands design for court feel and responsiveness. That makes basketball the sport where a supportive aftermarket insole does the most good. Pick the shoe for fit, lockdown, and traction, then add the arch support yourself.</p>`
      }
    ],
    faq: [
      { q: "Do I need high-top basketball shoes for flat feet?", a: "Not necessarily. High tops can help ankle awareness, but for flat feet a locked-down heel, a stable base, and a supportive insole matter more than collar height." },
      { q: "Can I use running shoes for basketball?", a: "It isn't recommended. Running shoes are built for straight-line motion and have soft, tall heels that can roll during lateral cuts. Basketball shoes are lower, wider, and built for side-to-side movement." },
      { q: "Should I add insoles to basketball shoes?", a: "For most players with flat feet, yes. Basketball shoes rarely have much arch support, so a supportive insole that replaces the stock one is often the single biggest improvement." }
    ],
    related: [{ href: "/best-tennis-and-pickleball-shoes-for-flat-feet/", tag: "Court sports", title: "Tennis &amp; Pickleball Shoes", text: "Lateral support for side-to-side cuts." }, R.insoles, R.gym]
  },

  // ===================== GOLF =====================
  {
    slug: "best-golf-shoes-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Golf Shoes for Flat Feet",
    title: "Best Golf Shoes for Flat Feet (2026)",
    metaDescription: "Golf shoes for flat feet: stable platforms for the swing, arch support for walking 18 holes, and removable insoles for orthotics. Spiked and spikeless picks.",
    h1: "Best Golf Shoes for Flat Feet",
    lede: "A round of golf asks two things of your feet: about four to five miles of walking, and a stable base while you rotate hard through the swing. Flat feet struggle with both, so the right golf shoe needs walking-shoe support and a platform that doesn't let the foot roll during the turn.",
    picksIntro: "Five golf shoes with stability features built in, including two with removable insoles for your own orthotic.",
    picks: [
      {
        id: "eccoBiomHybrid3", bestFor: "Best overall",
        blurb: "ECCO's Tri-Fi-Grip outsole has dedicated stability and rotational-support zones for the swing, and the Ortholite insole is removable, which gives an extra-width option or room for an orthotic. GORE-TEX keeps feet dry on wet morning rounds.",
        pros: ["Outsole zones for stability and rotational support", "Removable Ortholite insole fits an orthotic", "GORE-TEX waterproofing", "Light, strong yak leather"],
        cons: ["Premium price", "Natural-motion design feels close to the ground", "Arch support comes mainly from your own insert"],
        buyFor: "Golfers who walk the course and want stability plus room for an orthotic.",
        avoidFor: "Anyone who wants maximum arch support built in with no insert."
      },
      {
        id: "footjoyFuel", bestFor: "Best midfoot stability",
        blurb: "FootJoy's patented Stability Bridge sits in the midfoot, exactly where a flat arch wants to collapse, and resists twisting during the swing. A Stratolite EVA midsole cushions the walk, and the synthetic upper wipes clean.",
        pros: ["Patented midfoot Stability Bridge", "Cushioned Stratolite EVA midsole", "Easy-clean synthetic upper", "Spikeless grip for course and clubhouse"],
        cons: ["Listing is marked previous-season style, so sizes may be limited", "Slightly narrow heel per FootJoy's fit notes", "Moderate built-in arch support"],
        buyFor: "Golfers whose feet roll inward during the swing.",
        avoidFor: "Wide heels; check the fit notes first."
      },
      {
        id: "skechersGoGolfArchFit", bestFor: "Best built-in arch support",
        blurb: "Skechers' Arch Fit insole gives podiatrist-certified arch support out of the box, paired with ULTRA GO cushioning for the walk between shots and a spikeless Goodyear rubber outsole for traction. It's the most walking-shoe-like pick here.",
        pros: ["Arch Fit insole with arch support built in", "Very comfortable for walking 18 holes", "Goodyear rubber spikeless outsole", "Usually well priced"],
        cons: ["Softer platform gives less swing stability than ECCO or FootJoy", "Spikeless grip is weaker on wet slopes", "Casual look"],
        buyFor: "Walkers and casual golfers who want comfort and arch support most.",
        avoidFor: "Hard swingers on wet, hilly courses."
      },
      {
        id: "nbFreshFoamLinksPro", bestFor: "Best for wet courses",
        blurb: "New Balance pairs a structured build, with a TPU eyestay and an exoskeleton TPU outsole, with soft Fresh Foam cushioning and a molded insole. Removable cleats give better grip than spikeless shoes on wet grass, and the upper is waterproof.",
        pros: ["TPU structure in the upper and outsole", "Fresh Foam cushioning, 10 mm drop", "Removable cleats for wet-course grip", "Waterproof upper"],
        cons: ["Cleats aren't ideal off the course", "Moderate arch support", "Soft foam isn't for everyone"],
        buyFor: "Golfers on wet or hilly courses who want structure and cushioning.",
        avoidFor: "Anyone who wants one shoe for the course and the street."
      },
      {
        id: "adidasCodechaos", bestFor: "Most cushioned",
        blurb: "adidas puts its BOOST foam in the midsole for long-lasting cushioning, with a CHAOS Traction outsole and TwistGrip technology that adidas describes as giving incredible stability. It's waterproof, and the cushioning helps on firm summer fairways.",
        pros: ["BOOST foam cushioning for long rounds", "TwistGrip outsole designed for stability", "Waterproof protection", "Spikeless and versatile"],
        cons: ["Limited built-in arch support", "Sporty look", "Fewer details on the listing than other picks"],
        buyFor: "Golfers whose main complaint is sore, tired feet by the back nine.",
        avoidFor: "Strong overpronators who need structured support."
      }
    ],
    sections: [
      {
        id: "what-to-look-for", h2: "What matters in a golf shoe for flat feet",
        html: `        <ul>
          <li><strong>Midfoot stability.</strong> During the swing, the trail foot rolls inward. Features like FootJoy's Stability Bridge or ECCO's stability zones resist that roll.</li>
          <li><strong>Walking comfort.</strong> A round is miles of walking. Cushioning and arch support matter as much as in a walking shoe.</li>
          <li><strong>A removable insole.</strong> For an <a href="/best-insoles-for-flat-feet/">arch-support insole</a> or your custom orthotic.</li>
          <li><strong>Spiked or spikeless?</strong> Spiked shoes grip better on wet slopes, while spikeless shoes are more comfortable and versatile.</li>
        </ul>`
      },
      {
        id: "walking-vs-cart", h2: "Walking or riding?",
        html: `        <p>If you walk the course, prioritize comfort and arch support: the Skechers or ECCO with your own insole. If you mostly ride a cart, swing stability matters more than walking cushioning, which favors the FootJoy or New Balance. Either way, try golf shoes on with the socks you play in, late in the day.</p>`
      }
    ],
    faq: [
      { q: "Can I wear orthotics in golf shoes?", a: "Yes, if the shoe has a removable insole. The ECCO Biom Hybrid 3, for example, has a removable Ortholite insole specifically to give an extra-width option. Replace the stock insole rather than stacking the orthotic on top." },
      { q: "Are spikeless golf shoes OK for flat feet?", a: "Yes. Spikeless shoes are usually more comfortable for walking, which helps flat feet over a full round. On wet or hilly courses, spiked shoes give better grip." },
      { q: "Do flat feet affect the golf swing?", a: "They can. A foot that rolls inward makes it harder to keep a stable base through the rotation. A golf shoe with midfoot stability features, plus arch support, helps keep the foot steady." }
    ],
    related: [R.walking, R.insoles, R.overpronation]
  },

  // ===================== SENIORS =====================
  {
    slug: "best-shoes-for-seniors-with-flat-feet",
    date: DATE,
    breadcrumbName: "Best Shoes for Seniors with Flat Feet",
    title: "Best Shoes for Seniors with Flat Feet (2026)",
    metaDescription: "Supportive shoes for seniors and older adults with flat feet: stable heels, arch support, easy hook-and-loop or slip-in closures, wide sizes, and non-slip soles.",
    h1: "Best Shoes for Seniors and Older Adults with Flat Feet",
    lede: "Arches often flatten further with age as the tendons that hold them up stretch, and balance gets more precious too. For older adults, the best shoe for flat feet combines real support with things that matter at any age but more so now: easy closures, stability, and grip.",
    picksIntro: "Five walking shoes with stability, arch support, and easy closures. Three are listed with Medicare code A5500, which may make them eligible for reimbursement.",
    picks: [
      {
        id: "propetLifeWalker", bestFor: "Most supportive (men)",
        blurb: "Propét's LifeWalker is built like a medical walking shoe: a contoured heel stabilizer, an EVA midsole with arch support, a removable cushioned orthotic, and a rocker profile that eases each step. Dual hook-and-loop straps make it easy to adjust, and it's listed with Medicare code A5500.",
        pros: ["Built-in heel stabilizer and arch support", "Removable cushioned orthotic", "Rocker sole eases each step", "Dual hook-and-loop straps; Medicare A5500 code"],
        cons: ["Plain, orthopedic look", "Heavier than a modern sneaker", "Rocker sole takes a few days to get used to"],
        buyFor: "Men who want maximum stability and easy straps.",
        avoidFor: "Anyone who wants a sporty, lightweight sneaker."
      },
      {
        id: "orthofeetCoral", bestFor: "Most supportive (women)",
        blurb: "The Coral includes Orthofeet's orthotic insole with anatomical arch support, and the brand lists flat feet and overpronation among its target conditions. A soft stretch-knit upper with a seam-free interior and a wide toe box make it gentle on bunions and swelling.",
        pros: ["Orthotic insole with anatomical arch support", "Stretch-knit upper for bunions and swelling", "Seam-free interior", "Wide toe box"],
        cons: ["Knit upper offers less structure than leather", "Not for wet weather", "Premium price"],
        buyFor: "Women with flat feet plus bunions, swelling, or sensitive feet.",
        avoidFor: "Rainy climates, or anyone needing a firm leather upper."
      },
      {
        id: "nb813", bestFor: "Best everyday walker (men)",
        blurb: "A long-time favorite with thousands of ratings: a leather walking shoe with a hook-and-loop closure that's quick and easy to adjust, a soft collar, and Medicare code A5500 eligibility.",
        pros: ["Easy hook-and-loop closure", "Leather upper, soft collar", "Medicare HCPCS A5500 eligible", "Very widely reviewed"],
        cons: ["Moderate arch support; add an insole if needed", "Classic look", "13 mm drop feels high to some"],
        buyFor: "Men who want an easy, dependable daily walking shoe.",
        avoidFor: "Anyone needing strong pronation control."
      },
      {
        id: "nb577", bestFor: "Best everyday walker (women)",
        blurb: "The women's counterpart to the classic New Balance walker: a leather upper with a hook-and-loop closure, Abzorb heel cushioning, and a polyurethane midsole for stable cushioning. Reflective accents help in low light, and it's listed with Medicare code A5500.",
        pros: ["Hook-and-loop closure", "Abzorb heel cushioning", "Stable polyurethane midsole", "Reflective accents; Medicare A5500 code"],
        cons: ["Moderate arch support", "Basic, classic styling", "Firmer feel than modern foams"],
        buyFor: "Women who want a stable, easy walking shoe for daily use.",
        avoidFor: "Anyone who wants a soft, modern sneaker."
      },
      {
        id: "skechersCambridge", bestFor: "Best hands-free",
        blurb: "For anyone who finds bending down hard, Skechers' Slip-ins go on with no hands: a heel pillow holds the heel in place. This model pairs that with the Arch Fit insole system and Max Cushioning, plus a Goodyear anti-slip outsole for grip.",
        pros: ["Hands-free entry, no bending", "Arch Fit insole system", "Max Cushioning", "Goodyear anti-slip rubber outsole; machine washable"],
        cons: ["Less stable than a strapped walking shoe", "Knit upper, not for rain", "Tall, soft cushioning takes adjustment"],
        buyFor: "Older adults with limited mobility or back pain who need easy entry.",
        avoidFor: "Anyone with significant balance problems; choose a strapped shoe."
      }
    ],
    sections: [
      {
        id: "what-to-look-for", h2: "What matters most for older adults",
        html: `        <ul>
          <li><strong>A firm heel counter and stable base.</strong> Stability helps balance, and balance helps prevent falls.</li>
          <li><strong>Arch support.</strong> Built in, or via a removable insole you can replace with an <a href="/best-insoles-for-flat-feet/">orthotic</a>.</li>
          <li><strong>Easy closures.</strong> Hook-and-loop straps or hands-free entry, if laces are difficult.</li>
          <li><strong>A slip-resistant outsole.</strong> Rubber with good grip, not smooth or worn soles.</li>
          <li><strong>Room for swelling.</strong> A wide toe box and adjustable straps for feet that change size through the day.</li>
        </ul>`
      },
      {
        id: "medicare", h2: "About Medicare code A5500",
        html: `        <p>Some shoes are listed with HCPCS code A5500, a code for diabetic shoes. People with diabetes who meet Medicare's conditions may be eligible for coverage of therapeutic shoes, usually through a prescribing doctor and a qualified supplier. Buying from Amazon doesn't by itself mean you'll be reimbursed, so ask your doctor or supplier how it works for you. See our <a href="/best-shoes-for-diabetics-with-flat-feet/">diabetic shoes guide</a> for more.</p>
        <div class="callout callout-warn">
          <strong>Talk to a doctor if…</strong>
          one foot is flattening more than the other, the inside of the ankle is swollen or painful, or walking is getting harder. Adult-acquired flat foot can have causes that need medical treatment, not just better shoes.
        </div>`
      }
    ],
    faq: [
      { q: "Why do feet get flatter with age?", a: "The tendons and ligaments that support the arch, especially the posterior tibial tendon, can stretch or weaken over time, and weight gain or conditions like arthritis add strain. Sudden or one-sided flattening should be checked by a doctor." },
      { q: "Are slip-on shoes safe for seniors?", a: "Hands-free slip-ins with a heel pillow that holds the heel securely, like Skechers Slip-ins, can be a good option. Loose slip-ons or backless slippers are a fall risk and best avoided." },
      { q: "Does Medicare pay for shoes for flat feet?", a: "Medicare's therapeutic shoe benefit is generally for people with diabetes who meet specific conditions, not for flat feet alone. Ask your doctor whether you qualify." }
    ],
    related: [{ href: "/best-shoes-for-diabetics-with-flat-feet/", tag: "Diabetes", title: "Shoes for Diabetics", text: "Protective, supportive shoes for diabetic feet." }, R.walking, R.wide]
  },

  // ===================== SOCKS =====================
  {
    slug: "best-compression-socks-for-flat-feet",
    date: DATE,
    breadcrumbName: "Best Compression Socks for Flat Feet",
    title: "Best Compression &amp; Arch-Support Socks for Flat Feet (2026)",
    metaDescription: "Compression and arch-support socks for flat feet and plantar fasciitis: what they can and can't do, and four well-reviewed picks from Feetures, Bitly, CEP, and Swiftwick.",
    h1: "Best Compression and Arch-Support Socks for Flat Feet",
    lede: "Socks can't build an arch, but the right pair can add gentle support around the midfoot, reduce fatigue on long days, and keep a supportive shoe working the way it should. Here's what compression socks realistically do for flat feet, and four worth trying.",
    picksIntro: "Four socks for different needs: everyday plantar fasciitis relief, an affordable foot sleeve, running, and a thin sock for snug shoes.",
    picks: [
      {
        id: "feeturesPfRelief", bestFor: "Best for plantar fasciitis",
        blurb: "Feetures designed this sock specifically for plantar fasciitis, with targeted compression in three zones that it says helps stretch and stabilize the plantar fascia and support the Achilles. A light cushion and a seamless toe make it comfortable for all-day wear.",
        pros: ["Purpose-built for plantar fasciitis relief", "Targeted compression in three zones", "Seamless toe, anatomical design", "Lifetime guarantee from Feetures"],
        cons: ["Fewer ratings than the other picks", "Crew length is warm in summer", "Pricier per pair than multipacks"],
        buyFor: "People with flat feet and heel or arch pain who want an everyday sock.",
        avoidFor: "Anyone looking for strong, medical-grade leg compression."
      },
      {
        id: "bitlyPfSleeves", bestFor: "Best value",
        blurb: "An open-toe compression sleeve rather than a full sock, so it can go under your regular socks or be worn alone around the house. The listing describes compression throughout the foot targeting the arch, and it has one of the largest buyer bases in the category.",
        pros: ["Compression focused on the arch and heel", "Wear under regular socks or alone", "Very widely reviewed", "Affordable"],
        cons: ["Sleeve style doesn't cover the toes", "Fit depends on choosing the right size from the chart", "Still needs a regular sock inside shoes"],
        buyFor: "Anyone who wants to try arch compression without spending much.",
        avoidFor: "People who want a single all-in-one sock."
      },
      {
        id: "cepRunTall4", bestFor: "Best for runners",
        blurb: "CEP is a long-established compression brand, and the Run Tall 4.0 is a knee-high running sock with targeted compression in the arch and ankle and a ventilated knit. Knee-high compression also helps calf fatigue, which is common with flat feet.",
        pros: ["Targeted compression at the arch and ankle", "Knee-high for calf support", "Ventilated, breathable knit", "Respected compression brand"],
        cons: ["Premium price", "Harder to put on than a regular sock", "Women's version is a separate listing"],
        buyFor: "Runners and walkers with flat feet and tired calves.",
        avoidFor: "Anyone who dislikes knee-high socks."
      },
      {
        id: "swiftwickAspire", bestFor: "Best thin sock for snug shoes",
        blurb: "When a supportive insole fills up your shoe, a thick sock can make it too tight. Swiftwick's ASPIRE is an ultra-light ankle sock with firm contoured compression and a Y-shaped heel that keeps it from slipping, leaving more room for the insole.",
        pros: ["Firm contoured compression", "Ultra-thin, so it leaves room for an insole", "Y-shaped heel stays in place", "Made in the USA"],
        cons: ["Minimal cushioning", "Ankle height only", "Firm compression takes getting used to"],
        buyFor: "People wearing orthotics in close-fitting running or court shoes.",
        avoidFor: "Anyone who wants a cushioned sock."
      }
    ],
    sections: [
      {
        id: "what-they-do", h2: "What compression socks can (and can't) do for flat feet",
        html: `        <p><strong>They can</strong> add a gentle hug around the midfoot that many people find supportive, reduce swelling and fatigue on long days, and help a sock stay put so your foot doesn't slide inside a supportive shoe.</p>
        <p><strong>They can't</strong> hold up a collapsing arch the way a firm shoe or <a href="/best-insoles-for-flat-feet/">orthotic insole</a> does. Think of them as a comfort layer on top of real support, not a replacement for it.</p>
        <div class="callout callout-warn">
          <strong>Check with a doctor first if…</strong>
          you have diabetes, peripheral artery disease, or poor circulation. Compression isn't right for everyone, and medical-grade compression should be fitted properly.
        </div>`
      },
      {
        id: "how-to-choose", h2: "How to choose",
        html: `        <ul>
          <li><strong>For heel and arch pain:</strong> a sock or sleeve with compression focused on the arch, like Feetures or Bitly.</li>
          <li><strong>For tired calves and long runs:</strong> a knee-high compression sock like CEP.</li>
          <li><strong>For snug shoes with orthotics:</strong> a thin sock like Swiftwick, so the shoe still fits.</li>
          <li><strong>Sizing:</strong> compression only works in the right size. Use each brand's size chart, not just your shoe size.</li>
        </ul>`
      }
    ],
    faq: [
      { q: "Do compression socks help flat feet?", a: "They can make feet feel more supported and less fatigued, especially on long days, but they don't correct a flat arch. They work best alongside supportive shoes or insoles." },
      { q: "Can I wear compression socks to bed?", a: "Light foot sleeves are sometimes worn overnight, but most compression socks are designed for daytime wear. Ask a doctor before sleeping in compression, especially if you have circulation problems." },
      { q: "Are plantar fasciitis socks worth it?", a: "Many people find targeted arch compression helps with plantar fasciitis discomfort, and they're inexpensive to try. They're a supplement to stretching and supportive footwear, not a treatment on their own." }
    ],
    related: [R.pf, { href: "/best-foot-care-tools-for-flat-feet/", tag: "At home", title: "Foot-Care Tools", text: "Rollers, slant boards, and night splints." }, R.insoles]
  }
];

module.exports = { PAGES, PRODUCTS, TAG };
