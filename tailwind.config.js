/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Serif Display', 'serif'],
        'inter': ['Inter Tight', 'sans-serif'],
      },
      backgroundImage: {
        'main': "url('/src/assets/images/default.png')"
      },
      animation: {
        'twirl': 'spin 2s linear infinite',
        'twirl-slow': 'spin 3s linear infinite',
        'twirl-slower': 'spin 4s linear infinite',
      },
      colors: {
        'earth-100': '#C0B7B1',
        'earth-200': '#A79382',
        'earth-300': '#8E6E53',
        'earth-400': '#796D57',
        'earth-500': '#636B5A',
        'earth-600': '#3D5350',
        'earth-700': '#404948',
        'earth-800': '#3C3E45',
        'earth-900': '#373342',
        'earth-1000': '#2A2744',
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ]
}
