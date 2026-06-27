import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0F11",
        "ink-2": "#16181c",
        yellow: "#FFCB05",
        "yellow-dark": "#E6B600",
        "yellow-deep": "#C99700",
        cream: "#F2F2EE",
        panel: "#F5F5F2",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        open: ["var(--font-open-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        shell: "1180px",
        "shell-wide": "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
