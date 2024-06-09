"use client";
import { BackgroundEffect, GoBack, RoomCard } from "@/app/ui/features";
import { IoInformationCircle } from "@/app/ui/icons";
import { Wrapper } from "@/app/ui/layout";
import { Locale } from "@/i18n-config";
import { Pagination } from "antd";
import { useState } from "react";
import { rooms as roomList } from "../../../../public/assets/data/roomsList";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const pageSize = 6;
  const [rooms, setRooms] = useState(roomList);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current rooms to display based on pagination
  const indexOfLastRoom = currentPage * pageSize;
  const indexOfFirstRoom = indexOfLastRoom - pageSize;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="relative h-full w-full">
        <Wrapper className="max-w-85rem relative z-[2] p-2">
          <div className="flex w-full items-center justify-between pb-10 pt-6 sm:pt-28">
            <GoBack className="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-700 p-2 text-neutral-700" />
            <div className="hidden items-center justify-center space-x-2 pl-[9rem] font-semibold underline lg:flex">
              <p className="font-semibold">Stay longer by SPENDING LESS</p>
              <span className="space-x-2">
                <span className="font-black">5%</span>
                <span className="font-black">8%</span>
              </span>
              <p className="">Available</p>
              <IoInformationCircle size={25} color="#286a9c" />
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-bold">Showing</span>
              <span className="rounded-md border bg-neutral-700 px-4 text-white">
                {Math.min(currentPage * pageSize, rooms.length)}
              </span>
              of
              <span className="rounded-md border bg-neutral-700 px-4 text-white">
                {rooms.length}
              </span>
            </div>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-4 rounded-md bg-white sm:grid-cols-2 lg:grid-cols-3 lg:p-10">
            {currentRooms.map((room, index) => (
              <RoomCard
                key={`${room.id}-${index}`}
                className="shadow-sm"
                room={room}
                lang={lang}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination
              defaultCurrent={1}
              total={rooms.length}
              pageSize={pageSize}
              onChange={onChange}
            />
          </div>
        </Wrapper>
        <BackgroundEffect />
      </section>
    </>
  );
}
