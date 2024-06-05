/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        // start: "#46BBCD",
        // end: "#D82782",
      },
    },
  },
  plugins: [],
};
