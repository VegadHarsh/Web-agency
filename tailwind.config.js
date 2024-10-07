/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': {'min': '320px', 'max': '425px'},  // Custom range from 320px to 425px
      },
    },
  },
  plugins: [],
}
