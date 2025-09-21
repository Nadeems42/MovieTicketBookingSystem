/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F84565",
        "primary-dull": "#D63854",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/backgroundImage.png')",
      },
    },
  },
  plugins: [],
}
