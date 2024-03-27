import { GoBack } from "@/app/ui/common/GoBack";
import { Brand } from "@/app/ui/components";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { SignInForm } from "./SignInForm";
import { GoHomeFill } from "@/app/ui/icons";

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  return (
    <main className="min-h-dvh flex items-center justify-center relative">
      <section className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white z-[2] p-4 lg:relative lg:max-w-lg lg:rounded-md">
        <article className="border p-2 rounded-md grid grid-cols-1 grid-rows-[auto_1fr] gap-10 h-full">
          <div className="flex justify-between w-full py-2">
            <GoBack />
            <Link href="/">
              <Button
                size="middle"
                className="!flex items-center justify-center"
                shape="circle"
              >
                <GoHomeFill className="text-neutral-500" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-10 flex-col px-3 lg:px-16 items-center justify-center max-w-lg m-auto">
            <Brand />
            <SignInForm lang={lang} />
            <div className="my-2 flex flex-col items-center justify-center gap-6">
              <Link
                href={`/${lang}/iniciar-session`}
                className="ml-2 underline text-primary-500 text-xs font-medium text-center"
              >
                Forgot Password
              </Link>
              <p className="text-xs font-medium text-center">
                Don&#39;t have an account?
                <Link
                  href={`/${lang}/auth`}
                  className="ml-2 underline text-primary-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </article>
      </section>
      <div className="bg-black/20 absolute top-0 left-0 right-0 bottom-0 rounded-md backdrop-filter backdrop-blur-xl z-[1]" />
      <div className="bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0" />
    </main>
  );
}
