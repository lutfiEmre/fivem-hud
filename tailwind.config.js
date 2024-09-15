/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gradient1: '#E0E0E019'
      }
    },
  },
  plugins: [
    require('preline/plugin'),

  ],
}