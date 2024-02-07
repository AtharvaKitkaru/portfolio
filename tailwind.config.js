/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#635bff",

        "primary-content": "#ffffff",

        "primary-dark": "#3228ff",

        "primary-light": "#938eff",

        secondary: "#5bffb5",

        "secondary-content": "#005b32",

        "secondary-dark": "#28ff9e",

        "secondary-light": "#8effcc",

        background: "#efeff0",

        foreground: "#fbfbfb",

        border: "#dedee0",

        copy: "#252527",

        "copy-light": "#646369",

        "copy-lighter": "#8a898f",

        "dark-background": "#19191a",

        "dark-foreground": "#252527",

        "dark-border": "#3e3e41",

        "dark-copy": "#fbfbfb",

        "dark-copy-light": "#d8d8da",

        "dark-copy-lighter": "#a4a4a8",

        success: "#5bff5b",

        warning: "#ffff5b",

        error: "#ff5b5b",

        "success-content": "#005b00",

        "warning-content": "#5b5b00",

        "error-content": "#5b0000",
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
