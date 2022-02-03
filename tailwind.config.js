module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif', 'Poppins', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em'
      },
      colors: {
        'verydark-greyblue': '#23303e',
        'verydarkgrayish-blue': '#5a636c', 
        'darkgrayish-blue': '#818498',
        'grayish-blue': '#a7abae',
        'des-cyan': '#25564b',
        'dark-blue': '#19536b',
        'moderate-cyan': '#458c7e',
        'cyan-bgfooter': '#86cdbf'
      },
      fontWeight: {
        'reallyextra-bold': 1000,
      },
      screens: {
        'laptop': '1200px'
      }
    },
  },
  plugins: [],
}