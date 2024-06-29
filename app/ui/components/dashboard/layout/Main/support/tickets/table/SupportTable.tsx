"use client";

import { Modal, TableTag } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import {
  StaffMemberTypes,
  TicketTypes,
  closeTicketPayloadTypes,
} from "@/types/types";
import { closeTicketAction } from "@/utils/actions/supportTicketActions";
import CountdownTimer from "@/utils/countDownTimer";
import { createClient } from "@/utils/supabase/client";
import type { TableColumnsType } from "antd";
import { Button, Input, Table } from "antd";
import { useEffect, useState } from "react";
import { ActionBtns } from "./ActionBtns";
import { TicketForm } from "./TicketForm";

interface Props {
  lang: Locale;
  dataSource: TicketTypes[];
  user: {
    id: string;
    name: string;
  };
  staffMembers: StaffMemberTypes[];
}

export function SupportTicketsTable({
  lang,
  dataSource,
  user,
  staffMembers,
}: Props) {
  const [tickets, setTickets] = useState<TicketTypes[]>(dataSource);
  const [submitResolution, setSubmitResolution] = useState(false);
  const [payload, setPayload] = useState<closeTicketPayloadTypes | {}>({});
  const [taskCompletionDuration, setTaskCompletionDuration] = useState("");
  const [description, setDescription] = useState("");
  const [ticketId, setTicketId] = useState("");

  const supabase = createClient();

  // Supabase RealTime
  useEffect(() => {
    const fetchTickets = async () => {
      supabase
        .channel("custom-insert-channel")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "tickets" },
          (payload) => {
            setTickets((prevTickets) => [...(prevTickets as any), payload.new]);
          },
        )
        .on(
          "postgres_changes",
          { event: "UPDATE", schema: "public", table: "tickets" },
          (payload) =>
            setTickets((prevTickets: any) =>
              prevTickets.map((ticket: TicketTypes) =>
                ticket.id === payload.new.id ? payload.new : ticket,
              ),
            ),
        )
        .on(
          "postgres_changes",
          { event: "DELETE", schema: "public", table: "tickets" },
          (payload) =>
            setTickets((prevTickets: any) =>
              prevTickets.filter(
                (ticket: TicketTypes) => ticket.id !== payload.old.id,
              ),
            ),
        )
        .subscribe();
    };
    fetchTickets();
  }, [supabase, tickets]);

  const handleFormResolutionSubmission = (ticketId: string | React.Key) => {
    setSubmitResolution(!submitResolution);
    setTicketId(ticketId as string);
    setPayload({
      status: "completed",
      ticketId: ticketId,
      lang: lang,
      taskCompletionDuration: taskCompletionDuration,
    });
  };

  const columns: TableColumnsType<TicketTypes> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.length - b.title.length,
      onFilter: (value, record) => record.title.startsWith(value as string),
      sortDirections: ["descend"],
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
      responsive: ["lg"],
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      responsive: ["lg"],
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority: string) => <TableTag label={priority} />,
      sorter: (a, b) => a.priority.length - b.priority.length,
    },
    {
      title: "Page",
      dataIndex: "page",
      key: "page",
      responsive: ["sm"],
    },
    {
      title: "Component",
      dataIndex: "component",
      key: "component",
      responsive: ["sm"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (priority: string) => <TableTag label={priority} />,
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["lg"],
    },
    {
      title: "Duration",
      dataIndex: "due",
      key: "due",
      render: (_, record) => (
        <CountdownTimer
          setTaskCompletionDuration={setTaskCompletionDuration}
          targetDate={record.due}
          ticketId={record.id}
          ticketStatus={record.status}
          lang={lang}
          ticketDuration={record.ticket_duration}
        />
      ),
    },
    {
      title: "Actions",

      dataIndex: "actions",
      key: "actions",
      responsive: ["lg"],
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            <ActionBtns
              ticketStatus={record.status}
              userId={user.id}
              authorId={record.author_id}
              ticketId={record.id}
              assigned={record.assigned}
              assigneeId={record.assignee_id}
              lang={lang}
              handleFormResolutionSubmission={handleFormResolutionSubmission}
              setTicketId={setTicketId}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Modal
        title="Close Ticket"
        open={submitResolution}
        setOpen={setSubmitResolution}
      >
        <form
          action={async () => {
            const formData = new FormData();
            formData.append("ticketId", String(ticketId));
            formData.append("completionDuration", taskCompletionDuration);
            formData.append("description", description);
            formData.append("lang", lang);
            const response = await closeTicketAction(formData);
            if (response && response.message === "success") {
              setSubmitResolution(false);
            }
          }}
          className="flex w-full flex-col items-center justify-center rounded-md p-2"
        >
          <div className="flex h-full w-full flex-col">
            <input
              type="text"
              name="status"
              value="completed"
              readOnly
              className="hidden"
            />
            <input
              type="text"
              name="ticketId"
              value={ticketId}
              readOnly
              className="hidden"
            />
            <input
              type="text"
              name="lang"
              value={lang}
              readOnly
              className="hidden"
            />
            <Input.TextArea
              maxLength={200}
              name="ticket_resolution"
              value={description}
              className="p-2"
              showCount
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter ticket resolution"
              style={{ height: 200 }}
            />
            <Button
              type="primary"
              size="large"
              className="my-8 mb-0 flex w-full items-end"
              htmlType="submit"
            >
              Close Ticket
            </Button>
          </div>
        </form>
      </Modal>
      <TicketForm lang={lang} author={user} staffMembers={staffMembers} />
      <div className="p-2 md:p-4">
        <Table
          size="small"
          tableLayout="auto"
          className="[&_td>button]:lg:opacity-0 [&_td]:capitalize"
          dataSource={tickets as TicketTypes[]}
          // @ts-ignore
          columns={columns}
          expandable={{
            expandedRowRender: (record: TicketTypes) => (
              <ul className="flex flex-col gap-2">
                {columns.map((col: any, index) => (
                  <li key={index} className="flex gap-1">
                    {col.title === "Title" ||
                    col.title === "Priority" ||
                    col.title === "Actions" ? null : (
                      <strong>{col.title} :</strong>
                    )}
                    {col.dataIndex === "title" ||
                    col.dataIndex === "priority" ? null : (
                      // @ts-ignore
                      <p>{record[col.dataIndex]}</p>
                    )}
                  </li>
                ))}
                <li className="mt-2 flex flex-col gap-1 border-t py-2">
                  <strong>Actions</strong>
                  <div className="flex gap-1">
                    <ActionBtns
                      ticketStatus={record.status}
                      userId={user.id}
                      authorId={record.author_id}
                      ticketId={record.id}
                      assigned={record.assigned}
                      assigneeId={record.assignee_id}
                      lang={lang}
                      handleFormResolutionSubmission={
                        handleFormResolutionSubmission
                      }
                      setTicketId={setTicketId}
                    />
                  </div>
                </li>
              </ul>
            ),
          }}
        />
      </div>
    </>
  );
}
