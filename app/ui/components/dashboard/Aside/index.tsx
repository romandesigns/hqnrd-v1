import {
  AiFillMessage,
  BiSolidBell,
  FaCalendar,
  FaDoorClosed,
  FaUserGroup,
  MdSpaceDashboard,
  RiLayout6Fill,
} from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AvatarUpload } from "./AvatarUpload";
import { Brand } from "@/app/ui/features";
import { AsideLink } from "./AsideLink";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside className={twMerge(`${className}`)}>
      <ul className="flex items-center justify-center gap-3 sm:flex-col sm:items-stretch">
        <li className="flex items-center justify-center p-4">
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
        <AsideLink lang={lang} Icon={MdSpaceDashboard} text="Dashboard" />
        <AsideLink
          lang={lang}
          path="/usuarios"
          Icon={FaUserGroup}
          text="Users"
        />
        <AsideLink
          lang={lang}
          path="/mensages"
          Icon={AiFillMessage}
          text="Messages"
        />
        <AsideLink
          lang={lang}
          path="/reservaciones"
          Icon={FaCalendar}
          text="Reservations"
        />
        <AsideLink
          lang={lang}
          path="/habitaciones"
          Icon={FaDoorClosed}
          text="Rooms"
        />
        <AsideLink
          lang={lang}
          path="/website"
          Icon={RiLayout6Fill}
          text="Website"
        />
        <AsideLink
          lang={lang}
          path="/notificaciones"
          Icon={BiSolidBell}
          text="Notifications"
        />
      </ul>
    </aside>
  );
}
