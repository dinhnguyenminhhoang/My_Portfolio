/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // dùng Google Font Inter chẳng hạn
      },
      colors: {
        primary: "#6366f1", // tím indigo
        secondary: "#f43f5e", // đỏ hồng
      },
    },
  },
  plugins: [],
};
