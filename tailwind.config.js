/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        zutto: {
          // Solid token colors — use these directly
          primary: 'var(--zutto-green-primary)',
          accent: 'var(--zutto-green-accent)',
          dark: 'var(--zutto-green-dark)',
          'green-light': 'var(--zutto-green-light)',
          amber: 'var(--zutto-amber)',
          'amber-light': 'var(--zutto-amber-light)',
          teal: 'var(--zutto-teal)',
          'teal-light': 'var(--zutto-teal-light)',
          bg: 'var(--zutto-bg)',
          'bg-alt': 'var(--zutto-bg-alt)',
          card: 'var(--zutto-card)',
          border: 'var(--zutto-border)',
          'border-strong': 'var(--zutto-border-strong)',
          text: 'var(--zutto-text)',
          muted: 'var(--zutto-text-muted)',
          subtle: 'var(--zutto-text-subtle)',
          panel: 'var(--zutto-panel-bg)',
          'panel-surface': 'var(--zutto-panel-surface)',
          'panel-border': 'var(--zutto-panel-border)',
        },
      },
    },
  },
  plugins: [],
};
