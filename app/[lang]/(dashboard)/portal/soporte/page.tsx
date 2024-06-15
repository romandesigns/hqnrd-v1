import { TicketNavMenu } from "@/app/ui/components/dashboard/layout";
import { SupportTicketsTable } from "@/app/ui/components/dashboard/layout/Main/support/tickets/table/SupportTable";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <Navigation lang={lang} className="flex justify-between px-4">
        <div className="hidden font-bold md:inline-block">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="grid h-full w-full grid-rows-[auto_auto_1fr] rounded-md bg-white">
          <div className="flex justify-start border-b p-4">
            <TicketNavMenu lang={lang} />
          </div>
          <div className="p-2 md:p-4">Support Page!</div>
        </article>
      </section>
    </>
  );
}
