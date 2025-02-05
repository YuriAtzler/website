export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-screen h-screen flex items-center justify-center bg-[url('https://placehold.co/4000x4000')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container w-full grid grid-cols-12">
        <div className="col-span-8 flex flex-col gap-3">
          <h1 className="text-6xl">Bem vindo a mint</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-3">
            <button className="px-3 py-1 rounded-full border">
              Saiba mais
            </button>
            <button className="px-3 py-1 rounded-full border">Contato</button>
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-center">
          <button className="rounded-full border w-24 h-24">Play</button>
        </div>
      </div>
    </section>
  );
}
