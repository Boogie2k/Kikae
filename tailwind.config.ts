import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightWhite: "#f9f9f9",
        folly: "#FF0A54",
        grey: "#979797",
        kikaeBlue: "#4169e1",
        kikaeGrey: "#aaa5a4",
      },
      padding: {
        30: "30px",
      },
      width: {
        "494": "30.875rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {
        "338": "21.125rem",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        dmSans: ["var(--font-dmSans)"],
      },
      backgroundColor: {
        folly: "#ff0a54",
      },
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
        "hero-girl": "url('/img/hero-girl.jpg')",
        "hero-conv": "url('/img/hero-conv.jpg')",
      },
      textColor: {
        folly: "#ff0a54",
      },
    },
  },
  plugins: [],
};
export default config;
