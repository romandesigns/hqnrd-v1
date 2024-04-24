"use client";
import { BsDoorOpenFill, GoHomeFill } from "@/app/ui/icons";
import { createClient } from "@/utils/supabase/client";
import { Button } from "antd";
import Link from "next/link";

export async function DesktopMenu({ lang }: { lang: string }) {
  const supabase = createClient();

  const signOut = async () => {
    await supabase.auth.signOut();
  };

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
      {/* <li className="inline-block">
        <Link href={`/${lang}/portal`}>
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
        <Link href={`/${lang}/auth/iniciar-session`}>
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
