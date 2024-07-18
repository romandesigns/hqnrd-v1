import { TopMenuContent } from "@/app/ui/components/dashboard/layout";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { roomsNavContent } from "../navbarContent";
import cn from "classnames";

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">DASHBOARD</div>
      </Navigation>
      <section className="grid grid-cols-1 grid-rows-[auto_1fr] rounded-md bg-white lg:p-2">
        <nav>
          <div className="sticky -top-8 z-[4] col-span-full flex justify-start border-b p-4">
            <TopMenuContent lang={lang} menuLinks={roomsNavContent} />
          </div>
        </nav>
        <article
          className={
            "flex h-full w-full items-center justify-center rounded-md"
          }
        >
          Content here
        </article>
      </section>
    </>
  );
}
