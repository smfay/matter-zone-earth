/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0.5deg)' },
          '50%': { transform: 'rotate(-0.5deg)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotateX(0deg) rotateZ(-3deg) rotateY(-10deg)' },
          '25%': { transform: 'rotateX(5deg) rotateZ(-6deg) rotateY(-5deg)' },
          '50%': { transform: 'rotateX(10deg) rotateZ(-3deg) rotateY(0deg)' },
          '75%': { transform: 'rotateX(5deg) rotateZ(0deg) rotateY(-5deg)' }
        },
      },
      fontFamily: {
        'noto': ['Noto Serif Display', 'serif'],
        'inter': ['Inter Tight', 'sans-serif'],
        'blops': ['Black Ops One', 'cursive'],
      },
      backgroundImage: {
        'main': "url('/src/assets/images/dot.gif')",
        'noise': "url('/src/assets/images/noisetexture.png)",
        'hills': "url('/src/assets/images/hills.png')"
      },
      animation: {
        'twirl': 'spin 2s ease infinite',
        'twirl-slow': 'spin 3s linear infinite',
        'twirl-slower': 'spin 4s linear infinite',
        'wiggle': `wiggle 0.2s ease-in-out infinite`,
        'wobble': 'wobble 6s ease-out infinite',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        'theme': '2px',
      },
      boxShadow: {
        'inset': 'inset 0px 10px 80px rgba(0,0,0,1)',
      },
      dropShadow: {
        'lift': '0px 15px 10px rgba(1, 1, 1, 0.8)',
        'lift-hard': '3px 3px 0px rgba(1, 1, 1, 1)',
        'lift-down': '0px 10px 20px rgba(1, 1, 1, 1)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
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
