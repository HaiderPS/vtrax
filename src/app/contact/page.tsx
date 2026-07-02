import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MarqueeTape from "@/components/MarqueeTape";
import ContactForm from "@/components/ContactForm";
import ServiceAreas from "@/components/ServiceAreas";
import { SEO, CONTACT, CONTACT_AREA_TAGS, IMG } from "@/data/site";

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
};

function InfoLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1.5 font-open text-[11px] font-bold uppercase leading-none tracking-[0.1em] text-[#9aa1a8]">
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="animate-fade bg-white">
      <PageHero
        badge="Get in touch"
        bgSrc={IMG.contactHero}
        title={
          <>
            <span className="text-yellow">Free quote</span> &amp; site visit
          </>
        }
        subtitle="Tell us about your block and what you're trying to achieve. The quickest way to reach us is a call or text. Jake usually replies within 5 to 10 minutes during work hours."
      />
      <MarqueeTape />

      <section className="bg-white py-[clamp(56px,7vw,96px)]">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
          <ContactForm />

          <div>
            <div className="bg-ink px-[30px] py-[34px]">
              <h2 className="m-0 mb-[22px] font-oswald text-[13px] font-bold uppercase leading-none tracking-[0.14em] text-yellow">
                VTRAX Projects
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <InfoLabel>Phone</InfoLabel>
                  <a
                    href={CONTACT.phoneHref}
                    className="font-open text-[19px] font-bold leading-none text-white no-underline"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
                <div>
                  <InfoLabel>Email</InfoLabel>
                  <a
                    href={CONTACT.emailHref}
                    className="break-all font-open text-[16px] font-medium leading-[1.3] text-white no-underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
                <div>
                  <InfoLabel>Service area</InfoLabel>
                  <div className="mb-3 font-open text-[14px] leading-[1.55] text-[#C7CCD2]">
                    Illawarra · South Coast · South Sydney, within around 60km of
                    Wollongong.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CONTACT_AREA_TAGS.map((t) => (
                      <span
                        key={t}
                        className="border border-white/[0.12] bg-ink-2 px-[11px] py-[7px] font-open text-[12px] font-semibold leading-none tracking-[0.04em] text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <InfoLabel>Hours</InfoLabel>
                  <div className="font-open text-[15px] leading-[1.55] text-[#C7CCD2]">
                    Mon to Fri 7am to 5pm. Bookings &amp; site visits also
                    available weekends and weekdays after 4:30pm.
                  </div>
                </div>
                <div className="border-t border-white/[0.12] pt-4">
                  <div className="font-open text-[13px] leading-[1.5] text-[#9aa1a8]">
                    ABN {CONTACT.abn} · NSW Contractor Licence {CONTACT.licence}{" "}
                    (current to {CONTACT.licenceExpiry}) · Publicly insured
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 border border-black/[0.12]">
              <div className="flex items-center gap-2 bg-ink px-4 py-3">
                <span className="block h-2 w-2 rounded-full bg-yellow" />
                <span className="font-open text-[10px] font-bold uppercase leading-none tracking-[0.14em] text-yellow">
                  Service area, Illawarra NSW
                </span>
              </div>
              <iframe
                title="VTRAX Projects service area, Wollongong, Illawarra NSW"
                src="https://maps.google.com/maps?q=Wollongong%20NSW&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="block h-[300px] w-full border-0"
                style={{ filter: "grayscale(0.6) contrast(1.05)" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceAreas photoSrc={IMG.serviceArea} />
    </div>
  );
}
