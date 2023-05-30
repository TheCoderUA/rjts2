/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "great-vibes": "Great Vibes",
        "dancing-script": "Dancing Script",
        satisfy: "Satisfy",
        "shadows-into-light": "Shadows Into Light",
      },
      width: {
        "w-90%": "width: 90%",
      },
    },
  },
  plugins: [],
};
