// ============================================================
// VTRAX Projects — site content & data
// Single source of truth for nav, services, projects, FAQs,
// reviews, service areas, equipment, process steps and SEO.
// ============================================================

export const CONTACT = {
  phone: "0478 563 679",
  phoneHref: "tel:0478563679",
  email: "vtraxprojects@gmail.com",
  emailHref: "mailto:vtraxprojects@gmail.com",
  abn: "15 907 578 201",
  licence: "497229C",
  licenceExpiry: "4 Jun 2029",
  hours: "Mon to Fri 7am to 5pm",
  base: "Lake Heights",
  regionLine: "Servicing the Illawarra · South Coast · South Sydney",
  reviewUrl:
    "https://www.google.com/search?q=VTRAX+Projects+Illawarra+reviews",
} as const;

export const IMG = {
  hero: "/images/hero-retaining-wall.jpg",
  localBusiness: "/images/local-business.jpg",
  reliableService: "/images/reliable-service.jpg",
  excavationEquipment: "/images/excavation-equipment.jpg",
  qualityWorkmanship: "/images/quality-workmanship.jpg",
  insuredCompliant: "/images/insured-compliant.jpg",
  ownerOperated: "/images/owner-operated.jpg",
  concreteSleeperWall: "/images/concrete-sleeper-wall.jpg",
  blockRetainingWall: "/images/block-retaining-wall.jpg",
  timberRetainingWall: "/images/timber-retaining-wall.jpg",
  excavationFootings: "/images/excavation-footings.jpg",
  landscapingTurf: "/images/landscaping-turf.jpg",
  wallRepairs: "/images/wall-repairs.jpg",
  concreteRemovalBefore: "/images/concrete-removal-before.jpg",
  poolSurroundBefore: "/images/pool-surround-before.jpg",
  galleryTipper: "/images/gallery-tipper.jpg",
  galleryOperator: "/images/gallery-operator.jpg",
  galleryTimberFixing: "/images/gallery-timber-fixing.jpg",
  galleryLoadout: "/images/gallery-loadout.jpg",
  aboutHseq: "/images/about-hseq.jpg",
  logoWhite: "/images/vtrax-logo-white.png",
  logoDark: "/images/vtrax-logo-dark.png",
  // "Why VTRAX?" section card images (one per card)
  whyLocalIllawarra: "/images/why-local-illawarra.jpg",
  whyReliableEfficient: "/images/why-reliable-efficient.jpg",
  whyProfessionalExcavation: "/images/why-professional-excavation.jpg",
  whyQualityWorkmanship: "/images/why-quality-workmanship.jpg",
  whyPubliclyInsured: "/images/why-publicly-insured.jpg",
  whyOwnerOperated: "/images/why-owner-operated.jpg",
  // Home "Our work gallery" tiles (8 images, /public/our-work-images)
  ourWork1: "/our-work-images/our-work-1.jpg",
  ourWork2: "/our-work-images/our-work-2.jpg",
  ourWork3: "/our-work-images/our-work-3.jpg",
  ourWork4: "/our-work-images/our-work-4.jpg",
  ourWork5: "/our-work-images/our-work-5.jpg",
  ourWork6: "/our-work-images/our-work-6.jpg",
  ourWork7: "/our-work-images/our-work-7.jpg",
  ourWork8: "/our-work-images/our-work-8.jpg",
  // Home "What We Offer" cards (6 images, /public/what-we-offer)
  offerConcreteSleeper: "/what-we-offer/offer-concrete-sleeper-walls.jpg",
  offerBlockWall: "/what-we-offer/offer-block-retaining-walls.jpg",
  offerTimberWall: "/what-we-offer/offer-timber-retaining-walls.jpg",
  offerExcavation: "/what-we-offer/offer-excavation-footings.jpg",
  offerLandscaping: "/what-we-offer/offer-landscaping-turf.jpg",
  offerWallRepairs: "/what-we-offer/offer-wall-repairs-replacements.jpg",
} as const;

export type NavKey =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "faq"
  | "contact";

export const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "faq", label: "FAQ", href: "/faq" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const MARQUEE_STATS = [
  { n: "8+", t: "Years hands-on experience" },
  { n: "60+", t: "Retaining walls completed" },
  { n: "$0", t: "Hidden assessment fees" },
  { n: "Local", t: "Owner-operated & based" },
];

