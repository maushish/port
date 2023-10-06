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
        'gradient':"url('/gradient.png')",
      },
      colors:{
        'blog':"#7A7A7A",

      },
    },
  },
  plugins: [],
}