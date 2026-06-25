import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about VTRAX retaining wall services. Council approval, costs, timber wall replacement, excavation, and service areas across Wollongong & South Coast NSW.",
  keywords: [
    "retaining wall FAQ NSW",
    "retaining wall council approval NSW",
    "how much does retaining wall cost Wollongong",
    "retaining wall questions",
    "timber retaining wall replacement NSW",
  ],
  alternates: {
    canonical: "https://vtraxprojects.com.au/faq",
  },
  openGraph: {
    title: "Retaining Wall FAQ | VTRAX",
    description:
      "Answers to common questions about retaining walls — council approval, costs, timber replacement, and service areas across Wollongong & South Coast NSW.",
    url: "https://vtraxprojects.com.au/faq",
  },
  twitter: {
    title: "Retaining Wall FAQ | VTRAX",
    description:
      "Straight answers to common retaining wall questions — council approval, costs, timber replacement, and more.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What retaining wall types does VTRAX build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build concrete sleeper, block, and timber retaining walls.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need council approval for a retaining wall in NSW?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most walls over 600mm in NSW require council approval. We can help guide you through the process.",
      },
    },
    {
      "@type": "Question",
      name: "My existing timber wall is failing - what are my options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer full replacement with modern, durable materials such as concrete sleeper or block walls.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle the excavation as well, or just the wall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle both excavation and wall construction for a seamless, single-contractor project.",
      },
    },
    {
      "@type": "Question",
      name: "What does a retaining wall cost in the Illawarra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary depending on size, material, and site conditions. Contact us for a free, no-obligation quote.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service Wollongong, Shellharbour, Kiama, Dapto, Albion Park, Corrimal, Woonona, Bulli, South Coast NSW, and South Sydney.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="pt-20">
        <FaqSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
