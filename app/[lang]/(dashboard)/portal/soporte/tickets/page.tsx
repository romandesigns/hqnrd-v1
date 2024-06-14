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

  const staffMembers = await supabase
    .from("profiles")
    .select("id,user_role,name")
    .not("user_role", "eq", "guest");

  const { data } = await supabase.from("tickets").select(`
      id,
      title,
      type,
      priority,
      devtask,
      page,
      component,
      description,
      due,
      status,
      created_at,
      assignee:profiles!tickets_assigneeId_fkey (id,name, last_name),
      author:profiles!tickets_authorId_fkey (id,name, last_name)
    `);

  const tickets = data?.map((ticket) => ({
    ...ticket,
    key: ticket.id,
    //@ts-ignore
    assignee: `${ticket.assignee.name as string} ${ticket.assignee.last_name as string}`,
    //@ts-ignore
    assigneeId: ticket.assignee.id,
    //@ts-ignore
    author: `${ticket.author.name as string} ${ticket.author.last_name as string}`,
    //@ts-ignore
    authorId: ticket.author.id,
  }));

  return (
    <>
      <Navigation lang={lang} className="px-4">
        <div className="hidden font-bold md:inline-block">DASHBOARD</div>
      </Navigation>
      <section className="overflow-hidden p-2">
        <article className="grid h-full w-full grid-rows-[auto_auto_1fr]  rounded-md bg-white">
          <div className="flex justify-start border-b p-4">
            <TicketNavMenu lang={lang} />
          </div>
          <SupportTicketsTable
            dataSource={tickets}
            lang={lang}
            userId={user?.id as string}
            // @ts-ignore
            staffMembers={staffMembers.data}
          />
        </article>
      </section>
    </>
  );
}
