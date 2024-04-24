"use client";
import { BsDoorOpenFill, GoHomeFill, MdSpaceDashboard } from "@/app/ui/icons";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@/types";

export async function DesktopMenu({ lang }: { lang: string }) {
  const [isUser, setIsUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const getUser = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        return;
      }
      setIsUser(data.user as User);
    };
    getUser();
  }, []);

  const signOutUser = async () => {
    await createClient().auth.signOut();
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
            onClick={() => signOutUser()}
          >
            Rooms
          </Button>
        </Link>
      </li>
      {isUser?.aud === "authenticated" ? (
        <>
          <li className="inline-block">
            <Link href={`/${lang}/portal`}>
              <Button
                className="!flex items-center justify-center"
                size="middle"
                icon={<MdSpaceDashboard />}
              >
                Dashboard
              </Button>
            </Link>
          </li>
          <li className="inline-block">
            <Button
              className="!flex items-center justify-center !bg-neutral-800 !text-white"
              size="middle"
            >
              Sign Out
            </Button>
          </li>
        </>
      ) : (
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
      )}
    </ul>
  );
}
