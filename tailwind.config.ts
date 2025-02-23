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
      colors: {
        primary: "#4CAF50", // Verde Folha (Principal)
        secondary: "#81C784", // Verde Claro (Secundário)
        accent: "#2F6F47", // Verde Musgo (Complementar)
        background: "#212121", // Fundo Escuro (Para contraste)
        surface: "#FFFFFF", // Superfície (Plano de fundo de conteúdo)
        text: "#FFFFFF", // Texto (Preto puro para alto contraste)
        textPrimary: "#4CAF50", // Texto Principal (Branco puro para alto contraste)
        textSecondary: "#616161", // Texto Secundário (Cinza escuro para textos menores)
        error: "#D32F2F", // Cor de erro (vermelho mais forte)
        warning: "#FF9800", // Cor de aviso (laranja)
        info: "#1976D2", // Cor informativa (azul)
        success: "#388E3C", // Cor de sucesso (verde escuro)
      },
      fontFamily: {
        playfair: "var(--font-playfair)",
      },
    },
  },
} satisfies Config;
