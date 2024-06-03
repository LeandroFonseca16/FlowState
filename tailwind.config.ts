const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx,mdx}",
             "./components/**/*.{js,ts,jsx,tsx,mdx}",
             "./app/**/*.{js,ts,jsx,tsx,mdx}",
             "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors:{
          gray:{
            DEFAULT: '#900',
            100: '#454545'
          }
        }
    },
  },
  plugins: [],
};

