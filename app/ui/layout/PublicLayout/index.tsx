import { Locale } from "@/i18n-config";
import React from "react";
import { Footer } from "../Footer";
import { Navigation } from "../Navigation";
import { VerticalContactWidgetLayout } from "../VerticalContactWidget";
import { NotificationTray } from "../../features";
import { UserProfileTypes } from "@/types/types";

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
