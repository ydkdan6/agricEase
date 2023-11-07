/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#388E3C', // A green shade for primary elements
        secondary: '#FFA000', // A warm, earthy color for secondary elements
        background: '#F0E68C', // A light, natural background color
        text: '#333', // Standard text color
        accent: '#F44336', // An accent color for highlighting elements
      }
    },
  },
  plugins: [],
}

