/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "50vw": "50vw",
      },
      height: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
};
