/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          background: '#333333',
        },
        primary: '#0F0F0F', // Carbon Black
        secondary: '#2E2E2E', // Smoke grey
        background: '#F4F4F4', // Pearl White
        accent: {
          gold: '#FFD700', // Gold
          silver: '#C0C0C0', // Silver
        },
      },
      stroke: ['hover', 'focus'],
    },
  },  
  plugins: [],
}

