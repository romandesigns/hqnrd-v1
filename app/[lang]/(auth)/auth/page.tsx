import { Brand } from "@/app/ui/components";
import { FaRegBuilding, GoHomeFill, HiOutlineUser } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";

export default function Page({
  params: { lang },
}: Readonly<{ params: { lang: Locale } }>) {
  return (
    <main className="min-h-dvh flex items-center justify-center relative">
      <section className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white z-[2] p-4 lg:relative lg:max-w-lg lg:rounded-md">
        <article className="border p-2 rounded-md grid grid-cols-1 grid-rows-[auto_1fr] gap-10 h-full">
          <div className="flex justify-end p-2">
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
          <div className="flex gap-8 flex-col items-center justify-center">
            <Brand />
            <p className="text-xs font-bold text-center w-4/5 underline">
              CREATE ACCOUNT
            </p>
            <div className="gap-4 flex items-center justify-center">
              <Link
                href={`/auth/crear-cuenta/usuario`}
                className="justify-center flex items-center flex-col"
              >
                <div className="w-36 h-36 border border-primary-100 bg-primary-50 rounded-md lg:hover:bg-primary-100 lg:hover:cursor-pointer p-1">
                  <span className="gap-1 bg-primary-100/15 p-2 h-full w-full justify-center flex items-center flex-col rounded-md">
                    <HiOutlineUser size={25} className="text-primary-500" />
                    <h3 className="text-primary-800 uppercase font-bold text-[0.65rem]">
                      Guest
                    </h3>
                  </span>
                </div>
              </Link>
              <Link
                href={`/auth/crear-cuenta/empresa`}
                className="justify-center flex items-center flex-col"
              >
                <div className="gap-1 w-36 h-36 border border-secondary-100 bg-secondary-50 rounded-md lg:hover:bg-secondary-100 lg:hover:cursor-pointer p-1">
                  <span className="gap-1 bg-secondary-100/15 p-2 h-full w-full justify-center flex items-center flex-col rounded-md">
                    <FaRegBuilding size={25} className="text-secondary-500" />
                    <h3 className="text-secondary-800 uppercase font-bold text-[0.65rem]">
                      Company
                    </h3>
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-xs font-bold text-center pb-8">
              <span className="block pb-2">
                Para preguntas porfavor llamarnos al number
              </span>
              <span className="block text-primary-500 underline font-bold">
                809-577-3145
              </span>
            </p>
          </div>
        </article>
      </section>
      <div className="bg-black/20 absolute top-0 left-0 right-0 bottom-0 rounded-md backdrop-filter backdrop-blur-xl z-[1]" />
      <div className="bg-[url('/assets/images/auth/photograph-behind-plant-on-the-table-during-sunset-at-the-hotel-quinto-nivel-rd.webp')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 right-0 bottom-0" />
    </main>
  );
}
