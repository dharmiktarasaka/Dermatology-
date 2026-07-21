/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aubergine: {
          950: '#1C0F1C',
          900: '#2C192C',
          800: '#3E243E', // Primary Deep Aubergine
          700: '#543254',
          600: '#6E436E',
          100: '#F5EFF5',
        },
        terracotta: {
          DEFAULT: '#B8644F', // Primary Burnt Terracotta
          hover: '#A3533F',
          dark: '#8E4230',
          light: '#E6B0A4',
          50: '#FDF6F4',
        },
        ivory: {
          DEFAULT: '#FAF5EE', // Primary Warm Ivory
          dark: '#F3EBDD',
          light: '#FFFDF9',
        },
        rosewood: {
          DEFAULT: '#87505B',
          light: '#B4828D',
          dark: '#613840',
        },
        sage: {
          DEFAULT: '#82927A',
          dark: '#5F6F57',
          light: '#CBD3C7',
          50: '#F4F6F3',
        },
        champagne: {
          DEFAULT: '#D8C4A8',
          light: '#EFE7DA',
          dark: '#B8A080',
        },
        peach: {
          DEFAULT: '#F3D8CA',
          light: '#FAF0EA',
        },
        cocoa: '#3A302E',
        stoneBg: '#E7E0D8',
        charcoal: '#242020',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(62, 36, 62, 0.08)',
        'luxury': '0 30px 60px -12px rgba(36, 32, 32, 0.12)',
        'glass': '0 8px 32px 0 rgba(62, 36, 62, 0.06)',
      },
      backgroundImage: {
        'aubergine-gradient': 'linear-gradient(135deg, #2C192C 0%, #3E243E 50%, #543254 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FFFDF9 0%, #FAF5EE 50%, #F3EBDD 100%)',
        'terracotta-gradient': 'linear-gradient(135deg, #B8644F 0%, #A3533F 100%)',
        'sage-gradient': 'linear-gradient(135deg, #82927A 0%, #5F6F57 100%)',
      }
    },
  },
  plugins: [],
}
