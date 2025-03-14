import { PropsWithChildren } from "react";

export function ContainerSection({ children }: PropsWithChildren) {
  return (
    <section className="w-full py-24 flex">
      {children}
    </section>
  );
}
