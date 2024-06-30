/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-lg': '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

