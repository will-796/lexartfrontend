import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    data: {
      error: 'error~="true"',
    },
    extend: {
      screens: {
        'sm': '600px',
      },
      fontSize: {
        xs: ['0.625rem', '100%'], // 10px
        sm: ['0.75rem', '100%'], // 12px
        base: ['0.875rem', '100%'], // 14px
        normal: ['1rem', '100%'], // 16px
        lg: ['1.125rem', '110%'], // 18px
        icon: ['1.375rem', '100%'], // 22px
        'icon-lg': ['1.5rem', '100%'], // 24px
        'icon-xl': ['2rem', '100%'], // 32px
        h1: ['3rem', '110%'], // 48px
        h2: ['2rem', '110%'], // 32px
        h3: ['1.5rem', '110%'], // 24px
        h4: ['1.125rem', '110%'] // 18px
      },
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        alert: 'rgb(var(--alert)/<alpha-value>)',
        primary: 'rgb(var(--orange-geo)/<alpha-value>)',
        secondary: 'rgb(var(--blue-geo)/<alpha-value>)',
        background: 'rgb(var(--background)/<alpha-value>)',
        foreground: 'rgb(var(--foreground)/<alpha-value>)',
        card: 'rgb(var(--card)/<alpha-value>)',
        coolgray: 'rgb(var(--cool-gray-10)/<alpha-value>)',
        coolgray20: 'rgb(var(--cool-gray-20)/<alpha-value>)',
        coolgray30: 'rgb(var(--cool-gray-30)/<alpha-value>)',
        coolgray70: 'rgb(var(--cool-gray-70)/<alpha-value>)',
        muted: {
          DEFAULT: 'rgb(var(--muted)/<alpha-value>)',
          foreground: 'rgb(var(--muted-foreground)/<alpha-value>)',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive)/<alpha-value>)',
          foreground: 'rgb(var(--destructive-foreground)/<alpha-value>)'
        },
      }
    },
  },
  plugins: [],
}
