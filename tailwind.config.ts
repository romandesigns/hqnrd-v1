import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f2fbff",
          100: "#bddef0",
          200: "#8dc2e0",
          300: "#62a7d1",
          400: "#3c8cc2",
          500: "#1a73b2",
          600: "#136bad",
          700: "#0b5fa3",
          800: "#045194",
          900: "#004280",
        },
      },
    },
  },
  plugins: [],
};
export default config;
