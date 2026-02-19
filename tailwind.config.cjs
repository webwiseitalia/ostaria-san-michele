/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf6f1',
          100: '#f0e6d6',
          200: '#e0ccad',
          300: '#cba97a',
          400: '#b8894f',
          500: '#a67339',
          600: '#8c5c2e',
          700: '#6e4526',
          800: '#5a3920',
          900: '#4a2f1b',
        },
        forest: {
          50: '#f0f7f1',
          100: '#d9ead9',
          200: '#b5d6b5',
          300: '#85b888',
          400: '#5a9960',
          500: '#3d7a43',
          600: '#2d6133',
          700: '#254e2b',
          800: '#1f3f24',
          900: '#1a331f',
        },
        cream: {
          50: '#fffefb',
          100: '#fdf8f0',
          200: '#faf0de',
          300: '#f5e4c6',
          400: '#edd3a3',
          500: '#e3c080',
        },
        stone: {
          50: '#f8f7f6',
          100: '#eeedeb',
          200: '#dddbd7',
          300: '#c4c0ba',
          400: '#a8a29c',
          500: '#8d8680',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
