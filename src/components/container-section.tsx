import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function ContainerSection({
  children,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <section {...props} className={cn("w-full py-24 flex", props.className)}>
      {children}
    </section>
  );
}
