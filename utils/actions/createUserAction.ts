"use server";
import { UserSignUpPayloadTypes } from "@/types/types";
import { signUpUserSchema } from "@/utils/schemas";
import { createClient } from "@/utils/supabase/server";
import moment from "moment";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { format } from "../formatter/format";

export async function createUserAction(prevState: any, formData: FormData) {
  const origin = headers().get("origin");

  const data:UserSignUpPayloadTypes = {
    confirmPassword: (formData.get("confirmPassword") as string),
    dob: moment((formData.get("dob") as string)).format("MM-DD-YYYY"),
    email: format.toLowerCase((formData.get("email") as string)),
    gender: format.toLowerCase((formData.get("gender") as string)),
    lastName: format.toLowerCase((formData.get("lastName") as string)),
    name: format.toLowerCase((formData.get("name") as string)),
    password: (formData.get("password") as string),
    phone: (formData.get("phone") as string),
    phone_country: (formData.get("phoneCountry") as string),
    role: format.toLowerCase((formData.get("role") as string))
  };

  const validatedData = signUpUserSchema.safeParse(data);
  
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    return {
      errors: `${path[0]} ${message}`,
    };
  }

  const supabase = createClient();
  const response = await supabase.auth.signUp({
    email: (data.email as string),
    options: {
      data: {
        dob: (data.dob as string),
        email: (data.email as string),
        gender: (data.gender as string),
        last_name: (data.lastName as string),
        name: (data.name as string),
        phone: (data.phone as string),
        phone_country: (data.phone_country as string),
        role: (data.role as string)
      },
      emailRedirectTo: `${origin}/${formData.get("lang")}/auth/confirmar-cuenta`
    },
    password: (data.password as string),
    phone: (data.phone as string)
  });


  if (response.error?.message) {
    console.error("Error", response.error?.message);
    redirect(
      `/${formData.get("lang")}/auth/confirmar-cuenta?name=${data.name}&email=${data.email}`,
    );
  }

  revalidatePath("/", "layout");
  redirect(
    `/${formData.get("lang")}/auth/confirmar-cuenta?name=${data.name}&email=${data.email}`,
  );
}
