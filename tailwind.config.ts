import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E7D32',
          'green-dark': '#1B5E20',
          'green-light': '#A5D6A7',
          red: '#C62828',
          white: '#FFFFFF',
          'gray-light': '#F5F5F5',
          black: '#111111',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

export default config;
