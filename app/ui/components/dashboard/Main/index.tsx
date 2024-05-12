import { Locale } from "@/i18n-config";
import classNames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Navigation } from "./Navigation";

export function Main({
  lang,
  className = "",
  children,
}: Readonly<{ lang: Locale; className: string; children: React.ReactNode }>) {
  return (
    <>
      <main
        className={twMerge(
          `grid grid-cols-1 grid-rows-[auto_1fr] ${className}`,
        )}
      >
        <Navigation lang={lang} />
        {children}
      </main>
    </>
  );
}
