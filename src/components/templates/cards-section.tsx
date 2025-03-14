export function CardsSection() {
  return (
    <section
      id="cards"
      className="w-full py-24 flex"
      aria-label="Cards"
    >
      <div className="container flex flex-col w-full gap-12">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm">Why us</h3>
          <h1 className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing quo.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-3 justify-center">
          <Card index={0} />
          <Card index={1} />
          <Card index={2} />
          <Card index={3} />
          <Card index={4} />
          <Card index={5} />
        </div>
      </div>
    </section>
  );
}

function Card({ index }: { index: number }) {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-delay={100 * index}
      className="col-span-1 px-6 py-10 bg-gray-3 gap-3 flex flex-col"
    >
      <h1 className="text-xl font-bold">01</h1>
      <h3 className="text-lg">Lorem ipsum dolor!</h3>
      <span className="text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        pariatur sequi veritatis minima! Tempora a eum dolore, cumque possimus,
        nesciunt, eaque tempore cum modi veritatis unde facilis accusantium amet
        ut.
      </span>
    </div>
  );
}
