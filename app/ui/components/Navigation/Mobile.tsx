import React from "react";
import cn from "classnames";
import { Wrapper } from "../../layout/Wrapper";
import { HiMenuAlt1 } from "../../icons";
import { Brand } from "../Brand";
import { Locale } from "@/i18n-config";
import { MobileMenu } from "./components/MobileMenu";

export function MobileNav({
  className = "",
  lang,
}: {
  className?: string;
  lang: Locale;
}) {
  return (
    <div
      className={cn(
        `min-h-dvh bg-white w-full fixed top-0 right-0 left-0 bottom-0 p-2 z-[3] ${className}`
      )}
    >
      <Wrapper className="border  h-full rounded-md grid grid-cols-1 grid-rows-[auto_1fr]">
        <div className="flex items-center p-4 px-2 w-full justify-end">
          <HiMenuAlt1 size={25} />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 pt-36">
          <Brand />
          <MobileMenu lang={lang} />
        </div>
      </Wrapper>
    </div>
  );
}
