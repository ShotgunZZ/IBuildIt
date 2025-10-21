import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // IBuildIt brand colors - matching the new logo
        'ibuildit-navy': '#11161A',
        'ibuildit-teal': '#2B7A7B',
        'ibuildit-teal-light': '#3B9A9B',
        'ibuildit-orange': '#F59E0B',
        'ibuildit-orange-dark': '#D97706',
        'ibuildit-blue': '#0071CE',
        'ibuildit-gray': '#4A5568',
        'ibuildit-light': '#F7FAFC',
      },
    },
  },
  plugins: [],
};
export default config;
