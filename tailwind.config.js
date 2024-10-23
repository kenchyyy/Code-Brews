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
        customInputBkg: '#404A5B',
        whiteTransparent: '#FFFFFF99',
        whiteTransparent2: '#FFFFFF80',
      },
    },
  },
  plugins: [],
}
