import { Brand, GoBack } from "@/app/ui/features";
import Link from "next/link";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { Button } from "antd";
import { Locale } from "@/i18n-config";
import { SignInForm } from "./SignInForm";

export function Content({ lang }: { lang: Locale }) {
  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <section className="absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-white p-4 lg:relative lg:h-auto lg:max-w-lg lg:rounded-md">
        <article className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-10 rounded-md border p-2">
          <div className="flex w-full justify-between p-2">
            <GoBack />
            <Link href={`/${lang}`}>
              <Button
                type="default"
                icon={<GoHomeFill className="text-neutral-500" />}
                size={"large"}
                className="!flex items-center justify-center"
              />
            </Link>
          </div>
          <div className="m-auto flex max-w-lg flex-col items-center justify-center gap-10 px-3 lg:px-16">
            <Brand />
            <p className="w-4/5 text-center text-xs font-bold underline">
              SIGN IN
            </p>
            <SignInForm lang={lang} />
            <div className="my-2 flex flex-col items-center justify-center gap-6">
              <Link
                href={`/${lang}/iniciar-session`}
                className="ml-2 text-center text-xs font-medium text-primary-500 underline"
              >
                Forgot Password
              </Link>
              <p className="text-center text-xs font-medium">
                Don&#39;t have an account?
                <Link
                  href={`/${lang}/auth`}
                  className="ml-2 text-primary-500 underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </article>
      </section>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] rounded-md bg-black/20 backdrop-blur-xl backdrop-filter" />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')] bg-cover bg-center bg-no-repeat" />
    </main>
  );
}
