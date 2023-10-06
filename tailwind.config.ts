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
      }
    },
  },
  plugins: [],
}