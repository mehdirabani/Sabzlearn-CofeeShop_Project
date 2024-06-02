/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      letterSpacing: {
        tightest: "-0.065em",
      },
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        shadowNormal: "0 1px 10px rgba(0,0,0,5%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana medium",
        DanaBold: "Dana bold",
        Morabba: "Morabba",
        MorabbaMedium: "Morabba medium",
        MorabbaBold: "Morabba bold",
      },
    },
  },
  plugins: [],
};
