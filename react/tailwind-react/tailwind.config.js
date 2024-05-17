/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"], // in this way all the files inside the dist folder will be look for utilities used in tailwind and generate contemporary css file for the utilities
  theme: {
    extend: {},
  },
  plugins: [],
};
