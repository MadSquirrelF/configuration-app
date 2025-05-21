import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
     addCommonColors: true,
      themes: {
        dark: {
          colors: {
            textcolor: "#fff",
            textlink: "#50a1ff",
            textlinkhover: "#3181dd",
            background: "#141E28",
            card: "#182430",
            border: "rgba(255,255,255,.12)",
         primary: {
              foreground: "#FFFFFF",
              border: "rgba(0, 0, 0, 0.12)",
              textcolor: "#999",
              textlink: "#21AEC0",        
              textlinkhover: "#1A8B8E",     
              DEFAULT: "#21AEC0",           
          },
          },
        },
      },
  })],
}

module.exports = config;