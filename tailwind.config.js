/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    },
  },
  plugins: [],
};
