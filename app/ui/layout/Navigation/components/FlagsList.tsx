import { FlagsTypes } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

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
        `relative flex h-full items-center justify-between rounded-md bg-neutral-100 ring-2 ring-neutral-300 ring-offset-4`,
        classNames({
          "bg-primary-100 text-white ring-primary-500": flag.locale === lang,
        }),
      )}
    >
      <span
        className={twMerge(
          `flex h-full w-full flex-[2] items-center justify-center  font-semibold  uppercase text-neutral-800`,
          classNames({ "text-primary-700": flag.locale === lang }),
        )}
      >
        {flag.name}
      </span>
      <span className="absolute left-1 top-1 flex-[1] overflow-hidden rounded-sm bg-white p-[0.2rem]">
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
