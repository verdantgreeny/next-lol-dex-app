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
        "gray-1": "var(--gray-1)",
        "gray-1-5": "var(--gray-1-5)",
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "gray-cool": "var(--gray-cool)",
        "magic-engineering-black": "var(--magic-engineering-black)",
        gold: "var(--gold)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
