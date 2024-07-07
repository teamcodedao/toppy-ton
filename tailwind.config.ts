import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      colors: {
        primary: '#1262DB',
      },
      fontFamily: {
        guerrilla: 'var(--guerrilla-font)',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
