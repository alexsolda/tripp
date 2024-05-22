import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-amaranth)']
      },
      colors: {
        primary: '#00758E',
        secondary: '#00633F',
        black: {
          600: '#333333',
          800: '#131313'
        },
        white: '#ABABAB'
      },
      maxWidth: {
        userView: '81.25rem',
        readView: '42.5rem'
      },
      width: {
        userView: '81.25rem',
        readView: '42.5rem'
      }
    }
  },
  plugins: [nextui()]
}
