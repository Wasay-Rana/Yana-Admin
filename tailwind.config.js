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
        'main': '#d61125',
        'blue': '#0E6D99',
        'custom-blue': '#2d9cdb',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2'
      }
    },
  },
  plugins: [],
}