import { BsDoorOpenFill, GoHomeFill } from "@/app/ui/icons";
import { Button } from "antd";
import Link from "next/link";
import { AuthBtns } from "./AuthBtns";

export async function DesktopMenu({ lang }: { lang: string }) {
  return (
    <ul className="hidden gap-2 text-sm font-medium sm:flex">
      <li className="inline-block">
        <Link href={`/${lang}`}>
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
        <Link href={`/${lang}/habitaciones`}>
          <Button
            className="!flex items-center justify-center"
            size="middle"
            icon={<BsDoorOpenFill />}
          >
            Rooms
          </Button>
        </Link>
      </li>
      <AuthBtns lang={lang} />
    </ul>
  );
}
