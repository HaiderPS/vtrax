import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MarqueeTape from "@/components/MarqueeTape";
import ThankYouTracker from "@/components/ThankYouTracker";
import { CONTACT, IMG } from "@/data/site";

export const metadata: Metadata = {
  title: "Thank You | VTRAX Projects",
  description:
    "Thanks for your enquiry — the VTRAX Projects team will be in touch shortly to arrange your free site visit.",
  // Keep the conversion/thank-you page out of search results.
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <div className="animate-fade bg-white">
      {/* Fires the GTM conversion event on load */}
      <ThankYouTracker />

      <PageHero
        badge="Thank You"
        bgSrc={IMG.contactHero}
        title={
          <>
            Thank <span className="text-yellow">you</span>
          </>
        }
        subtitle="Your enquiry is with the VTRAX Projects team. We'll be in touch shortly to arrange your free site visit."
      />
      <MarqueeTape />

      <section className="bg-white py-[clamp(56px,7vw,96px)]">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <div className="border-t-4 border-yellow bg-panel p-[clamp(28px,4vw,44px)]">
            <div className="mb-5 flex h-[54px] w-[54px] items-center justify-center bg-yellow">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0E0F11"
                strokeWidth="3"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="m-0 mb-2.5 font-oswald text-[clamp(26px,4vw,34px)] font-bold uppercase leading-[1.1] text-ink">
              Request received
            </h2>
            <p className="m-0 mb-7 max-w-[56ch] font-open text-[16px] leading-[1.65] text-[#4a4f55]">
              Thanks, your details are with VTRAX Projects. We&apos;ll be in
              touch shortly to arrange your free site visit. Need it sorted now?
              Call{" "}
              <a href={CONTACT.phoneHref} className="font-bold text-ink">
                {CONTACT.phone}
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={CONTACT.phoneHref}
                className="btn-primary min-h-[48px] px-7 py-[15px] text-[14px]"
              >
                Call {CONTACT.phone}
              </a>
              <Link
                href="/"
                className="btn-outline-dark min-h-[48px] px-7 py-[15px] text-[14px]"
              >
                Back to home
              </Link>
              <Link
                href="/projects"
                className="btn-outline-dark min-h-[48px] px-7 py-[15px] text-[14px]"
              >
                View our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
