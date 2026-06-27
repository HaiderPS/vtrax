"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

/**
 * AreaApplier — recreates the original site's "service area" behaviour.
 * When a visitor arrives on the home page via `/?area=Wollongong`, every
 * mention of "Illawarra" in the page copy (outside the footer) is swapped
 * to the chosen area. Navigating away renders fresh copy, restoring the
 * default "Illawarra" wording automatically.
 *
 * This is a faithful port of a DOM-level feature from the source design.
 * It mutates text nodes directly and must not run during React rendering,
 * so it is deferred to an effect after paint.
 */
export default function AreaApplier() {
  const params = useSearchParams();
  const area = params.get("area") || "Illawarra";
  const applied = useRef("Illawarra");

  useEffect(() => {
    const id = window.setTimeout(() => {
      const prev = applied.current || "Illawarra";
      const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const tokens = Array.from(new Set(["Illawarra", prev])).filter(
        (x) => x !== area
      );
      if (tokens.length === 0) {
        applied.current = area;
        return;
      }
      const re = new RegExp("(" + tokens.map(esc).join("|") + ")", "g");
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
      );
      const hits: Text[] = [];
      while (walker.nextNode()) {
        const n = walker.currentNode as Text;
        if (!n.nodeValue) continue;
        if (n.parentElement && n.parentElement.closest("footer")) continue;
        if (n.parentElement && n.parentElement.closest("header")) continue;
        re.lastIndex = 0;
        if (re.test(n.nodeValue)) hits.push(n);
      }
      hits.forEach((n) => {
        re.lastIndex = 0;
        n.nodeValue = n.nodeValue!.replace(re, area);
      });
      applied.current = area;
    }, 60);
    return () => window.clearTimeout(id);
  }, [area]);

  return null;
}