export const WHY = [
  {
    no: "01",
    title: "Local Illawarra business",
    img: IMG.whyLocalIllawarra,
    text: "Based in Lake Heights and working across the region every day, we understand local terrain, soil and access across the Illawarra and South Coast.",
  },
  {
    no: "02",
    title: "Reliable & efficient service",
    img: IMG.whyReliableEfficient,
    text: "From small repairs to full retaining systems, we scope projects clearly and deliver cleanly on practical timelines.",
  },
  {
    no: "03",
    title: "Professional excavation equipment",
    img: IMG.whyProfessionalExcavation,
    text: "From mini excavators to laser-level set-up, we use specialised equipment designed for accurate retaining work.",
  },
  {
    no: "04",
    title: "Quality workmanship",
    img: IMG.whyQualityWorkmanship,
    text: "Every wall is built with correct footing preparation, drainage behind the wall and structural support for long-term performance.",
  },
  {
    no: "05",
    title: "Publicly insured & compliant",
    img: IMG.whyPubliclyInsured,
    text: "All projects follow current safety and installation requirements, with compliant materials and methods.",
  },
  {
    no: "06",
    title: "Owner-operated, direct contact",
    img: IMG.whyOwnerOperated,
    text: "You deal directly with Jake from quote to clean-up, never a call centre or a subcontractor.",
  },
];

export const OFFERS = [
  {
    no: "01",
    title: "Concrete Sleeper Walls",
    img: IMG.offerConcreteSleeper,
    text: "High-strength precast concrete sleeper walls built for depth, line and long-term durability.",
  },
  {
    no: "02",
    title: "Block Retaining Walls",
    img: IMG.offerBlockWall,
    text: "Concrete block walls engineered for structural performance and a clean, finished face.",
  },
  {
    no: "03",
    title: "Timber Retaining Walls",
    img: IMG.offerTimberWall,
    text: "Treated timber sleeper walls for boundary, retaining and tiered garden levels.",
  },
  {
    no: "04",
    title: "Excavation & Footings",
    img: IMG.offerExcavation,
    text: "Site cuts, footings and levels prepared with proper compaction and structural support.",
  },
  {
    no: "05",
    title: "Landscaping & Turf",
    img: IMG.offerLandscaping,
    text: "Site cleanups, contour levelling, ground finishing and turf to complete the package.",
  },
  {
    no: "06",
    title: "Wall Repairs & Replacements",
    img: IMG.offerWallRepairs,
    text: "Assessment and full replacement of failing or ageing retaining walls.",
  },
];

export const CAPABILITIES = [
  { label: "Concrete Sleeper Retaining Walls", highlight: false },
  { label: "Block Retaining Walls", highlight: false },
  { label: "Timber Sleeper Retaining Walls", highlight: false },
  { label: "Multi-Tier Wall Systems", highlight: true },
  { label: "Excavation & Footing Preparation", highlight: false },
  { label: "Drainage Installation", highlight: true },
  { label: "Engineered Wall Builds", highlight: true },
];

export const SERVICES = [
  {
    no: "Service 01 · Core Service",
    title: "Concrete Sleeper Retaining Walls",
    img: IMG.concreteSleeperWall,
    text: "High-strength precast concrete sleeper walls built for depth, line and durability. We excavate, prepare foundations and manage drainage so every wall performs long term.",
  },
  {
    no: "Service 02 · Core Service",
    title: "Block Retaining Walls",
    img: IMG.blockRetainingWall,
    text: "Concrete block walls engineered for both structural performance and visual finish. Back drainage, tie systems and reinforcement are integrated to minimise future repairs.",
  },
  {
    no: "Service 03 · Core Service",
    title: "Timber Retaining Walls",
    img: IMG.timberRetainingWall,
    text: "Treated hardwood and timber sleeper walls for residential boundary, retaining and tiered levels. Cost-effective and practical when designed with correct support and drainage.",
  },
  {
    no: "Service 04 · Site Works",
    title: "Excavation & Footings",
    img: IMG.excavationFootings,
    text: "VTRAX Projects prepares, excavates and shapes retaining sites with proper cut lines, levels and compaction for long-term wall support.",
  },
  {
    no: "Service 05 · Landscaping",
    title: "Landscaping & Turf",
    img: IMG.landscapingTurf,
    text: "Site cleanups, contour levelling, ground finishing and turf installation complete every retaining package so your outdoor areas are practical and presentation ready.",
  },
  {
    no: "Service 06 · Projects & Installations",
    title: "Wall Repairs & Replacements",
    img: IMG.wallRepairs,
    text: "Assessment and full replacement of failing or ageing retaining walls, including drainage solutions, tie-ins and structural correction where required.",
  },
];

