/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-top': '#F5F5F5',
        'bg-bottom': '#D5D5F0',
        'text': '#000000',
        'inactive': '#A5A5A5',
        'surface': '#FFFFFF',
        'button': '#FFEBA6',
        'button-lower': '#B2A472'
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
        '72px': '72px',
        '80px': '80px',
        '88px': '88px',
        '96px': '96px',
        '104px': '104px',
        '112px': '112px',
        '120px': '120px',
        '128px': '128px'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

