import { BsDoorOpenFill, GoHomeFill, MdSpaceDashboard } from "@/app/ui/icons";
import { Button } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@/types";
import { signOutAction } from "@/utils/actions/signOut";
import { SignOutBtn } from "./SignOutBtn";

export async function DesktopMenu({ lang }: { lang: string }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

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
      <li className="inline-block">
        <Link href={`/${lang}/about`}>
          <Button
            className="!flex items-center justify-center"
            size="middle"
            icon={<BsDoorOpenFill />}
          >
            About
          </Button>
        </Link>
      </li>
      {user && (
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
            <SignOutBtn />
          </li>
        </>
      )}
      {!user && (
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
