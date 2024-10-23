/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        customBackground: '#282B37', 
        whiteTransparent: '#FFFFFF99',
      },
    },
  },
  plugins: [],
}
