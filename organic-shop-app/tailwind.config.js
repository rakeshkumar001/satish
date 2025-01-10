/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Lemon: ['Lemon', 'cursive'],
        Oswald: ['Oswald', 'sans-serif'],
        Fredoka: ['Fredoka One', 'cursive']
      },
      dropShadow: {
        imgDropShadow: "5px 5px 5px #222222a0"
      },
      border: {
        'border-element': "1px solid gray"
      }
    },
    boxShadow: {
      'box-shadow': "0px 0px 20px -10px black",
      'btn-shadow': "0px 0px 20px -10px secondary",
      'card-shadow': '0px 0px 0px 1px rgba(0, 0, 0, 0.05) ',
      'hover-card-shadow': 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;',
      'other-card-shadow': 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
      'border-shadow': ' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      'dark-border-shadow': '#eee9e920  0px 1px 3px 0px, #eee9e920 0px 0px 0px 1px;'
    },
    colors: {
      'primary': '#7fba00',
      'secondary': '#ffb524',
      'secondary-light': '#ffb524',
      "fade-base-color": "#dce1e4c9",
      "bgForContent": "#ecf0f3",
      "bgForContentFade": "#ecf0f3e8",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      slate: colors.slate,
      zinc: colors.zinc,
      gray: colors.gray,
      neutral: colors.blueGray,
      stone: colors.stone,
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}