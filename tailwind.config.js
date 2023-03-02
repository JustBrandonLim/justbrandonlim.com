/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["var(--font-lexend)", ...defaultTheme.fontFamily.sans],
        literata: ["var(--font-literata)", ...defaultTheme.fontFamily.serif],
        "jetbrains-mono": ["var(--font-jetbrains-mono)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
