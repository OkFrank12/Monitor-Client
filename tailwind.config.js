/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: { max: "1300px" },
        tablet: { max: "1000px" },
        phone: { max: "600px" },
      },
    },
  },
  plugins: [],
};
