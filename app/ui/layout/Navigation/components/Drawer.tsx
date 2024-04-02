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
  lang: string;
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
      height={170}
      onClose={() => setOpen(false)}
      open={open}
    >
      <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-1 h-full w-full gap-6">
        {flags.map((flag) => (
          <div
            key={flag.locale}
            className={twMerge(
              `h-full flex items-center justify-between rounded-md ring-2 ring-offset-4 bg-neutral-100 ring-neutral-300 relative`,
              classNames({
                "ring-primary-500 bg-primary-500 text-white":
                  flag.locale === lang,
              })
            )}
          >
            <span
              className={twMerge(
                `w-full h-full flex-[2] flex items-center justify-center  uppercase  font-semibold text-neutral-800`,
                classNames({ "text-white": flag.locale === lang })
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
        ))}
      </div>
    </DrawerComponent>
  );
}
