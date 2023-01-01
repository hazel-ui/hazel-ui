const radixColors = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("windy-radix-palette")({
      colors: {
        mauve: radixColors.mauve,
        mauveDark: radixColors.mauveDark,
      },
    }),
  ],
};
