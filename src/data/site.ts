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
  // ---- page heroes ----
  homeHero: "/images/site/home-whatweoffer-6.jpg",
  aboutHero: "/images/site/home-whatweoffer-6.jpg",
  projectsHero: "/images/site/project-hero.jpg",
  faqHero: "/images/proj/team-1.jpg",
  contactHero: "/images/proj/team-1.jpg",
  hero: "/images/proj/f1-1.jpg",
  excavationSeparator: "/images/proj/f4-3.jpg",
  ctaBg: "/images/proj/f1-1.jpg",
  serviceArea: "/images/site/service-area-every.jpg",
  capabilityScale: "/images/site/capability-scale.png",

  // ---- why cards ----
  localBusiness: "/images/proj/f2-2.jpg",
  reliableService: "/images/site/why-vtrax.jpg",
  excavationEquipment: "/images/proj/f3-3.jpg",
  qualityWorkmanship: "/images/proj/f1-3.jpg",
  insuredCompliant: "/images/proj/f6-2.jpg",
  ownerOperated: "/images/proj/f7-2.jpg",

  // ---- offers + services ----
  concreteSleeperWall: "/images/proj/f1-1.jpg",
  blockRetainingWall: "/images/proj/f2-1.jpg",
  timberRetainingWall: "/images/site/timber-retain.jpg",
  excavationFootings: "/images/site/excavation-we-offer.jpg",
  landscapingTurf: "/images/proj/f4-1.jpg",
  wallRepairs: "/images/site/wall-service.jpg",
  offerRepairs: "/images/site/home-whatweoffer-6.jpg",
  svcExcavation: "/images/proj/f4-3.jpg",

  // ---- before / after ----
  concreteRemovalBefore: "/images/site/before-3.png",
  poolSurroundBefore: "/images/site/before-2.png",
  before1: "/images/site/before-1.png",
  after1: "/images/site/after-1.png",
  before2: "/images/site/before-2.png",
  after2: "/images/site/after-2.png",
  before3: "/images/site/before-3.png",
  after3: "/images/site/after-3.png",

  // ---- gallery (3x3) ----
  g1: "/images/gallery/g1.jpg",
  g2: "/images/gallery/g2.jpg",
  g3: "/images/gallery/g3.jpg",
  g4: "/images/gallery/g4.jpg",
  g5: "/images/gallery/g5.jpg",
  g6: "/images/gallery/g6.jpg",
  g7: "/images/gallery/g7.jpg",
  g8: "/images/gallery/g8.jpg",
  g9: "/images/gallery/g9.jpg",

  // ---- remote (Google-hosted) — About HSEQ tile ----
  aboutHseq:
    "https://lh3.googleusercontent.com/d/1pKF5BabZpG7ifbw8jk7bv5v-wg6B4TPz=w1600",

  logoWhite: "/images/vtrax-logo-white.png",
  logoDark: "/images/vtrax-logo-dark.png",
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

// Yellow marquee tape stats — the licence segment is appended so it
// scrolls under every page hero alongside the headline stats.
export const MARQUEE_STATS = [
  { n: "8+", t: "Years hands-on experience" },
  { n: "60+", t: "Retaining walls completed" },
  { n: "$0", t: "Hidden assessment fees" },
  { n: "Local", t: "Owner-operated & based" },
  { n: "Insured", t: "Publicly insured & compliant" },
  { n: "497229C", t: "NSW contractor licence" },
];

export const WHY = [
  {
    no: "01",
    title: "Local Illawarra business",
    img: IMG.localBusiness,
    text: "Based in Lake Heights and working across the region every day, we understand local terrain, soil and access across the Illawarra and South Coast.",
  },
  {
    no: "02",
    title: "Reliable & efficient service",
    img: IMG.reliableService,
    text: "From small repairs to full retaining systems, we scope projects clearly and deliver cleanly on practical timelines.",
  },
  {
    no: "03",
    title: "Professional excavation equipment",
    img: IMG.excavationEquipment,
    text: "From mini excavators to laser-level set-up, we use specialised equipment designed for accurate retaining work.",
  },
  {
    no: "04",
    title: "Quality workmanship",
    img: IMG.qualityWorkmanship,
    text: "Every wall is built with correct footing preparation, drainage behind the wall and structural support for long-term performance.",
  },
  {
    no: "05",
    title: "Publicly insured & compliant",
    img: IMG.insuredCompliant,
    text: "All projects follow current safety and installation requirements, with compliant materials and methods.",
  },
  {
    no: "06",
    title: "Owner-operated, direct contact",
    img: IMG.ownerOperated,
    text: "You deal directly with Jake from quote to clean-up, never a call centre or a subcontractor.",
  },
];

