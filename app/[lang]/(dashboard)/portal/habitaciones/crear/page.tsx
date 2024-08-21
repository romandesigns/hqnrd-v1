import { TopMenuContent } from "@/app/ui/components/dashboard/layout";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { roomsNavContent } from "../navbarContent";
import NewRoomFormDetails from "./NewRoomFormDetails";
import { getAllCategories } from "@/utils/supabase/queries/categories";

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
      <section className="grid rounded-md bg-white max-sm:grid-cols-1 max-sm:grid-rows-[auto_1fr] lg:p-2">
        <nav>
          <div className="sticky -top-8 z-[4] col-span-full flex justify-start border-b p-2">
            <TopMenuContent lang={lang} menuLinks={roomsNavContent} />
          </div>
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
