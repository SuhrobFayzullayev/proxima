const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        proximanova: ["Proxima Nova"],
      },

      colors: { orange: "#FC7E1F", dimgray: "#646464" },
    },
  },
  plugins: [],
};
