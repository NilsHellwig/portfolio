/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hover-gray": "#EFEFEF",
      },
      screens: {
        vsm: "500px",
      },
    },
  },
  plugins: [],
};
