import type { Metadata } from "next";
import React from "react";

import { getDictionary } from "@root/get-dictionary";
import { i18n, Locale } from "@root/i18n-config";

import RootDocument from "../root-document";

export const metadata: Metadata = {
  title: "Monster Codes",
  description: "Jose Gonzalez Castro — Software Engineer"
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{
    lang: Locale
  }>
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <RootDocument lang={lang} dictionary={dictionary}>{children}</RootDocument>;
}
