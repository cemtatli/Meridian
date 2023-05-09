/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f5fafc',
          dark: '#000',
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
      height: {
        'screen-64': 'calc(100vh - 64px)',
      },
      screens: {
        xs: '425px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};
