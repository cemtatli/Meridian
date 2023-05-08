/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f5fafc',
          dark: '#121418',
          blue: '#0066ec',
          ocean: '#91c7fa',
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
          50: '#f7f6f6',
          100: '#e4e3e3',
          200: '#c9c6c7',
          300: '#a7a1a5',
          400: '#847d81',
          500: '#696367',
          600: '#534e51',
          700: '#444142',
          800: '#393637',
          900: '#322f31',
          950: '#222021',
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
