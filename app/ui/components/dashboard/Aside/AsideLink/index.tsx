import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { Locale } from "@/i18n-config";
import cn from "classnames";

export const AsideLink = ({
  lang,
  path,
  Icon,
  text,
}: {
  lang: Locale;
  path?: string;
  Icon: IconType;
  text: string;
}) => {
  let active = true;
  return (
    <li className="group sm:hover:bg-neutral-200">
      <Link
        href={`/${lang}/portal${path}`}
        className={cn(
          `flex w-full items-center justify-between space-x-2 p-2 group-hover:bg-neutral-200`,
          {
            "bg-primary-200": active,
          },
        )}
      >
        <div>
          <span className="sm:mr-2">
            <Icon className="text-lg text-neutral-400 group-hover:text-neutral-500  sm:inline-block sm:text-xl" />
          </span>
          <p className="hidden text-sm sm:inline-block">{text}</p>
        </div>

        <span className="block h-8 w-1 rounded-md transition-all delay-100 group-hover:bg-neutral-400" />
      </Link>
    </li>
  );
};
