/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#C8A97E',
          hover: '#b5956a',
        },
        light: {
          bg: '#FAFAF9',
          secondary: '#F5F0EB',
          text: '#1A1A1A',
          muted: '#6B6B6B',
          border: '#E5E5E5',
        },
        dark: {
          bg: '#0A0A0A',
          secondary: '#141414',
          text: '#F5F5F5',
          muted: '#A0A0A0',
          border: '#2A2A2A',
        },
      },
      // dans tailwind.config.js
        fontFamily: {
        heading: ['Cabinet Grotesk', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
        },
      letterSpacing: {
        'super-wide': '0.25em',
      }
    },
  },
  plugins: [],
}