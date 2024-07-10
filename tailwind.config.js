/** @type {import('tailwindcss').Config} */

// Custom Config
const colors = require('./config/tailwind/colors');


export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'parallex': "url('/images/parallex.jpg')",
      },
      fontFamily: {
        custom: ['Futura', 'sans'], // Replace 'CustomFontName' with the actual font family name
      },
      colors,
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.line-clamp-6': {
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '6',
          },
        });
      },
    ],
  },
  plugins: [],
}

