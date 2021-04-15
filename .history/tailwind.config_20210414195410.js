const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          20: '#3A54B1',
          DEFAULT: '#212867'
        },
        purplegray: {
          DEFAULT: '#2E3241'
        },
        lightblue: {
          20: '#EEEBFF',
          DEFAULT: '#D9D2FB'
        },
        burntorange: {
          DEFAULT: '#C46700',
          900: '#502841'
        },
        grungegreen: {
          DEFAULT: '#C46700',
          900: '#502841'
        },
        disabledgray: {
          DEFAULT: '#C9CCD2'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
