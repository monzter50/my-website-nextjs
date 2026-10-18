"use client";
import React, { useContext } from "react";

import { CardProject } from "@components/Surfaces";
import Section from "@components/Surfaces/Section";
import { IProject } from "@lib/types/projects.types";
import { Locale } from "@root/i18n-config";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

interface ProjectsProps {
  locale: Locale
  projects: IProject[]
}

export default function Projects({ locale, projects }: ProjectsProps) {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};

  return (
    <Section id="project" title={t?.projects?.title} action={{ href: `/${locale}/projects`,
      label: t?.projects?.more }}>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <CardProject key={project.repoUrl ?? project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
