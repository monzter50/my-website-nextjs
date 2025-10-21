import React, { ReactNode } from "react";

import Footer from "@components/Navigation/Footer";
import Navbar from "@components/Navigation/Navbar";
import { Locale } from "@root/i18n-config";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode
  locale: Locale
}
export default function Layout(props: LayoutProps) {
  const { children, locale } = props;

  return (
    <main className={styles.main}>
      <Navbar locale={locale} />
      {children}
      <Footer />
    </main>
  );
}
