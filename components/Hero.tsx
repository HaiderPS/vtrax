"use client";

import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, cubicBezier } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonClassName =
  "inline-flex h-[48px] items-center justify-center gap-2 rounded-[1px] px-10 text-[13px] font-black uppercase tracking-[0.18em] transition duration-300";

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
      <div className="absolute inset-0 bg-dark/15" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(17,17,17,0.94)_0%,_rgba(17,17,17,0.88)_26%,_rgba(17,17,17,0.58)_48%,_rgba(17,17,17,0.34)_66%,_rgba(17,17,17,0.56)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(17,17,17,0.42)_0%,_rgba(17,17,17,0.05)_52%,_rgba(17,17,17,0.78)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] w-full max-w-[1400px] flex-col justify-between px-4 sm:px-6 lg:px-8">
        <div className="pt-36 sm:pt-44 lg:pt-52 pb-32 sm:pb-44 lg:pb-56">
          <motion.div
            className="max-w-[740px] ml-2 sm:ml-4 md:ml-6 lg:ml-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariant}
              className="mb-8 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] sm:text-[12px]"
              style={{color: '#F7AC1D'}}
            >
              <span className="h-px w-8" style={{backgroundColor: '#F7AC1D'}} />
              Retaining Wall Specialists - Wollongong, NSW
            </motion.p>
            <motion.h1
              variants={itemVariant}
              className="font-display text-[80px] font-black uppercase leading-[0.88] text-white sm:text-[108px] lg:text-[136px]"
            >
              Retaining
              <span className="block">Walls</span>
              <span className="block" style={{color: '#F7AC1D'}}>Built Right.</span>
            </motion.h1>
            <motion.div
              variants={itemVariant}
              className="mt-6 max-w-[680px] font-open-sans font-light text-[16px] leading-[28px] text-white70 sm:mt-7"
            >
              <p>Concrete sleeper, block, and timber retaining walls. Excavation, drainage,</p>
              <p>and landscaping. Servicing Wollongong, Shellharbour, Kiama, and the South</p>
              <p>Coast — with professional equipment owned and operated on every job.</p>
            </motion.div>

            <motion.div
              variants={itemVariant}
              className="mt-10 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center"
            >
              <motion.a
                href="#contact"
                className={cn(
                  buttonClassName,
                  "bg-primary px-[22px] text-dark hover:bg-primary/90"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight className="h-4 w-4" />
                Get a Free Quote
              </motion.a>
              <motion.a
                href="tel:+61478563679"
                className={cn(
                  buttonClassName,
                  "border border-white/20 bg-dark/55 px-[22px] text-white hover:border-primary/50"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PhoneCall className="h-4 w-4" />
                Call 0478 563 679
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 py-6 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-oswald text-[36px] font-bold leading-[0.9] sm:text-[44px]" style={{color: '#F7AC1D'}}>
                  {stat.value}
                </p>
                <p className="mt-1 font-open-sans text-[11px] font-normal leading-[1.3] text-white70 sm:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <div className="relative w-full h-[40px] overflow-hidden border-t border-dark/10 bg-primary">
        <div className="flex h-full w-max min-w-full animate-marquee items-center">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex h-full shrink-0 items-center"
            >
              <span className="inline-flex items-center px-6 align-middle font-oswald text-[14px] font-bold uppercase leading-[100%] tracking-[2.2px] text-dark">
                {item}
              </span>
              <span className="h-[12px] w-px bg-dark/35" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}