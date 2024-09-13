/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",  
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'font-poppins', 'sans-serif']},
      colors: {
        'yana-red': '#d61125',
        'yana-blue': '#0E6D99',
        'yana-black': '#303030',
        'yana-white': '#fcf7f8',
        'yana-gold': '#fe8c00',
        'yana-green': '#008767',
        'yana-navy': '#464255',
        'yana-green-2': '#16C098',
        'yana-light-green': '#c0f8eb',
        'yana-light-green2': '#A6E7D8',
        'yana-green2': '#16C098',
      }
    },
  },
  plugins: [
    // Add custom plugin for hiding scrollbars
    function({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hidden': {
            'overflow': 'auto',
            '-webkit-overflow-scrolling': 'touch',
          },
          '.scrollbar-hidden::-webkit-scrollbar': {
            'display': 'none',
          },
          '.scrollbar-hidden': {
            'scrollbar-width': 'none',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}