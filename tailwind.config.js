/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#E9E2C7',
        'primary': '#4F0205',
        'gray': '#63787F'
      }
    },
  },
  plugins: [],
}