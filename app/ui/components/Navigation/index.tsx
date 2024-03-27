import { Locale } from "@/i18n-config";
import { DesktopNav } from "./Desktop";
import { MobileNav } from "./Mobile";

export function Navigation({ lang }: { lang: Locale }) {
  return (
    <nav className="w-full  grid grid-cols-1 grid-rows-1">
      <DesktopNav lang={lang} />
      <MobileNav lang={lang} />
    </nav>
  );
}
