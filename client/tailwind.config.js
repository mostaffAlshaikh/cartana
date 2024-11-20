/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
  	extend: {
  		keyframes: {
  			bounceHorizantally: {
  				'0%, 100%': {
  					transform: 'translateX(0)'
  				},
  				'50%': {
  					transform: 'translateX(4px)'
  				}
  			}
  		},
  		animation: {
  			bounceHorizantally: 'bounceHorizantally 1s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  		}
  	},
  	fontFamily: {
  		cairo: ['Cairo', 'sans-serif']
  	},
	  screens: {
		'xss': {'min': '319px'},
		'xs': {'min': '374px'},
		'x': {'min': '460px'},
		'sm': {'min': '640px'},
		// => @media (min-width: 640px and max-width: 767px) { ... }
  
		'md': {'min': '768px'},
		// => @media (min-width: 768px and max-width: 1023px) { ... }
  
		'lg': {'min': '1024px',},
		// => @media (min-width: 1024px and max-width: 1279px) { ... }
  
		'xl': {'min': '1280px'},
		// => @media (min-width: 1280px and max-width: 1535px) { ... }
  
		'2xl': {'min': '1536px'},
		// => @media (min-width: 1536px) { ... }
		'3xl': {'min': '1708px'},
	  },
  },
  plugins: [require("tailwindcss-animate")],
}