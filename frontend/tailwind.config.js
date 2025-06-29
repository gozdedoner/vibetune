/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D", // Ana arka plan (siyah tonlu)
        primary: "#9333EA", // Ana vurgu rengi (mor)
        accentPink: "#E879F9", // İkincil renk (pembe vurgu)
        accentYellow: "#FACC15", // Sarı vurgu
        accentGreen: "#4ADE80", // Yeşil vurgu
        accentBlue: "#60A5FA", // Mavi vurgu
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"], // 👈 Yeni eklenen font ailesi
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
