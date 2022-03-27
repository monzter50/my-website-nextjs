
import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from 'typewriter-effect';

export default function Header(){
    return(
        <section className={styles.hero} id="home">
        <div className={`${styles.container} ${styles.monster}`}>
          <article className={styles.about}>
            <h1 className={styles.monsterTitle}>
              {"Hi, I'm a "}
              <span>
                <Typewriter
                options={{
                  strings:[
                    "UI Developer",
                    "Web Designer",
                    "Teacher",
                    "Software Developer",
                  ],
                  autoStart:true,
                  delay:'natural',
                  loop:true
                }}
                  
                />
              </span>
            </h1>

            <p>
              I am a creative, orderly, analytical, self-taught, passionate
              about teaching and learning person. My favorite hobbies is watch
              movies, talk with my wife, run, read articles about new update
              programming language and study new things.
            </p>
           
            <p className={styles.social}>
              Sigueme en:
              <a
                href="https://github.com/monzter50"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fab", "github"]}
                  size="xs"
                />
              </a>
              <a
                href="https://codepen.io/monstercodes"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={["fab", "codepen"]}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jose-gonzalez-b32228138/"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className={styles.icon}
                />
              </a>
              <a
                href="https://twitter.com/monster_codes"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  className={styles.icon}
                />
              </a>
              <a
                href="https://www.instagram.com/monstercodes/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  className={styles.icon}
                />
              </a>
            </p>
          </article>
        </div>
      </section>
      
    )
}