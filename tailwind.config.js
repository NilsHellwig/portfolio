/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "hover-gray": "#EFEFEF",
      },
      screens: {
        vsm: "500px",
        xsm: "340px",
        xmd: "800px"
      },
    },
  },
  plugins: [],
};
