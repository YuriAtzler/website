import { NavBar } from "@/components/navbar";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="relative font-playfair">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
