"use server";
import { signInUserSchema } from "../schemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInUserAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const validatedFields = signInUserSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error?.message) {
    return {
      errors: error.message,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
