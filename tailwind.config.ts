import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "rgb(var(--background))"
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground))"
        },
        primary: {
          DEFAULT: "rgb(var(--primary))"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
export default config;
