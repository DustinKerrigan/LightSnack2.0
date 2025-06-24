/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in',
      },
      fontFamily: {
        oswald: ['"Oswald"', 'sans-serif'],
        anton: ['"Anton"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

