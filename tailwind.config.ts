import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f0",
        foreground: "#13161a",
        muted: "#5a6370",
        border: "#d7dbe0",
        card: "#ffffff",
        accent: "#101828"
      },
      boxShadow: {
        editorial: "0 14px 38px rgba(16, 24, 40, 0.08)"
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.2, 0.8, 0.2, 1)"
      }
    }
  },
  plugins: []
};

export default config;
