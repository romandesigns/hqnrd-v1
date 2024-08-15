"use server";
import { NewRoomCategoryTypes } from "@/types/types";
import { newRoomCategorySchema } from "@/utils/schemas";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { format } from "../formatter/format";

export async function newRoomCategoryAction(formData: FormData) {
  const supabase = createClient();
  const user = supabase.auth.getUser();

  if (!user) {
    return {
      path: null,
      errors: "User is not authenticated",
      message: null,
    };
  }

  const category: NewRoomCategoryTypes = {
    title: format.toLowerCase(formData.get("title") as string),
    slug: format.generateSlug(formData.get("title") as string),
  };

  const validatedData = newRoomCategorySchema.safeParse(category);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    const errorMessage = `Error: ${path[0]} ${message}` 
    redirect(`/${formData.get("lang")}/portal/habicationes/crear?error=${errorMessage}`);
  }

  try {
    await supabase
    .from("categories")
    .insert([category])
    .select();
  } catch (error:any) {
    if (error?.message.includes("duplicate")) {
      console.log(error);
      revalidatePath(`/${formData.get("lang")}/portal/habicationes/crear?error=category already exists`);
      redirect(`/${formData.get("lang")}/portal/habicationes/crear?error=category already exists`);
    }
  }
  revalidatePath(`/${formData.get("lang")}/portal/habicationes/crear`);
  redirect(`/${formData.get("lang")}/portal/habicationes/crear?test=true`);
}

