/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#2dd4bf',
          DEFAULT: '#1abfb0',
          dark: '#0d9488',
          deeper: '#0f766e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Rethink Sans', 'Inter', 'sans-serif'],
      },
      keyframes: {
        'pulse-ring': {
          '0%':   { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(26,191,176,0.7)' },
          '70%':  { transform: 'scale(1)',    boxShadow: '0 0 0 14px rgba(26,191,176,0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(26,191,176,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

