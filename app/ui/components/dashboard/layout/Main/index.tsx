import { Locale } from "@/i18n-config";
import React from "react";
import { twMerge } from "tailwind-merge";

export function Main({
  lang,
  className = "",
  children,
}: Readonly<{ lang: Locale; className: string; children: React.ReactNode }>) {
  return (
    <main
      className={twMerge(
        `relative grid grid-cols-1 grid-rows-[auto_1fr] bg-primary-100/20 p-2 ${className}`,
      )}
    >
      {children}
    </main>
  );
}