export const OFFERS = [
  {
    no: "01",
    title: "Concrete Sleeper Walls",
    img: IMG.concreteSleeperWall,
    text: "High-strength precast concrete sleeper walls built for depth, line and long-term durability.",
  },
  {
    no: "02",
    title: "Block Retaining Walls",
    img: IMG.blockRetainingWall,
    text: "Concrete block walls engineered for structural performance and a clean, finished face.",
  },
  {
    no: "03",
    title: "Timber Retaining Walls",
    img: IMG.timberRetainingWall,
    text: "Treated timber sleeper walls for boundary, retaining and tiered garden levels.",
  },
  {
    no: "04",
    title: "Excavation & Footings",
    img: IMG.excavationFootings,
    text: "Site cuts, footings and levels prepared with proper compaction and structural support.",
  },
  {
    no: "05",
    title: "Landscaping & Turf",
    img: IMG.landscapingTurf,
    text: "Site cleanups, contour levelling, ground finishing and turf to complete the package.",
  },
  {
    no: "06",
    title: "Wall Repairs & Replacements",
    img: IMG.offerRepairs,
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

// Anchor ids let the footer deep-link to each service section.
export const SERVICES = [
  {
    no: "Service 01 · Core Service",
    anchor: "concrete-sleeper-retaining-walls",
    title: "Concrete Sleeper Retaining Walls",
    img: IMG.concreteSleeperWall,
    text: "High-strength precast concrete sleeper walls built for depth, line and durability. We excavate, prepare foundations and manage drainage so every wall performs long term.",
  },
  {
    no: "Service 02 · Core Service",
    anchor: "block-retaining-walls",
    title: "Block Retaining Walls",
    img: IMG.blockRetainingWall,
    text: "Concrete block walls engineered for both structural performance and visual finish. Back drainage, tie systems and reinforcement are integrated to minimise future repairs.",
  },
  {
    no: "Service 03 · Core Service",
    anchor: "timber-retaining-walls",
    title: "Timber Retaining Walls",
    img: IMG.timberRetainingWall,
    text: "Treated hardwood and timber sleeper walls for residential boundary, retaining and tiered levels. Cost-effective and practical when designed with correct support and drainage.",
  },
  {
    no: "Service 04 · Site Works",
    anchor: "excavation-footings",
    title: "Excavation & Footings",
    img: IMG.svcExcavation,
    text: "VTRAX Projects prepares, excavates and shapes retaining sites with proper cut lines, levels and compaction for long-term wall support.",
  },
  {
    no: "Service 05 · Landscaping",
    anchor: "landscaping-turf",
    title: "Landscaping & Turf",
    img: IMG.landscapingTurf,
    text: "Site cleanups, contour levelling, ground finishing and turf installation complete every retaining package so your outdoor areas are practical and presentation ready.",
  },
  {
    no: "Service 06 · Projects & Installations",
    anchor: "wall-repairs-replacements",
    title: "Wall Repairs & Replacements",
    img: IMG.wallRepairs,
    text: "Assessment and full replacement of failing or ageing retaining walls, including drainage solutions, tie-ins and structural correction where required.",
  },
];

// Footer service links → the matching section on the Services page.
export const FOOTER_SERVICES = [
  { label: "Concrete Sleeper Retaining Walls", anchor: "concrete-sleeper-retaining-walls" },
  { label: "Block Retaining Walls", anchor: "block-retaining-walls" },
  { label: "Timber Retaining Walls", anchor: "timber-retaining-walls" },
  { label: "Excavation & Footings", anchor: "excavation-footings" },
  { label: "Landscaping & Turf", anchor: "landscaping-turf" },
  { label: "Wall Repairs & Replacements", anchor: "wall-repairs-replacements" },
];

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
    desc: "Jake and crew arrive on time, fully equipped, and walk you through the finished result.",
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
    tag: "Sleeper Wall, Steps & Turf",
    title: "Multi-tier sleeper wall, concrete steps & turf",
    location: "Sloped residential block, Illawarra",
    sector: "Multi-tier retaining & landscaping, residential",
    scope:
      "A sloped block cut and retained with multi-tier concrete sleeper walls, concrete steps and fresh turf.",
    outcome:
      "Usable, level garden terraces with concrete steps and new turf, finished clean and built to last.",
    img: IMG.after1,
    media: "Job 1: finished sleeper walls, steps and turf",
  },
  {
    cat: "block",
    tag: "Block Wall",
    title: "Block wall, pool surrounds",
    location: "Pool surrounds, residential Illawarra",
    sector: "Pool surrounds, residential",
    scope:
      "An old pool surround stripped out and rebuilt with a rendered concrete block retaining wall.",
    outcome:
      "A durable, clean-finished block wall built for both structural performance and appearance.",
    img: IMG.blockRetainingWall,
    media: "Job 2: concrete block retaining wall around pool surrounds",
  },
  {
    cat: "excavation",
    tag: "Excavation",
    title: "Concrete removal & yard leveling",
    location: "Barrack Heights, NSW",
    sector: "Concrete removal & site leveling, residential",
    scope:
      "Old cracked concrete removed, the ground re-levelled and the yard finished with fresh turf.",
    outcome: "A cleared, re-levelled and fully turfed yard.",
    img: IMG.landscapingTurf,
    media: "Job 3: concrete removal and yard leveling",
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
    img: IMG.svcExcavation,
    media: "Excavator cutting footings on a residential block",
  },
];

