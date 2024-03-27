import React from "react";
import { Navigation, Footer } from "../../components";
import { Locale } from "@/i18n-config";

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
