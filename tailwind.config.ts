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
        'gradient-blue': '#3b82f6',
        'gradient-green': '#10b981',
        'gradient-purple': '#8b5cf6',
        'metal-dark': '#ffffff',
        'metal-light': '#f9f9f9',
        'metal-accent': '#f0f0f0',
        background: '#ffffff',
        primary: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3b82f6, #10b981, #8b5cf6)',
        'gradient-secondary': 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
        'metal-texture': 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f5f5f5 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        serif: ['var(--font-noto-serif-jp)', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config