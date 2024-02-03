/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        // "circle-aura": "url('../portfolio/public/blob.svg')",
      },
      fontFamily: {
        cubano: "cubano,sans-serif",
        sofia: "sofia-pro,sans-serif",
        poppins: "poppins,sans-serif",
      },
    },
  },
  plugins: [],
};
