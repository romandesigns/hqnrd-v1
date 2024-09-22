// stores/room-store.ts
import { MediaFiles, RoomDetailsPayload } from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Initial media files state
const mediaFilesInitial: MediaFiles = {
  og_img: "",
  card_img: "",
  room_layout: "",
  room_video: {
    src: "",
    poster: "",
  },
  gallery: {
    t_16_9: "",
    t_1_1: "",
    r_9_16: "",
    b_1_1: "",
    b_16_9: "",
  },
};

// Initial room details state
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
  media_files: mediaFilesInitial,
};

// Types
export type RoomState = {
  newRoom: RoomDetailsPayload;
  setCreatedRoom: (payload: RoomDetailsPayload) => void;
  updateRoom: (payload: Partial<RoomDetailsPayload>) => void;
  clearCreatedRoom: () => void;
  addMediaFile: (payload: Partial<MediaFiles>) => void; // Media files as part of room update
};

// Store
export const useRoomStore = create<RoomState>()(
  devtools(
    persist(
      (set) => ({
        newRoom: roomInitialDetails,

        // Set room details initially
        setCreatedRoom: (payload: RoomDetailsPayload) =>
          set(() => ({ newRoom: payload })),

        // Update newRoom partially
        updateRoom: (payload: Partial<RoomDetailsPayload>) =>
          set((state) => ({
            newRoom: { ...state.newRoom, ...payload },
          })),

        // Clear room details
        clearCreatedRoom: () =>
          set(() => ({ newRoom: roomInitialDetails })),

        // Add or update media files as part of the room
        addMediaFile: (payload: Partial<MediaFiles>) =>
          set((state) => ({
            newRoom: {
              ...state.newRoom,
              media_files: {
                ...state.newRoom.media_files,
                ...payload,
              },
            },
          })),
      }),
      {
        name: "room-store",
      }
    )
  )
);
