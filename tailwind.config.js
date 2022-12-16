/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: "1.125rem",
      base: "1.65rem",
      lg: "2.5rem",
      xl: "3.5rem",
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "rgb(51, 51, 49);",
      midblack: "rgb(51, 51, 49);",
      lowblack: "rgb(108, 107, 103);",
    },
  },
  plugins: [],
};
