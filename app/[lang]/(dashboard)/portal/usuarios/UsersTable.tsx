"use client";
import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { Locale } from "@/i18n-config";
import { Guest } from "@/types";
import type { TableProps } from "antd";
import { Button, Space, Table } from "antd";
import React from "react";

import {
  BiBadge,
  BiSolidBadgeCheck,
  BsPassport,
  BsTelephone,
  MdOutlineEmail,
  PiIdentificationBadgeLight,
} from "@/app/ui/icons";

type OnChange = NonNullable<TableProps<Guest>["onChange"]>;
type Filters = Parameters<OnChange>[1];
type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

export function UsersTable({
  dataSource,
  lang,
}: {
  lang: Locale;
  dataSource: Guest[];
}) {
  const [filteredInfo, setFilteredInfo] = React.useState<Filters>({});
  const [sortedInfo, setSortedInfo] = React.useState<Sorts>({});

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const columns: TableProps<Guest>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filterMode: "tree",
      onFilter: (value, record) => record.name.startsWith(value as string),
      filterSearch: true,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text) => (
        <div className="flex items-center gap-3">
          <BsTelephone /> <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => (
        <div className="flex items-center gap-3">
          <MdOutlineEmail /> <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Verfied",
      dataIndex: "verified",
      key: "verified",
      render: (text) => (
        <span className="jus-center flex items-center gap-2">
          {text === "Yes" ? (
            <BiSolidBadgeCheck size={17} className="text-primary-500" />
          ) : (
            <BiBadge size={17} className="text-primary-500" />
          )}
        </span>
      ),
    },
    {
      title: "Identification",
      dataIndex: "identification",
      key: "identification",
      render: (text) => (
        <span className="jus-center flex items-center gap-2">
          {text === "Cedula" ? (
            <BsPassport size={14} />
          ) : (
            <PiIdentificationBadgeLight size={17} />
          )}
          {text}
        </span>
      ),
    },
    {
      title: "Account Type",
      dataIndex: "accountType",
      key: "accountType",
    },
    {
      title: "Account Status",
      dataIndex: "accountStatus",
      key: "accountStatus",

      render: (text) => {
        const styles =
          text === "Active"
            ? "bg-primary-50 border border-primary-400 inline-block py-[0.10rem] px-2 rounded-md text-primary-400"
            : "bg-red-50 border border-red-400 inline-block py-[0.10rem] px-2 rounded-md text-red-400";
        return <span className={styles}>{text}</span>;
      },
    },
  ];

  const onChange: TableProps<Guest>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">GUESTS</div>
      </Navigation>
      <section className="p-4">
        <article className="grid h-full grid-cols-[1fr_20%] grid-rows-1 gap-4 rounded-md border bg-white p-10">
          <div>
            <h1>Usuarios Page</h1>
            <Space style={{ marginBottom: 16 }}>
              <Button>Clear filters</Button>
              <Button onClick={setAgeSort}>Sort age</Button>
              <Button onClick={clearFilters}>Clear filters</Button>
              <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table
              dataSource={dataSource}
              columns={columns}
              bordered
              onChange={onChange}
            />
          </div>
          <div className="h-full w-full rounded-md border">Aside</div>
        </article>
      </section>
    </>
  );
}
function useState<T>(arg0: {}): [any, any] {
  throw new Error("Function not implemented.");
}
