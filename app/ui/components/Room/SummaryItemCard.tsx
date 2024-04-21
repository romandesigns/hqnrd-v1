import React from "react";
import Image from "next/image";
import { FaPen, FaRegTrashAlt } from "../../icons";
import { Reservation } from "@/types";

export function SummaryItemCard({
  adultsCount,
  checkOutDate,
  checkInDate,
  checkOutTime,
  checkInTime,
  roomNumber,
  childrenCount,
  message,
  reservationId,
  totalDays,
  totalGuests,
  discount,
  removeReservation,
}: Reservation) {
  return (
    <>
      {/* Image */}
      <figure className="relative h-20 w-20 rounded-md lg:w-28">
        <Image
          src="/assets/home/amenities/doble-room.jpg"
          alt="room image"
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </figure>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="flex flex-col">
            <small className="font-semibold">Unit# {roomNumber}</small>
            <span className="text-sm font-semibold">Double Room</span>
          </p>
          <p className="mb-2 flex h-full items-end text-xs lg:text-sm">
            <span className="font-semibold">1,350$ / 1 Night</span>
          </p>
        </div>

        <div className="flex gap-3">
          <p className="flex items-center gap-1">
            <span className="font-semibold">Adults:</span>
            <span>{adultsCount}</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">Children:</span>
            <span>{childrenCount}</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">Total:</span>
            <span>{totalGuests}</span>
          </p>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-[auto_auto_auto] grid-rows-1">
        <p className="flex flex-col text-xs">
          <span className="font-semibold">Check In:</span>
          <span>
            {checkInDate} {checkInTime}
          </span>
        </p>
        <p className="flex flex-col text-xs">
          <span className="font-semibold">Check Out:</span>
          <span>
            {checkOutDate} {checkOutTime}
          </span>
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Days:</span>
          <span>{totalDays}</span>
        </p>
      </div>

      <div className="absolute -right-2 -top-4  flex gap-1 lg:-bottom-2 lg:top-auto">
        <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-yellow-300">
          <FaPen />
        </span>
        <span
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-red-300"
          onClick={() => removeReservation(reservationId)}
        >
          <FaRegTrashAlt />
        </span>
      </div>

      <div className="absolute -bottom-6 left-3 h-6 w-fit rounded-bl-md border-b border-l">
        <div className="relative left-2 top-2 rounded-md bg-[#f9f9fb] p-1">
          <p className="flex gap-2">
            <span>{totalDays} Days</span>
            <span>x</span>
            <span>1,350</span>
            <span>=</span>
            <span>5,400</span>
          </p>
        </div>
      </div>
    </>
  );
}
