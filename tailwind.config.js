/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#3556ab",
        primaryBlue: "#071D55",
        secondaryBlue: "#123EB1",
        lightGreen: "#9EB031",
        primaryGreen: "#CDE53D",
        secondaryGreen: "#49C25D",
        tertiaryGreen: "#53DA69",
        lightRed: "#AB3535",
        primaryRed: "#720D0D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
