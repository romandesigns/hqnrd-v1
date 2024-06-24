import { createClient } from "@/utils/supabase/server";
import { cache } from 'react';
import { format } from "../formatter/format";

export const getUser = cache(async () => {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});

export const getStaffMembers = cache(async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("guests")
    .select("id, role, name, last_name")
    .not("role", "eq", "guest");
  if (error) {
    throw error;
  }
  if (!data) {
    return []; // or handle no data case as needed
  }
  const staffMembers = data.map((member) => ({
    id: member.id,
    role: member.role,
    name: `${format.firstLetterToUpperCase(member.name)} ${format.firstLetterToUpperCase(member.last_name)}`, // Concatenate name and last_name
  }));
  return staffMembers;
});

export const getAllTickets = cache(async () => {
  const supabase = createClient();
  const tickets = await supabase
  .from('tickets')
  .select('*') // Explicitly list columns
  .order('created_at', { ascending: false });
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