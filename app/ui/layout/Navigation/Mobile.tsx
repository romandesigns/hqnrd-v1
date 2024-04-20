import { Locale } from "@/i18n-config";
import cn from "classnames";
import { Brand } from "../../features/Brand";
import { MotionMobileNav } from "../../motion/MotionMobileNav";
import { Wrapper } from "../Wrapper";
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
    <MotionMobileNav className="fixed bottom-0 left-0 right-0 top-0 z-[3] min-h-dvh w-full bg-white p-2 ">
      <div className={cn(`h-full ${className}`)}>
        <Wrapper className="grid  h-full grid-cols-1 grid-rows-[1fr] rounded-md border">
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
