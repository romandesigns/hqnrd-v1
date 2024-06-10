"use client";

import React from "react";
import { Table } from "antd";
import { TableTag } from "@/app/ui/features";
import { SupportTableProps } from "@/types";
import type { TableColumnsType } from "antd";

export function SupportTable({
  lang,
  className = "",
  dataSource,
}: Readonly<SupportTableProps>) {
  interface DataType {
    key: React.Key;
    title: string;
    assignee: number;
    type: string;
    priority: string;
    location: string;
    component: string;
    status: string;
    description: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
      responsive: ["md"],
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority: string) => <TableTag label={priority} />,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["md"],
    },
    {
      title: "Component",
      dataIndex: "component",
      key: "component",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (priority: string) => <TableTag label={priority} />,
      responsive: ["md"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["md"],
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}
