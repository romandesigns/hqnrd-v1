// stores/counter-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";

// Types
export type ModalToggleState = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
};

// Store
export const useModalToggle = create<ModalToggleState>()(
  devtools((set) => ({
    isOpen: false,
    closeModal: () => set(() => ({ isOpen: false }), false, "Close Modal"),
    openModal: () => set({ isOpen: true }, false, "Open Modal"),
  })),
);
