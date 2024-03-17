"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  console.log(formData);
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };
  // const supabase = createClient();
  // const { error } = await supabase.auth.signUp(data);
  // console.log(error?.message);
}
