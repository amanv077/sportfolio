/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite",
        "scroll-reverse": "scroll-reverse 10s linear infinite",
      },
      colors: {
        "dark-blue": "#061928",
        "darker-blue": "#020d17",
        "card-bg": "#0e2236",
        "blue-highlight": "#4ade80",
      },
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      textShadow: {
        DEFAULT: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 25px #004080",
      },
    },
  },
  plugins: [import("tailwindcss-filters"), import("tailwindcss-textshadow")],
};
