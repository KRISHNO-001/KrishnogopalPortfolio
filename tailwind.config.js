/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      sa: ['Gantari', 'sans-serif'],
      logo: ['Caveat', 'cursive'],
      lobster:['Lobster Two', 'cursive'],
      firamono: ['Fira Mono', 'monospace']
    },
    screens:{

      'sm':{'max':'985px'}
    },
    
    extend: {
      animation: {
        'spinlow': 'spinlow 10s linear infinite',
      },
      keyframes: {
        spinlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};

