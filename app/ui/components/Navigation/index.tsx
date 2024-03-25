import React from "react";
import { Wrapper } from "../../layout/Wrapper";
import { Brand } from "../../components";
import { MobileNav } from "./Mobile";
import { DesktopNav } from "./Desktop";
import { Locale } from "@/i18n-config";

export function Navigation({ lang }: { lang: Locale }) {
  return (
    <nav className="w-full  grid grid-cols-1 grid-rows-1">
      <Wrapper>
        <DesktopNav />
        <MobileNav lang={lang} />
      </Wrapper>
    </nav>
  );
}
