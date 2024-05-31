"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signUpUserSchema } from "@/utils/schemas";
import { headers } from "next/headers";

export async function createUserAction(prevState: any, formData: FormData) {
  const origin = headers().get("origin");
  const data = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    dateOfBirth: formData.get("dateOfBirth"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    phoneCountry: formData.get("phoneCountry"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    user_role: formData.get("user_role"),
  };

  const validatedData = signUpUserSchema.safeParse(data);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    return {
      path: path[0],
      errors: message,
    };
  }

  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
    email: data.email as string,
    password: data.password as string,
    options: {
      emailRedirectTo: `${origin}/auth/confirmar-cuenta`,
      data: {
        email: data.email as string,
        name: data.name as string,
        last_name: data.lastName as string,
        dob: data.dateOfBirth as string,
        gender: data.gender as string,
        phone: data.phone as string,
        phone_country: data.phoneCountry as string,
        user_role: data.user_role as string,
        avatar: '',
      },
    },
  });

  if (error?.message) {
    console.error("Error", error?.message);
    redirect(
      `/${formData.get("lang")}/auth/confirmar-cuenta?name=${data.name}&email=${data.email}`,
    );
    // return {
    //   errors: error.message,
    // };
  }

  revalidatePath("/", "layout");
  redirect(
    `/${formData.get("lang")}/auth/confirmar-cuenta?name=${data.name}&email=${data.email}`,
  );
}
