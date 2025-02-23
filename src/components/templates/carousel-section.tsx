"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/utils/cn";

export function CarouselSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  const items = [
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const loopItems = [...items, ...items.slice(0, 2)];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Atualiza no carregamento inicial
  }, [emblaApi, onSelect]);

  return (
    <section
      id="carousel"
      className="w-full py-24 flex justify-center"
      aria-label="Carrosel"
    >
      <div className="container w-full flex flex-col gap-6">
        <h1 className="text-xl">Carrosel de imagens</h1>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {loopItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "min-w-[750px] p-6 aspect-video flex items-center justify-center",
                  index === selectedIndex && "p-3"
                )}
              >
                <figure
                  className={cn(
                    "opacity-25 w-full h-full",
                    index === selectedIndex && "opacity-100"
                  )}
                  role="img"
                  aria-label="Imagem ilustrativa"
                >
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
                    style={{ backgroundImage: `url(${item})` }}
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
