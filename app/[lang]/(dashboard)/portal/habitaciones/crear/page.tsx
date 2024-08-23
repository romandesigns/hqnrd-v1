import { TopMenuContent } from "@/app/ui/components/dashboard/layout";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { roomsNavContent } from "../navbarContent";
import NewRoomFormDetails from "./NewRoomFormDetails";
import { getAllCategories } from "@/utils/supabase/queries/categories";
import { IoArrowBackCircleSharp } from "@/app/ui/icons";
import Link from "next/link";
import { Button } from "antd";

export default async function Page({
  params: { lang },
  searchParams: { skip },
}: Readonly<{
  params: { lang: Locale };
  searchParams: { skip: string };
}>) {
  const skiptCategory = Boolean(skip);
  const fetchedCategories = await getAllCategories();
  return (
    <>
      <Navigation
        lang={lang}
        className="grid-rows-[auto_auto] max-sm:grid max-sm:grid-cols-[auto_auto] max-sm:[&>a+div+div]:col-end-7 max-sm:[&>a+div+div]:row-end-2"
      >
        <div className="col-span-full my-4 font-bold">DASHBOARD</div>
      </Navigation>
      <section className="grid grid-rows-[auto_1fr] rounded-md border border-red-400 bg-white max-sm:grid-cols-1 lg:p-2">
        <nav className="col-span-full flex justify-between p-4">
          <Link href={`/${lang}/portal/habitaciones`}>
            <IoArrowBackCircleSharp className="text-neutral-900" size={30} />
          </Link>
          <ul className="relative grid w-full max-w-xs grid-cols-[auto_1fr_auto_1fr] items-center justify-center gap-4">
            <li className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-4">
              1
            </li>
            <li className="h-1 w-80 bg-red-500" />
            <li className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-4">
              2
            </li>
            <li className="h-1 w-80 bg-red-500" />
            <li className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 p-4">
              3
            </li>
          </ul>
          <Button className="!bg-neutral-900 !text-white" size="large">
            Finish
          </Button>
        </nav>
        <article
          className={
            "flex h-full w-full flex-col items-center justify-center gap-4 rounded-md"
          }
        >
          <NewRoomFormDetails
            params={{ lang }}
            fetchedCategories={fetchedCategories}
          />
        </article>
      </section>
    </>
  );
}
