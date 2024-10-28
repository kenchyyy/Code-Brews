/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        customBackground: '#282B37', 
        customInputBkg: '#404A5B',
        customAddBtnBkg: '#2C3D5B',
        whiteTransparent: '#FFFFFF99',
        whiteTransparent2: '#FFFFFF80',
      },
    },
  },
  plugins: [],
}

