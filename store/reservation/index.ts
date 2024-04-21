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
};

// Custom middleware for opening the drawer when reservations increase
const autoOpenDrawerOnNewReservation =
  (config: any) => (set: any, get: any, api: any) =>
    config(
      (args: any) => {
        if (
          args.reservations &&
          args.reservations.length > get().reservations.length
        ) {
          set({ isOpen: true });
        }
        set(args);
      },
      get,
      api,
    );

// Create the store with middleware
export const useReservation = create<NavigationState>()(
  devtools(
    persist(
      autoOpenDrawerOnNewReservation((set, get) => ({
        isOpen: false,
        reservations: [],
        closeReservationDrawer: () => set(() => ({ isOpen: false })),
        openReservationDrawer: () => set({ isOpen: true }),
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
