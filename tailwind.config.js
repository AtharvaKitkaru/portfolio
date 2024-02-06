/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},

      fontFamily: {
        cubano: "cubano,sans-serif",
        sofia: "sofia-pro,sans-serif",
        poppins: "poppins,sans-serif",
      },
    },
  },
  plugins: [],
};
