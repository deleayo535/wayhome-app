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
      xsm: "0.85rem",
      sxm: "1rem",
      sm: "1.125rem",
      smmd: "1.25rem",
      smx: "1.4rem",
      base: "1.65rem",
      base2: "2rem",
      lg: "2.5rem",
      xlg: "2.75rem",
      xl: "3.5rem",
      xxl: "5rem",
    },

    fontFamily: {
      sans: ["copernicus"],
      reg: ["modern-era-regular"],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      grey: "#909aa5",

      black: "rgb(51, 51, 49);",
      midblack: "rgb(51, 51, 49);",
      lowblack: "rgb(108, 107, 103);",
    },
  },
  plugins: [],
};
