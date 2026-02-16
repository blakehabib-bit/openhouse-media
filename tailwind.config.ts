import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2E4A",
          50: "#E8ECF1",
          100: "#D1D9E3",
          200: "#A3B3C7",
          300: "#758DAB",
          400: "#48678F",
          500: "#1B2E4A",
          600: "#16253B",
          700: "#111C2D",
          800: "#0B121E",
          900: "#06090F",
        },
        slate: {
          DEFAULT: "#4A5568",
        },
        amber: {
          DEFAULT: "#D4952A",
          50: "#FBF0E0",
          100: "#F6E1C2",
          200: "#EEC385",
          300: "#E5A548",
          400: "#D4952A",
          500: "#D4952A",
          600: "#AA7722",
          700: "#7F5919",
          800: "#553C11",
          900: "#2A1E08",
        },
        cloud: "#F7F8FA",
      },
      fontFamily: {
        heading: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        body: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      aspectRatio: {
        video: "16 / 9",
      },
    },
  },
  plugins: [],
};

export default config;
