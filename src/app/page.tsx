import { AboutSection } from "@/components/templates/about-section";
import { CardsSection } from "@/components/templates/cards-section";
import { CarouselSection } from "@/components/templates/carousel-section";
import { HeroSection } from "@/components/templates/hero-section";
import { MenuSection } from "@/components/templates/menu-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CardsSection />
      <MenuSection />
      <CarouselSection />
    </main>
  );
}
