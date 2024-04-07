import { Locale } from "@/i18n-config";
import cn from "classnames";
import { Wrapper } from "../Wrapper";
import { MotionMobileNav } from "../../motion/MotionMobileNav";
import { Brand } from "../../features/Brand";
import { MobileMenu } from "./components/MobileMenu";
import { ToggleOpen } from "./components/ToggleOpenBtn";

export function MobileNav({
  className = "",
  lang,
}: {
  className?: string;
  lang: Locale;
}) {
  return (
    <MotionMobileNav className="min-h-dvh bg-white w-full fixed top-0 right-0 left-0 bottom-0 p-2 z-[3] ">
      <div className={cn(`h-full ${className}`)}>
        <Wrapper className="border  h-full rounded-md grid grid-cols-1 grid-rows-[1fr]">
          <div className="flex flex-col items-center justify-center gap-10">
            <ToggleOpen />
            <div className="pt-20">
              <Brand />
            </div>
            <MobileMenu lang={lang} />
          </div>
        </Wrapper>
      </div>
    </MotionMobileNav>
  );
}
