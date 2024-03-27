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
        <Wrapper className="sm:p-3 lg:p-2">
          <div className="flex justify-between items-center w-full">
            <Brand />
            <div className="flex items-center">
              <ul className="hidden sm:flex text-sm font-medium">
                <li className="inline-block">
                  <a
                    href="/"
                    className="text-blue-500 hover:text-blue-600 px-4 py-2"
                  >
                    Home
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="/about"
                    className="text-blue-500 hover:text-blue-600 px-4 py-2"
                  >
                    Rooms
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="/about"
                    className="text-blue-500 hover:text-blue-600 px-4 py-2"
                  >
                    Sign In
                  </a>
                </li>
              </ul>
              <ToggleClose className="sm:hidden" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="h-2 bg-white" />
    </>
  );
}
