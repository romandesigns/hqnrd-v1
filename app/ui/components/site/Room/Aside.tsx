"use client";
import React from "react";
import { IoMdCloseCircleOutline, TiWarning } from "../../../icons";
import { MotionSlideUpDownWarning } from "../../../motion";
import { Heading } from "./Heading";
import { ReservationForm } from "./ReservationForm";

export function Aside({
  roomId,
  pricePerNight,
}: {
  roomId: string;
  pricePerNight: number;
}) {
  const [error, setError] = React.useState({
    show: false,
    type: "",
    title: "",
    description: "",
  });

  return (
    <aside className="flex-[1] rounded-md bg-white p-4">
      <div className="grid grid-cols-2 border-b border-neutral-200">
        <Heading heading="Reservation Form" className="flex-1" />
        <p className="flex-1 justify-self-end rounded-tl-md rounded-tr-md border-none bg-neutral-800 p-2 px-4 font-bold text-white">
          1,350$ / 1 Night
        </p>
      </div>

      <MotionSlideUpDownWarning toggle={!!error.show}>
        <div className="my-4 bg-yellow-200 p-2">
          <div className="flex w-full items-center justify-start text-sm font-bold text-yellow-800">
            <span>
              <TiWarning />
            </span>
            <span>Warning!</span>
            <button
              className="ml-auto"
              onClick={() =>
                setError({
                  show: false,
                  type: "",
                  title: "",
                  description: "",
                })
              }
            >
              <IoMdCloseCircleOutline size={25} />
            </button>
          </div>
          <p className="text-xs font-semibold text-yellow-800">
            Check out date should be after Check in date!
          </p>
        </div>
      </MotionSlideUpDownWarning>

      <ReservationForm
        roomNumber={roomId}
        pricePerNight={pricePerNight}
        setError={setError}
      />
    </aside>
  );
}
