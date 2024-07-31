/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1': '#F5F5F5',
      },
      fontFamily: {
        'Rubik': ['Kodchasan', 'system-ui']
      }
    },
  },
  plugins: [],
}