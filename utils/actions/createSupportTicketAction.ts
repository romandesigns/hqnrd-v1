"use server";
import { DevTaskTypes, TicketFormTypes } from "@/types";
import { createSupportTicketSchema } from "@/utils/schemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { format } from "../formatter/format";

export async function createSupportTicketAction(prevState: any) {
  const formData: TicketFormTypes = {
    title: format.toLowerCase(prevState.title),
    priority: format.toLowerCase(prevState.priority),
    due: prevState.dueDate,
    type: format.toLowerCase(prevState.type),
    page: format.toLowerCase(prevState.page) || "N/A",
    component: format.toLowerCase(prevState.component) || "N/A",
    devtask: format.toLowerCase(prevState.dev_task) as DevTaskTypes,
    assigneeId: format.toLowerCase(prevState.assignee),
    authorId: format.toLowerCase(prevState.authorId),
    description: prevState.description,
    status: format.toLowerCase(prevState.status),
    assigned: prevState.assigned,
  };

  const validatedData = createSupportTicketSchema.safeParse(formData);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    return {
      path: path[0],
      errors: message,
      message: null,
    };
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("tickets")
    .insert([formData])
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
