/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			roboto: [
  				'var(--font-family)'
  			],
  			cousine: [
  				'var(--font-cousine)'
  			],
  			poppins: [
  				'var(--font-poppins)'
  			]
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			neutral: 'var(--neutral-color)',
  			'blue-dark': 'var(--blue-dark)',
  			blue: 'var(--blue)',
  			'blue-contrast': 'var(--blue-contrast)',
  			'blue-ligth': 'var(--blue-ligth)',
  			'light-grey': 'var(--light-grey)',
  			grey: 'var(--grey)',
  			black: 'var(--black)',
  			'black-contrast': 'var(--black-contrast)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  		fontWeight: {
  			normal: '400',
  			medium: '500',
  			semibold: '600'
  		},
  		fontSize: {
  			sm: '0.8rem',
  			base: '1rem',
  			xl: '1.25rem',
  			'2xl': '1.563rem',
  			'3xl': '1.953rem',
  			'4xl': '2.441rem',
  			'5xl': '3.052rem',
  			'6xl': '4.441rem',
  			'7xl': '5.052rem'
  		},
  		padding: {
  			'1rem': '1rem',
  			'2rem': '2rem',
  			'3rem': '3rem',
  			'4rem': '4rem',
  			'5rem': '5rem',
  			'6rem': '6rem',
  			'7rem': '7rem',
  			'8rem': '8rem'
  		},
  		screens: {
  			'scroll-smooth': {
  				raw: 'scroll-behavior: smooth'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
