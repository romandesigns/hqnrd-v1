import { Locale } from "@/i18n-config";
import { UserProfileTypes } from "@/types/types";
import cn from "classnames";
import { Brand } from "../../features/Brand";
import { Wrapper } from "../Wrapper";
import { DesktopMenu } from "./components/DesktopMenu";
import { ToggleClose } from "./components/ToggleCloseBtn";

export async function DesktopNav({
  className = "",
  lang,
  user,
}: {
  className?: string;
  lang: Locale;
  user: UserProfileTypes;
}) {
  return (
    <>
      <div
        className={cn(
          `sticky top-0 bg-white shadow-[0.1rem_0.1rem_0.25rem_-0.05rem_rgba(79,139,194,0.5)] ${className}`,
        )}
      >
        <Wrapper className="sm:p-3 lg:p-2">
          <div className="flex w-full items-center justify-between">
            <Brand lang={lang} />
            <div className="flex items-center">
              <DesktopMenu lang={lang} user={user} />
              <ToggleClose className="sm:hidden" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="h-2 bg-white" />
    </>
  );
}
