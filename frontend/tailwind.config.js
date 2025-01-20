/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#131313",
        background: "#202329",
        primary: "#3f4654",
        primarySecond: "#6B8AFD",
        secondary: "#30E0A1",
        tertiary: "#EB7050",
      },
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
};
