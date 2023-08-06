/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'blue-highlight': '#2462D1',
        'gray-400': '#CBD5E0',
        'gray-800': '#2D3748',
        'gray-200': '#EDF2F7',
        'light-gray': '#BFCFE0',
        'navy-blue': '#062952',
        's-1': '#DABFFF',
        's-1-darker': '#46426D',
        's-1-light': '#E9D9FF',
        's-1-lighter': '#F7F1FF',
        's-2': '#FFD6B3',
        's-2-darker': '#66421F   ',
        's-2-light': '#FFE4CC',
        's-2-lighter': '#FEF6EF',
        's-3': '#99D1FF',
        's-3-darker': '#003A66',
        's-3-light': '#BFE3FF',
        's-3-lighter': '#E6F4FF',
        's-4': '#81DDE5',
        's-4-darker': '#2A5154',
        's-4-light': '#AAECF2',
        's-4-lighter': '#DEF5F7',
        's-5': '#FFBFD2',
        's-5-darker': '#773A47',
        's-5-light': '#FFD9E4',
        's-5-lighter': '#FFF2F6',
        's-6': '#CBD5E0',
        's-6-darker': '#4A5568',
        's-6-light': '#E2E8F0',
        's-6-lighter': '#F2F7FA',
        white: '#FFFFFF'
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        'archivo-narrow': ['Archivo Narrow', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
  safelist: [
    { pattern: /bg-./ },
    { pattern: /text-./ },
    { pattern: /border-./ },
    { pattern: /from-./ }
  ]
};
