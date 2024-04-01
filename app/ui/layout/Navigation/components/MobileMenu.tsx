"use client";
import { UtilsWidget } from "@/app/ui/components/UtilsWidget";
import { useState } from "react";

import { BsDoorOpenFill, GoHomeFill, MdSpaceDashboard } from "@/app/ui/icons";
import { useNavToggle } from "@/store/mobile-navigation";
import { Button } from "antd";
import Link from "next/link";
import { Drawer } from "./Drawer";

export function MobileMenu({ lang }: { lang: string }) {
  const { closeNavigation } = useNavToggle();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
    console.log("showDrawer");
  };

  const onClose = () => {
    setOpen(false);
    console.log("Close");
  };
  return (
    <>
      <ul className="w-10/12 flex items-center justify-center flex-col gap-6 h-full pb-8">
        <li className="w-full" onClick={() => closeNavigation()}>
          <Link href={`/${lang}`}>
            <Button
              block
              size="large"
              icon={<GoHomeFill size={18} className="text-neutral-700" />}
              className="!flex items-center justify-center shadow-lg bg-white !py-5 gap-2"
            >
              Home
            </Button>
          </Link>
        </li>
        <li className="w-full" onClick={() => closeNavigation()}>
          <Link href={`/${lang}/habitaciones`}>
            <Button
              block
              size="large"
              icon={<BsDoorOpenFill className="text-neutral-700" />}
              className="!flex items-center justify-center shadow-lg bg-white !py-5 gap-2"
            >
              Rooms
            </Button>
          </Link>
        </li>
        <li className="w-full" onClick={() => closeNavigation()}>
          <Link href={`/${lang}/habitaciones`}>
            <Button
              block
              size="large"
              icon={<MdSpaceDashboard size={18} className="text-neutral-700" />}
              className="!flex items-center justify-center shadow-lg bg-white !py-5 gap-2"
            >
              Dashboard
            </Button>
          </Link>
        </li>
        <li className="mt-10 w-full">
          <UtilsWidget setOpen={setOpen} open={open} />
        </li>
        {/* <li className="w-full flex gap-4 mt-auto">
        <Link href={`/${lang}/cerrar-session`} className="flex-1">
          <Button
            block
            size="large"
            className="!flex items-center justify-center shadow-lg !bg-neutral-800 !border-none !text-neutral-100 gap-2"
          >
            Cerrar Session
          </Button>
        </Link>
      </li> */}
        <li
          className="w-full flex gap-4 mt-auto"
          onClick={() => closeNavigation()}
        >
          <Link href={`/${lang}/iniciar-session`} className="flex-1">
            <Button
              type="primary"
              block
              size="large"
              className="!flex items-center justify-center shadow-lg !border-none bg-white gap-2"
            >
              Sign In
            </Button>
          </Link>
          <Link
            href={`/${lang}/auth`}
            className="flex-1"
            onClick={() => closeNavigation()}
          >
            <Button
              block
              size="large"
              className="!flex items-center justify-center shadow-lg !bg-neutral-800 !border-none !text-neutral-100 gap-2"
            >
              Create Account
            </Button>
          </Link>
        </li>
      </ul>
      <Drawer setOpen={setOpen} open={open} lang={lang} />
    </>
  );
}
