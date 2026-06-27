"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "@/data/site";

const LABEL =
  "block font-open text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-ink mb-2";
const FIELD =
  "w-full border border-[#cfd2d6] bg-white px-3.5 py-[13px] font-open text-[15px] leading-[1.3] text-ink";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current || status === "sending") return;

    // Honeypot — bots fill hidden fields, humans don't. Silently "succeed".
    const honeypot = (
      formRef.current.elements.namedItem("website") as HTMLInputElement | null
    )?.value;
    if (honeypot) {
      setStatus("success");
      formRef.current.reset();
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg(
        `Email service isn't configured yet. Please call us on ${CONTACT.phone}.`
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : `Something went wrong. Please call us on ${CONTACT.phone}.`
      );
    }
  };

  if (status === "success") {
    return (
      <div className="border-t-4 border-yellow bg-panel p-[clamp(28px,4vw,44px)]">
        <div className="py-[30px]">
          <div className="mb-5 flex h-[54px] w-[54px] items-center justify-center bg-yellow">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E0F11" strokeWidth="3">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="m-0 mb-2.5 font-oswald text-[26px] font-bold uppercase leading-[1.1] text-ink">
            Request received
          </h2>
          <p className="m-0 font-open text-[16px] leading-[1.65] text-[#4a4f55]">
            Thanks, your details are with VTRAX Projects. We&apos;ll be in touch
            shortly to arrange your free site visit. Need it sorted now? Call{" "}
            <a href={CONTACT.phoneHref} className="font-bold text-ink">
              {CONTACT.phone}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t-4 border-yellow bg-panel p-[clamp(28px,4vw,44px)]">
      <form ref={formRef} onSubmit={handleSubmit}>
        <h2 className="m-0 mb-1.5 font-oswald text-[22px] font-bold uppercase leading-[1.1] text-ink">
          Request a free quote
        </h2>
        <p className="m-0 mb-[26px] font-open text-[14px] leading-[1.55] text-[#6b7177]">
          For project estimates, site assessments and general enquiries.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={LABEL}>Full name *</span>
            <input required name="from_name" type="text" className={FIELD} />
          </label>
          <label className="block">
            <span className={LABEL}>Phone *</span>
            <input required name="phone" type="tel" className={FIELD} />
          </label>
          <label className="block">
            <span className={LABEL}>Email</span>
            <input name="from_email" type="email" className={FIELD} />
          </label>
          <label className="block">
            <span className={LABEL}>Suburb *</span>
            <input required name="suburb" type="text" className={FIELD} />
          </label>
          <label className="block">
            <span className={LABEL}>Service required</span>
            <select name="service" className={FIELD}>
              <option>Retaining walls</option>
              <option>Excavation &amp; earthworks</option>
              <option>Site preparation</option>
              <option>Drainage solutions</option>
              <option>Landscaping walls</option>
              <option>Other / not sure</option>
            </select>
          </label>
          <label className="block">
            <span className={LABEL}>Enquiry type</span>
            <select name="enquiry_type" className={FIELD}>
              <option>Project estimate</option>
              <option>Site assessment</option>
              <option>General enquiry</option>
            </select>
          </label>
        </div>
        <label className="mt-4 block">
          <span className={LABEL}>Project details</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Wall length & approx height, slope, materials, timeframe…"
            className={`${FIELD} resize-y leading-[1.45]`}
          />
        </label>
        <label className="mt-4 block">
          <span className={LABEL}>Preferred contact</span>
          <select name="preferred_contact" className={FIELD}>
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </label>

        {/* Honeypot — hidden from real users; bots fill it and get silently dropped. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary mt-6 w-full justify-center px-7 py-[18px] text-[14px] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request my free quote"}
        </button>

        {status === "error" && (
          <p className="mt-4 border border-red-600/30 bg-red-50 p-3 font-open text-[13px] leading-[1.5] text-red-800">
            {errorMsg || `Something went wrong. Please call us on ${CONTACT.phone}.`}
          </p>
        )}

        <p className="mt-4 text-center font-open text-[11px] leading-[1.5] text-[#8a9098]">
          Your details stay with VTRAX Projects and are never shared.
        </p>
      </form>
    </div>
  );
}
