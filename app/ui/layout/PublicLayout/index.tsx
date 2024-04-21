import { Locale } from "@/i18n-config";
import React from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { VerticalContactWidgetLayout } from "../VerticalContactWidget";
import { NotificationTray } from "../../features";

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
      <VerticalContactWidgetLayout lang={lang}>
        {children}
      </VerticalContactWidgetLayout>
      <Footer />
      <NotificationTray />
    </>
  );
}
