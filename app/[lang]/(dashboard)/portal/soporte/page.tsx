import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { IoMdAddCircleOutline } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";

import { SupportTable } from "@/app/ui/components/dashboard/layout/Main/support/table/SupportTable";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dataSource = [
    {
      key: "1",
      title: "Implement new payment method",
      type: "Development",
      assignee: "Juan Luis",
      priority: "high",
      location: "Dashboard",
      component: "Aside",
      status: "in progress",
      description: "The side bar is not working on mobile devices",
    },
  ];

  return (
    <>
      <Navigation lang={lang} className="px-4">
        <div className="hidden font-bold md:inline-block">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="grid h-full w-full grid-rows-[auto_1fr]  rounded-md bg-white">
          <div className="flex w-full items-center justify-end p-8 pb-0">
            <button className="flex items-center justify-center gap-2 rounded-md bg-primary-400 px-4 py-2 text-white shadow-md">
              <IoMdAddCircleOutline size={20} />
              <span>New</span>
            </button>
          </div>
          <div className="p-2 md:p-8">
            <SupportTable dataSource={dataSource} lang={lang} />
          </div>
        </article>
      </section>
    </>
  );
}
