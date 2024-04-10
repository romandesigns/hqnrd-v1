"use client";
import React from "react";
import { Locale } from "@/i18n-config";
import { Wrapper } from "@/app/ui/layout";
import { RoomCard } from "@/app/ui/features";
import { Pagination } from "antd";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [pageSize, setPageSize] = React.useState(6);
  const rooms = [
    {
      id: 1,
      slug: "double-bed",
      category: "Double Bed",
    },
    {
      id: 2,
      slug: "double-room",
      category: "Double Room",
    },
    {
      id: 3,
      slug: "basic",
      category: "Basic Room",
    },
    {
      id: 3,
      slug: "basic",
      category: "Basic Room",
    },
    {
      id: 4,
      slug: "family",
      category: "Familiar Room",
    },
    {
      id: 5,
      slug: "executive",
      category: "Executive Room",
    },
    {
      id: 6,
      slug: "executive",
      category: "Executive Room",
    },
    {
      id: 7,
      slug: "family",
      category: "Familiar Room",
    },
    {
      id: 8,
      slug: "executive",
      category: "Executive Room",
    },
    {
      id: 9,
      slug: "executive",
      category: "Executive Room",
    },
    {
      id: 10,
      slug: "standard",
      category: "Standard Room",
    },
    {
      id: 11,
      slug: "standard",
      category: "Standard Room",
    },
  ];

  return (
    <section className="relative h-full w-full p-2">
      <Wrapper className="max-w-85rem relative z-[2] rounded-md bg-white p-2 sm:p-5 lg:p-10">
        <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RoomCard className="shadow-sm" />
          <RoomCard className="shadow-sm" />
          <RoomCard className="shadow-sm" />
          <RoomCard className="shadow-sm" />
          <RoomCard className="shadow-sm" />
          <RoomCard className="shadow-sm" />
        </div>
        <div className="flex justify-center">
          <Pagination defaultCurrent={6} total={rooms.length} pageSize={6} />
        </div>
      </Wrapper>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_100%_70%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-transparent">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </section>
  );
}
