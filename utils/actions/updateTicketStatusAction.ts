"use server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";


export async function updateTicketStatusAction(formData: FormData) {

  const origin = headers().get("origin");
  const supabase = createClient()
  const {data: supadata} = await supabase.auth.getUser();
  
  const localData = {
    ticket_id: formData.get('ticket_id'),
    ticket_status: formData.get('ticket_status')
  };

  const { data, error } = await supabase
  .from('tickets')
  .update({ status: localData.ticket_status})
  .eq('id', localData.ticket_id)
  .select()

  if(data){
    revalidatePath(`/${formData.get('lang')}/portal/soporte-technico/tickets}`);
    redirect(`/${formData.get('lang')}/portal/soporte-technico/tickets}`);
  }
  
  return {
    success: false,
    message: "Ticket creation failed"
  }
}
