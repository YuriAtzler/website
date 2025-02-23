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
      },
    },
  },
} satisfies Config;
