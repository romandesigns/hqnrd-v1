"use server";
import { headers } from "next/headers";

export async function createNewTicketAction(prevState: any, formData: FormData) {
  const origin = headers().get("origin");

  const data = {
    title: formData.get("title"),
    priority: prevState.priority,
    dueDate: prevState.dueDate,
    issueType: prevState.issueType,
    location: prevState.location,
    assignee: prevState.assignee,
    author:formData.get("author"),
    authorEmail:formData.get("authorEmail"),
    createdOn:formData.get("createdOn"),
  };

  console.log(data);

}
