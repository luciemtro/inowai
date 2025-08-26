/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#DF0067", // fond bouton
          hover: "#B80052", // fond hover (plus foncé)
          foreground: "#FFFFFF", // texte du bouton
        },
        background: { DEFAULT: "#F4F4F4" },
        foreground: { DEFAULT: "#131313" },
        black: "#000000",
      },
      fontFamily: {
        times: ["Times New Roman", "serif"],
      },
      fontSize: {
        h3: [
          "3.125rem", // 50px
          {
            lineHeight: "3.125rem", // 50px
            letterSpacing: "-0.125rem", // -2px (équiv. en rem)
            fontWeight: "400", // Regular
          },
        ],
        h5: [
          "1rem", // 16px
          {
            lineHeight: "1.5rem", // ~24px (équivalent "auto" de Figma sur 16px)
            letterSpacing: "0.1em", // 10%
            fontWeight: "700", // Bold
          },
        ],
        p1: [
          "1.125rem", // 18px
          {
            lineHeight: "1.5625rem", // 25px
            letterSpacing: "0", // 0px
            fontWeight: "400", // Regular
          },
        ],
        p2: [
          "1rem", // 16px
          {
            lineHeight: "1.5rem", // auto ≈ 24px
            letterSpacing: "0",
            fontWeight: "600", // SemiBold
          },
        ],
        p3: [
          "0.875rem", // 14px
          {
            lineHeight: "1.25rem", // auto ≈ 20px
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        p4: [
          "0.875rem", // 14px
          {
            lineHeight: "1.25rem", // auto ≈ 20px
            letterSpacing: "0",
            fontWeight: "600", // SemiBold
          },
        ],
        label2: [
          "0.875rem", // 14px
          {
            lineHeight: "1.25rem", // 20px
            letterSpacing: "0.1em", // 10%
            fontWeight: "600", // SemiBold
          },
        ],
        button4: [
          "0.875rem", // 14px
          {
            lineHeight: "1.25rem", // ~20px (auto)
            letterSpacing: "0",
            fontWeight: "400", // Regular
          },
        ],
      },
    },
  },
  plugins: [],
};
