import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./generics/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor:{
        "dark":"var(--slate900)",
        "medium":"var(--slate500)",
        "error":"var(--red)",
        "light":"var(--slate300)",
        "lime":"var(--limegreen)"
      },
      backgroundColor:{
        "lime":"var(--limegreen)",
        "medium-dark":"var(--slate800)",
        "dark":"var(--slate900)",
        "error":"var(--red)"
      },
      boxShadow:{
        card:"4px 2px 4px var(--slate100), 2px 3px 5px var(--slate500)"
      },
      borderColor:{
        dark:"var(--slate900)",
        medium:"var(--slate500)",
        lime:"var(--limegreen)",
        light:'var(--slate100)',
        error:"var(--red)"
      }
    },
  },
  plugins: [],
};
export default config;
