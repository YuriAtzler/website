
import { ContainerPage } from "@/components/container-page";
import { AboutSection } from "@/components/templates/about-section";
import { BudgetSection } from "@/components/templates/budget-section";
import { CardsSection } from "@/components/templates/cards-section";
import { CarouselSection } from "@/components/templates/carousel-section";
import { HeroSection } from "@/components/templates/hero-section";
import { MenuSection } from "@/components/templates/menu-section";

import mock from "@/mock/mock.json";
import { TemplateType } from "@/types/common.type";

export default async function Home() {

  return (
    <ContainerPage>
      <HeroSection {...(mock.content[0] as TemplateType)} />
      <AboutSection {...(mock.content[1] as TemplateType)} />
      <CardsSection />
      <MenuSection />
      <CarouselSection />
      <BudgetSection />
    </ContainerPage>
  );
}
