import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import { Reservation } from "@/types";

// Define the state shape for navigation
export type NavigationState = {
  isOpen: boolean;
  reservations: Reservation[];
  closeReservationDrawer: () => void;
  openReservationDrawer: () => void;
  updateReservations: (reservations: Reservation[]) => void;
  removeReservation: (reservationId: string) => void;
};

const autoToggleDrawerOnReservationsChange =
  (config: any) => (set: any, get: any, api: any) =>
    config(
      (args: any) => {
        if (
          args.reservations &&
          args.reservations.length > get().reservations.length
        ) {
          set({ isOpen: true });
        } else if (args.reservations && args.reservations.length === 0) {
          set({ isOpen: false });
        }
        set(args);
      },
      get,
      api,
    );

export const useReservation = create(
  devtools(
    persist(
      autoToggleDrawerOnReservationsChange((set: any, get: any) => ({
        isOpen: false,
        reservations: [],
        closeReservationDrawer: () => set(() => ({ isOpen: false })),
        openReservationDrawer: () => set({ isOpen: true }),
        removeReservation: (reservationId: string) => {
          const reservations = get().reservations.filter(
            (reservation: Reservation) =>
              reservation.reservationId !== reservationId,
          );
          set({ reservations });
        },
        updateReservations: (reservations: Reservation[]) =>
          set({ reservations }),
      })),
      {
        name: "reservation-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
