"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signUpUserSchema } from "../components/schema";

export async function signUp(formData: FormData) {
  console.log(formData);
  const data = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    dateOfBirth: formData.get("dateOfBirth"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    telCountry: formData.get("telCountry"),
    tel: formData.get("tel"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  try {
    const validatedData = signUpUserSchema.parse(data);
    console.log("Validated data", validatedData);
  } catch (e) {
    console.error("Validation error", e);
  }

  // const supabase = createClient();
  // const { error } = await supabase.auth.signUp(data);
  // console.log(error?.message);
}
