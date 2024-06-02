import { TechnicalSupportNavigation } from "@/app/ui/components/dashboard/Main/technical-support/Navigation";
import { TicketCard } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Card";
import { Menu } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Menu";

import { Locale } from "@/i18n-config";
import { createClient } from "@/utils/supabase/server";


const getTicket = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from('tickets').select('*');
  return data;
};



export default async function Page({
  params: { lang },
  searchParams:{ticketId},
}: Readonly<{
  params: { lang: Locale };
  searchParams: {ticketId: string};
}>) {
  
  const tickets = await getTicket();


  return (
    <>
      <TechnicalSupportNavigation lang={lang} pageTitle="Tickets" />
      <section className="grid grid-rows-[auto_1fr] grid-cols-1 h-full w-full p-4 border border-red-500">
        <Menu lang={lang} />
        <article className="grid grid-cols-4 grid-rows-[max-content] grid-flow-row  w-full h-full p-4 bg-white gap-4">
          {
            tickets?.map((ticket) => (
              <TicketCard ticketId={ticketId} lang={lang} key={ticket.id} ticket={ticket}/>
            ))
          }
        </article>
      </section>
    </>
  );
}
