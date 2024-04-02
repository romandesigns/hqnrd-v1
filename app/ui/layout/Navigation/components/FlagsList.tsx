import React from "react";
import { FlagsTypes } from "@/types";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function FlagsList({ lang }: { lang: string }) {
  const flags: FlagsTypes[] = [
    {
      name: "English",
      icon: "/assets/flags/american-flag.svg",
      locale: "en",
    },
    {
      name: "Spanish",
      icon: "/assets/flags/dominican-flag.svg",
      locale: "es",
    },
    {
      name: "German",
      icon: "/assets/flags/german-flag.svg",
      locale: "de",
    },
  ];
  return flags.map((flag) => (
    <div
      key={flag.locale}
      className={twMerge(
        `h-full flex items-center justify-between rounded-md ring-2 ring-offset-4 bg-neutral-100 ring-neutral-300 relative`,
        classNames({
          "ring-primary-500 bg-primary-100 text-white": flag.locale === lang,
        })
      )}
    >
      <span
        className={twMerge(
          `w-full h-full flex-[2] flex items-center justify-center  uppercase  font-semibold text-neutral-800`,
          classNames({ "text-primary-700": flag.locale === lang })
        )}
      >
        {flag.name}
      </span>
      <span className="flex-[1] rounded-sm p-[0.2rem] overflow-hidden absolute top-1 left-1 bg-white">
        <Image
          src={flag.icon}
          alt={`${flag.name} flag`}
          width={30}
          height={30}
        />
      </span>
    </div>
  ));
}
