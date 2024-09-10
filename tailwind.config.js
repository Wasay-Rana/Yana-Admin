/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",  
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif']},
      colors: {
        'yana-red': '#d61125',
        'yana-blue': '#0E6D99',
        'yana-black': '#303030',
        'yana-white': '#fcf7f8',
        'yana-gold': '#fe8c00',
        'yana-green': '#008767',
        'yana-light-green': '#A6E7D8',
        'yana-green2': '#16C098'
      }
    },
  },
  plugins: [],
}