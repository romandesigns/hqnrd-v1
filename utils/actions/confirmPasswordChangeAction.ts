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
    const errorMessages = validatedFields.error.errors
      .map((err) => err.message)
      .join("; ");
    const encodedErrorMessages = encodeURIComponent(errorMessages);
    redirect(
      `/${formData.get("lang")}/auth/actualizar-clave?error=${encodedErrorMessages}&formType=confirmar`,
    );
  }

  const supabase = createClient();
  let { data: foundEmail, error: queryError } = await supabase
    .from("profiles")
    .select("email")
    .eq("email", formObj.email);

  const email = foundEmail && foundEmail[0]?.email;
  if (email !== formObj.email) {
    redirect(
      `/${formData.get("lang")}/auth/actualizar-clave?error=${formObj.email}%20is%20not%20registered&formType=confirmar`,
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(formObj.email, {
    redirectTo: `${origen}/${formData.get("lang")}/auth/actualizar-clave?formType=confirmar`,
  });

  if (error?.message) {
    return {
      errors: error.message,
    };
  }

  revalidatePath("/", "layout");
  redirect(
    `${origen}/${formData.get("lang")}/auth/actualizar-clave?success=true&email=${formObj.email}`,
  );
}