// Stable anchor id for a service, used to deep-link + scroll to a specific
// service row on /services (e.g. /services#timber-retaining-walls).
export const serviceSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const STEPS = [
  {
    no: "01",
    title: "Submit enquiry",
    img: IMG.insuredCompliant,
    desc: "Call Jake directly on 0478 563 679, email vtraxprojects@gmail.com, or fill in the quote form. He texts back personally.",
    badge: "10-min text reply",
  },
  {
    no: "02",
    title: "Free site visit",
    img: IMG.reliableService,
    desc: "Jake visits your property to inspect the site, take measurements and recommend the right solution for your conditions.",
    badge: "100% free",
  },
  {
    no: "03",
    title: "Written quote",
    img: IMG.concreteSleeperWall,
    desc: "You receive a clear written quote, no hidden costs. Jake schedules around you, including weekdays after 4:30pm and weekends.",
    badge: "No obligation",
  },
  {
    no: "04",
    title: "Professional build",
    img: IMG.qualityWorkmanship,
    desc: "Jake and crew arrive on time with all equipment. The site is cleaned on completion and you are walked through the finished result.",
    badge: "Quality finish",
  },
];

export const EQUIPMENT = [
  { name: "Kobelco SK17SR", use: "Compact mini excavator, owned and operated" },
  { name: "Auger attachment", use: "Sleeper post holes and pier installation" },
  { name: "Rock breaker", use: "Breaks rock and hard ground for foundations" },
  { name: "Tipped truck", use: "On-site spoil removal and material delivery" },
  { name: "Laser level", use: "Precision grading and wall set-out" },
  { name: "Compaction equipment", use: "Foundation and backfill compaction control" },
];

export const FAQS = [
  {
    q: "What retaining wall types does VTRAX build?",
    a: "We build concrete sleeper, concrete block and treated timber sleeper retaining walls, including multi-tier and structural walls for sloped sites. Every wall is built with proper footings, drainage and structural support. If you are not sure which suits your block, we will recommend the right option at your free site visit.",
  },
  {
    q: "Do I need council approval for a retaining wall in NSW?",
    a: "It depends on the height and location. In NSW, lower walls that do not affect drainage or neighbouring land can often be built as exempt development, while taller walls or those near boundaries and structures generally need council approval and engineering. We assess your site and let you know what is required before any work starts.",
  },
  {
    q: "My existing timber wall is failing: what are my options?",
    a: "Failing timber walls are one of the most common jobs we do. Depending on the condition we can repair the wall or fully replace it, usually with a longer-lasting concrete sleeper or block wall on steel posts, correcting the drainage and footing issues at the same time. We will inspect it and give you honest options at your free site visit.",
  },
  {
    q: "Do you handle the excavation as well, or just the wall?",
    a: "Both. VTRAX owns and operates its own excavation plant, including a Kobelco SK17SR excavator, auger, rock breaker and tipped truck. We handle the full job from site cut and footings through to the finished wall, so you only deal with one team.",
  },
  {
    q: "What does a retaining wall cost in the Illawarra?",
    a: "Every wall is different, so cost depends on length, height, materials, access and drainage. That is why we provide a free site visit and a clear written quote with no hidden costs, so you know exactly what is included before you commit.",
  },
  {
    q: "What areas do you service?",
    a: "We are based in Lake Heights and service the Illawarra, South Coast and South Sydney, including Wollongong, Shellharbour, Kiama, Dapto, Albion Park, Corrimal and Woonona / Bulli. For projects outside these areas, contact Jake to confirm, as we are open to travelling where it makes sense.",
  },
];

