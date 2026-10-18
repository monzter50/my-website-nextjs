"use client";
import React, { useContext } from "react";

import SkillsIcon from "@components/dataDisplay/SkillsIcon";
import { Icon } from "@components/dataDisplay/SkillsIcon/SkillsIcon.type";
import Section from "@components/Surfaces/Section";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

const SKILLS: Array<keyof typeof Icon> = [
  "Git",
  "Python",
  "Django",
  "React",
  "NodeJs",
  "Javascript",
  "Jest",
  "TestingLibrary",
  "NextJs",
  "TailwindCss",
  "CSS",
  "HTML",
  "Typescript"
];

export default function Skills() {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};

  return (
    <Section id="skills" title={t?.skills?.title}>
      <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_24px_-6px_hsl(var(--primary)/0.5)]"
          >
            <SkillsIcon icon={skill} direction="vertical" size={48} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
