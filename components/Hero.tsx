"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, cubicBezier } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonClassName =
  "inline-flex h-[43px] items-center justify-center gap-2 rounded-[1px] px-6 text-[10px] font-black uppercase tracking-[0.18em] transition duration-300";

const stats = [
  { value: "8+", label: "Years hands-on industry experience" },
  { value: "10m+", label: "Tonnes of retaining capacity delivered" },
  { value: "$0", label: "Hidden assessment fees for first call" },
  { value: "60+", label: "Retaining walls completed across NSW" },
];

const tickerItems = [
  "Concrete Sleeper Retaining Walls",
  "Block Retaining Walls",
  "Timber Sleeper Retaining Walls",
  "Multi-Tier Wall Systems",
  "Excavation & Footing Preparation",
  "Drainage Installation",
  "Engineered Wall Builds",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden scroll-mt-24 bg-dark pt-16"
    >
      <div className="absolute inset-0 bg-[url('/images/div.hero-bg.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(17,17,17,0.94)_0%,_rgba(17,17,17,0.88)_26%,_rgba(17,17,17,0.58)_48%,_rgba(17,17,17,0.34)_66%,_rgba(17,17,17,0.56)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,17,17,0.42)_0%,_rgba(17,17,17,0.05)_52%,_rgba(17,17,17,0.78)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-[1280px] flex-col justify-between px-4 sm:px-6 lg:px-8">
        <div className="pt-10 sm:pt-12 lg:pt-14">
          <motion.div
            className="max-w-[640px]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariant}
              className="mb-4 inline-flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.26em] text-primary sm:text-[9px]"
            >
              <span className="h-px w-6 bg-primary" />
              Retaining Wall Specialists - Wollongong, NSW
            </motion.p>
            <motion.h1
              variants={itemVariant}
              className="font-display text-[52px] uppercase leading-[0.88] text-white sm:text-[76px] lg:text-[88px]"
            >
              Retaining
              <span className="block">Walls</span>
              <span className="block text-primary">Built Right.</span>
            </motion.h1>
            <motion.p
              variants={itemVariant}
              className="mt-3 max-w-[540px] font-open-sans text-[10px] font-normal leading-5 text-white70 sm:mt-4 sm:text-[11px]"
            >
              Concrete sleeper, block, and timber retaining walls, excavation,
              drainage, and landscaping. Servicing Wollongong, Shellharbour,
              Kiama, and the South Coast with professional equipment and
              dedicated on every job.
            </motion.p>

            <motion.div
              variants={itemVariant}
              className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center"
            >
              <motion.a
                href="#contact"
                className={cn(
                  buttonClassName,
                  "bg-primary px-[18px] text-dark hover:bg-primary/90"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
                Get a Free Quote
              </motion.a>
              <motion.a
                href="tel:+61478563679"
                className={cn(
                  buttonClassName,
                  "border border-white/20 bg-dark/55 px-[18px] text-white hover:border-primary/50 hover:text-primary"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Call 0478 563 679
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-oswald text-[30px] font-bold leading-[0.9] text-primary sm:text-[32px]">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[190px] font-open-sans text-[9px] font-normal leading-[1.35] text-white70 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="relative w-full h-[28px] overflow-hidden border-t border-dark/10 bg-primary">
        <div className="flex h-full w-max min-w-full animate-marquee items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex h-full shrink-0 items-center"
            >
              <span className="inline-flex items-center px-5 align-middle font-oswald text-[11px] font-bold uppercase leading-[100%] tracking-[2.2px] text-dark">
                {item}
              </span>
              <span className="h-[10px] w-px bg-dark/35" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
