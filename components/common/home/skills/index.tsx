"use client";
import React, { useContext } from "react";

import { Heading } from "@components/Typhografy";
import SkillsIcon from "@components/dataDisplay/SkillsIcon";
import { Icon } from "@components/dataDisplay/SkillsIcon/SkillsIcon.type";
import { LocaleContext } from "@root/src/provider/LocaleProvider";

export default function Skills() {
    const localeContext = useContext(LocaleContext);
    const dictionary: any = localeContext?.state;
    const t: any = dictionary;
    const skills: Array<keyof typeof Icon> = [
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
    return (
        <section id='skills' className='py-10'>
            <Heading as="h2" className={"my-7"}>{t?.skills?.title}</Heading>
            <div className='mb-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-2'>
                {skills?.map((skill) => (<SkillsIcon key={skill} icon={skill} direction='vertical' />))}
            </div>
        </section>
    );
}
