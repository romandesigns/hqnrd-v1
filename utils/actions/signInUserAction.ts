"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signInUserSchema } from "../schemas";

export async function signInUserAction(formData: FormData) {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validatedFields = signInUserSchema.safeParse(data);
  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.errors
      .map((err) => err.message)
      .join("; ");
    const encodedErrorMessages = encodeURIComponent(errorMessages);
    redirect(
      `/${formData.get("lang")}/auth/iniciar-session?error=${encodedErrorMessages}`,
    );
  }

  const supabase = createClient();
  let { data: foundEmail, error: queryError } = await supabase
    .from("profiles")
    .select("email")
    .eq("email", data.email);

  const email = foundEmail && foundEmail[0]?.email;
  if (email !== data.email) {
    redirect(
      `/${formData.get("lang")}/auth/iniciar-session?error=${data.email}%20is%20not%20registered`,
    );
  }

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error?.message) {
    redirect(
      `/${formData.get("lang")}/auth/iniciar-session?error=${error.message}`,
    );
  }

  revalidatePath("/", "layout");
  redirect("/");
}
