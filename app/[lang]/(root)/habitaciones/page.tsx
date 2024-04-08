import { PublicLayout } from "@/app/ui/layout";
import React from "react";
import { Locale } from "@/i18n-config";

export default function Page({ lang }: { lang: Locale }) {
  return (
    <PublicLayout lang={lang}>
      <main className="flex flex-col items-center">
        <h2>Rooms</h2>
      </main>
    </PublicLayout>
  );
}
