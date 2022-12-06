/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'brand': {
        'primary': '#011D2C',
        'accent': {
          '400': '#F17154',
          '500': '#c97867',
          '300': '#22485c',
          '100': '#fafafa'
        }
      }
    },
    extend: {
      fontFamily: {
        'brand': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}