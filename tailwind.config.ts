/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'user-bold':['User-Bold'],
        'user':['User'],
        'lomo':['Gilroy-ExtraBold'],

      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '0% 200%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 10s ease infinite linear',
      },
      backgroundImage:{
        'main':"url('/noise.png')",
        'graph':"url('/graphs.png')",
        'hero':"url('/gradient.png')",
        'grads':"url('/grads.png')",

      },
      colors:{
        'blog':"#4E4E4F",

      },
      fontSize:{
        'lamba':'11rem',
        'lund':'14rem',
      },

    },
  },
  plugins: [],
})