"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const lenisRef = { current: null as Lenis | null };

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    function onFrame(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(onFrame);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      gsap.ticker.remove(onFrame);
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
