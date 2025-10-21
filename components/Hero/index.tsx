import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Wrapper } from "@components/Surfaces";

import Heading from "../Typhografy/Heading";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string
  href: string
  slug: string
}
export default function Hero({ title, href, slug }: HeroProps) {
  return (
    <section className={`${styles.hero} pt-[7rem]`}>

      <Wrapper>
        <div className={`${styles.breadcrumbs} flex items-center mt-4`}>
          <Link className="underline underline-offset-4 font-bold" href={"/"}>
              home
          </Link>
          <ChevronRight className={styles.icon} size="xs" />
          <Link className='underline underline-offset-4 font-bold' href={href}>
            {slug}
          </Link>
        </div>
        <div className={"flex items-center h-4/5"}>
          <div className='mt-3 pb-3'>
            <Heading className={styles.title}>{title}</Heading>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
