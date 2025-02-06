export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-24 flex items-center justify-center"
    >
      <div className="container w-full grid grid-cols-12">
        <div className="col-span-6 flex flex-col gap-3">
          <h1 className="text-4xl">Bem vindo a mint</h1>
          <p className="text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus.
          </p>
          <div className="flex flex-col gap-6 pl-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              amet hic dolor? Nostrum blanditiis labore, voluptates accusantium
              aut amet a sapiente sit ad? Ut tenetur animi impedit ab totam
              quos!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              amet hic dolor? Nostrum blanditiis labore,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              amet hic dolor?
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            amet hic dolor? Nostrum blanditiis labore, voluptates accusantium
            aut amet a sapiente sit ad? Ut tenetur animi impedit ab totam quos!
          </p>
        </div>
        <div className="col-span-6 flex justify-center items-center">
          <div className="w-full aspect-square rounded bg-[url('https://placehold.co/4000x4000')] bg-cover bg-center bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}
