/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          100: '#b0bbf9',
          400: '#3f51b5'
        } 
      }
    },
  },
  plugins: [],
}

