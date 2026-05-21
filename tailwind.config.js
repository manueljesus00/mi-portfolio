/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: 'rgb(var(--neon) / <alpha-value>)',
        dark: {
          DEFAULT: 'rgb(var(--dark-bg) / <alpha-value>)',
          card: 'rgb(var(--dark-card) / <alpha-value>)',
          border: 'rgb(var(--dark-border) / <alpha-value>)',
        },
      },
      boxShadow: {
        neon: '0 0 8px rgb(var(--neon) / 0.4), 0 0 20px rgb(var(--neon) / 0.15)',
        'neon-lg': '0 0 15px rgb(var(--neon) / 0.5), 0 0 40px rgb(var(--neon) / 0.2)',
      },
    },
  },
  plugins: [],
}

