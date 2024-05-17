import {
  LuUser2,
  MdLogout,
  MdOutlineContactSupport,
  TbSettings,
} from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { signOutAction } from "@/utils/actions/signOut";
import Link from "next/link";

export function AuthMenuList({ lang }: Readonly<{ lang: Locale }>) {
  return (
    <ul>
      <li className="w-full text-center text-sm ">
        <Link
          href={`/${lang}/portal/perfil/${123456}`}
          className="flex items-center justify-start gap-2 p-4 py-4 text-primary-500 hover:text-primary-700 hover:underline"
        >
          <span>
            <LuUser2 className="text-lg" />
          </span>
          <span>My Profile</span>
        </Link>
      </li>
      <li className="w-full border-b border-dashed  text-center text-sm ">
        <Link
          href={`/${lang}/portal/perfil/${123456}`}
          className="flex items-center justify-start gap-2 p-4 py-4 text-primary-500 hover:text-primary-700 hover:underline"
        >
          <span>
            <TbSettings className="text-lg" />
          </span>
          <span>Account Settings</span>
        </Link>
      </li>
      <li className="w-full border-b border-dashed  text-center text-sm ">
        <Link
          href={`/${lang}/portal/perfil/${123456}`}
          className="flex items-center justify-start gap-2 p-4 py-4 text-primary-500 hover:text-primary-700 hover:underline"
        >
          <span>
            <MdOutlineContactSupport className="text-lg" />
          </span>
          <span>Support</span>
        </Link>
      </li>
      <li className="flex w-full items-center justify-start  gap-2 p-4 py-4 text-center text-sm text-red-500 hover:text-red-700 hover:underline">
        <span>
          <MdLogout className="text-lg" />
        </span>
        <form action={signOutAction}>
          <button type="submit">Logout</button>
        </form>
      </li>
    </ul>
  );
}
