import type { TableColumnsType } from "antd";
import { TicketTableDataTypes } from "@/types";
import { TableTag } from "@/app/ui/features";
import { actionBtns } from "./ActionBtns";

export const columns: TableColumnsType<TicketTableDataTypes> = [
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
    title: "Location",
    dataIndex: "location",
    key: "location",
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
    render: (_, record) => actionBtns(),
  },
];
