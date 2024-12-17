/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary:'#d4a736',
  			//backgroud: '#090909',
        backgroud: {
          DEFAULT: '#090909',
          dark: '#ffffff',
        },
        card: '#161819',
  			cardHeader: '#1D1F20',
  			draw: '#6F6F6F',
  			win: '#26AC2C',
  			lose: '#D42020',
  			badge: '#797979',
  			text: '#EEEEEE',
  			hover: '#121213',
  			menu: '#121213',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
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
  			xss: '10px'
  		},
  		fontFamily: {
  			sans: [
  				'Parkinsans',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			sm: 'calc(var(--radius) - 4px)',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

