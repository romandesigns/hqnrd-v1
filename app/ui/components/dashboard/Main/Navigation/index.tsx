import { Locale } from "@/i18n-config";
import React from "react";
import Image from "next/image";

export function Navigation({ lang }: Readonly<{ lang: Locale }>) {
  return (
    <nav className="w-full border border-b">
      <div className="flex items-center justify-end p-4">
        <ul>
          <li className="aspect-square items-center justify-center">
            <Image
              src="/assets/general/male-user-placeholder.png"
              alt="user avatar"
              className="aspect-square rounded-md opacity-[0.20]"
              width={50}
              height={50}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
