'use client';

import { IoConstruct, MdSpaceDashboard } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export function MenuLinks({
  lang,
}: Readonly<{ lang: Locale; }>) {
  return (
    <>
        <li className="p-2 md:p-3 rounded-md md:w-full">
            <Link href={`/${lang}/portal`} className="flex items-center justify-start md:gap-2 text-xl md:text-sm">
                <span className="p-2 rounded-md border"><MdSpaceDashboard /></span>
                <p className="font-medium hidden md:inline-block">Portal</p>
            </Link>
        </li>
        <li className="p-2 md:p-3 rounded-md md:w-full">
            <Link href={`/${lang}/portal/soporte`} className="flex items-center justify-start md:gap-2 text-xl md:text-sm">
                <span className="p-2 rounded-md border"><IoConstruct /></span>
                <p className="font-medium hidden md:inline-block">Support</p>
            </Link>
        </li>
    </>
  );
}