export type ProjectCat = "all" | "sleeper" | "block" | "excavation";

export const PROJECT_FILTERS: { key: ProjectCat; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "sleeper", label: "Concrete Sleeper" },
  { key: "block", label: "Block" },
  { key: "excavation", label: "Excavation" },
];

export const PROJECTS = [
  {
    cat: "sleeper",
    tag: "Timber to Concrete Sleeper",
    title: "Timber sleeper demolition & concrete sleeper replacement",
    location: "Pool-side retaining wall, Illawarra",
    sector: "Pool surrounds, residential",
    scope:
      "Removed an old, failing timber sleeper wall and rebuilt it as a new concrete sleeper wall on steel posts.",
    outcome:
      "A safe, structurally sound concrete sleeper wall in place of the unsafe timber original.",
    img: IMG.concreteSleeperWall,
    media:
      "Job 1: new concrete sleeper wall with steel posts, pool surrounds",
  },
  {
    cat: "block",
    tag: "Block Wall",
    title: "Block wall, pool surrounds",
    location: "Residential, Illawarra",
    sector: "Pool surrounds, residential",
    scope:
      "Concrete block retaining wall with back drainage, tie systems and reinforcement around a pool area.",
    outcome:
      "A durable, clean-finished block wall built for both structural performance and appearance.",
    img: IMG.qualityWorkmanship,
    media: "Job 2: concrete block retaining wall around pool surrounds",
  },
  {
    cat: "excavation",
    tag: "Excavation",
    title: "Concrete removal & yard level",
    location: "Residential, Illawarra",
    sector: "Site works, residential",
    scope: "Removal of old concrete, ground re-levelling and yard preparation.",
    outcome: "A cleared, re-levelled yard prepared for its new finish.",
    img: IMG.concreteRemovalBefore,
    media: "Job 3: concrete removal and yard levelling",
  },
  {
    cat: "sleeper",
    tag: "Concrete Sleeper",
    title: "Multi-tier sleeper wall, sloped block",
    location: "Residential, Wollongong",
    sector: "Sloped block, residential",
    scope:
      "Two-tier galvanised-post concrete sleeper wall cut into a steep backyard, with ag-drainage and granular backfill.",
    outcome: "Two usable, level garden terraces reclaimed from an unusable slope.",
    img: IMG.hero,
    media: "Multi-tier concrete sleeper wall on a slope",
  },
  {
    cat: "sleeper",
    tag: "Concrete Sleeper",
    title: "Boundary sleeper wall, Albion Park",
    location: "Albion Park, NSW",
    sector: "Boundary, residential",
    scope:
      "24m galvanised H-post concrete sleeper boundary wall with granular backfill and ag-drainage.",
    outcome: "A dead-straight, maintenance-free boundary line.",
    img: IMG.concreteSleeperWall,
    media: "Concrete sleeper boundary wall, full length",
  },
  {
    cat: "block",
    tag: "Block Wall",
    title: "Core-filled block wall, Shellharbour",
    location: "Shellharbour, NSW",
    sector: "Residential",
    scope:
      "Steel-reinforced, core-filled concrete block retaining wall with back drainage, finished render-ready.",
    outcome: "A solid wall built to hold a significant retained load.",
    img: IMG.qualityWorkmanship,
    media: "Core-filled block retaining wall",
  },
  {
    cat: "excavation",
    tag: "Excavation",
    title: "Site cut & footings, new build",
    location: "Residential, Dapto",
    sector: "Site works, residential",
    scope:
      "Excavation of footings and a level building platform, with spoil removed off-site.",
    outcome: "A compacted, level platform ready for construction.",
    img: IMG.excavationFootings,
    media: "Excavator cutting footings on a residential block",
  },
  {
    cat: "excavation",
    tag: "Excavation",
    title: "Drainage & yard regrade",
    location: "Residential, Corrimal",
    sector: "Site works, residential",
    scope: "Ag-drainage installation and a full yard regrade to fix pooling water.",
    outcome: "A dry, properly draining and usable yard.",
    img: IMG.landscapingTurf,
    media: "Yard regrade and drainage works",
  },
];

