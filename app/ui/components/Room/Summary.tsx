"use client";
import { useReservation } from "@/store/reservation";
import { SummaryItemCard } from ".";
import { Drawer } from "../../layout/Navigation/components/Drawer";

export function Summary() {
  const { isOpen, reservations, closeReservationDrawer, removeReservation } =
    useReservation((state) => state);

  return (
    <Drawer
      placement="right"
      title="My Selection"
      open={isOpen}
      className="custom"
      closeDrawer={closeReservationDrawer}
    >
      <section>
        <h4 className="mb-4 text-sm font-semibold">
          Total Rooms: {reservations.length}
        </h4>
        <ul className="flex flex-col gap-14">
          {reservations.map((reservation) => {
            return (
              <li
                key={reservation.reservationId}
                className="relative my-2 grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] gap-2 rounded-md border p-1 pr-2 lg:p-2"
              >
                <SummaryItemCard
                  reservation={reservation}
                  removeReservation={removeReservation}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </Drawer>
  );
}
