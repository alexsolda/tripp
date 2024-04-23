/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        userView: '81.25rem'
      },
      width: {
        userView: '81.25rem'
      }
    }
  },
  plugins: []
}
