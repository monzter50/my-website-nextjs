"use client";
import React, { useContext } from "react";

import { Timeline } from "@components/dataDisplay";
import { Heading } from "@components/Typhografy";
import { experiences } from "@lib/data";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function Experiences() {
  const localeContext = useContext(LocaleContext);
  const dictionary: Dictionary = localeContext?.state || {};
  const t = dictionary;

  return (
    <section id='experiences' className='py-10'>
      <Heading as="h2" className={"my-7"}>{t?.experiences?.title}</Heading>
      <Timeline experiences={experiences} />
    </section>
  );
}
