// stores/counter-store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserMetadata,AuthChangeEvent,Session } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();


// Function to fetch user data from Supabase
const fetchUserData = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
};

export type UserStateTypes = {
  user: UserMetadata | null;
  setUser: (user: UserMetadata | null) => void;
  unsetUser: () => void;
};

type DateOfBirth = {
  dob: String;
};

const initialUserState: UserStateTypes = {
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
};

// Store
export const useUserStore = create<UserStateTypes>()(
  devtools((set) => ({
    user: initialUserState,
    setUser: (user) => set(() => ({ user }), false, "Set User"),
    unsetUser: () => set(() => ({
      user: initialUserState
    }), false, "Unset User"),
  }))
);

(async () => {
  const userData = await fetchUserData();
  if (userData) {
    useUserStore.getState().setUser(userData);
  }
})();

// Listen for authentication state changes
supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
  if (event === "SIGNED_OUT") {
    useUserStore.getState().unsetUser();
  } else {
    fetchUserData().then((userData) => {
      useUserStore.getState().setUser(userData);
    });
  }
});