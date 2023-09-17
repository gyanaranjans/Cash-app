import type { Config } from 'tailwindcss'
// @ts-ignore
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/rays.svg')",
        'payments-pattern': "url('./assets/images/payments.svg')",
        'banking-pattern': "url('./assets/images/banking.svg')",
        'boost-pattern': "url('./assets/images/boost.svg')",
        'investing-pattern': "url('./assets/images/investing.svg')",
      },
      colors: {
        'cash-app-green': '#00D54B',
        'grey': '#b6b6b6',
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        border: 'border 4s ease infinite',
      },
      keyframes: {
        slowfade: { //@ts-ignore
          from: { opacity: 0 }, //@ts-ignore
          to: { opacity: 1 },
        },
        slideup: {//@ts-ignore
          from: { opacity: 0, transform: 'translateY(25%)' },//@ts-ignore
          to: { opacity: 1, transform: 'none' },//@ts-ignore
        },
        slidedown: {//@ts-ignore
          from: { opacity: 0, transform: 'translateY(-25%)' },//@ts-ignore
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {//@ts-ignore
          from: { opacity: 0, transform: 'translateX(-20px)' },//@ts-ignore
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {//@ts-ignore
          from: { opacity: 0, transform: 'translateX(20px)' },//@ts-ignore
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  
  plugins: [],
}
export default config
