/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#17245e",
        secondary: "#fbbf24",
        gray: "#383A42",
        grayer: "#1F2023",
        tgray: "#D2D2D2",
        dark: "#131415",
        yellow: "#FFC700",
      },
      fontFamily: {
        cervino: ["Cervino", "sans-serif"],
        roboto: ['"Roboto"', "serif"],
      },
    },
  },
  plugins: [],
};
