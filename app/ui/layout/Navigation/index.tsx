import { Locale } from "@/i18n-config";
import { UserProfileTypes } from "@/types/types";
import { DesktopNav } from "./Desktop";
import { MobileNav } from "./Mobile";

export async function Navigation({
  lang,
  user,
}: {
  lang: Locale;
  user: UserProfileTypes;
}) {
  return (
    <nav className="fixed z-[11] grid w-full grid-cols-1 grid-rows-1">
      <DesktopNav lang={lang} user={user} />
      <MobileNav lang={lang} user={user} />
    </nav>
  );
}
