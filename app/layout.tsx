import type { Metadata } from "next";
import { Open_Sans, Oswald } from "next/font/google";
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

export const metadata: Metadata = {
  title: "VTRAX | Retaining Walls Built Right",
  description:
    "Modern retaining wall construction, drainage, and site assessment services."
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
      <body className="min-h-screen bg-dark text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}