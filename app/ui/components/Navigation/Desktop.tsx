import { Locale } from "@/i18n-config";
import cn from "classnames";
import { Wrapper } from "../../layout/Wrapper";
import { Brand } from "../Brand";
import { ToggleClose } from "./components/ToggleCloseBtn";

export function DesktopNav({
  className = "",
  lang,
}: {
  className?: string;
  lang: Locale;
}) {
  return (
    <>
      <div
        className={cn(
          `bg-white sticky top-0 shadow-[0.1rem_0.1rem_0.25rem_-0.05rem_rgba(79,139,194,0.5)] ${className}`
        )}
      >
        <Wrapper>
          <div className="flex justify-between items-center w-full">
            <Brand />
            <ToggleClose />
          </div>
        </Wrapper>
      </div>
      <div className="h-2 bg-white" />
    </>
  );
}
