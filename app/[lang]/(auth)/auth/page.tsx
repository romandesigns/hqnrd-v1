import { Brand } from "@/app/ui/components";
import { Locale } from "@/i18n-config";
import { Button } from "antd";
import Link from "next/link";
import { FaRegBuilding } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";

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
            <p className="text-xs font-semibold text-center w-4/5">
              Select one of the two account types you wish to create
            </p>
            <div className="gap-4 flex items-center justify-center">
              <Link
                href={`/auth/crear-cuenta/usuario`}
                className="justify-center flex items-center flex-col"
              >
                <span className="w-36 h-36 border border-primary-100 bg-primary-50 rounded-md justify-center flex items-center lg:hover:bg-primary-100 lg:hover:cursor-pointer">
                  <HiOutlineUser size={25} className="text-primary-500" />
                </span>
                <h3 className="uppercase font-bold text-sm my-2">Guest</h3>
              </Link>
              <Link
                href={`/auth/crear-cuenta/empresa`}
                className="justify-center flex items-center flex-col"
              >
                <span className="w-36 h-36 border border-secondary-100 bg-secondary-50 rounded-md justify-center flex items-center lg:hover:bg-secondary-100 lg:hover:cursor-pointer">
                  <FaRegBuilding size={23} className="text-secondary-500" />
                </span>
                <h3 className="uppercase font-bold text-sm my-2">Company</h3>
              </Link>
            </div>
            <p className="text-sm text-center pb-8">
              <span className="block">
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
