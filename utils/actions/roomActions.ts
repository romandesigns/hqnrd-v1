"use server";
import { NewRoomCategoryTypes, RoomDetails, RoomDetailsPayload } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { format } from "../formatter/format";
import { newRoomCategorySchema, newRoomSchema } from "../schemas";


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

export async function newRoomAction(formData:RoomDetailsPayload, lang:string) {
  // Initialize supabase
  const supabase = createClient();

  // Incoming payload
  const payload: RoomDetailsPayload = {
    title: formData.title,
    page_description: formData.page_description,
    category_id: formData.category_id,
    price_per_night: formData.price_per_night,
    room_number: formData.room_number,
    meta_description: formData.meta_description,
    bed_quantity: formData.bed_quantity,
    square_feet: formData.square_feet,
    features: formData.features,
    amenities: formData.amenities,
    media_files: formData.media_files,
  };

  // Validate incoming payload with zod schema
  const validatedData = newRoomSchema.safeParse(payload);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    const errorMessage = `Error: ${path[0]} ${message}`;
    return {error:errorMessage}
  }

const { data, error } = await supabase
  .from('rooms')
  .insert([
    payload,
  ])
  .select();

  if (error) {
    return {error:error.message}
  }

  if(data){
    // Retrieve category name
    const {data:categoryData,error:categoryError} = await supabase.from('categories').select().eq('id',data[0].category_id);
    if(categoryError){
      return {error:categoryError.message}
    }
    if(categoryData){
      data[0].category_name = categoryData[0].name;
    }
    return {data}
  }
}

export async function updateRoomAction(formData: RoomDetailsPayload, lang: string) {
  // Initialize supabase
  const supabase = createClient();

  // Retrieve the current room data from the database
  const { data: currentRoomData, error: fetchError } = await supabase
    .from('rooms')
    .select('*')
    .eq('id', formData.id)
    .single();

  if (fetchError) {
    return { error: `Room not found: ${fetchError.message}` };
  }

  // Dynamically build the payload from formData by comparing with the current data
  const payload = {};
  Object.keys(formData).forEach((key) => {
    if (JSON.stringify(formData[key]) !== JSON.stringify(currentRoomData[key])) {
      // Only include fields that have been updated
      payload[key] = formData[key];
    }
  });

  // Validate the dynamic payload with zod schema
  const validatedData = newRoomSchema.safeParse(payload);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    const errorMessage = `Error: ${path[0]} ${message}`;
    return { error: errorMessage };
  }

  // Perform the update with the dynamically built payload
  const { data, error: updateError } = await supabase
    .from('rooms')
    .update(payload)
    .eq('id', formData.id)
    .select();

  if (updateError) {
    return { error: updateError.message };
  }

  if (data) {
    // Retrieve the updated category name if category_id was updated
    if (payload.category_id) {
      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select()
        .eq('id', data[0].category_id);

      if (categoryError) {
        return { error: categoryError.message };
      }

      if (categoryData) {
        data[0].category_name = categoryData[0].name;
      }
    }

    return { data };
  }
}
