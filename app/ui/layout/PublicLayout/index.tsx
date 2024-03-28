import { Locale } from "@/i18n-config";
import React from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
export function PublicLayout({
  lang,
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
  lang: Locale;
}) {
  return (
    <>
      <Navigation lang={lang} />
      {children}
      <Footer />
    </>
  );
}
