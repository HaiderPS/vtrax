"use client";

import React from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

export function FaqSection() {
  const questions = [
    "What retaining wall types does VTRAX build?",
    "Do I need council approval for a retaining wall in NSW?",
    "My existing timber wall is failing - what are my options?",
    "Do you handle the excavation as well, or just the wall?",
    "What does a retaining wall cost in the Illawarra?",
    "What areas do you service?",
  ];
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const answers = [
    "We build concrete sleeper, block, and timber retaining walls.",
    "Most walls over 600mm in NSW require council approval. We can help guide you.",
    "We offer full replacement with modern, durable materials.",
    "We handle both excavation and wall construction for a seamless project.",
    "Costs vary by size and material. Contact us for a free quote.",
    "We service Illawarra, South Coast, and South Sydney."
  ];

  return (
    <section id="faq" className="scroll-mt-24 bg-[#F5F5F3] py-16 text-dark sm:py-20">
      <div className="mx-auto grid w-full max-w-[1300px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
        <div className="max-w-[320px]">
          <p className="font-oswald text-[8px] font-bold uppercase leading-[100%] tracking-[2px] text-primary">
            Common Questions
          </p>
          <h2 className="mt-2 font-display text-[52px] font-black uppercase leading-[1.1] sm:text-[58px]">
            Frequently
            <span className="block text-primary">Asked</span>
          </h2>
          <p className="mt-3 font-open-sans text-[10px] font-normal leading-[1.7] text-dark/70 sm:text-[11px]">
            Straight answers to what Illawarra homeowners ask most when
            planning local retaining wall projects.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex h-[43px] items-center justify-center rounded-[1px] bg-dark px-5 font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[1.6px] text-white transition hover:bg-dark/90"
          >
            Ask Jake Directly
          </a>
        </div>

        <div>
          <div className="divide-y divide-dark/15 border-y border-dark/15">
            {questions.map((question, idx) => (
              <div key={question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 py-3 text-left"
                  aria-expanded={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="font-oswald text-[12px] font-bold uppercase leading-[100%] tracking-[1.2px] text-dark sm:text-[13px]">
                    {question}
                  </span>
                  <motion.span
                    className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center"
                    animate={{ rotate: openIndex === idx ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="26" height="26" rx="13" fill="#111111"/>
                      <path d="M13 10.083V15.9163" stroke="white" strokeWidth="1.04167"/>
                      <path d="M10.083 13H15.9163" stroke="white" strokeWidth="1.04167"/>
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                      className="overflow-hidden"
                    >
                      <div className="pb-3 pl-2 pr-2 font-open-sans text-[10.5px] font-normal text-dark/80 sm:text-[11.5px]">
                        {answers[idx]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
