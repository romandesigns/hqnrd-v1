"use client";
import { HorizontalContactWidget, SignOutBtn } from "@/app/ui/features";
import { BsDoorOpenFill, GoHomeFill, MdSpaceDashboard } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { useNavToggle } from "@/store/mobile-navigation";
import { UserProfileTypes } from "@/types/types";
import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";

export function MobileMenu({
  lang,
  user,
}: {
  lang: Locale;
  user: UserProfileTypes;
}) {
  const { closeNavigation } = useNavToggle();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="flex h-full w-10/12 flex-col items-center justify-center gap-6 pb-8">
        <li className="w-full" onClick={() => closeNavigation()}>
          <Link href={`/${lang}`}>
            <Button
              block
              size="large"
              icon={<GoHomeFill size={18} className="text-neutral-700" />}
              className="!flex items-center justify-center gap-2 bg-white !py-5 shadow-lg"
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
              className="!flex items-center justify-center gap-2 bg-white !py-5 shadow-lg"
            >
              Rooms
            </Button>
          </Link>
        </li>
        {user?.authenticated && (
          <li className="w-full" onClick={() => closeNavigation()}>
            <Link href={`/${lang}/habitaciones`}>
              <Button
                block
                size="large"
                icon={
                  <MdSpaceDashboard size={18} className="text-neutral-700" />
                }
                className="!flex items-center justify-center gap-2 bg-white !py-5 shadow-lg"
              >
                Dashboard
              </Button>
            </Link>
          </li>
        )}
        <li className="mt-10 w-full">
          <HorizontalContactWidget
            setOpen={setOpen}
            open={open}
            lang={lang}
            component="drawer"
          />
        </li>
        {!user?.authenticated ? (
          <li
            className="mt-auto flex w-full gap-4"
            onClick={() => closeNavigation()}
          >
            <Link href={`/${lang}/auth/iniciar-session`} className="flex-1">
              <Button
                type="primary"
                block
                size="large"
                className="!flex items-center justify-center gap-2 !border-none bg-white shadow-lg"
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
                className="!flex items-center justify-center gap-2 !border-none !bg-neutral-800 !text-neutral-100 shadow-lg"
              >
                Create Account
              </Button>
            </Link>
          </li>
        ) : (
          <>
            <br />
            <SignOutBtn size="large" formClassName="w-full" />
          </>
        )}
      </ul>
    </>
  );
}
