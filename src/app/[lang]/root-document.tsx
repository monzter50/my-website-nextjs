import "@styles/globals.css";
import "@styles/prism-night-theme.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/cousine/400.css";
import "@fontsource/cousine/700.css";
import React from "react";

import { Layout } from "@components/Surfaces";
import { Locale } from "@root/i18n-config";
import { Dictionary, LocaleProvider } from "@root/src/provider/LocaleProvider";
import { ThemeProvider } from "@root/src/provider/ThemeProvider";

interface RootDocumentProps {
  children: React.ReactNode
  lang: Locale
  dictionary: Dictionary
}

/** Shared <html> shell for the (home) and (info) root layouts. */
export default function RootDocument({ children, lang, dictionary }: RootDocumentProps) {
  return (
    // next-themes sets the theme class on <html> before hydration.
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LocaleProvider dictionary={dictionary} lng={lang}>
            <Layout locale={lang}>
              {children}
            </Layout>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
