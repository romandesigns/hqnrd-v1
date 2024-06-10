import { Brand, FloatingBtn } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { twMerge } from "tailwind-merge";
import { MenuLinks } from "./MenuLinks";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside className={twMerge(`flex bg-white md:p-2 md:py-4 relative ${className}`)}>
     <FloatingBtn />
     <ul className="flex items-center justify-center md:flex-col md:items-start md:justify-start w-full">
        <li className="md:px-3 md:pb-4 flex items-center justify-start border-b">
          <Brand lang={lang} className="hidden md:inline-block"/>
        </li>
        <li className="py-8 hidden md:block"/>
        <MenuLinks lang={lang} />
     </ul>
    </aside>
  );
}
