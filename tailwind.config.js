/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          dark: '#005932',
          mid: '#0CA81B',
          light: '#E8F5E9',
        },
        tierra: '#8B5E3C',
        cielo: '#1A6B9A',
        crema: '#FAFAF7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}