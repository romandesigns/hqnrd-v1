"use client";
import React from "react";
import { Button, Flex } from "antd";
import Link from "next/link";
import {
  BsDoorOpenFill,
  BsTranslate,
  FaMapMarkerAlt,
  GoHomeFill,
  IoLogoWhatsapp,
  MdOutlineTranslate,
  MdSpaceDashboard,
} from "@/app/ui/icons";

export function MobileMenu({ lang }: { lang: string }) {
  return (
    <ul className="w-10/12 flex items-center justify-center flex-col gap-6 h-full pb-8">
      <li className="w-full">
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
      <li className="w-full">
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
      <li className="w-full">
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
      <li>
        <Flex gap="large" wrap="wrap">
          <Button
            type="default"
            icon={<BsTranslate />}
            className="!flex items-center justify-center shadow-lg bg-white"
          />
          <Button
            type="default"
            icon={<FaMapMarkerAlt />}
            className="!flex items-center justify-center shadow-lg bg-white"
          />
          <Button
            type="default"
            icon={<IoLogoWhatsapp />}
            className="!flex items-center justify-center shadow-lg bg-white"
          />
        </Flex>
      </li>
      <li className="w-full flex gap-4 mt-auto">
        <Link href={`/${lang}/iniciar-session`} className="flex-1">
          <Button
            type="primary"
            block
            size="large"
            className="!flex items-center justify-center shadow-lg bg-white !py-5 gap-2"
          >
            Sign In
          </Button>
        </Link>
        <Link href={`/${lang}/auth`} className="flex-1">
          <Button
            block
            size="large"
            className="!flex items-center justify-center shadow-lg !bg-neutral-800 !border-none !text-neutral-100 !py-5 gap-2"
          >
            Create Account
          </Button>
        </Link>
      </li>
    </ul>
  );
}
