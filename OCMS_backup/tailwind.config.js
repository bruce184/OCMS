/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003f7f',
          dark: '#002a5a',
          light: '#0055aa'
        },
        accent: {
          student: '#FFD700',
          lecturer: '#0000FF', 
          admin: '#00FF00'
        },
        neutral: {
          white: '#ffffff',
          gray: '#f0f0f0',
          dark: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
} 