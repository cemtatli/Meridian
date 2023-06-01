/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f9f9fb',
          dark: '#0d1117',
        },
        ocean: {
          50: '#eff6ff',
          100: '#dbe9fe',
          200: '#bfd9fe',
          300: '#93c2fd',
          400: '#60a1fa',
          500: '#3076f6',
          600: '#255eeb',
          700: '#1d49d8',
          800: '#1e3caf',
          900: '#1e378a',
          950: '#172354',
        },
        thunder: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e6e6e6',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
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
        'screen-128': 'calc(100vh - 8rem)',
      },
      fontSize: {
        xxs: ['0.625rem', '0.75rem'],
      },
    },
  },
  plugins: [],
};
