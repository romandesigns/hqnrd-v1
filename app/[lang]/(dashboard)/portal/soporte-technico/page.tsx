import React from "react";
import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export default function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <>
      <Navigation lang={lang}>
        <div className="flex w-full items-center justify-between">
          <div className="font-bold">TECHNICAL SUPPORT</div>
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <Link href={`/${lang}/portal/soporte-technico/all-issues`}>
                All Issues
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/portal/soporte-technico/new`}>
                New Issue
              </Link>
            </li>
          </ul>
        </div>
      </Navigation>
      <section className="flex h-full w-full items-stretch justify-stretch p-4">
        <article className="h-full w-full bg-white">Home</article>
      </section>
    </>
  );
}
