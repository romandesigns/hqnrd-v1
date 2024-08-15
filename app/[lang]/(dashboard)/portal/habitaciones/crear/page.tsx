import { TopMenuContent } from "@/app/ui/components/dashboard/layout";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { Button, Input } from "antd";
import Link from "next/link";
import { roomsNavContent } from "../navbarContent";
import NewCategoryForm from "@/app/ui/components/dashboard/layout/Main/habitaciones/crear/NewCategoryForm";
import { newRoomCategoryAction } from "@/utils/actions";

export default async function Page({
  params: { lang },
  searchParams: { skip_category },
}: Readonly<{
  params: { lang: Locale };
  searchParams: { skip_category: string };
}>) {
  const skiptCategory = Boolean(skip_category);

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
            "flex h-full w-full flex-col items-center justify-center gap-4 rounded-md"
          }
        >
          <form className="flex">
            <input
              type="text"
              name="lang"
              className="hidden"
              value={lang}
              readOnly
            />
            <Input
              type="text"
              name="title"
              placeholder="Enter new category"
              size="large"
              className="!rounded-br-none !rounded-tr-none"
            />
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="!rounded-bl-none !rounded-tl-none"
              formAction={newRoomCategoryAction}
            >
              Add Category
            </Button>
          </form>
          <Link
            href={`/${lang}/portal/habitaciones/crear?skip_category=true`}
            className="text-primary-500 underline"
          >
            Skip
          </Link>
        </article>
      </section>
    </>
  );
}
