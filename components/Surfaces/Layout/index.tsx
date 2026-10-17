import React, { ReactNode } from "react";

import Footer from "@components/Navigation/Footer";
import Navbar from "@components/Navigation/Navbar";
import { Locale } from "@root/i18n-config";

interface LayoutProps {
  children: ReactNode
  locale: Locale
}
export default function Layout(props: LayoutProps) {
  const { children, locale } = props;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar locale={locale} />
      <main id="content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
