import { Carousel } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import { Country } from "react-phone-number-input";
import { Card } from "../Card";
import { images } from "../company";
import { SignUpForm } from "./SignUpForm";

export function Content({
  lang,
  locale,
}: Readonly<{ lang: Locale; locale: Country }>) {
  return (
    <>
      <Carousel images={images} className="relative hidden lg:flex" />
      <Card
        size="middle"
        lang={lang}
        className="p-0 [&>section>div]:mb-2 [&>section>div]:p-4 [&>section>div]:py-6 [&>section]:p-0 [&>section]:lg:rounded-none"
      >
        <article className="m-auto grid max-w-lg grid-cols-1 grid-rows-1 flex-col bg-white">
          <div className="grid grid-cols-1 grid-rows-[1fr_auto_auto]">
            <div className="flex flex-col items-center justify-center self-center rounded-md px-4 lg:h-auto lg:px-4">
              <SignUpForm lang={lang} locale={locale as Country} />
            </div>
            <div className="flex -translate-y-[1px] justify-center md:hidden">
              <div className="w-4/5">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
              </div>
            </div>
            <div className="my-2 flex items-center justify-center">
              <p className="text-center text-xs font-medium">
                Already have an account?{" "}
                <Link
                  href={`/${lang}/auth/iniciar-session`}
                  className="ml-2 text-primary-500 underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </article>
      </Card>
    </>
  );
}
