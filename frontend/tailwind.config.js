/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
      colors: {
        primary:{
          1: "#c1f6ed",
          2: "#2eaf7d",
        },
        secondary:{
          1: "#449342",
          2: "#3fd0c9",
        },
        accent: "#02353c",
      },
      gridTemplateColumns: {
        footer: "minmax(300px, 350px) 1fr",
      },
    },
  },
  plugins: [],
}

