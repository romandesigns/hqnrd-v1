import { Locale } from "@/i18n-config";
import { format } from "@/utils/formatter/format";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { UsersTable } from "./UsersTable";
import type { TableColumnsType } from "antd";

export default async function Page({
  params: { lang },
}: Readonly<{
  params: { lang: Locale };
}>) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect(`/${lang}/auth/iniciar-session`);
  }

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

  // type GuestCols = {
  //   title: string;
  //   dataIndex: string;
  //   key: string;
  //   render?: () => void;
  // };

  const dataSource: Guest[] = [
    {
      key: "1",
      verified: "Yes",
      avatar: "https://random",
      name: "Mike",
      lastName: "Brown",
      gender: "Male",
      dateOfBirth: "09/09/1987",
      age: 32,
      phone: "809-577-2345",
      email: "mikeBrown@gmail.com",
      totalReservations: 2,
      lastVisit: "09/09/2021",
      accountStatus: "Active",
      identification: "Cedula",
      pendingBalance: format.currency(2000),
    },
  ];

  const columns: TableColumnsType<Guest> = [
    {
      title: "Verfied",
      dataIndex: "verified",
      key: "verified",
    },
    {
      title: "Identification",
      dataIndex: "identification",
      key: "identification",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Total Reservations",
      dataIndex: "totalReservations",
      key: "totalReservations",
    },
    {
      title: "Last Visit",
      dataIndex: "lastVisit",
      key: "lastVisit",
    },
    {
      title: "Balance",
      dataIndex: "pendingBalance",
      key: "pendingBalance",
    },
    {
      title: "Account Status",
      dataIndex: "accountStatus",
      key: "accountStatus",
    },
  ];

  return (
    <div>
      <UsersTable dataSource={dataSource} columns={columns} />
    </div>
  );
}
