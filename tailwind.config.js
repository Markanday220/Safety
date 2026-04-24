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
        brand: {
          // Corporate palette (derived from logo): navy + red + clean neutrals
          dark: '#0B1026',
          darker: '#060A18',
          surface: '#101737',
          border: '#1C2553',
          gold: '#D10F1A',       // used across UI as primary accent
          goldLight: '#FF4D5A',  // lighter accent for gradients
          blue: '#1F2A6B',       // secondary (navy) highlight
          blueLight: '#3B4CC0',
          accent: '#D10F1A',
          muted: '#7A8199',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D10F1A 0%, #FF4D5A 50%, #D10F1A 100%)',
        'blue-gradient': 'linear-gradient(135deg, #111A45 0%, #1F2A6B 50%, #3B4CC0 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, #121A3F 0%, #0B1026 62%)',
        'cta-gradient': 'linear-gradient(135deg, #D10F1A 0%, #1F2A6B 100%)',
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(209, 15, 26, 0.28)' },
          '50%': { boxShadow: '0 0 40px rgba(209, 15, 26, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(209, 15, 26, 0.4)',
        'glow-blue': '0 0 30px rgba(31, 42, 107, 0.45)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      }
    },
  },
  plugins: [],
}
