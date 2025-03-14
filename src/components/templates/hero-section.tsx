"use client";

import { TemplateContentType, TemplateType } from "@/types/common.type";
import { useState } from "react";
import { LuPlay } from "react-icons/lu";

export function HeroSection({
  title,
  subtitle,
  background,
  navbar_name,
  content,
}: TemplateType) {
  return (
    <section
      id={navbar_name}
      className="h-screen w-full relative flex bg-graydark-3 bg-cover bg-center bg-no-repeat"
      aria-label={navbar_name}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 70%), url(${background.image_url})`,
      }}
    >
      <div className="container w-full grid grid-cols-12">
        <header className="col-span-8 flex flex-col gap-3">
          <h1
            className="text-6xl font-bold text-graydark-12"
            data-aos="fade-up"
          >
            {title}
          </h1>

          <p
            className="text-2xl text-graydark-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </p>
        </header>
        <figure
          className="col-span-4 flex justify-center items-center"
          aria-label="Botão de play"
        >
          <ModalVideo {...content} />
        </figure>
      </div>
    </section>
  );
}

function ModalVideo(content: TemplateContentType) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-graydark-12/40 hover:bg-graydark-12/50 animate-pulse-color flex items-center justify-center w-24 h-24"
        aria-label="Reproduzir vídeo"
      >
        <LuPlay className="text-6xl fill-white text-white" />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="relative w-full h-min max-w-4xl bg-white p-4 rounded-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-0 right-[-3rem] w-10 aspect-square rounded-full bg-white text-2xl"
            >
              X
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={content.video_play?.url}
                title="Vídeo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
