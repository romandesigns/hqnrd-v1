/**
 * Renders a form for creating a new account.
 */
import { Brand } from "@/app/ui/components";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import { headers } from "next/headers";
import Link from "next/link";
import { Country } from "react-phone-number-input";
import { AuthCarousel } from "./components/Gallery";
import { SignUpForm } from "./components/SignUpForm";
import { GoHomeFill } from "react-icons/go";

/**
 * Page component for creating a new account.
 * @returns JSX.Element representing the page.
 */

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  const headersList = headers();
  const locales = headersList.get("Accept-Language");
  const locale = locales?.split(",")[0].split("-")[1];

  return (
    <main className="min-h-dvh flex items-center justify-center relative">
      <section className="p-2 flex h-screen w-screen items-center justify-center relative z-[2]">
        <article className="bg-white w-4/12 h-4/5 rounded-lr-md rounded-lr-md relative rounded-tl-md rounded-bl-md overflow-hidden">
          <AuthCarousel />
        </article>
        <article className="bg-white w-3/12 h-4/5 px-4 py-2 grid grid-cols-1 grid-rows-[auto_1fr] rounded-tr-md rounded-br-md flex-col">
          <Link href="/">
            <Button
              size="middle"
              className="!flex items-center justify-center"
              shape="circle"
            >
              <GoHomeFill className="text-neutral-500" />
            </Button>
          </Link>
          <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr]">
            <div className="border p-2 px-8 shadow-md rounded-md flex items-center justify-center flex-col bg-white rounded-tr-m">
              <div className="flex items-center justify-center flex-col my-3">
                <Brand className="my-3" />
                {/* <p className="text-xs font-medium text-center w-4/5 my-3 text-neutral-500">
                  Register and manage your reservations, payments, history and
                  more!
                </p> */}
              </div>
              <SignUpForm lang={lang} locale={locale as Country} />
            </div>
            <div className="flex justify-center -translate-y-[1px]">
              <div className="w-4/5">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-primary-400 to-transparent w-full"></div>
              </div>
            </div>
            <div className="my-4 mb-0">
              <p className="text-xs font-medium text-center">
                Already have an account?{" "}
                <Link
                  href={`/${lang}/iniciar-session`}
                  className="ml-2 underline text-primary-500"
                >
                  Sign in
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
