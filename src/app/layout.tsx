import { NavBar } from "@/components/navbar";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import mock from "@/mock/mock.json";
import { NavBarStyle } from "@/types/components/nav-bar.type";
import { Providers } from "./providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Providers>
          <NavBar
            style={mock.navbar_config.style as NavBarStyle}
            links={mock.content.map((content) => content.navbar_name)}
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
