"use client";

import type { HeroSectionType } from "@/types/templates/hero-section.type";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";

export function HeroSection({
  title,
  subtitle,
  background,
  navbar_name,
  video_play,
}: HeroSectionType) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id={navbar_name}
      className="h-screen w-full relative flex items-center bg-gray-3 justify-center bg-cover bg-center bg-no-repeat"
      aria-label={navbar_name}
      style={{ backgroundImage: `url(${background.image_url})` }}
    >
      <div className="container w-full grid grid-cols-12">
        <header className="col-span-8 flex flex-col gap-3">
          <h1 className="text-6xl font-bold text-textPrimary">{title}</h1>
          <p className="text-2xl text-text">{subtitle}</p>
        </header>
        <figure
          className="col-span-4 flex justify-center items-center"
          aria-label="Botão de play"
        >
          <button
            onClick={handleOpenModal}
            className="rounded-full border-[12px] border-secondary flex items-center justify-center bg-primary w-24 h-24"
            aria-label="Reproduzir vídeo"
          >
            <LuPlay className="text-2xl fill-white text-white" />
          </button>
        </figure>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="relative w-full h-min max-w-4xl bg-white p-4 rounded-lg">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-[-3rem] w-10 aspect-square rounded-full bg-white text-2xl"
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={video_play.url}
                title="Vídeo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
