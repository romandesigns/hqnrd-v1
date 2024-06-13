"use client";

import { TableTag } from "@/app/ui/features";
import { SupportTableProps, TicketTableDataTypes } from "@/types";
import type { TableColumnsType } from "antd";
import { Button, Table } from "antd";
import { TicketForm } from "./TicketForm";

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
      responsive: ["sm"],
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
          <div className="flex gap-3">
            {record.authorId === userId ? (
              <>
                <Button
                  type="primary"
                  className="!flex items-center justify-center rounded-md !bg-green-400  shadow-md"
                  onClick={() => console.log("Start")}
                >
                  <span className="text-white">Start</span>
                </Button>
                <Button
                  type="primary"
                  className="!flex items-center justify-center rounded-md !bg-blue-400  shadow-md"
                  onClick={() => console.log("Complete")}
                >
                  <span className="text-white">Complete</span>
                </Button>

                <Button
                  type="primary"
                  className="!flex items-center justify-center rounded-md  !bg-orange-400  shadow-md"
                  onClick={() => console.log("Cancel")}
                >
                  <span className="text-white">Cancel</span>
                </Button>
                <Button
                  type="primary"
                  className="!flex items-center justify-center rounded-md  !bg-red-400  shadow-md"
                  onClick={() => console.log("Delete")}
                >
                  <span className="text-white">Delete</span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="primary"
                  className="!flex items-center justify-center rounded-md !bg-green-400  shadow-md"
                  onClick={() => console.log("Start")}
                >
                  <span className="text-white">Start</span>
                </Button>
                <Button
                  type="primary"
                  className="!flex items-center justify-center rounded-md !bg-blue-400  shadow-md"
                  onClick={() => console.log("Complete")}
                >
                  <span className="text-white">Complete</span>
                </Button>
              </>
            )}
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
          className="[&_td>button]:lg:opacity-0"
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
                  <div className="flex gap-3">
                    {record.authorId === userId ? (
                      <>
                        <Button
                          type="primary"
                          className="!flex items-center justify-center rounded-md !bg-green-400  shadow-md"
                          onClick={() => console.log("Start")}
                        >
                          <span className="text-white">Start</span>
                        </Button>
                        <Button
                          type="primary"
                          className="!flex items-center justify-center rounded-md !bg-blue-400  shadow-md"
                          onClick={() => console.log("Complete")}
                        >
                          <span className="text-white">Complete</span>
                        </Button>

                        <Button
                          type="primary"
                          className="!flex items-center justify-center rounded-md  !bg-orange-400  shadow-md"
                          onClick={() => console.log("Cancel")}
                        >
                          <span className="text-white">Cancel</span>
                        </Button>
                        <Button
                          type="primary"
                          className="!flex items-center justify-center rounded-md  !bg-red-400  shadow-md"
                          onClick={() => console.log("Delete")}
                        >
                          <span className="text-white">Delete</span>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          type="primary"
                          className="!flex items-center justify-center rounded-md !bg-green-400  shadow-md"
                          onClick={() => console.log("Start")}
                        >
                          <span className="text-white">Start</span>
                        </Button>
                        <Button
                          type="primary"
                          className="!flex items-center justify-center rounded-md !bg-blue-400  shadow-md"
                          onClick={() => console.log("Complete")}
                        >
                          <span className="text-white">Complete</span>
                        </Button>
                      </>
                    )}
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
