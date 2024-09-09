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
          'custom-gray': '#808080e2',
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
        },
    },
  },
  plugins: [],
}