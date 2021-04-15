const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          DEFAULT: '#281A71'
        },
        purplegray: {
          DEFAULT: '#2E3241'
        },
        lightblue: {
          20: '#EEEBFF',
          DEFAULT: '#D9D2FB'
        },
        lightgray: {
          DEFAULT: '#9A9DA3'
        },
        disabledgray: {
          DEFAULT: '#C9CCD2'
        }
      },
      spacing: {
        '2/3': '66.666667%'
      },
      maxWidth: {
        '4.5xl': '52em'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
