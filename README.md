# VTRAX Projects — Next.js

A faithful production port of the VTRAX Projects marketing site (Illawarra
retaining wall &amp; excavation specialists), rebuilt from the original HTML
design as a modern Next.js application.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3.4**
- **next/font** — Oswald (display), Open Sans (body), Inter (labels), self-hosted
- **next/image** — all photography optimised and served locally from `/public/images`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

Node 18.18+ (or 20+) is recommended.

## Routes

The original single-page design (which switched "screens" with client state) is
split into real, SEO-friendly routes. Each exports its own `metadata`
(title + description) ported from the original per-screen SEO map.

| Route        | Page      |
|--------------|-----------|
| `/`          | Home      |
| `/about`     | About     |
| `/services`  | Services  |
| `/projects`  | Projects  |
| `/faq`       | FAQ       |
| `/contact`   | Contact   |

## Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, <Header>, <Footer>, base metadata
    globals.css         Tailwind layers, brand keyframes, reusable component classes
    page.tsx            Home
    about/page.tsx
    services/page.tsx
    projects/page.tsx
    faq/page.tsx
    contact/page.tsx
  components/
    Header.tsx          Sticky nav, active state via usePathname (client)
    Footer.tsx
    PageHero.tsx        Reusable dark hero header (+ HeroBg helper)
    Badge.tsx           Section eyebrow pill
    MarqueeTape.tsx     Infinite yellow stat marquee
    MediaSlot.tsx       Photo with signature hover-zoom ("bloom")
    ServiceAreas.tsx    Repeated service-area section with area deep-links
    AskJake.tsx         Dark "Ask Jake" CTA band
    CtaBand.tsx         Yellow CTA band (reusable, available for any page)
    GoogleReviews.tsx   Google reviews carousel (client)
    WhyCarousel.tsx     Home "Why VTRAX" carousel (client)
    BeforeAfter.tsx     Projects before/after slider (client)
    ProjectsGrid.tsx    Filterable project grid (client)
    FaqAccordion.tsx    FAQ accordion (client)
    ContactForm.tsx     Quote form with success state (client)
    AreaApplier.tsx     Service-area text-swap behaviour (client)
  data/
    site.ts             Single source of truth: nav, services, projects, FAQs,
                        reviews, areas, equipment, steps, contact details, SEO
public/
  images/               All photography + logos (local, self-hosted)
```

## Design system

| Token        | Value     |
|--------------|-----------|
| Ink          | `#0E0F11` |
| Yellow       | `#FFCB05` |
| Yellow dark  | `#E6B600` (hover) |
| Cream        | `#F2F2EE` |
| Panel        | `#F5F5F2` |

Type: **Oswald** for uppercase display headings, **Open Sans** for body, **Inter**
for the small tracked labels. Brand colours and font families are registered in
`tailwind.config.ts`; repeated button/badge/marquee patterns live as component
classes in `globals.css`.

## Notable behaviour ported 1:1

- **Service-area text swap** — arriving on the home page via `/?area=Wollongong`
  (the area tiles and footer links do this) swaps every "Illawarra" mention in
  the page copy, outside the header/footer, to the chosen area. Implemented in
  `AreaApplier.tsx`. This is a faithful recreation of a DOM-level feature from
  the source design; it mutates text nodes after paint and self-restores on
  navigation.
- **Hover-zoom imagery, infinite stat marquee, carousels, before/after slider,
  filterable projects, FAQ accordion** — all preserved.
- **Per-page SEO** via the App Router `metadata` API.

## Things to wire up for production

These were front-end-only in the original design and are intentionally left as
clear integration points:

- **Contact form** (`ContactForm.tsx`) currently shows a success state on submit
  without sending anything. Connect it to your email service / CRM / API route.
- **Google reviews** are static sample data in `data/site.ts`. Swap for the live
  Google Places/Business Profile feed if you want them to auto-update. (Verify
  each review is genuine before publishing.)
- **Map** is a public Google Maps embed iframe; replace with an API-keyed embed
  if you need styling control or analytics.
- **Photography** was imported from the original design's image sources into
  `/public/images`. Replace with final high-resolution assets as needed; the
  filenames are descriptive.
- Add `app/icon.png` / `favicon`, `robots.ts`, `sitemap.ts` and your analytics.

## Original content notes

ABN `15 907 578 201` and NSW Contractor Licence `497229C` (current to 4 Jun 2029)
are reflected throughout, matching the corrected business record.

## Latest design sync

Brought fully in line with the current design:

- **No top utility bar** — the header is the logo + nav + Free Quote only.
- **Licence in the marquee** — `497229C · NSW contractor licence` scrolls in the
  yellow tape alongside the headline stats.
- **Home before/after** is a single large transformation (Job 1) with a
  centred **View all projects** button, instead of the old two-card grid.
- **Galleries** (home + projects) are a clean **3×3 square grid**.
- **Prominent hero / separator / CTA imagery** — background photos are sharp
  (no blur) behind lighter scrims.
- **Services** — the stacked capability chips are gone; each service section has
  a pill "Service NN" eyebrow and a stable anchor id.
- **Footer → Services deep-links** — the six service names jump to their exact
  section (`/services#…`).
- **Current photography** — all job/hero/gallery images from the latest design
  live in `/public/images/{proj,site,gallery}`. Every image is now local; there
  are **no remote (Google-hosted) image dependencies**.
