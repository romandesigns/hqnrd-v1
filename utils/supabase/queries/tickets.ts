import { createClient } from "@/utils/supabase/server";
import { cache } from 'react';

export const getAllTickets = cache(async () => {
  const supabase = createClient();
  const tickets = await supabase
  .from('tickets')
  .select('*') 
  .order('created_at', { ascending: false });
  //@ts-ignore
  const addingKeyPropToTickers = tickets.data?.map(ticket => ({
    ...ticket,
    key: ticket.id
  }))
  const ticketsResponse = {
    ...tickets,
    data: addingKeyPropToTickers
  }
  return ticketsResponse;
});

export const completeTicket = cache(async (ticketId: string, duration: string) => {
  const supabase = createClient();
  const tickets = await supabase
  .from('tickets')
  .update({'ticket_duration': duration})
  .eq('id', ticketId)
  .select();
  return tickets;
});