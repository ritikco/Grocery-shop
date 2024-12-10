/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollbar: ['none'],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
