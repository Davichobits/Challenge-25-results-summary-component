/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'Light-slate-blue': 'hsl(252, 100%, 67%)',
        'Light-royal-blue': 'hsl(241, 81%, 54%)',
        'Violet-blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue': 'hsla(241, 72%, 46%, 0)',
        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Darkgrayblue': 'hsl(224, 30%, 27%)'
      },
      fontFamily: {
        'Hanken-Grotesk': ['Hanken Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

