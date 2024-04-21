"use client";
import React from "react";
import { Button } from "antd";
import { useReservation } from "@/store/reservation";
import { IoInformationCircle } from "../../icons";

export function NotificationTray() {
  const { reservations, isOpen, openReservationDrawer } = useReservation(
    (state) => state,
  );

  return !isOpen && reservations.length !== 0 ? (
    <div className="fixed bottom-2 right-2 z-10 flex gap-4 rounded-md bg-white p-4 shadow-md">
      <span className="animate-pulse">
        <IoInformationCircle size={30} className="text-primary-500" />
      </span>
      <div>
        <h3 className="text-sm font-bold">You have pending items</h3>
        <p className="text-sm">Click to see the items you have selected</p>
      </div>
      <div>
        <Button onClick={() => openReservationDrawer()}>Open</Button>
      </div>
    </div>
  ) : null;
}
