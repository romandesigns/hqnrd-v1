import { Backdrop, Blurdrop, Brand, GoBack } from "@/app/ui/features";
import { FaRegBuilding, GoHomeFill, HiOutlineUser } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { CONSTANTS } from "@/utils/constants";
import { Button } from "antd";
import Link from "next/link";

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  return (
    <main className="relative flex min-h-dvh items-center justify-center">
      <section className="absolute bottom-0 left-0 right-0 top-0 z-[2] h-full w-full bg-white p-4 sm:relative sm:h-auto sm:max-w-lg sm:rounded-md">
        <article className="grid h-full grid-cols-1 grid-rows-[auto_1fr] gap-10 rounded-md border p-2">
          <div className="flex w-full justify-between p-2">
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
          <div className="flex flex-col items-center justify-center gap-8">
            <Brand />
            <p className="w-4/5 text-center text-xs font-bold underline">
              {CONSTANTS.Heading.CREATE_ACCOUNT}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href={`/auth/crear-cuenta/usuario`}
                className="flex flex-col items-center justify-center"
              >
                <div className="h-36 w-36 rounded-md border border-primary-100 bg-primary-50 p-1 sm:hover:cursor-pointer sm:hover:bg-primary-100">
                  <span className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-md bg-primary-100/15 p-2">
                    <HiOutlineUser size={25} className="text-primary-500" />
                    <h3 className="text-[0.65rem] font-bold uppercase text-primary-800">
                      Guest
                    </h3>
                  </span>
                </div>
              </Link>
              <Link
                href={`/auth/crear-cuenta/empresa`}
                className="flex flex-col items-center justify-center"
              >
                <div className="h-36 w-36 gap-1 rounded-md border border-neutral-200 bg-neutral-50 p-1 sm:hover:cursor-pointer sm:hover:bg-neutral-100">
                  <span className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-md bg-neutral-100 p-2">
                    <FaRegBuilding size={25} className="text-neutral-800" />
                    <h3 className="text-[0.65rem] font-bold uppercase text-neutral-800">
                      Company
                    </h3>
                  </span>
                </div>
              </Link>
            </div>
            <p className="pb-8 text-center text-xs font-bold">
              <span className="block pb-2">{CONSTANTS.Contact.PHONE_CTA}</span>
              <span className="block font-bold text-primary-500 underline">
                {CONSTANTS.Contact.PHONE_NUMBER}
              </span>
            </p>
          </div>
        </article>
      </section>
      <Blurdrop blurLevel="xl" />
      <Backdrop backgroundImg="bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')]" />
    </main>
  );
}
