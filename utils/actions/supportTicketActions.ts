"use server";
import { DevTaskTypes, TicketFormTypes } from "@/types/types";
import { createSupportTicketSchema } from "@/utils/schemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { format } from "../formatter/format";

export async function createSupportTicketAction(prevState: any) {
  const supabase = createClient();
  const user = supabase.auth.getUser();

  if (!user) {
    return {
      path: null,
      errors: "User is not authenticated",
      message: null,
    };
  }

  const staffs = {
    author_id: prevState.author.split(",")[1],
    author_name: prevState.author.split(",")[0],
    assignee_id: prevState.assignee.split(",")[1],
    assignee_name: prevState.assignee.split(",")[0],
  }

  const ticket: TicketFormTypes = {
    assigned: prevState.assigned,
    assignee_id: staffs.assignee_id,
    author_id: staffs.author_id,
    author_name: staffs.author_name,
    assignee_name: staffs.assignee_name,
    component: format.toLowerCase(prevState.component) || "N/A",
    description: prevState.description,
    dev_task: format.toLowerCase(prevState.dev_task) as DevTaskTypes,
    due: prevState.dueDate,
    page: format.toLowerCase(prevState.page) || "N/A",
    priority: format.toLowerCase(prevState.priority),
    status: format.toLowerCase(prevState.status),
    title: format.toLowerCase(prevState.title),
    type: format.toLowerCase(prevState.type),
  };

  const validatedData = createSupportTicketSchema.safeParse(ticket);

  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    return {
      path: path[0],
      errors: message,
      message: null,
    };
  }

  const { data, error } = await supabase
    .from("tickets")
    .insert([ticket])
    .select();

  if (error) {
    return {
      path: null,
      errors: error.message,
      message: null,
    };
  }

  if (data) {
    revalidatePath(`/${prevState.lang}/portal/soporte`);
    return {
      path: null,
      errors: null,
      message: "success",
    };
  }
}

export async function updateIsTicketAssignedAction(formData: FormData) {
  const supabase = createClient();

  const status = formData.get("status");
  const ticketId = formData.get("ticketId");
  const lang = formData.get("lang");

  const dataToUpdate: {
    [key: string]: string | boolean | FormDataEntryValue | null;
  } = {};

  if (status === "assigned" || status === "unassigned") {
    dataToUpdate.assigned = status === "assigned";
  }

  if (status !== "assigned" && status !== "unassigned") {
    dataToUpdate.status = status;
  }

  const { data, error } = await supabase
    .from("tickets")
    .update(dataToUpdate)
    .eq("id", ticketId)
    .select();

  if (error) {
    console.log(error);
  }

  if (data) {
    revalidatePath(`/${lang}/portal/soporte/tickets`);
    return {
      path: null,
      errors: null,
      message: "success",
    };
  }
}

export async function deleteTicketAction(formData: FormData) {
  const supabase = createClient();

  const ticketId = formData.get("ticketId");
  const lang = formData.get("lang");

  const { data, error } = await supabase
    .from("tickets")
    .delete()
    .eq("id", ticketId)
    .select();

  if (error) {
    console.log(error);
  }

  if (data) {
    revalidatePath(`/${lang}/portal/soporte/tickets`);
    return {
      path: null,
      errors: null,
      message: "success",
    };
  }
}

export async function handleTicketCompletionAction(formData: FormData) {
    const supabase = createClient();

    const payload = {
      id: formData.get("ticketId") as string,
      ticket_duration: formData.get("completionDuration") as string,
    }

  
    const { data: ticket, ticketError } = await supabase
    .from('tickets')
    .select('ticket_duration')
    .eq('id', payload.id);

    if(!ticket[0].ticket_duration){
      const { data, error } = await supabase
      .from("tickets")
      .update({ticket_duration: payload.ticket_duration})
      .eq("id", payload.id)
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      revalidatePath(`/${formData.get("lang")}/portal/soporte/tickets`);
      redirect(`/${formData.get("lang")}/portal/soporte/tickets`);
    }
  }
}
