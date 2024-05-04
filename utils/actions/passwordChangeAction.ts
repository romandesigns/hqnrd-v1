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
    code: formData.get("code") as string,
  };
  const validatedFields = passwordChangeSchema.safeParse(formObj);
  if (!validatedFields.success) {
    redirect(
      `${origen}/${formData.get("lang")}/auth/actualizar-clave?error=${validatedFields.error.errors.join(",")}`,
    );
  }
  const supabase = createClient();

  if (formObj.code) {
    const { error } = await supabase.auth.exchangeCodeForSession(formObj.code);
    if (error?.message) {
      redirect(
        `${origen}/${formData.get("lang")}/auth/actualizar-clave?error=${error.message}`,
      );
    }
  }

  const { error } = await supabase.auth.updateUser({
    password: formObj.password,
  });

  if (error?.message) {
    redirect(
      `${origen}/${formData.get("lang")}/auth/actualizar-clave?error=${error.message}`,
    );
  }
  revalidatePath("/", "layout");
  redirect(
    `${origen}/${formData.get("lang")}/auth/iniciar-session?success=true`,
  );
}
