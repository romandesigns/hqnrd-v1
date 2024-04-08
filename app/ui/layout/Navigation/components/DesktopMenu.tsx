"use client";
import { BsDoorOpenFill, GoHomeFill, MdSpaceDashboard } from "@/app/ui/icons";
import { Button } from "antd";
import Link from "next/link";

export function DesktopMenu({ lang }: { lang: string }) {
  return (
    <ul className="hidden sm:flex text-sm font-medium gap-2">
      <li className="inline-block">
        <Link href={`/`}>
          <Button
            className="!flex items-center justify-center"
            size="middle"
            icon={<GoHomeFill />}
          >
            Home
          </Button>
        </Link>
      </li>
      <li className="inline-block">
        <Link href={`/habitaciones`}>
          <Button
            className="!flex items-center justify-center"
            size="middle"
            icon={<BsDoorOpenFill />}
          >
            Rooms
          </Button>
        </Link>
      </li>
      {/* <li className="inline-block">
        <Link href={`/portal`}>
          <Button
            className="!flex items-center justify-center"
            size="middle"
            icon={<MdSpaceDashboard />}
          >
            Dashboard
          </Button>
        </Link>
      </li> */}
      <li className="inline-block">
        <Link href={`/auth`}>
          <Button
            className="!flex items-center justify-center"
            size="middle"
            type="primary"
          >
            Sign In
          </Button>
        </Link>
      </li>
    </ul>
  );
}
