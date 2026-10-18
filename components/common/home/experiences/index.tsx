"use client";
import React, { useContext } from "react";

import { Timeline } from "@components/dataDisplay";
import Section from "@components/Surfaces/Section";
import { experiences } from "@lib/data";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function Experiences() {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};

  return (
    <Section id="experiences" title={t?.experiences?.title}>
      <Timeline experiences={experiences} />
    </Section>
  );
}
