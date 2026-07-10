"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes a GTM dataLayer event when the thank-you page is shown, so a form
 * submission can be tracked as a conversion reliably. Because the site is a
 * single-page app, the /thank-you route change alone may not always register
 * as a fresh pageview — this event gives the marketer a dependable GTM trigger
 * (in addition to the /thank-you URL, which also works as a destination goal).
 */
export default function ThankYouTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      form_name: "contact_quote",
      page_path: "/thank-you",
    });
  }, []);

  return null;
}
