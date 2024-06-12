"use client";

import { SupportTableProps, TicketTableDataTypes } from "@/types";
import { Button, Table } from "antd";
import React from "react";
import { actionBtns } from "./ActionBtns";
import { columns } from "./Columns";
import { TicketForm } from "./TicketForm";

export function SupportTable({
  lang,
  className = "",
  dataSource,
}: Readonly<SupportTableProps>) {
  return (
    <>
      <TicketForm />
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
                  {actionBtns()}
                </li>
              </ul>
            ),
          }}
        />
      </div>
    </>
  );
}
