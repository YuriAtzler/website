import { Card, CardBody, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";

export function CardsSection() {
  return (
    <section
      id="cards"
      className="w-full py-24 flex bg-cover bg-center bg-no-repeat"
      aria-label="Cards"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 70%), url(https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <div className="container flex flex-col w-full gap-12">
        <div className="flex flex-col gap-1 text-white">
          <h3 className="text-sm">Why us</h3>
          <h1 className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing quo.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-3 justify-center">
          <CardItem index={0} />
          <CardItem index={1} />
          <CardItem index={2} />
          <CardItem index={3} />
          <CardItem index={4} />
          <CardItem index={5} />
        </div>
      </div>
    </section>
  );
}

function CardItem({ index }: { index: number }) {
  return (
    <Card
      data-aos="zoom-in-down"
      data-aos-delay={100 * index}
      className="p-6 bg-graydark-2/80 text-white"
      isBlurred
    >
      <CardHeader className="flex items-center space-x-3">
        <h1 className="text-xl font-bold">01</h1>
        <h3 className="text-lg">Lorem ipsum dolor!</h3>
      </CardHeader>
      <Divider className="bg-white" />
      <CardBody>
        <span className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          pariatur sequi veritatis minima! Tempora a eum dolore, cumque
          possimus, nesciunt, eaque tempore cum modi veritatis unde facilis
          accusantium amet ut.
        </span>
        <span className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          pariatur sequi
        </span>
      </CardBody>
    </Card>
  );
}
