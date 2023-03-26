/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Strongcyan: "hsl(172, 67%, 45%)",
        Verydarkcyan: "hsl(183, 100%, 15%)",
        Darkgrayishcyan: "hsl(186, 14%, 43%)",
        Grayishcyan: "hsl(184, 14%, 56%)",
        Lightgrayishcyan: "hsl(185, 41%, 84%)",
        Verylightgrayishcyan: "hsl(189, 41%, 97%)",
        White: "hsl(0, 0%, 100%)",
        ButtonColor: "hsl(183, 81%, 24%)",
      },
      fontFamily: ["Space Mono", "monospace"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
