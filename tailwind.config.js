/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4a736',
        card: '#161819',
        backgroud: '#090909',
        cardHeader: '#1D1F20',
        draw: '#6F6F6F',
        win: '#26AC2C',
        lose: '#D42020',
        badge: '#797979',
        text: '#EEEEEE',
        hover: '#121213',
        menu: '#121213',
      },
      fontSize: {
        h1: '32.43px',
        h2: '28.83px',
        h3: '25.63px',
        h4: '22.78',
        h5: '20.26',
        h6: '18px',
        p: '16px',
        s: '14.22px',
        xs: '12px',
        xss: '10px',
      },
      fontFamily: {
        sans: ['Parkinsans', 'sans-serif'],
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '15px',
      }
    },
  },
  plugins: [],
}

