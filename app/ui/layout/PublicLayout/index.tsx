import { Locale } from "@/i18n-config";
import { UserProfileTypes } from "@/types/types";
import React from "react";
import { NotificationTray } from "../../features";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { VerticalContactWidgetLayout } from "../VerticalContactWidget";

export async function PublicLayout({
  lang,
  children,
  user,
}: {
  children: React.ReactNode | React.ReactNode[];
  lang: Locale;
  user: UserProfileTypes;
}) {
  return (
    <>
      <Navigation lang={lang} user={user} />
      <VerticalContactWidgetLayout lang={lang}>
        {children}
      </VerticalContactWidgetLayout>
      <Footer lang={lang} />
      <NotificationTray />
    </>
  );
}
