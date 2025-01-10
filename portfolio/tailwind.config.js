/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Amatic: ["Amatic SC", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Caveat: ['Caveat Brush'],
       
      },
      dropShadow: {
        imgDropShadow: "5px 5px 5px #222222a0"
      },
    },
    boxShadow: {
      'myBS': '5px 6px 10px 0px rgb(0 0 0 / 30%)',
      "asd": '-6px -6px 14px rgb(255 255 255 / 70%), -6px -6px 10px rgb(255 255 255 / 50%), 6px 6px 8px rgb(255 255 255 / 8%), 6px 6px 10px rgb(0 0 0 / 15%);',
      "inputBoxShadow": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;",
      "innerShadow": "inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075),inset 2px 2px 4px rgba(0, 0, 0, .15);",
    },
    colors: {
      'primary': '#6437a0',
      'secondary': '#ff014f',
      // 'secondary':"#9854cb",
      'dark-primary': '#28104e',
      'light-secondary': '#deacf5',
      'white': "#fff",
      'gray': "#ccc",
      'slate': "#ccc",
      "baseTextColor": "#333333",
      "fade-white": "#ffffffbd",
      "fade-base-color": "#dce1e4c9",
      "bgForContent": "#ecf0f3",
      "bgForContentFade": "#ecf0f3e8",
      "myGradient": "linear-gradient(145deg, #e2e8ec, #ffffff);",
      "waterColor": "#094b65",
      "transparent": "transparent"
    }
  },
  plugins: [],
}