"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PropsWithChildren } from "react";

export function ContainerPage({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <main>{children}</main>;
}
