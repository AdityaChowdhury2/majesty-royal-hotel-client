/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "gilda-display": "'Gilda Display', serif"
      },
      container: {
        center: true,
        screens: {
          lg: "1240px"
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],

}
