/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#1945E8',
          900: '#030D31',
          950: '#02071d',
        },
        secondary: {
          100: '#f0fdf4',
          400: '#86efac',
          500: '#9EFF00',
          600: '#91EA00',
          850: '#166534',
          900: '#052e16',
        },
        category: {
          purple: '#8A2BE2',
          header: '#4C187C',
        },
        decorative: {
          pink: '#E91E63',
          orange: '#FF5722',
          blue: '#1945E8',
        },
        neutral: {
          150: '#F0F2F5',
          250: '#E4E6EB',
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'sharepal-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'sharepal-elevated': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
