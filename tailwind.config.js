/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        "gold-light": "var(--gold-light)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [],
};
