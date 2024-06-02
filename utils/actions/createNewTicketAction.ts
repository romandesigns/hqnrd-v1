"use server";
import { headers } from "next/headers";
import { createClient } from "../supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createNewTicketAction(prevState: any, formData: FormData) {

  const origin = headers().get("origin");
  const supabase = createClient()
  const {data: supadata} = await supabase.auth.getUser();
  
  const localData = {
    assignee: prevState.assignee,
    author_id: supadata?.user?.id,
    description: prevState.description,
    dueDate: prevState.dueDate,
    implementationType: formData.get('implementationType'),
    issueType: prevState.issueType,
    location: prevState.location || 'N/A',
    pageComponent: formData.get('pageComponent'),
    pageLocation: formData.get('pageLocation'),
    priority: prevState.priority,
    title: formData.get("title")
  };

  const { data, error } = await supabase
  .from('tickets')
  .insert([localData])
  .select()

  if(data){
    revalidatePath(`/${formData.get('lang')}/portal/soporte-technico/tickets}`);
    redirect(`/${formData.get('lang')}/portal/soporte-technico/tickets}`);

    return {
      success: true,
      message: "Ticket created successfully"
    }
  }
  
  return {
    success: false,
    message: "Ticket creation failed"
  }
}
