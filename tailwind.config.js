/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        branco: "#ffffff",
        branco2: "#F4F4F4",
        branco3: "#FAFAFA",
        branco4: "#F6F6F6",
        brancoBackground: "#f7fafd",
        azulMuitoJogo: "#1d0b38",
        roxoMuitoJogo: "#4B1248",
        cinza1: "#D9D9D9",
        cinza2: "#9197B3",
        cinza3: "#838383",
        cinza4: "#585858",
        cinza5: "#E7E7E7",
      },
    },
  },
  plugins: [],
};
