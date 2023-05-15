/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f9f9fb',
          dark: '#000e18',
          icon: '#0ea0f8',
          text: '#149ff7',
          'text-2': '#667885',
        },
        secondary: {
          green: '#14be6c',
          'green-hover': '#e2f7ed',
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
          50: '#f4f6f7',
          100: '#e3e7ea',
          200: '#cad1d7',
          300: '#a6b3ba',
          400: '#7a8a96',
          500: '#667885',
          600: '#515d69',
          700: '#464f58',
          800: '#3e444c',
          900: '#373c42',
          950: '#22262a',
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
        xxs: ['10px', '1rem'],
      },
    },
  },
  plugins: [],
};
