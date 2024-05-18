"use client";

import React from "react";
import { Table, Button } from "antd";
import { Navigation } from "@/app/ui/components/dashboard/features/Navigation";
import { Locale } from "@/i18n-config";
import type { TableColumnsType, TableProps } from "antd";
import { generateGuests } from "@/utils/contentGenerator/guests";

type Guest = {
  key: React.Key;
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
  accountType: string;
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
            <div className="py-6">
              <Button>Clear filters</Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />
          </div>
          <div className="h-full w-full rounded-md border">Aside</div>
        </article>
      </section>
    </>
  );
}
