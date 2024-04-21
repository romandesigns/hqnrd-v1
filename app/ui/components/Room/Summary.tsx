"use client";
import { useReservation } from "@/store/reservation";
import React from "react";
import { Drawer } from "../../layout/Navigation/components/Drawer";
import Image from "next/image";

export function Summary() {
  const { isOpen, reservations, closeReservationDrawer } = useReservation(
    (state) => state,
  );

  return (
    <Drawer
      placement="right"
      title="My Selection"
      open={true}
      className="custom"
      closeDrawer={closeReservationDrawer}
    >
      <section>
        <h4 className="text-sm font-semibold">Total Rooms: 2</h4>
        <ul>
          <li className="my-2 grid grid-cols-[auto_1fr] grid-rows-1 gap-2 border p-1 pr-2">
            {/* Image */}
            <Image
              src="/assets/home/amenities/doble-room.jpg"
              width={130}
              height={130}
              alt="room image"
            />
            {/* Details */}
            <div className="grid grid-cols-[1fr] grid-rows-1">
              <div>
                <div>
                  <small>Unit 205</small>
                  <p className="mb-2 flex justify-between">
                    <span>Double Room</span>
                    <span>1,350$ / 1 Night</span>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="grid grid-cols-[1fr_1fr_1fr] grid-rows-1">
                    <p className="flex items-center gap-1">
                      <span>Adults</span>
                      <span>2</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <span>Children</span>
                      <span>2</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <span>Total</span>
                      <span>4</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr_auto] grid-rows-1">
                    <p className="flex flex-col">
                      <span>Check In:</span>
                      <span>2024-04-16 3:30PM</span>
                    </p>
                    <p className="flex flex-col">
                      <span>Check In:</span>
                      <span>2024-04-16 11:30AM</span>
                    </p>
                    <p className="flex flex-col">
                      <span>Days:</span>
                      <span>4</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </Drawer>
  );
}
