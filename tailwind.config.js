const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#323232",
        "dim-black": "#333333",
        cyan: "#00D4A3",
        pink: "#FE31C1",
        orange: "#FE9926",
      },
      fontFamily: {
        primary: ["Articulat CF"],
        secondary: ["Inter"],
      },
      transitionDuration: {
        primary: "150ms",
      },
      backgroundImage: {
        "line-white":
          "linear-gradient(270deg, #d9d9d9 0%, rgba(217, 217, 217, 0) 100%);",
        "line-cyan":
          "linear-gradient(270deg, #00D4A3 0%, rgba(217, 217, 217, 0) 100%);",
        brand: "linear-gradient(89deg, #fe31c1 7.16%, #fe9926 79.03%);",
      },
    },
    screens: {
      "4sm": "361px",
      "3sm": "375px",
      "2sm": "426px",
      "1sm": "576px",
      sm: "640px",
      md: "768px",
      "2md": "800px",
      "3md": "801px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1280px",
      "3xl": "1345px",
      "4xl": "1536px",
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("tailwindcss-text-fill"),
  ],
};
