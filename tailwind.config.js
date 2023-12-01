/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('/banner_bg.png')",
      },
      colors: {
        pink: "#ED4690",
        purple: "#5522CC",
        form: "#0A075F",
        red: "#F5167E",
        grey: "#6A6A6A",
        darkPurple: "#3D37F1",
      },
    },
  },
  plugins: [nextui()],
};
