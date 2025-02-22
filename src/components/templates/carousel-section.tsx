"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export function CarouselSection() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  const items = ["🍕", "🍔", "🍟", "🌮", "🍣"];
  const loopItems = [...items, ...items.slice(0, 2)];

  return (
    <section
      id="carousel"
      className="w-full py-24 flex justify-center"
      aria-label="Carrosel"
    >
      <div className="container w-full flex flex-col gap-6">
        <h1 className="text-xl">Carrosel de imagens</h1>
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex">
            {loopItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[750px] p-6  aspect-video flex items-center justify-center"
              >
                <div className="bg-gray-3 border-8 w-full h-full">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
