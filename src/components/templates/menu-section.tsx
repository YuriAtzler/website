export function MenuSection() {
  return (
    <section
      id="menu"
      className="w-full py-24 flex items-center justify-center"
      aria-label="Menu"
    >
      <div className="container flex flex-col w-full gap-12">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm">Menu</h3>
          <h1 className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing quo.
          </h1>
        </div>
        <div className="flex w-full justify-center gap-6">
          <span>All</span>
          <span>Cetegory 1</span>
          <span>Cetegory 2</span>
          <span>Cetegory 3</span>
        </div>
        <div className="grid grid-cols-2 gap-3 justify-center">
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </section>
  );
}

function MenuItem() {
  return (
    <div className="col-span-1 gap-3 flex p-3 items-center hover:bg-gray-2">
      <figure className="w-16 h-16 bg-gray-3 rounded-full border-8 border-gray-2/50"></figure>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between">
          <h3 className="font-bold txt-lg">Item 1</h3>
          <span className="font-bold text-sm">$5.99</span>
        </div>
        <span className="text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae et
        </span>
      </div>
    </div>
  );
}
