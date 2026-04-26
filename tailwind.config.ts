import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06070b",
        panel: "#0d1017",
        border: "rgba(255, 255, 255, 0.08)",
        text: "#f4f7fb",
        muted: "#98a3b8",
        accent: "#7c9cff",
        accentSoft: "#9b8cff",
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "SF Pro Text",
          "Avenir Next",
          "Helvetica Neue",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 90px rgba(15, 23, 42, 0.45)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(124, 156, 255, 0.24), transparent 34%), radial-gradient(circle at 80% 20%, rgba(155, 140, 255, 0.18), transparent 30%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        appear: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        appear: "appear 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
