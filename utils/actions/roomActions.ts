"use server";
import { NewRoomCategoryTypes } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { format } from "../formatter/format";
import { newRoomCategorySchema } from "../schemas";

export async function newRoomCategoryAction(category_name:string, lang:string) {
  // Initialize supabase
  const supabase = createClient();

  // Incoming payload
  const payload: NewRoomCategoryTypes = {
    name: format.toLowerCase(category_name),
    slug: format.generateSlug(category_name),
    lang: format.generateSlug(lang),
  };

  // Validate incoming payload with zod schema
  const validatedData = newRoomCategorySchema.safeParse(payload);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    const errorMessage = `Error: ${path[0]} ${message}`;
    redirect(`/${payload.lang}/portal/habicationes/crear?error=${errorMessage}`);
  }

  // Payload to be inserted
  const categoryPayload:{name:string,slug:string} = {
    name: payload.name,
    slug: payload.slug,
  };

  // Perform insert operation
  const {data, error:insertError} = await supabase
  .from("categories")
  .insert([categoryPayload])
  .select();

  // Handle insert error
  if (insertError) {
    if (insertError.message.includes("duplicate")) {
      return {error:"category already exists"}
    }
  }

  // Send response if data is available
  if(data?.length){
    const {id,name,slug} = data[0]
    return {data:[{id,name,slug}]};
  }

  // Revalidate path and redirect
  revalidatePath(`/${payload.lang}/portal/habicationes/crear`);
}
