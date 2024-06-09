import { TechnicalSupportNavigation } from "@/app/ui/components/dashboard/Main/technical-support/Navigation";
import { TicketCard } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Card";
import { Menu } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Menu";
import { TableComponent } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Table";
import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";

const getTickets = async () => {
  const supabase = createClient();
  // Fetch tickets
  const { data, error } = await supabase.from('tickets').select('*');
  if (!data) {
    console.error('No data found for tickets.');
    return [];
  }
  // Fetch assignee and author profiles
  const assigneePromise = supabase.from('profiles').select('id,name, last_name').eq('id', data[0]?.assignee).single();
  const authorPromise = supabase.from('profiles').select('id,name, last_name').eq('id', data[0]?.author_id).single();
  
  // Wait for both promises to resolvemountain bike454
  const [assignee, author] = await Promise.all([assigneePromise, authorPromise]);

  // Assign assignee and author to each ticket
  if(!assignee && !author) return;
  const staff = { assignee: assignee.data, author:author.data };
  return data.map((ticket) => ({ ...ticket, staff }));
};

export default async function Page({
  params: { lang },
  searchParams:{id},
}: Readonly<{
  params: { lang: Locale };
  searchParams: {id: string};
}>) {
  
  const tickets = await getTickets();
  const supabase = createClient();
  const {data:{user}} = await supabase.auth.getUser();

  return (
    <>
      <TechnicalSupportNavigation lang={lang} pageTitle="Tickets" />
      <section className="grid grid-rows-[auto_1fr] grid-cols-1 h-full w-full p-4 @container">
        <Menu lang={lang} />
        <article className="grid grid-cols-4 auto-rows-min w-full p-4 bg-white gap-4 max-[1730px]:grid-cols-2 max-[2196px]:grid-cols-3 max-[1282px]:grid-cols-1 overflow-y-auto max-h-[350rem]">
        {/* <article className="grid grid-cols-1 grid-rows-1 overflow-y-auto"> */}
          {
            tickets?.map((ticket) => (
              <TicketCard id={id} lang={lang} key={ticket.id} ticket={ticket} user={user?.user_metadata}/>
            ))
          }
          {/* <TableComponent lang={lang}/> */}
        </article>
      </section>
    </>
  );
}
