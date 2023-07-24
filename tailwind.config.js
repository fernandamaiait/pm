/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#062952',
        'light-gray': '#BFCFE0',
        'gray-800': '#2D3748',
        white: '#FFFFFF'
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        'archivo-narrow': ['Archivo Narrow', 'sans-serif']
      }
    }
  },
  plugins: []
};
