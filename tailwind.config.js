/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'bricolage': ['Bricolage Grotesque', 'sans-serif'],
        'crimson': ['Crimson Text', 'serif'],
      },
      screens:{
        'big' : '850px'
      },
    },
  },
  plugins: [],
}

