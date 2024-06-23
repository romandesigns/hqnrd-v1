import { TicketNavMenu } from "@/app/ui/components/dashboard/layout";
import { SupportTicketsTable } from "@/app/ui/components/dashboard/layout/Main/support/tickets/table/SupportTable";
import { Navigation } from "@/app/ui/components/dashboard/layout/Navigation";
import { Locale } from "@/i18n-config";
import { StaffMemberTypes, TicketTableDataTypes } from "@/types/types";
import { format } from "@/utils/formatter/format";
import {
  getStaffMembers,
  getUser,
  getAllTickets,
} from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server";
import { UserMetadata } from "@supabase/supabase-js";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [user, staffMembers, tickets] = await Promise.all([
    getUser(),
    getStaffMembers(),
    getAllTickets(),
  ]);

  const userData = {
    name: `${format.firstLetterToUpperCase(user?.user_metadata.name)} ${format.firstLetterToUpperCase(user?.user_metadata.last_name)}`,
    id: user?.user_metadata.sub,
  };

  return (
    <>
      <Navigation lang={lang} className="flex justify-between px-4">
        <div className="hidden font-bold md:inline-block">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="grid h-full w-full grid-rows-[auto_auto_1fr] rounded-md bg-white">
          <div className="flex justify-start border-b p-4 px-2">
            <TicketNavMenu lang={lang} />
          </div>
          <SupportTicketsTable
            dataSource={tickets.data as TicketTableDataTypes[]}
            lang={lang}
            user={userData}
            // @ts-ignore
            staffMembers={staffMembers}
          />
        </article>
      </section>
    </>
  );
}
