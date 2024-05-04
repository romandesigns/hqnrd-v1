"use server";
import { passwordChangeSchema } from "../schemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function passwordChangeAction(formData: FormData) {
  const origen = headers().get("origin");
  const formObj = {
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };
  const validatedFields = passwordChangeSchema.safeParse(formObj);
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
  redirect(`localhost:3000/${formData.get("lang")}/actualizar-clave`);
}
