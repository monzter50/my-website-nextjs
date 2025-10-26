/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Codepen, File, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";

import { LocaleContext, Dictionary } from "@root/src/provider/LocaleProvider";

import styles from "./Header.module.css";
import Tooltip from "../dataDisplay/Tooltip";
import Wrapper from "../Surfaces/Wrapper";
import Heading from "../Typhografy/Heading";
import Text from "../Typhografy/Text";
export default function Header() {
  const localeContext = useContext(LocaleContext);
  const dictionary: Dictionary = localeContext?.state || {};
  const t = dictionary;

  return (
    <section data-testid="HeaderTest" className={"relative pt-[8rem] pb-[3rem]"} id="home">
      <div className="absolute inset-0 z-[-1] bg-cover bg-center" style={{ backgroundImage: "url(\"https://s3.amazonaws.com/monstercodes.dev/assets/mc_textura.png\")" }}></div>
      <Wrapper>
        <header className={"flex justify-between"}>
          <article className={"relative flex flex-col justify-center leading-3 text-blue-ligth"}>
            <Heading as="h1" className='text-7xl text-blue-ligth'>
              {t?.introduction?.title}
            </Heading>
            <Heading as="h2" className='bg-[linear-gradient(90deg,var(--blue),var(--blue-ligth))] bg-clip-text text-blue'>
              {t?.introduction?.subtitle}
            </Heading>
            <div className={"flex items-center py-3"}>

              <Text className='text-white'>{t?.introduction?.followme}</Text>
              <span className={"flex items-center ml-5"}>
                <a className='flex' href="https://github.com/monzter50" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Github'>
                    <Github
                      className={styles.icon}
                      size="xs"
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={"flex items-center ml-5"}>
                <a className='flex' href="https://codepen.io/monstercodes" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='CodePen'>
                    <Codepen
                      className={styles.icon}
                      size="xs"
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={"flex items-center ml-5"}>
                <a className='flex' href="https://www.linkedin.com/in/jose-gonzalez-b32228138/" target="_blank" rel="noopener noreferrer">
                  <Tooltip title='Linkedin'>
                    <Linkedin
                      size="xs"
                      className={styles.icon}
                    />
                  </Tooltip>
                </a>

              </span>
              <span className={"flex items-center ml-5"}>
                <a className='flex' href="https://s3.amazonaws.com/monstercodes.dev/assets/CV+Jose+Antonio.pdf" target={"_blank"} rel="noreferrer">
                  <Tooltip title='My CV'>
                    <File
                      className={styles.iconFile}
                      size="xs"
                    />
                  </Tooltip>
                </a>
              </span>
            </div>
          </article>
          <div className='hidden lg:block'>
            <Image
              alt={"Code Monster"}
              src={"https://s3.amazonaws.com/monstercodes.dev/assets/personaje.png"}
              width={300}
              height={500}
            />
          </div>
        </header>
      </Wrapper>
    </section>

  );
}
