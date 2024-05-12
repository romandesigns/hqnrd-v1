import { MdSpaceDashboard } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AvatarUpload } from "./AvatarUpload";

export function Aside({
  lang,
  className = "",
}: Readonly<{ lang: Locale; className: string }>) {
  return (
    <aside className={twMerge(`border-2 p-2  px-3 ${className}`)}>
      <ul className="flex items-center justify-center gap-3 sm:flex-col sm:items-stretch">
        <li className="sm:h-68 m:mb-10 relative hidden aspect-square items-center justify-center p-4 sm:flex">
          <AvatarUpload />
          <Image
            src="/assets/general/male-user-placeholder.png"
            alt="user avatar"
            className="aspect-square rounded-md opacity-[0.20]"
            fill
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </li>
        <li>
          <Link
            href={`/${lang}/portal`}
            className="flex items-center justify-start space-x-2 rounded-md border p-2 sm:p-3 sm:px-20"
          >
            <span>
              <MdSpaceDashboard className="text-2xl text-neutral-400 sm:inline-block sm:text-xl" />
            </span>
            <span className="hidden sm:inline-block">Dashsboard</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/portal/usuarios`}
            className="flex items-center justify-start space-x-2 rounded-md border p-2 sm:p-3 sm:px-20"
          >
            <span>
              <MdSpaceDashboard className="text-2xl text-neutral-400 sm:inline-block sm:text-xl" />
            </span>
            <span className="hidden sm:inline-block">Users</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/portal/reservaciones`}
            className="flex items-center justify-start space-x-2 rounded-md border p-2 sm:p-3 sm:px-20"
          >
            <span>
              <MdSpaceDashboard className="text-2xl text-neutral-400 sm:inline-block sm:text-xl" />
            </span>
            <span className="hidden sm:inline-block">Reservations</span>
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/portal/pagos`}
            className="flex items-center justify-start space-x-2 rounded-md border p-2 sm:p-3 sm:px-20"
          >
            <span>
              <MdSpaceDashboard className="text-2xl text-neutral-400 sm:inline-block sm:text-xl" />
            </span>
            <span className="hidden sm:inline-block">Payments</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
