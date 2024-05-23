import React from "react";
import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { Menu } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Menu";

export default function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <>
      <Navigation lang={lang}>
        <Menu lang={lang} title="Page: Tickets" />
      </Navigation>
      <section className="flex h-full w-full items-stretch justify-stretch p-4">
        <article className="h-full w-full bg-white">Home</article>
      </section>
    </>
  );
}
