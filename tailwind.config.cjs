module.exports = {
  plugins: [require("@tailwindcss/aspect-ratio")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#282828",
        red: "#FF0000",
        gray: "#AAAAAA",
      },
      fontSize: {
        30: ["30px", "100%"],
        24_32: ["24px", "32px"],
        24: ["24px", "100%"],
        20_28: ["20px", "28px"],
        20: ["20px", "100%"],
        19_28: ["19px", "28px"],
        18_28: ["18px", "28px"],
        18: ["18px", "100%"],
        17_28: ["17px", "28px"],
        16_24: ["16px", "24px"],
        16: ["16px", "100%"],
        15: ["15px", "100%"],
        14_24: ["14px", "24px"],
        14_22: ["14px", "22px"],
        14_19: ["14px", "19px"],
        14: ["14px", "100%"],
        12_18: ["12px", "18px"],
        12: ["12px", "100%"],
        10_14: ["10px", "14px"],
        10: ["10px", "100%"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "infinite-slide": "infiniteSlide 8s linear infinite",
      },
      keyframes: {
        infiniteSlide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        loaderSpinnerOver: {
          "0%": {
            opacity: "1",
            transform: "translate(0, 0)",
          },
          "49.99%": {
            opacity: "1",
            transform: "translate(40px, 0)",
          },
          "50%": {
            opacity: "0",
            transform: "translate(40px, 0)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(0, 0)",
          },
        },
        loaderSpinner: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(40px, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
};
