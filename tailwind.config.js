/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f5fafc',
          dark: '#191b21',
          ocean: '#0066ec',
          thunder: '#f3f3f8',
        },
        ocean: {
          50: '#eff7ff',
          100: '#dcebfd',
          200: '#c1defc',
          300: '#91c7fa',
          400: '#64abf6',
          500: '#408bf1',
          600: '#2a6de6',
          700: '#2258d3',
          800: '#2248ab',
          900: '#213f87',
          950: '#192852',
        },
        cerulean: {
          50: '#eff9ff',
          100: '#def2ff',
          200: '#b6e7ff',
          300: '#75d6ff',
          400: '#2cc2ff',
          500: '#00a1ea',
          600: '#0088d4',
          700: '#006cab',
          800: '#005b8d',
          900: '#064c74',
          950: '#04304d',
        },
        thunder: {
          50: '#f5f5f6',
          100: '#e4e5e9',
          200: '#cccfd5',
          300: '#a9adb7',
          400: '#7e8492',
          500: '#636977',
          600: '#535763',
          700: '#494c55',
          800: '#40414a',
          900: '#393a40',
          950: '#232429',
        },
      },
      screens: {
        xs: '425px',
        '2xl': '1440px',
      },
      width: {
        50: '200px',
      },
      height: {
        'screen-64': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
};
