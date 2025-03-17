import React from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <Image height={30} width={30} src="https://s3.amazonaws.com/monstercodes.dev/assets/isotipo.svg" alt="Monster Codes" />
                    <a className={styles.email} href="mailto:jglez.dev@gmail.com">jglez.dev@gmail.com</a>
                </div>
                <div className={styles.copyright}>© 2021-present Jose Gonzalez Castro. All Rights Reserved.</div>
            </div>

        </div>
    );
}
