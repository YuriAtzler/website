"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContainerSection } from "../container-section";
import "swiper/css";
import "swiper/css/effect-coverflow";

export function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ContainerSection>
      <Swiper
        className="min-w-[150%] left-[-25%]"
        spaceBetween={30}
        slidesPerView={3}
        loop
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-video">
              <div
                className={cn(
                  "w-full h-full bg-cover opacity-60 bg-center scale-95 transition-all bg-no-repeat rounded-lg shadow-lg",
                  activeIndex === index ? "border-2 opacity-100 scale-100" : ""
                )}
                style={{ backgroundImage: `url(${item})` }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerSection>
  );
}
