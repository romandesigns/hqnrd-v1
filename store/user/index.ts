// stores/counter-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserMetadata } from "@supabase/supabase-js";


export type UserStateTypes = {
  user: UserMetadata;
  setUser: (user: UserMetadata) => void;
  unsetUser: () => void;
};

// Store
export const useUserStore = create<UserStateTypes>()(
  devtools((set) => ({
    user: {
      dob: '',
      email: '',
      email_verified: false,
      gender: '',
      last_name: '',
      name: '',
      phone: '',
      phone_country: '',
      phone_verified: false,
      sub: '',
      user_role: ''
    },
    setUser: (user) => set(() => ({ user }), false, "Set User"),
    unsetUser: () => set(() => ({
      user: {
        dob: '',
        email: '',
        email_verified: false,
        gender: '',
        last_name: '',
        name: '',
        phone: '',
        phone_country: '',
        phone_verified: false,
        sub: '',
        user_role: ''
      }
    }), false, "Unset User"),
  }))
);
