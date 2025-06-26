import { heroui } from '@heroui/theme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '1px 1px 0 rgba(30, 30, 36, 0.4)',
        'card-hover': '2px 2px 0 rgba(30, 30, 36, 0.4)',
        'card-lg': '3px 3px 0 rgba(30, 30, 36, 0.4)',
      },
      translate: {
        'card-hover': '-1px, -1px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          extend: 'light',
          colors: {
            black: '#1E1E24',
            background: '#5C998C',
            foreground: '#FFFCEB',
            layout: {
              background: '#96C0B7',
              foreground: 'black',
            },
            content: {
              background: '#96C0B7',
              foreground: 'black',
            },
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#FFFCEB',
              foreground: 'white',
            },
            secondary: {
              DEFAULT: '#FEF6C9',
            },
            focus: '#F182F6',
          },
        },
      },
    }),
  ],
}
