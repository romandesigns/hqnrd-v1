import { Brand, FloatingBtn } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { twMerge } from "tailwind-merge";
import { MenuLinks } from "./MenuLinks";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside
      className={twMerge(
        `sticky bottom-0 flex bg-white xs:z-[3] md:relative md:p-2 md:py-4 ${className}`,
      )}
    >
      <FloatingBtn />
      <ul className="flex w-full items-center justify-center md:flex-col md:items-start md:justify-start">
        <li className="flex items-center justify-start border-b md:px-3 md:pb-4">
          <Brand
            lang={lang}
            className="hidden md:inline-block [&_h1]:max-xl:hidden [&_p]:max-xl:hidden"
          />
        </li>
        <li className="hidden py-8 md:block" />
        <MenuLinks lang={lang} />
      </ul>
    </aside>
  );
}
