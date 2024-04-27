import { Brand, GoBack } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { Country } from "react-phone-number-input";
import { SlideShow, images } from "../company";
import { SignUpForm } from "./SignUpForm";

export function Content({
  lang,
  locale,
}: Readonly<{ lang: Locale; locale: Country }>) {
  return (
    <>
      <SlideShow images={images} className="relative hidden lg:flex" />
      <article className="m-auto grid max-w-lg grid-cols-1 grid-rows-1 flex-col rounded-md bg-white p-2 lg:rounded-bl-none lg:rounded-tl-none lg:px-4">
        <div className="grid grid-cols-1 grid-rows-[1fr_auto_auto]">
          <div className="rounded-m flex flex-col items-center justify-center self-center rounded-md border bg-white p-4 shadow-md lg:h-auto lg:p-2 lg:px-6">
            <div className="flex w-full justify-between p-1 px-0">
              <GoBack />
              <Link href="/">
                <Button
                  type="default"
                  icon={<GoHomeFill className="text-neutral-500" />}
                  size={"large"}
                  className="!flex items-center justify-center"
                />
              </Link>
            </div>
            <div className="mb-4 flex flex-col items-center justify-center">
              <Brand className="my-8 lg:my-4" />
            </div>
            <SignUpForm lang={lang} locale={locale as Country} />
          </div>
          <div className="flex -translate-y-[1px] justify-center">
            <div className="w-4/5">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            </div>
          </div>
          <div className="my-2 flex items-center justify-center">
            <p className="text-center text-xs font-medium">
              Already have an account?{" "}
              <Link
                href={`/${lang}/iniciar-session`}
                className="ml-2 text-primary-500 underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
