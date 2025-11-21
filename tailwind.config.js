/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: '#FFFFDD',
        limeGreen: '#D2DE32',
        mutedGreen: '#A2C579',
        darkSlateGray: '#1A1A1A',
      },
    },
  },
  plugins: [],
};
