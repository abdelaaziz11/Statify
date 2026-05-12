/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
        },
        'dark': {
          bg: '#0b0f19',
          surface: '#131b2f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
