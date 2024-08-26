import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '4/4': '4 / 4',
        '16/9': '16 / 9',
        'og': '1.91 / 1'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "375px",
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
        secondary: {
          50: "#f2f7ff",
          100: "#bdcef0",
          200: "#8da8e0",
          300: "#6284d1",
          400: "#3c62c2",
          500: "#1a43b2",
          600: "#133aad",
          700: "#0b2fa3",
          800: "#042494",
          900: "#001a80",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
