module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f3f4f6", 200: "#e5e7eb", 300: "#dddddd", 400: "#b2b2b2" },
        white: { A700: "#ffffff" },
        blue_gray: { 700: "#4b5563", 900: "#1f2937" },
        blue: { A700: "#2563eb" },
        amber: { 600: "#eab308" },
        green: { 700: "#16a34a" },
        red: { 700: "#dc2626" },
      },
      boxShadow: { xs: "0px 0px 1px 0px #000000" },
      fontFamily: { roboto: "Roboto", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
