"use client";
import React, { useContext } from "react";

import { CardProject } from "@components/Surfaces";
import Section from "@components/Surfaces/Section";
import { Locale } from "@root/i18n-config";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

export default function Projects({ locale }: {locale: Locale}) {

  const localeContext = useContext(LocaleContext);
  const dictionary: Dictionary = localeContext?.state || {};
  const t = dictionary;
  return (
    <Section id="project" title={t?.projects?.title} action={{ href: `/${locale}/projects`, label: t?.projects?.more }}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <CardProject
            title="LearnAla"
            description="LearnAla es tu plataforma personalizada que facilita la gestión de contenido, mide los resultados y optimiza el tiempo y recursos de tu organización."
            href="https://www.learnala.com/"
            repoUrl= "https://github.com/yourusername/learnala"
            isOnline
            technologies={[ "React", "Node.js", "MongoDB", "Tailwind CSS" ]}
            icon="web"
          />
        </div>
      </div>
    </Section>
  );
}
