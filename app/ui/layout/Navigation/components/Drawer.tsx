import { Locale } from "@/i18n-config";
import { Drawer as DrawerComponent } from "antd";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export function Drawer({
  setOpen,
  open,
  lang,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  lang: Locale;
}) {
  type FlagsTypes = {
    name: string;
    icon: string;
    locale: Locale;
  };

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
  return (
    <DrawerComponent
      title="Select Language"
      placement={"bottom"}
      width={500}
      onClose={() => setOpen(false)}
      open={open}
    >
      <div className="grid grid-cols-1 grid-rows-3 h-full w-full gap-6">
        {flags.map((flag) => (
          <div
            key={flag.locale}
            className={twMerge(
              `flex items-center justify-between rounded-md ring-2 ring-offset-4 bg-neutral-100 ring-neutral-300`,
              classNames({
                "ring-primary-500 bg-primary-500 text-white":
                  flag.locale === lang,
              })
            )}
          >
            <span
              className={twMerge(
                `w-full h-full flex-[2] flex items-center justify-center border-r-4 border-white uppercase  font-semibold text-neutral-800`,
                classNames({ "text-white": flag.locale === lang })
              )}
            >
              English
            </span>
            <span className="w-full h-full flex-[1] relative rounded-tr-md rounded-br-md overflow-hidden">
              <Image
                src={flag.icon}
                alt={`${flag.name} flag`}
                fill
                objectFit="cover"
              />
            </span>
          </div>
        ))}
      </div>
    </DrawerComponent>
  );
}
