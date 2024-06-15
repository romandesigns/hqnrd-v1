"use client";

import { TableTag } from "@/app/ui/features";
import { SupportTableProps, TicketTableDataTypes } from "@/types";
import type { TableColumnsType } from "antd";
import { Button, Table } from "antd";
import { TicketForm } from "./TicketForm";
import { ActionBtns } from "./ActionBtns";

export function SupportTicketsTable({
  lang,
  dataSource,
  userId,
  staffMembers,
}: Readonly<SupportTableProps>) {
  const columns: TableColumnsType<TicketTableDataTypes> = [
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
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      responsive: ["lg"],
      render: (_, record) => {
        return (
          <div className="flex gap-2">
            <ActionBtns
              authorId={userId}
              userId={record.authorId}
              ticketId={record.id}
              assigned={record.assigned}
              lang={lang}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <TicketForm lang={lang} userId={userId} staffMembers={staffMembers} />
      <div className="p-2 md:p-4">
        <Table
          className="[&_td>button]:lg:opacity-0 [&_td]:capitalize"
          dataSource={dataSource}
          // @ts-ignore
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
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
                      authorId={userId}
                      userId={record.authorId}
                      ticketId={record.id}
                      assigned={record.assigned}
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
