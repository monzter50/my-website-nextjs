"use client";
import { ArrowRight, Codepen, FileText, Github, Linkedin, Rocket } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";

import { Astronaut, Starfield } from "@components/Space";
import Wrapper from "@components/Surfaces/Wrapper";
import { Button } from "@components/ui/button";
import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

const CV_URL = "https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/monzter50", Icon: Github },
  { label: "CodePen", href: "https://codepen.io/monstercodes", Icon: Codepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jose-gonzalez-b32228138/", Icon: Linkedin }
];

export default function Header() {
  const localeContext = useContext(LocaleContext);
  const t: Dictionary = localeContext?.state || {};
  const lang = localeContext?.lng ?? "es-MX";

  return (
    <section
      data-testid="HeaderTest"
      id="home"
      className="space-gradient relative isolate overflow-hidden pb-20 pt-32"
    >
      <Starfield />
      <Wrapper>
        <header className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="m-0 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur">
              <Rocket aria-hidden="true" className="h-4 w-4 text-primary" />
              {t?.introduction?.eyebrow}
            </p>
            <h1 className="mb-0 mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {t?.introduction?.title}
            </h1>
            <p className="text-cosmic mb-0 mt-3 text-2xl font-semibold">
              {t?.introduction?.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href={`/${lang}/posts`}>
                  {t?.introduction?.cta}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                  <FileText aria-hidden="true" />
                  {t?.introduction?.cv}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span className="mr-1 text-sm text-muted-foreground">{t?.introduction?.followme}</span>
              {SOCIALS.map(({ label, href, Icon }) => (
                <Button key={label} asChild size="icon" variant="ghost">
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center sm:flex">
            {/* Orbit ring with a small planet */}
            <div aria-hidden="true" className="absolute inset-[-8%] rounded-full border border-dashed border-primary/30" />
            <div aria-hidden="true" className="animate-orbit absolute inset-[-8%]">
              <span className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-nebula to-primary shadow-[0_0_24px_hsl(var(--nebula)/0.6)]" />
            </div>
            <Astronaut className="w-4/5" />
          </div>
        </header>
      </Wrapper>
    </section>
  );
}
