"use server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";


export async function createNewTicketAction(prevState: any, formData: FormData) {

  const origin = headers().get("origin");
  const supabase = createClient()
  const {data: supadata} = await supabase.auth.getUser();
  
  const localData = {
    assignee: prevState.assignee,
    author_id: supadata?.user?.id,
    description: prevState.description,
    location: prevState.location || 'N/A',
    pageComponent: formData.get('pageComponent'),
    pageLocation: formData.get('pageLocation'),
    implementationType: formData.get('implementationType'), 
    developmentType: prevState.developmentType, 
    issueType: prevState.issueType,
    dueDate: prevState.dueDate,
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
