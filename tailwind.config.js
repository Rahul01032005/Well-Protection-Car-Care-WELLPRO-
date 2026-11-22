/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#03050a',
          900: '#060a14',
          850: '#0a1020',
          800: '#0e162c',
          700: '#14203d',
          600: '#1c2d54',
          500: '#283e73',
        },
        navy: {
          950: '#030814',
          900: '#071228',
          800: '#0c1f42',
          700: '#102d60',
          600: '#153e82',
          500: '#1b52a8', // Brand Logo Deep Cobalt Blue
          400: '#256ecf',
          300: '#488ff0',
        },
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8', // Electric Ice Cyan Glow
          500: '#00b4d8', // Highlight Cyan
          600: '#0284c7',
        },
        chrome: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        subheading: ['Montserrat', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'blue-sm': '0 0 15px rgba(0, 180, 216, 0.2)',
        'blue-md': '0 0 25px rgba(0, 180, 216, 0.35)',
        'blue-lg': '0 0 45px rgba(0, 180, 216, 0.55)',
        'card-dark': '0 10px 30px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #38bdf8 0%, #154c8a 50%, #0c1f42 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #7dd3fc 0%, #1b52a8 50%, #102d60 100%)',
        'chrome-gradient': 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%)',
        'card-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 180, 216, 0.1) 0%, rgba(10, 16, 32, 0) 75%)',
      }
    },
  },
  plugins: [],
}
