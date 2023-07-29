/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-top': '#161616',
        'bg-bottom': '#212121',
        'text': '#ffffff',
        'inactive': '#a0a0a0',
        'surface': '#5c483f',
        'accent': '#755b4f',
        'accent-light': '#aa8174',
        'button': '#aa8174'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

