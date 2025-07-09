import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main project color palette
        bisque: {
          50: '#fefbf6',
          100: '#fdf7ed',
          200: '#fce8c5', // Main color from project principles
          300: '#fad99d',
          400: '#f8ca75',
          500: '#f6bb4d',
          600: '#f4ac25',
          700: '#e89a0c',
          800: '#b67809',
          900: '#845607',
        },
        // Alternative color names for the main color
        main: {
          DEFAULT: '#fce8c5',
          light: '#fdf7ed',
          dark: '#fad99d',
        },
        // Additional color variations
        cream: '#fce8c5', // Alias for the main color
        warm: {
          50: '#fefbf6',
          100: '#fdf7ed',
          200: '#fce8c5',
          300: '#fad99d',
          400: '#f8ca75',
          500: '#f6bb4d',
          600: '#f4ac25',
          700: '#e89a0c',
          800: '#b67809',
          900: '#845607',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config 