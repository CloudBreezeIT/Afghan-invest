/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#a33c3b',
        secondary: '#403b49',
        // usetheme: '#723C42',
        usetheme: '#b53d3c',
        mstheme: '#1f4897',
        mstheme_hover: '#3a66b3',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}