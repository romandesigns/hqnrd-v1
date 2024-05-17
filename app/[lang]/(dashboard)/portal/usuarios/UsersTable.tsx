"use client";

import React from "react";
import { Table } from "antd";
import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { Locale } from "@/i18n-config";
import type { TableColumnsType } from "antd";

type Guest = {
  key: string;
  verified: "Yes" | "No";
  avatar: string;
  name: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  phone: string;
  email: string;
  totalReservations: number;
  lastVisit: string;
  accountStatus: string;
  identification: "Cedula" | "Passport";
  pendingBalance: string;
};

export function UsersTable({
  dataSource,
  lang,
  columns,
}: {
  lang: Locale;
  dataSource: Guest[];
  columns: TableColumnsType<Guest>;
}) {
  return (
    <>
      <Navigation lang={lang}>
        <div className="font-bold">GUESTS</div>
      </Navigation>
      <section className="p-4">
        <article className="grid h-full grid-cols-[1fr_20%] grid-rows-1 gap-4 rounded-md border bg-white p-10">
          <div>
            <h1>Usuarios Page</h1>
            <Table dataSource={dataSource} columns={columns} />
          </div>
          <div className="h-full w-full rounded-md border">Aside</div>
        </article>
      </section>
    </>
  );
}
