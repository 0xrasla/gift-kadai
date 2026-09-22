/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#09271a',
          800: '#0e3928',
          700: '#144c36',
        },
        coral: {
          50: '#fff5f5',
          100: '#ffe3e3',
          400: '#ff7b7b',
          500: '#ff5757',
          600: '#eb4343',
        },
        sunny: {
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f9be28',
          600: '#d99b10',
        },
        grass: {
          100: '#ecfdf5',
          400: '#84cc16',
          500: '#72b947',
          600: '#5fa738',
        },
        royal: {
          100: '#eff6ff',
          400: '#60a5fa',
          500: '#3d82de',
          600: '#2563eb',
        },
        grape: {
          100: '#f5f3ff',
          400: '#a78bfa',
          500: '#9b6ee5',
          600: '#7c3aed',
        },
        cream: {
          50: '#ffffff',
          100: '#fdfcf8',
          200: '#f8f5ee',
          300: '#f0ece0',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
