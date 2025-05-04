
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				egyptian: {
					sand: '#E6CCAB',
					gold: '#FFD700',
					red: '#ea384c',
					black: '#000000e6',
					papyrus: '#F5ECD9'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { textShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFD700' },
					'50%': { textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700' }
				},
				'devour': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
					'100%': { transform: 'scale(1)' }
				},
				'fadeIn': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-5px)' },
					'50%': { transform: 'translateX(5px)' },
					'75%': { transform: 'translateX(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'devour': 'devour 0.5s ease-in-out',
				'fadeIn': 'fadeIn 1s ease-in-out',
				'shake': 'shake 0.5s ease-in-out'
			},
			fontFamily: {
				egyptian: ['Papyrus', 'serif'],
			},
			backgroundImage: {
				'sand-pattern': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect width=\"100\" height=\"100\" fill=\"%23E6CCAB\" opacity=\"0.3\"/><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"30\" cy=\"10\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"50\" cy=\"10\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"70\" cy=\"10\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"90\" cy=\"10\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"20\" cy=\"20\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"40\" cy=\"20\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"60\" cy=\"20\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"80\" cy=\"20\" r=\"1\" fill=\"%23C4AC88\"/><circle cx=\"10\" cy=\"30\" r=\"1\" fill=\"%23C4AC88\"/></svg>')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