export const BEFORE_AFTER = [
  {
    title: "Timber to concrete sleeper, pool surrounds",
    before: IMG.timberRetainingWall,
    after: IMG.concreteSleeperWall,
    beforeLabel: "Before: old timber sleeper wall, failing and unsafe",
    afterLabel: "After: new concrete sleeper wall with steel posts",
  },
  {
    title: "Block wall, pool surrounds",
    before: IMG.poolSurroundBefore,
    after: IMG.qualityWorkmanship,
    beforeLabel: "Before: original pool surround",
    afterLabel: "After: new concrete block retaining wall",
  },
  {
    title: "Concrete removal and yard level",
    before: IMG.concreteRemovalBefore,
    after: IMG.landscapingTurf,
    beforeLabel: "Before: old concrete and uneven yard",
    afterLabel: "After: cleared and re-levelled yard",
  },
];

export const GALLERY = [
  { img: IMG.hero, label: "Excavator shaping a retaining batter on a sloped block", span: "col-span-2 row-span-2" },
  { img: IMG.galleryOperator, label: "Operator running the Kobelco mini excavator", span: "" },
  { img: IMG.insuredCompliant, label: "VTRAX team on site in branded workwear", span: "" },
  { img: IMG.reliableService, label: "Crew and tipper truck at a residential job", span: "col-span-2" },
  { img: IMG.excavationEquipment, label: "Precise excavation around the wall line", span: "" },
  { img: IMG.galleryTipper, label: "Setting out before the wall goes up", span: "row-span-2" },
  { img: IMG.localBusiness, label: "Plant on the trailer, branded and ready", span: "col-span-2" },
  { img: IMG.galleryTimberFixing, label: "Fixing off timber sleepers by hand", span: "" },
  { img: IMG.galleryLoadout, label: "Loading out at the end of the day", span: "col-span-2" },
];

// Home gallery (8 tiles, slightly different ordering)
export const HOME_GALLERY = [
  { img: IMG.ourWork1, label: "VTRAX project", span: "col-span-2 row-span-2" },
  { img: IMG.ourWork2, label: "VTRAX project", span: "" },
  { img: IMG.ourWork3, label: "VTRAX project", span: "" },
  { img: IMG.ourWork4, label: "VTRAX project", span: "col-span-2" },
  { img: IMG.ourWork5, label: "VTRAX project", span: "row-span-2" },
  { img: IMG.ourWork6, label: "VTRAX project", span: "" },
  { img: IMG.ourWork7, label: "VTRAX project", span: "col-span-2" },
  { img: IMG.ourWork8, label: "VTRAX project", span: "" },
];

export const HOME_BEFORE_AFTER = [
  {
    title: "Sleeper wall, steps & turf",
    text: "A sloped block cut and retained with multi-tier concrete sleeper walls, concrete steps and fresh turf.",
    before: IMG.excavationFootings,
    beforeLabel: "Before: sloped, unretained block",
    after: IMG.concreteSleeperWall,
    afterLabel: "After: multi-tier sleeper wall, concrete steps and fresh turf",
  },
  {
    title: "Block wall, pool surrounds",
    text: "An old pool surround stripped out and rebuilt with a rendered concrete block retaining wall.",
    before: IMG.poolSurroundBefore,
    beforeLabel: "Before: old pool surround",
    after: IMG.qualityWorkmanship,
    afterLabel: "After: rendered concrete block retaining wall",
  },
  {
    title: "Concrete removal & yard leveling",
    text: "Old cracked concrete removed, the ground re-levelled and the yard finished with fresh turf.",
    before: IMG.concreteRemovalBefore,
    beforeLabel: "Before: old cracked concrete",
    after: IMG.landscapingTurf,
    afterLabel: "After: re-levelled yard finished with fresh turf",
  },
];

