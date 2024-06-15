import { Locale } from "@/i18n-config";
import { updateIsTicketAssignedAction } from "@/utils/actions/supportTicketActions";
import { Button } from "antd";
import React from "react";

export function ActionBtns({
  authorId,
  userId,
  ticketId,
  assigned,
  lang,
}: Readonly<{
  authorId: string;
  userId: string;
  ticketId: React.Key;
  assigned: boolean;
  lang: Locale;
}>) {
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
        className="!flex items-center justify-center rounded-md !border-green-400  shadow-md"
        onClick={() => console.log("Start")}
      >
        <span className="text-green-400">Start</span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md !border-blue-400  shadow-md"
        onClick={() => console.log("Complete")}
      >
        <span className="text-blue-400">Complete</span>
      </Button>
      {/* If the user is the author of the ticket and the ticket is not assigned, show the delete button */}
      {authorId === userId && !assigned && (
        <Button
          className="!flex items-center justify-center rounded-md  !border-red-400  shadow-md"
          onClick={() => console.log("Delete")}
        >
          <span className="text-red-400">Delete</span>
        </Button>
      )}
      <Button
        className="!flex items-center justify-center rounded-md  !border-orange-400  shadow-md"
        onClick={() => console.log("Cancel")}
      >
        <span className="text-orange-400">Cancel</span>
      </Button>
      <Button
        className="!flex items-center justify-center rounded-md  !border-purple-400  shadow-md"
        onClick={() => console.log("Delete")}
      >
        <span className="text-purple-400">Backlog</span>
      </Button>
      {/* If the user is the author of the ticket and the ticket is assigned, show the unassign button */}
      {authorId === userId && (
        <Button
          className="!flex items-center justify-center rounded-md  !border-neutral-400  shadow-md"
          onClick={() =>
            handleUpdateIsTicketAssigned(assigned ? "unassigned" : "assigned")
          }
        >
          <span className="text-neutral-400">
            {assigned ? "Unassigned" : "Assigned"}
          </span>
        </Button>
      )}
    </>
  );
}
