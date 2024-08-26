import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { IoArrowBackCircleSharp } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { getAllCategories } from "@/utils/supabase/queries/categories";
import { Button } from "antd";
import Link from "next/link";
import NewRoomFormDetails from "./NewRoomFormDetails";

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
      <section className="grid grid-cols-1 grid-rows-[auto_1fr] rounded-md bg-white lg:p-2">
        <nav className="flex justify-between border-b p-4">
          <Link href={`/${lang}/portal/habitaciones`}>
            <IoArrowBackCircleSharp className="text-neutral-900" size={40} />
          </Link>
          <Button className="!bg-neutral-900 !text-white" size="large">
            Finish
          </Button>
        </nav>
        <article
          className={
            "grid h-full w-full grid-cols-1 grid-rows-[auto_1fr] items-center justify-center gap-4 rounded-md"
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
