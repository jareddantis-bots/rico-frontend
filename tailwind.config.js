const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require('tailwindcss/colors'), require('@tailwindcss/typography')],
}
