"use client";
import React, { useContext } from "react";

import { Heading, Text } from "@components/Typhografy";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function AboutMe() {
  const localeContext = useContext(LocaleContext);
  const dictionary: Dictionary = localeContext?.state || {};
  const t = dictionary;

  return (
    <section id='aboutme' className='py-10'>
      <Heading as="h2" className={"my-7"}>{t?.aboutme?.title}</Heading>
      <Text>{t?.aboutme?.description}</Text>
    </section>
  );
}
