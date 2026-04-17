import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Open_Sans, Oswald } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

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

export const metadata: Metadata = {
  title: "VTRAX | Retaining Walls Built Right",
  description:
    "Modern retaining wall construction, drainage, and site assessment services.",
  icons: {
    icon: "/images/vtrax_logo.svg",
    shortcut: "/images/vtrax_logo.svg",
    apple: "/images/vtrax_logo.svg",
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
      className={`${manrope.variable} ${bebasNeue.variable} ${oswald.variable} ${openSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-dark text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}