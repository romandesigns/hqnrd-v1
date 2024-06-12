import { SupportTable } from "@/app/ui/components/dashboard/layout/Main/support/table/SupportTable";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { TicketTableDataTypes } from "@/types";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dataSource: TicketTableDataTypes[] = [
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
      actions: undefined,
    },
  ];

  return (
    <>
      <Navigation lang={lang} className="px-4">
        <div className="hidden font-bold md:inline-block">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="grid h-full w-full grid-rows-[auto_1fr]  rounded-md bg-white">
          <SupportTable dataSource={dataSource} lang={lang} />
        </article>
      </section>
    </>
  );
}
