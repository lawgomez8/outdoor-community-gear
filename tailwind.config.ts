
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
				// Brand colors
				forest: {
					50: '#f3f8f5',
					100: '#e0ede5',
					200: '#c2dcd0',
					300: '#9ac3b1',
					400: '#6ca48e',
					500: '#4d8d74',
					600: '#3b725f',
					700: '#315b4d',
					800: '#2a4a40',
					900: '#253d36',
				},
				mountain: {
					50: '#f2f8fd',
					100: '#e2eefa',
					200: '#bfdaf4',
					300: '#86bced',
					400: '#479be3',
					500: '#2681cf',
					600: '#1966af',
					700: '#17548f',
					800: '#174876',
					900: '#193d63',
				},
				stone: {
					50: '#f8f8f8',
					100: '#f0f0f0',
					200: '#e4e4e4',
					300: '#d1d1d1',
					400: '#a8a8a8',
					500: '#8d8d8d',
					600: '#6d6d6d',
					700: '#5f5f5f',
					800: '#454545',
					900: '#3d3d3d',
				},
				clay: {
					50: '#fbf7f4',
					100: '#f5ebe3',
					200: '#ead5c7',
					300: '#ddbaa0',
					400: '#cfa183',
					500: '#c18564',
					600: '#b87155',
					700: '#9b5a44',
					800: '#7f4a3a',
					900: '#683e32',
				},
				sky: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' },
				},
				'image-glow': {
					'0%': { 
						opacity: '0', 
						'background-size': '100% 100%',
						'background-position': '0% 0%',
					},
					'10%': { 
						opacity: '1',
					},
					'100%': { 
						opacity: '0',
						'background-size': '150% 150%',
						'background-position': '100% 100%',
					},
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'text-reveal': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'image-glow': 'image-glow 4s ease-out infinite',
				'gentle-float': 'gentle-float 3s ease-in-out infinite',
				'text-reveal': 'text-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
