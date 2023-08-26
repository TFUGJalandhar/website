/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#4285F4",
        },
        secondary: {
          default: "#333333",
          light: "#4D4D4D",
          extraLight: "#E7E6DO",
        },
        gray: {
          default: "#F2F2F2",
          medium: "#E6E6E6",
          dark: "#CCCCCC",
          black: "#999999",
        },
        black: { default: "#1A1A1A" },
        warning: { default: "#F4B400" },
        danger: { default: "#DB4437" },
        success: { default: "#0F9D58" },
      },
    },
  },
  plugins: [],
};
