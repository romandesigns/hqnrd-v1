import { Locale } from "@/i18n-config";
import { updateIsTicketAssignedAction } from "@/utils/actions/supportTicketActions";
import { Button } from "antd";
import React from "react";

export function ActionBtns({
  author,
  authorId,
  ticketId,
  assigned,
  assigneeId,
  ticketStatus,
  lang,
}: Readonly<{
  author: string;
  authorId: string;
  ticketId: React.Key;
  assigned: boolean;
  assigneeId: string;
  ticketStatus: string;
  lang: Locale;
}>) {
  console.log(author);
  const handleUpdateIsTicketAssigned = async (status: string) => {
    const formData = new FormData();
    formData.append("ticketId", String(ticketId));
    formData.append("status", status);
    formData.append("lang", lang);
    await updateIsTicketAssignedAction(formData);
  };
  return (
    <>
      <Button
        className="!flex items-center justify-center rounded-md !border-green-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("started")}
      >
        <span className="text-green-400">
          {ticketStatus == "started" ? "Started" : "Start"}
        </span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md !border-blue-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("completed")}
      >
        <span className="text-blue-400">
          {ticketStatus == "completed" ? "Completed" : "Complete"}
        </span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md !border-purple-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("cancelled")}
      >
        <span className="text-purple-400">
          {ticketStatus == "cancelled" ? "Cancelled" : "Cancel"}
        </span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md !border-red-400 shadow-md"
        onClick={() => handleUpdateIsTicketAssigned("deleted")}
      >
        <span className="text-red-400">
          {ticketStatus == "deleted" ? "Deleted" : "Delete"}
        </span>
      </Button>
      {/* {authorId} */}
      <Button
        className="!flex items-center justify-center rounded-md !border-neutral-400 shadow-md"
        onClick={() =>
          handleUpdateIsTicketAssigned(assigned ? "unassigned" : "assigned")
        }
      >
        <span className="text-neutral-400">
          {assigned ? "Unassign" : "Assign"}
        </span>
      </Button>
    </>
  );
}
