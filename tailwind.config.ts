import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7AC1D",
        dark: "#111111",
        white: "#FFFFFF",
        white70: "#FFFFFF73",
        white10: "#FFFFFF0A",
      },
      fontFamily: {
        sans: ["var(--font-oswald)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 60px -24px rgb(0 0 0 / 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;