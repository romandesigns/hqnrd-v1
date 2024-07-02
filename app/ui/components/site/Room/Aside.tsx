import React from "react";
import { Heading } from "./Heading";
import { ReservationForm } from "./ReservationForm";

export function Aside({
  roomId,
  pricePerNight,
}: {
  roomId: string;
  pricePerNight: number;
}) {
  return (
    <aside className="flex-[1] rounded-md bg-white p-4">
      <div className="grid grid-cols-2 border-b border-neutral-200">
        <Heading heading="Reservation Form" className="flex-1" />
        <p className="flex-1 justify-self-end rounded-tl-md rounded-tr-md border-none bg-neutral-800 p-2 px-4 font-bold text-white">
          1,350$ / 1 Night
        </p>
      </div>
      <ReservationForm roomNumber={roomId} pricePerNight={pricePerNight} />
    </aside>
  );
}
