import { Brand } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { AsideLinks } from "./AsideLinks";
import { AvatarUpload } from "./AvatarUpload";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside className={twMerge(`display: flex border-r bg-white ${className}`)}>
      <ul className="flex items-center justify-center sm:flex-col sm:items-stretch">
        <li className="border-b p-4 px-16">
          <Brand lang={lang} />
        </li>
        <li className="sm:h-68 m:mb-10 relative aspect-square items-center justify-center p-4 sm:mb-4 sm:flex">
          <div className="absolute bottom-6 right-6">
            <AvatarUpload />
          </div>
          <div className="relative h-full w-full p-2">
            <Image
              src="/assets/general/male-user-placeholder.png"
              alt="user avatar"
              className="aspect-square rounded-md opacity-[0.20]"
              fill
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
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
