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
    <div className={cn(`${className}`)}>
      <Wrapper>
        <div className="flex justify-between items-center w-full">
          <Brand />
          <ToggleClose />
        </div>
      </Wrapper>
    </div>
  );
}
