import { Locale } from "@/i18n-config";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AvatarUpload } from "./AvatarUpload";
import { Brand } from "@/app/ui/features";
import { AsideLinks } from "./AsideLinks";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside className={twMerge(`${className}`)}>
      <ul className="flex items-center justify-center gap-3 sm:flex-col sm:items-stretch">
        <li className="flex items-center justify-center p-4 px-16">
          <Brand lang={lang} />
        </li>
        <li className="sm:h-68 m:mb-10 relative hidden aspect-square items-center justify-center p-4 sm:mb-4 sm:flex">
          <div className="absolute bottom-2 right-2">
            <AvatarUpload />
          </div>
          <Image
            src="/assets/general/male-user-placeholder.png"
            alt="user avatar"
            className="aspect-square rounded-md opacity-[0.20]"
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </li>
        <AsideLinks lang={lang} />
      </ul>
    </aside>
  );
}
