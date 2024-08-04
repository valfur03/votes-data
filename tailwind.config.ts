import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "national-assembly-blue":
          "url(/assets/image/other/election-card/national-assembly-blue.png)",
        "president-blue":
          "url(/assets/image/other/election-card/president-blue.png)",
        "town-hall-blue":
          "url(/assets/image/other/election-card/town-hall-blue.png)",
      },
      colors: {
        "blue-france": "#000091",
      },
    },
  },
  plugins: [],
};
export default config;
