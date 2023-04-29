/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        back:'#E2E2E2',
        brandRed: '#CB4340',
        brandYellow: '#F5E12A',
        brandBlack: '#101820',
        brandBrown: '#CC9061',
        brandLightBrown: '#E0AF5E',
      },
      fontFamily: {
        'space': ['SpaceGrotest', 'sans-serif'],
        'lemon': ['LemonMilk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
