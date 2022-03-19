module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#f00000",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
    },
    container: {
      center: true,
      screens: {
        lg: "1170px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
  },
  plugins: [],
};
