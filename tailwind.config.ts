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
        primary: '#1B2B4B',
        secondary: '#8B1A1A',
        accent: '#D4AF37',
        background: '#FFFFFF',
        surface: '#F5F6F8',
        foreground: '#1A1A1A',
        muted: '#6B7280',
        border: '#E5E7EB',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.svg')",
      },
    },
  },
  plugins: [],
}

export default config
