/** @type {import('tailwindcss').Config} */
module.exports = {
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

      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
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
}