// stores/room-store.ts
import { RoomDetailsPayload } from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Types
export type RoomState = {
  newRoom: RoomDetailsPayload | {};
  setCreatedRoom: (payload: RoomDetailsPayload) => void;
};

// Store
export const useRoomStore = create<RoomState>()(
  devtools(
    persist(
      (set) => ({
        newRoom: {},

        setCreatedRoom: (payload: RoomDetailsPayload) =>
          set(() => ({ newRoom: payload })),
        clearCreatedRoom: () =>
          set(() => ({ newRoom: {} })),
      }),
      {
        name: "room-store", // name of the storage (must be unique)
      }
    )
  )
);
