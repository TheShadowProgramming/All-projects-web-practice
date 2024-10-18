/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./@/components/ui/*.{js,ts,jsx,tsx}",
    "./@/lib/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'segoe':['Segoe UI', 'Tahoma', 'Geneva', 'Verdena', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.tap-highlight-transparent': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        // Add more utilities as needed
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

