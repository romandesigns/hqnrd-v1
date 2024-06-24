"use client";

import { TableTag } from "@/app/ui/features";
import { Locale } from "@/i18n-config";
import { StaffMemberTypes, TicketTypes } from "@/types/types";
import { calculateRemainingTime } from "@/utils/countDownTimer";
import { createClient } from "@/utils/supabase/client";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
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
  const supabase = createClient();

  const calculateRemainingTimeToCompleteTask = (due: string | undefined) => {
    const remainingTime = calculateRemainingTime(due);
    return remainingTime;
  };

  useEffect(() => {
    const fetchTickets = async () => {
      supabase
        .channel("custom-insert-channel")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "tickets" },
          (payload) => {
            console.log(payload);
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
          (payload) => {
            console.log("Change received!", payload);
          },
        )
        .subscribe();
    };
    fetchTickets();
  }, [supabase, tickets]);

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
      render: (_, record) =>
        calculateRemainingTimeToCompleteTask(`${record.due as string}`),
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
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <TicketForm lang={lang} author={user} staffMembers={staffMembers} />
      <div className="p-2 md:p-4">
        <Table
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
