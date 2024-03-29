// const { colors } = require('react-native/Libraries/NewAppScreen');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "Roboto, sans-serif"
      },
      backgroundImage:{
        app: "url(/app-bg.png)"
      },
      colors: {
        ignite:{
          500: "#129E57"
        },
        yellow:{
          500: "#f7dd43",
          700: "#e5cd3d"
        },
        gray:{
          100: "#E1E1E6",
          300: "#8d8d99",
          600: "#323238",
          800: "#202024",
          900: "#121214",
        }
      }
    },
  },
  plugins: [],
}
