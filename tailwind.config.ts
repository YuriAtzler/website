import type { Config } from "tailwindcss";
import tailwindcssRadixColors from "tailwindcss-radix-colors";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [tailwindcssRadixColors],
  theme: {
    extend: {
      fontFamily: {
        playfair: "var(--font-playfair)",
        inter: "var(--font-inter)",
      },
      animation: {
        "pulse-color": "pulseColor 1.5s infinite",
      },
      keyframes: {
        pulseColor: {
          "0%": {
            transform: "scale(0.6)",
            boxShadow: "0 0 0 0 rgba(245, 245, 245, 1)",
          },

          "70%": {
            transform: "scale(0.8)",
            boxShadow: "0 0 0 60px rgba(255,255, 255, 0)",
          },

          "100%": {
            transform: "scale(0.6)",
          },
        },
      },
    },
  },
} satisfies Config;
