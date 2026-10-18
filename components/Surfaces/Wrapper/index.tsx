import React, { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <section className={"mx-auto max-w-[1200px] w-11/12"}>
      {children}
    </section>
  );
}
