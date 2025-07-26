/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/02.jpg')",
      },
    },
  },
  plugins: [],
};
