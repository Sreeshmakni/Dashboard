/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#6063F5",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(76, 84, 226, 0.15)",
      }
    },
  },
  plugins: [],
};
