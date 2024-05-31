import { Brand } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { twMerge } from "tailwind-merge";
import { AsideLinks } from "./AsideLinks";
import { UserAvatar } from "./UserAvatar";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside className={twMerge(`display: flex border-r bg-white items-center justify-center md:items-start ${className}`)}>
      <ul className="flex items-center justify-center sm:flex-col sm:items-stretch flex-row relative">
        <li className="border-b p-2 md:p-4 md:px-16 hidden md:block">
          <Brand lang={lang} figClassName="hidden md:inline-block" />
        </li>
        <li className="hidden aspect-square items-center justify-center p-2 md:mb-4 md:block">
          <div className="relative h-full w-full">
            <UserAvatar />
          </div>
        </li>
        <AsideLinks
          lang={lang}
          notificationsCount={4}
          className="last:mt-auto "
        />
      </ul>
    </aside>
  );
}
