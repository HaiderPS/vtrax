import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Concrete sleeper, block & timber retaining wall construction across Wollongong & South Coast NSW. Drainage installation, excavation, and engineered wall builds. Free quotes.",
  keywords: [
    "concrete sleeper retaining wall Wollongong",
    "block retaining wall NSW",
    "timber retaining wall builder",
    "drainage installation Wollongong",
    "engineered retaining wall NSW",
    "retaining wall services Illawarra",
  ],
  alternates: {
    canonical: "https://vtraxprojects.com.au/services",
  },
  openGraph: {
    title: "Retaining Wall Services | VTRAX",
    description:
      "Concrete sleeper, block & timber retaining wall construction. Drainage and engineered builds across Wollongong & South Coast NSW. Free quotes.",
    url: "https://vtraxprojects.com.au/services",
  },
  twitter: {
    title: "Retaining Wall Services | VTRAX",
    description:
      "Concrete sleeper, block & timber retaining wall construction across Wollongong & South Coast NSW.",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VTRAX Retaining Wall Services",
  url: "https://vtraxprojects.com.au/services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Concrete Sleeper Retaining Walls",
        description:
          "High-strength precast concrete sleeper walls built for depth, line and durability. Excavation, foundation preparation, and drainage managed end-to-end.",
        provider: { "@type": "LocalBusiness", name: "VTRAX" },
        areaServed: "Wollongong, NSW",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Block Retaining Walls",
        description:
          "Concrete block walls engineered for structural performance and visual finish with back drainage, tie systems, and reinforcement.",
        provider: { "@type": "LocalBusiness", name: "VTRAX" },
        areaServed: "Wollongong, NSW",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Timber Retaining Walls",
        description:
          "Treated hardwood and timber sleeper walls for residential boundary, retaining and tiered levels.",
        provider: { "@type": "LocalBusiness", name: "VTRAX" },
        areaServed: "Wollongong, NSW",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Drainage Installation",
        description:
          "Agricultural drains, surface drainage, and back drainage integrated into every wall build.",
        provider: { "@type": "LocalBusiness", name: "VTRAX" },
        areaServed: "Wollongong, NSW",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Engineered Wall Builds",
        description:
          "Structural engineer-designed retaining wall systems for complex or high-load sites.",
        provider: { "@type": "LocalBusiness", name: "VTRAX" },
        areaServed: "Wollongong, NSW",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
