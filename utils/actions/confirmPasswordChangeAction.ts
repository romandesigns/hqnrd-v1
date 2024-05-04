"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { confirmPasswordChangeSchema } from "../schemas";

export async function confirmPasswordChangeAction(formData: FormData) {
  const origen = headers().get("origin");
  const formObj = {
    email: formData.get("email") as string,
  };
  const validatedFields = confirmPasswordChangeSchema.safeParse(formObj);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const supabase = createClient();
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    formObj.email,
    {
      redirectTo: `${origen}/${formData.get("lang")}/auth/confirmar-actualizar-clave`,
    },
  );
  if (error?.message) {
    return {
      errors: error.message,
    };
  }
  revalidatePath("/", "layout");
  redirect(`${origen}/${formData.get("lang")}/actualizar-clave`);
}
