"use client";
import React, { useContext } from "react";

import Section from "@components/Surfaces/Section";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function AboutMe() {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};

  return (
    <Section id="aboutme" title={t?.aboutme?.title}>
      <p className="m-0 max-w-3xl text-lg leading-relaxed text-muted-foreground">{t?.aboutme?.description}</p>
    </Section>
  );
}
