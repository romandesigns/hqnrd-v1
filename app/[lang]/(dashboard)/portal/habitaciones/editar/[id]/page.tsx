import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { RoomCard } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { Button, Empty } from "antd";
import cn from "classnames";

export default async function Page({
  params: { lang, id },
}: Readonly<{
  params: { lang: Locale; id: string };
}>) {
  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">Editando Habitacion #{id}</div>
      </Navigation>
      <section className="lg:p-2">
        <article
          className={cn(
            "flex h-full w-full items-center justify-center rounded-md bg-white",
          )}
        >
          Page to edit {id}
        </article>
      </section>
    </>
  );
}
