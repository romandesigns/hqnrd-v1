import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Reservation } from "@/types";

// Define the state shape
export type NavigationState = {
  isOpen: boolean;
  reservations: Reservation[];
  closeReservationDrawer: () => void;
  openReservationDrawer: () => void;
  updateReservations: (reservations: Reservation[]) => void;
  removeReservation: (reservationId: string) => void;
};

// Custom middleware for opening the drawer when reservations increase
const autoToggleDrawerOnReservationsChange =
  (config: any) => (set: any, get: any, api: any) =>
    config(
      (args: any) => {
        // Open the drawer when a new reservation is added
        if (
          args.reservations &&
          args.reservations.length > get().reservations.length
        ) {
          set({ isOpen: true });
        }
        // Close the drawer when there are no reservations
        if (args.reservations && args.reservations.length === 0) {
          set({ isOpen: false });
        }
        // Apply the rest of the state updates
        set(args);
      },
      get,
      api,
    );

// Create the store with middleware
export const useReservation = create<NavigationState>()(
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
        name: "reservation-store", // unique name for localStorage key
        getStorage: () => localStorage, // specify localStorage as the storage provider
      },
    ),
  ),
);
