import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			primary: {
    				'50': '#f0f7ff',
    				'100': '#e0effe',
    				'200': '#bae2fd',
    				'300': '#7dcbfb',
    				'400': '#36aef6',
    				'500': '#0c96e6',
    				'600': '#0074c2',
    				'700': '#005c9e',
    				'800': '#004d84',
    				'900': '#003A64',
    				'950': '#002347'
    			},
    			secondary: {
    				'50': '#f0fdfa',
    				'100': '#ccfbef',
    				'200': '#99f6e4',
    				'300': '#5eead4',
    				'400': '#2dd4bf',
    				'500': '#14b8a6',
    				'600': '#0d9488',
    				'700': '#0f766e',
    				'800': '#115e59',
    				'900': '#134e4a',
    				'950': '#042f2e'
    			},
    			accent: {
    				'50': '#fefce8',
    				'100': '#fef9c3',
    				'200': '#fef08a',
    				'300': '#fde047',
    				'400': '#facc15',
    				'500': '#eab308',
    				'600': '#ca8a04',
    				'700': '#a16207',
    				'800': '#854d0e',
    				'900': '#713f12',
    				'950': '#422006'
    			},
    			success: {
    				'50': '#f0fdf4',
    				'100': '#dcfce7',
    				'200': '#bbf7d0',
    				'300': '#86efac',
    				'400': '#4ade80',
    				'500': '#22c55e',
    				'600': '#16a34a',
    				'700': '#15803d',
    				'800': '#166534',
    				'900': '#14532d',
    				'950': '#052e16'
    			},
    			danger: {
    				'50': '#fef2f2',
    				'100': '#fee2e2',
    				'200': '#fecaca',
    				'300': '#fca5a5',
    				'400': '#f87171',
    				'500': '#ef4444',
    				'600': '#dc2626',
    				'700': '#b91c1c',
    				'800': '#991b1b',
    				'900': '#7f1d1d',
    				'950': '#450a0a'
    			},
    			neutral: {
    				'50': '#f9fafb',
    				'100': '#f3f4f6',
    				'200': '#e5e7eb',
    				'300': '#d1d5db',
    				'400': '#9ca3af',
    				'500': '#6b7280',
    				'600': '#4b5563',
    				'700': '#374151',
    				'800': '#1f2937',
    				'900': '#111827',
    				'950': '#030712'
    			},
    			dark: {
    				'100': '#1e1e1e',
    				'200': '#181818',
    				'300': '#151515',
    				'400': '#121212',
    				'500': '#0f0f0f',
    				'600': '#0c0c0c',
    				'700': '#090909',
    				'800': '#060606',
    				'900': '#030303'
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
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
