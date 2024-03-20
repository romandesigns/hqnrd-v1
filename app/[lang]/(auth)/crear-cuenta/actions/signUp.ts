"use server";
import { createClient } from "@/utils/supabase/server";
import { signUpUserSchema } from "../components/schema";

export async function createUserAction(prevState: any, formData: FormData) {
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
    const validatedData = signUpUserSchema.safeParse(data);
    if (!validatedData.success) {
      const { path, message } = validatedData.error.errors[0];
      return {
        path: path[0],
        message,
      };
    }

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: data.email as string,
      password: data.password as string,
      options: {
        data: {
          email: data.email as string,
          name: data.name as string,
          last_name: data.lastName as string,
          dob: data.dateOfBirth as string,
          gender: data.gender as string,
          tel: data.tel as string,
          tel_country: data.telCountry as string,
          user_role: "guest",
        },
      },
    });

    if (error?.message) {
      console.log(error);
      return {
        errors: error.message,
      };
    }
  } catch (e) {
    console.error("Validation error", e);
  }
}
