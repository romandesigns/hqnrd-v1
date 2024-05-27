import React from "react";
import { Locale } from "@/i18n-config";
import { TechnicalSupportNavigation } from "@/app/ui/components/dashboard/Main/technical-support/Navigation";

export default function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <>
      <TechnicalSupportNavigation lang={lang} pageTitle="Tecnical Support" />
      <section className="flex h-full w-full items-stretch justify-stretch p-4">
        <article className="h-full w-full rounded-md bg-white shadow-sm">
          Home
        </article>
      </section>
    </>
  );
}
