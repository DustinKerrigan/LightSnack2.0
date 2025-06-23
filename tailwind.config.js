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
        lato: ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}

