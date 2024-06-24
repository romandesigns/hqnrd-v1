import { Reservation } from "@/types/types";
import Image from "next/image";
import { FaPen, FaRegTrashAlt } from "../../../icons";
import { format } from "@/utils/formatter/format";

export function SummaryItemCard({
  reservation,
  removeReservation,
}: {
  reservation: Reservation;
  removeReservation: (reservationId: string) => void;
}) {
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
            <small className="font-semibold">
              Unit# {reservation.roomNumber}
            </small>
            <span className="text-sm font-semibold">Double Room</span>
          </p>
          <p className="mb-2 flex h-full items-end text-xs lg:text-sm">
            <span className="font-semibold">1,350$ / 1 Night</span>
          </p>
        </div>

        <div className="flex gap-3">
          <p className="flex items-center gap-1">
            <span className="font-semibold">Adults:</span>
            <span>{reservation.adultsCount}</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">Children:</span>
            <span>{reservation.childrenCount}</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">Total:</span>
            <span>{reservation.totalGuests}</span>
          </p>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-[auto_auto_auto] grid-rows-1">
        <p className="flex flex-col text-xs">
          <span className="font-semibold">Check In:</span>
          <span>
            {reservation.checkInDate} {reservation.checkInTime}
          </span>
        </p>
        <p className="flex flex-col text-xs">
          <span className="font-semibold">Check Out:</span>
          <span>
            {reservation.checkOutDate} {reservation.checkOutTime}
          </span>
        </p>
        <p className="flex flex-col">
          <span className="font-semibold">Days:</span>
          <span>{reservation.totalDays}</span>
        </p>
      </div>

      <div className="absolute -right-2 -top-4 flex gap-1 lg:-bottom-2 lg:top-auto">
        <span className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-yellow-300">
          <FaPen />
        </span>
        <span
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-red-300"
          onClick={() => removeReservation(reservation.reservationId)}
        >
          <FaRegTrashAlt />
        </span>
      </div>

      <div className="absolute -bottom-6 left-3 h-6 w-fit rounded-bl-md border-b border-l">
        <div className="relative left-2 top-2 rounded-md border bg-white p-1 px-3">
          <p className="flex gap-2">
            <span>{reservation.totalDays} Days</span>
            <span>x</span>
            <span>{format.currency(reservation.pricePerNight)}</span>
            <span>=</span>
            <span>
              {format.currency(
                reservation.totalDays * reservation.pricePerNight,
              )}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