export const REVIEWS = [
  {
    initial: "J",
    color: "#8d6e63",
    name: "Jaxson Zedras",
    time: "1 week ago",
    text: "Jake and the team at VTRAX Projects recently completed a retaining wall for us and the result is fantastic. Clean, professional and on time.",
    photo: "/images/review-quality-workmanship.jpg",
  },
  {
    initial: "B",
    color: "#3949ab",
    name: "Branislav Vlacic (Ba…)",
    time: "2 weeks ago",
    text: "Jake and the team at VTrax recently installed our Colorbond boundary fence and did a fantastic job. They turned up on time and the finish is excellent.",
    photo: "",
  },
  {
    initial: "C",
    color: "#6d4c41",
    name: "Corey Zahra",
    time: "2 weeks ago",
    text: "Massive thanks to VTRAX Projects for the awesome job on our retaining wall. Highly recommend to anyone in the Illawarra.",
    photo: "/images/review-concrete-sleeper.jpg",
  },
  {
    initial: "D",
    color: "#5e35b1",
    name: "Dimitri Cantarakis",
    time: "2 weeks ago",
    text: "I recently had my old carport removed along with a large section of old concrete in my backyard, and I couldn't be happier with the work.",
    photo: "",
  },
  {
    initial: "S",
    color: "#00897b",
    name: "Sarah Mitchell",
    time: "3 weeks ago",
    text: "Replaced our failing timber wall with concrete sleepers. Tidy, well priced and not a scrap of mess left behind. Excellent work.",
    photo: "",
  },
];

export const AREA_TILES = [
  "Wollongong",
  "Shellharbour",
  "Kiama",
  "Dapto",
  "Albion Park",
  "Corrimal",
  "Woonona / Bulli",
  "South Coast",
  "South Sydney",
];

// Per-area photo shown on the right of the Service Areas section when a tile
// is clicked. Keys must match AREA_TILES exactly.
// NOTE: these are TEMPORARY placeholders using existing images so the
// click-to-switch behaviour works now. Replace each value with the real
// per-area photo later (e.g. add files to /public/images/areas/ and point
// the key at "/images/areas/wollongong.jpg").
export const AREA_IMAGES: Record<string, string> = {
  Wollongong: IMG.hero,
  Shellharbour: IMG.concreteSleeperWall,
  Kiama: IMG.blockRetainingWall,
  Dapto: IMG.excavationFootings,
  "Albion Park": IMG.timberRetainingWall,
  Corrimal: IMG.landscapingTurf,
  "Woonona / Bulli": IMG.qualityWorkmanship,
  "South Coast": IMG.reliableService,
  "South Sydney": IMG.excavationEquipment,
};

export const FOOTER_AREAS = [
  "Wollongong",
  "Shellharbour",
  "Kiama",
  "Dapto & Albion Park",
  "Corrimal / Fairy",
  "Woonona / Bulli",
  "South Coast",
  "South Sydney",
];

export const CONTACT_AREA_TAGS = [
  "Wollongong",
  "Shellharbour",
  "Kiama",
  "Dapto",
  "Albion Park",
  "Corrimal",
  "Woonona / Bulli",
  "South Coast",
  "South Sydney",
];

// Per-route SEO, ported from the original `seo` map.
export const SEO = {
  home: {
    title: "Retaining Wall Builders Illawarra | VTRAX Projects",
    description:
      "Concrete sleeper, timber & block retaining walls built across the Illawarra. Excavation, drainage & landscaping. Free site visits. Call VTRAX.",
  },
  about: {
    title: "About VTRAX Projects | Illawarra Retaining Walls",
    description:
      "Locally owned Illawarra retaining wall & excavation specialists. 8 years' experience, professional plant and a focus on safe, structural results.",
  },
  services: {
    title: "Retaining Wall & Excavation Services | Illawarra",
    description:
      "Concrete sleeper, timber & block retaining walls, excavation, footings, drainage and landscaping across Wollongong, Shellharbour & the Illawarra.",
  },
  projects: {
    title: "Retaining Wall Projects Illawarra | VTRAX Projects",
    description:
      "See VTRAX retaining wall, excavation and landscaping projects across the Illawarra: concrete sleeper, timber, block and multi-tier walls.",
  },
  faq: {
    title: "Retaining Wall FAQs | VTRAX Projects Illawarra",
    description:
      "Answers to common retaining wall questions: wall types, NSW council approval, failing walls, excavation, cost and service areas across the Illawarra.",
  },
  contact: {
    title: "Contact VTRAX Projects | Free Retaining Wall Quote",
    description:
      "Get a free retaining wall quote and site visit across the Illawarra. Call 0478 563 679 or request a quote online. Servicing Wollongong & nearby.",
  },
} as const;
