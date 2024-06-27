import { Locale } from "@/i18n-config";
import {
  updateIsTicketAssignedAction,
  deleteTicketAction,
} from "@/utils/actions/supportTicketActions";
import { Button } from "antd";
import React from "react";
import { StatusActionBtns } from "./StatusActionBtns";
import { MdAssignment, MdDelete } from "@/app/ui/icons";

export function ActionBtns({
  authorId,
  userId,
  ticketId,
  assigned,
  assigneeId,
  ticketStatus,
  lang,
}: Readonly<{
  authorId: string;
  userId: string;
  ticketId: React.Key;
  assigned: boolean;
  assigneeId: string;
  ticketStatus: string;
  lang: Locale;
}>) {
  const handleUpdateIsTicketAssigned = async (status: string) => {
    const formData = new FormData();
    formData.append("ticketId", String(ticketId));
    formData.append("status", status);
    formData.append("lang", lang);
    await updateIsTicketAssignedAction(formData);
  };

  const handleDeleteTicket = async (ticketId: string) => {
    const formData = new FormData();
    formData.append("ticketId", String(ticketId));
    formData.append("lang", lang);
    await deleteTicketAction(formData);
  };

  return (
    <>
      <StatusActionBtns
        handleUpdateIsTicketAssigned={handleUpdateIsTicketAssigned}
        ticketStatus={ticketStatus}
      />
      {userId === assigneeId && ticketStatus !== "completed" ? (
        <>
          <Button
            className="!flex items-center justify-center rounded-md !border-red-400 shadow-md"
            onClick={() => handleDeleteTicket(ticketId as string)}
          >
            <span className="text-red-400">
              <MdDelete />
            </span>
          </Button>
        </>
      ) : null}

      {userId !== assigneeId && ticketStatus !== "completed" ? (
        <>
          <Button
            className="!flex items-center justify-center rounded-md !border-red-400 shadow-md"
            onClick={() => handleUpdateIsTicketAssigned(ticketId as string)}
          >
            <span className="text-red-400">
              <MdDelete />
            </span>
          </Button>
          {authorId !== assigneeId && (
            <Button
              className="!flex items-center justify-center rounded-md !border-neutral-400 shadow-md"
              onClick={() =>
                handleUpdateIsTicketAssigned(
                  assigned ? "unassigned" : "assigned",
                )
              }
            >
              <span className="text-neutral-400">
                <MdAssignment />
              </span>
            </Button>
          )}
        </>
      ) : null}
    </>
  );
}
