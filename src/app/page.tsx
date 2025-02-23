import { ContainerPage } from "@/components/container-page";
import { AboutSection } from "@/components/templates/about-section";
import { CardsSection } from "@/components/templates/cards-section";
import { CarouselSection } from "@/components/templates/carousel-section";
import { HeroSection } from "@/components/templates/hero-section";
import { MenuSection } from "@/components/templates/menu-section";

import mock from "@/mock/mock.json";
import type { HeroSectionType } from "@/types/templates/hero-section.type";

export default function Home() {
  return (
    <main>
      <ContainerPage>
        <HeroSection {...(mock[0] as HeroSectionType)} />
        <AboutSection />
        <CardsSection />
        <MenuSection />
        <CarouselSection />
      </ContainerPage>
    </main>
  );
}
