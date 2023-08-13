/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
      'wide': '42rem'
    },
    colors: {
      red: 'hsl(1, 90%, 64%)',
      white: 'hsl(0, 0%, 100%)',
      blue: {
        100: 'hsl(210, 60%, 98%)',
        200: 'hsl(211, 68%, 94%)',
        250: 'hsl(205, 33%, 90%)',
        300: 'hsl(219, 14%, 63%)',
        400: 'hsl(219, 12%, 42%)',
        500: 'hsl(224, 21%, 14%)',
        base: 'hsl(219, 85%, 26%)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: []
  }
}

