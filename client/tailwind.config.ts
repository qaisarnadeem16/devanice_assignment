import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Example custom colors
        primary: "#142D52",
        secondary: "#6A3AEE",
        bg: "#F8F8F8",
        textColor: "#CFCFCF",
        green: "#06BF97",
        gray: "#9B9B9B",
        background: "#190055",
      },
    },
  },
  plugins: [],
};
export default config;
