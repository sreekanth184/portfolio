/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', // For very small screens
        'sm-md': '390px', // Between small and medium
        'sm-lg': '420px', // Slightly larger small screens
      },
    },
  },
  plugins: [],
}