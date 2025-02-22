import { LuPlay } from "react-icons/lu";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen w-full flex items-center bg-gray-3 justify-center bg-cover bg-center bg-no-repeat"
      aria-label="Seção Hero"
    >
      <div className="container w-full grid grid-cols-12">
        <header className="col-span-8 flex flex-col gap-3">
          <h1 className="text-6xl">Welcome</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <nav aria-label="Ações principais">
            <div className="flex gap-3">
              <button
                className="px-3 py-1 rounded-full border"
                aria-label="Saiba mais"
              >
                Saiba mais
              </button>
              <button
                className="px-3 py-1 rounded-full border"
                aria-label="Contato"
              >
                Contato
              </button>
            </div>
          </nav>
        </header>
        <figure
          className="col-span-4 flex justify-center items-center"
          aria-label="Botão de play"
        >
          <button
            className="rounded-full border-[12px] border-green-6/75 flex items-center justify-center bg-green-8 w-24 h-24"
            aria-label="Reproduzir vídeo"
          >
            <LuPlay className="text-2xl fill-white text-white" />
          </button>
        </figure>
      </div>
    </section>
  );
}
