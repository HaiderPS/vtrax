import type { Metadata } from "next";
import { AboutProjects } from "@/components/AboutProjects";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ReliabilitySection } from "@/components/ReliabilitySection";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { WorkGallery } from "@/components/WorkGallery";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://vtraxprojects.com.au";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "VTRAX",
  url: "https://vtraxprojects.com.au",
  logo: "https://vtraxprojects.com.au/images/vtrax_logo.png",
  image: "https://vtraxprojects.com.au/images/vtrax_about.jpg",
  description:
    "Expert retaining wall construction in Wollongong & South Coast NSW. Concrete sleeper, block & timber walls with 8+ years experience and 60+ walls completed.",
  telephone: "+61478563679",
  email: "vtraxprojects@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    "Wollongong",
    "Shellharbour",
    "Kiama",
    "Dapto",
    "Albion Park",
    "Corrimal",
    "Woonona",
    "Bulli",
    "South Coast NSW",
    "South Sydney",
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Retaining Wall Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Concrete Sleeper Retaining Walls",
          description:
            "High-strength precast concrete sleeper walls built for depth, line and durability.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Block Retaining Walls",
          description:
            "Concrete block walls engineered for structural performance and visual finish.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Timber Retaining Walls",
          description:
            "Treated hardwood and timber sleeper walls for residential boundary and tiered levels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Drainage Installation",
          description:
            "Back drainage, agricultural drains, and surface drainage solutions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engineered Wall Builds",
          description:
            "Structural engineer-designed retaining wall systems for complex sites.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <AboutProjects />
        <Services />
        <BeforeAfter />
        <ReliabilitySection />
        <ProcessSection />
        <WorkGallery />
        <FaqSection />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
