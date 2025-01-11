/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#061928", // Background gradient start
        "darker-blue": "#020d17", // Background gradient end
        "card-bg": "#0e2236", // Card background
        "blue-highlight": "#4ade80", // Highlight text/icon color
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
