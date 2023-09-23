/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#1e599d",
        "background-1": "gray",
      },
      keyframes: {
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "2ch" },
          "25%, 30%": { width: "3ch" },
          "35%, 40%": { width: "4ch" },
          "45%, 50%": { width: "5ch" },
          "55%, 60%": { width: "6ch" },
          "65%, 70%": { width: "7ch" },
          "75%, 80%": { width: "8ch" },
          "85%, 100%": { width: "9ch" },
        },
        typing: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typingAnimation: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s infinite alternate-reverse both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
    },
  },
  plugins: [],
};
