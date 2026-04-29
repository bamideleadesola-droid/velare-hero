import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        velare: {
          background: "#F8F8F8",
          text: "#0F0F0F",
          muted: "#6F6F6F",
          accent: "#C6A87D",
          button: "#111111",
          buttonHover: "#222222",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "velare-image": "0 32px 80px rgba(15, 15, 15, 0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;
