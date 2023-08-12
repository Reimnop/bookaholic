/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-top': '#ede1dc',
        'bg-bottom': '#e0cdc4',
        'text': '#000000',
        'inactive': '#3f3f3f',
        'surface': '#9c8377',
        'accent': '#b2baa8',
        'accent-light': '#f4ffe6',
        'button': '#c49a89'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

