/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          pumpk: "#d35400",
          light_pumpk: "#e67e22",
          dark_blue: "#192a56",
          light_blue: "#40739e",
        },
        bgs: {
          violet: "#9c88ff",
          orange: "#ffbe76",
          green: "#badc58",
        },
      },
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      montserrat: ["Montserrat"],
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
