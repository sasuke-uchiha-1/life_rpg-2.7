/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Courier Prime', 'Prestige Elite', 'Nimbus Mono', 'Courier New', 'monospace'],
        'sans': ['Courier Prime', 'Prestige Elite', 'Nimbus Mono', 'Courier New', 'monospace'],
        'headline': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
