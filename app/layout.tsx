import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://vtraxprojects.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VTRAX | Retaining Walls Built Right",
    template: "%s | VTRAX",
  },
  description:
    "Expert retaining wall construction in Wollongong & South Coast NSW. Concrete sleeper, block & timber walls. 8+ years experience, 60+ walls completed. Free quotes. Call 0478 563 679.",
  keywords: [
    "retaining wall Wollongong",
    "retaining wall builder NSW",
    "concrete sleeper retaining wall",
    "block retaining wall",
    "timber retaining wall",
    "retaining wall Illawarra",
    "retaining wall South Coast NSW",
    "retaining wall construction",
    "VTRAX retaining walls",
    "retaining wall installer Wollongong",
    "retaining wall quote NSW",
    "drainage installation NSW",
    "engineered retaining walls",
    "retaining wall Shellharbour",
    "retaining wall Kiama",
  ],
  authors: [{ name: "VTRAX" }],
  creator: "VTRAX",
  publisher: "VTRAX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "VTRAX",
    title: "VTRAX | Retaining Walls Built Right",
    description:
      "Expert retaining wall construction in Wollongong & South Coast NSW. Concrete sleeper, block & timber walls. 8+ years experience, 60+ walls completed. Free quotes.",
    images: [
      {
        url: "https://vtraxprojects.com.au/images/vtrax_about.jpg",
        width: 1200,
        height: 630,
        alt: "VTRAX – Retaining Wall Specialists in Wollongong & South Coast NSW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VTRAX | Retaining Walls Built Right",
    description:
      "Expert retaining wall construction in Wollongong & South Coast NSW. 8+ years, 60+ walls completed. Free quotes — 0478 563 679.",
    images: ["https://vtraxprojects.com.au/images/vtrax_about.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${openSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NP7F4Z2R');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen bg-dark text-white" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NP7F4Z2R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
