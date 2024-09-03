// stores/room-store.ts
import { RoomDetailsPayload } from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const roomInitialDetails: RoomDetailsPayload = {
  category_id: "",
  room_number: 0,
  meta_description: "",
  title: "",
  price_per_night: 0,
  page_description: "",
  bed_quantity: 0,
  square_feet: 0,
  features: [],
  amenities: [],
  mediaFiles: {
    og_img: "",
    card_img: "",
    room_layout: "",
    room_video: "",
    gallery: [],
  },
};
// Types
export type RoomState = {
  newRoom: RoomDetailsPayload;
  setCreatedRoom: (payload: RoomDetailsPayload) => void;
  updateRoom: (payload: RoomDetailsPayload) => void;
  clearCreatedRoom: () => void;
};

// Store
export const useRoomStore = create<RoomState>()(
  devtools(
    persist(
      (set) => ({
        newRoom: roomInitialDetails,
        setCreatedRoom: (payload: RoomDetailsPayload) =>
          set(() => ({ newRoom: payload })),
        updateRoom: (payload: Partial<RoomDetailsPayload>) =>
          set((state) => ({
            newRoom: { ...state.newRoom, ...payload },
          })),
        clearCreatedRoom: () =>
          set(() => ({ newRoom: roomInitialDetails })),
      }),
      {
        name: "room-store",
      }
    )
  )
);
