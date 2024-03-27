"use client";
import React from "react";
import { Button } from "antd";
import Link from "next/link";
import { BsDoorOpenFill, GoHomeFill } from "@/app/ui/icons";

export function DesktopMenu({ lang }: { lang: string }) {
  return (
    <ul className="hidden sm:flex text-sm font-medium">
      <li className="inline-block">
        <Link href="/">
          <Button
            className="!flex items-center justify-center"
            type="link"
            size="large"
            icon={<GoHomeFill />}
          >
            Home
          </Button>
        </Link>
      </li>
      <li className="inline-block">
        <Link href="/habitaciones">
          <Button
            className="!flex items-center justify-center"
            type="link"
            size="large"
            icon={<BsDoorOpenFill />}
          >
            Rooms
          </Button>
        </Link>
      </li>
      <li className="inline-block">
        <Link href={`/${lang}/auth`}>
          <Button
            className="!flex items-center justify-center"
            type="link"
            size="large"
            icon={<GoHomeFill />}
          >
            Sign In
          </Button>
        </Link>
      </li>
    </ul>
  );
}
