"use client";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import React, { useContext } from "react";

import { CardProject } from "@components/Surfaces";
import { LocaleContext } from "@root/src/provider/LocaleProvider";
import { Locale } from "@root/i18n-config";

export default function Projects({ locale }: {locale: Locale}) {

    const localeContext = useContext(LocaleContext);
    const dictionary: any = localeContext?.state;
    const t: any = dictionary;
    return (
        <section id='project' className='py-10'>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">{t?.projects?.title}</h2>
                <Link href={`${locale}/projects`} locale={locale} className="group flex items-center gap-1 text-sm font-medium hover:text-primary">
                    {t?.projects?.more}
                    <ChevronRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
            <div className='px-4 sm:px-8 flex flex-col'>
                <div className={"p-0 pb-1"}>
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
        </section>

    );
}
