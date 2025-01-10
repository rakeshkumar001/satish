const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content(),],
  theme: {
    extend: {
      colors: {
        'primary': '#9ed4ca',
        'secondary': '#445046',
      },
      backgroundImage: {
        'jumbotronImage': "url('./assets/images/bolg_background.png')",
        'dummyImg':"url('./assets/images/dummy_background.jpg')"
      },
      fontFamily: {
        Poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        Roboto: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

