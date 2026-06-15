import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        eskan: {
          ivory: '#E8E2D8',
          cream: '#D9D2C8',
          warm: '#C4BCB0',
          sand: '#7A736A',
          stone: '#5C5650',
          charcoal: '#2A2622',
          base: '#131110',
          elevated: '#1C1916',
          surface: '#171513',
          panel: '#211E1B',
          bronze: '#8A7D6B',
          muted: '#8A8379',
          ink: '#E8E2D8',
        },
        gold: {
          DEFAULT: 'rgb(168 144 104 / <alpha-value>)',
          light: 'rgb(191 168 128 / <alpha-value>)',
          deep: 'rgb(139 117 85 / <alpha-value>)',
          muted: 'rgb(181 162 128 / <alpha-value>)',
          champagne: 'rgb(201 184 148 / <alpha-value>)',
          brass: 'rgb(154 132 96 / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Vazirmatn', 'Georgia', 'serif'],
        sans: ['Inter', 'Vazirmatn', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Vazirmatn', 'Georgia', 'serif'],
      },
      borderRadius: {
        luxury: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        editorial: '90rem',
      },
      letterSpacing: {
        luxury: '0.14em',
        editorial: '0.02em',
      },
      boxShadow: {
        luxury: '0 12px 48px -16px rgba(0, 0, 0, 0.55)',
        card: '0 4px 32px -8px rgba(0, 0, 0, 0.4)',
        gold: '0 4px 24px -4px rgba(176, 149, 107, 0.35)',
        'gold-glow': '0 8px 40px -8px rgba(176, 149, 107, 0.25)',
        elevate: '0 20px 60px -20px rgba(0, 0, 0, 0.5)',
      },
      transitionDuration: {
        luxury: '500ms',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'stone-grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [typography],
};
