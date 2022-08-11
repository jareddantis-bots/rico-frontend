const defaultTheme = require('tailwindcss/defaultTheme')

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

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
