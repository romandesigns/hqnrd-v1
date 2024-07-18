"use client";

import { BsDoorOpenFill, IoConstruct, MdSpaceDashboard } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import Link from "next/link";

export function MenuLinks({ lang }: Readonly<{ lang: Locale }>) {
  return (
    <>
      <li className="rounded-md p-2 md:w-full md:p-3">
        <Link
          href={`/${lang}/portal`}
          className="flex items-center justify-start text-xl md:gap-2 md:text-sm"
        >
          <span className="rounded-md border p-2">
            <MdSpaceDashboard />
          </span>
          <p className="font-medium max-xl:hidden">Portal</p>
        </Link>
      </li>
      <li className="rounded-md p-2 md:w-full md:p-3">
        <Link
          href={`/${lang}/portal/soporte`}
          className="flex items-center justify-start text-xl md:gap-2 md:text-sm"
        >
          <span className="rounded-md border p-2">
            <IoConstruct />
          </span>
          <p className="font-medium max-xl:hidden">Support</p>
        </Link>
      </li>
      <li className="rounded-md p-2 md:w-full md:p-3">
        <Link
          href={`/${lang}/portal/habitaciones`}
          className="flex items-center justify-start text-xl md:gap-2 md:text-sm"
        >
          <span className="rounded-md border p-2">
            <BsDoorOpenFill />
          </span>
          <p className="font-medium max-xl:hidden">Rooms</p>
        </Link>
      </li>
    </>
  );
}
