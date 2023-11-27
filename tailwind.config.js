/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        people: "url('/banner_bg.png')",
      },
      colors: {
        pink: "#ED4690",
        purple: "#5522CC",
      },
    },
  },
  plugins: [],
};
