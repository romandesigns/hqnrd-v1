import { TopMenuContent } from "@/app/ui/components/dashboard/layout";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { RoomCard } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { Button, Empty } from "antd";
import cn from "classnames";
import Link from "next/link";
import { roomsNavContent } from "../navbarContent";

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  let rooms = [1, 2, 3, 4, 5];
  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">Habitaciones</div>
      </Navigation>
      <section className="grid grid-cols-1 grid-rows-[auto_1fr] rounded-md bg-white lg:p-2">
        {rooms.length > 0 && (
          <nav className="sticky -top-8 z-[4] col-span-full flex justify-between border-b p-4">
            <TopMenuContent lang={lang} menuLinks={roomsNavContent} />
            <Button type="primary" size="large">
              <Link href={`/${lang}/portal/habitaciones/crear`}>
                Crear Habitacion
              </Link>
            </Button>
          </nav>
        )}
        <article
          className={cn("flex w-full items-center justify-center", {
            "grid max-h-[94vh] grid-rows-[auto_auto_auto] !items-start justify-start gap-4 overflow-y-auto p-1 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:p-8":
              rooms.length > 0,
          })}
        >
          {rooms.length > 0 && rooms ? (
            rooms.map((room, index) => (
              <RoomCard
                key={index}
                roomEditPath={`/${lang}/portal/habitaciones/edit/${index}`}
                roomDeletePath={`/${lang}/portal/habitaciones?remove-unit=${index}`}
                className="mb-0 self-auto border"
                portal
              />
            ))
          ) : (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 60 }}
              description={"No se han agregado habitaciones aun"}
              className="flex flex-col items-center justify-center"
            >
              <div className="my-10">
                <Button type="primary">
                  <Link href={`/${lang}/portal/habitaciones/crear`}>
                    Crear Habitacion
                  </Link>
                </Button>
              </div>
            </Empty>
          )}
        </article>
      </section>
    </>
  );
}