// Projects page interactive before/after — the three headline jobs.
export const BEFORE_AFTER = [
  {
    title: "Multi-tier sleeper wall, steps & turf",
    before: IMG.before1,
    after: IMG.after1,
    beforeLabel: "Before: cut and dug-out sloped site",
    afterLabel: "After: finished sleeper walls, steps and turf",
  },
  {
    title: "Block wall, pool surrounds",
    before: IMG.before2,
    after: IMG.after2,
    beforeLabel: "Before: old pool surround stripped out and excavated",
    afterLabel: "After: finished pool surround with new retaining wall",
  },
  {
    title: "Concrete removal & yard leveling",
    before: IMG.before3,
    after: IMG.after3,
    beforeLabel: "Before: old concrete and uneven yard",
    afterLabel: "After: cleared, re-levelled and fully turfed yard",
  },
];

// Home before/after — a single large transformation (Job 1).
export const HOME_BIG_BA = {
  title: "Multi-tier sleeper wall, steps & turf",
  text: "A sloped block cut and retained with multi-tier concrete sleeper walls, concrete steps and fresh turf, finished clean and built to last.",
  before: IMG.before1,
  after: IMG.after1,
  beforeLabel: "Before: cut and dug-out sloped site",
  afterLabel: "After: finished sleeper walls, steps and turf",
};

// 3x3 square gallery, shared by Home and Projects.
export const GALLERY = [
  { img: IMG.g1, label: "Excavator shaping a retaining batter on a sloped block" },
  { img: IMG.g2, label: "Crew and tipper truck at a residential job" },
  { img: IMG.g3, label: "Precise excavation around the wall line" },
  { img: IMG.g4, label: "Finished concrete sleeper retaining wall" },
  { img: IMG.g5, label: "Quality workmanship on the wall face" },
  { img: IMG.g6, label: "Plant on the trailer, branded and ready" },
  { img: IMG.g7, label: "Setting out before the wall goes up" },
  { img: IMG.g8, label: "VTRAX team on site, insured and compliant" },
  { img: IMG.g9, label: "Operator running the Kobelco SK17SR mini excavator" },
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
