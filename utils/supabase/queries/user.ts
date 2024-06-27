import { createClient } from "@/utils/supabase/server";
import { cache } from 'react';
import { format } from "../../formatter/format";
import { StaffMemberTypes } from "@/types/types";

export const getUser = cache(async () => {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return user;
});

export const getStaffMembers = cache(async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("guests")
    .select("id, role, name, last_name")
    .not("role", "eq", "guest");
  if (error) {
    throw error;
  }
  if (!data) {
    return []; // or handle no data case as needed
  }
  const staffMembers = data.map((member:StaffMemberTypes) => ({
    id: member.id,
    role: member.role,
    name: `${format.firstLetterToUpperCase(member.name)} ${format.firstLetterToUpperCase(member.last_name)}`, // Concatenate name and last_name
  }));
  return staffMembers;
});
