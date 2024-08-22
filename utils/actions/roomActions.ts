"use server";
import { NewRoomCategoryTypes, RoomDetails, RoomDetailsPayload } from "@/types/types";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { format } from "../formatter/format";
import { newRoomCategorySchema, newRoomSchema } from "../schemas";
import image from "next/image";
import sharp from "sharp";


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


export async function newRoomAction(formData:RoomDetails, lang:string) {
  // Initialize supabase
  const supabase = createClient();

  // Incoming payload
  const payload: RoomDetailsPayload = {
    title: formData.title,
    page_description: formData.pageDescription,
    category_id: formData.categoryId,
    price_per_night: formData.pricePerNight,
    room_number: formData.roomNumber,
    meta_description: formData.metaDescription,
    bed_quantity: formData.bedQuantity,
    square_feet: formData.squareFeet,
    features: formData.features,
    amenities: formData.amenities
  };

    // Validate incoming payload with zod schema
  const validatedData = newRoomSchema.safeParse(payload);
  if (!validatedData.success) {
    const { path, message } = validatedData.error.errors[0];
    const errorMessage = `Error: ${path[0]} ${message}`;
    console.log("Error happened");
    redirect(`/${payload.lang}/portal/habicationes/crear?error=${errorMessage}`);
  }

const { data, error } = await supabase
  .from('rooms')
  .insert([
    payload,
  ])
  .select()

  if (error) {
    return {error:error.message}
  }

  return {data}

}



export async function roomFeaturedCardImage(path: string, file: File, lang: string) {
  // Initialize supabase
  const supabase = createClient();

  // Read the file into a buffer
  const buffer = await file.arrayBuffer();
  const inputBuffer = Buffer.from(buffer);

  // Optimize the image while preserving the aspect ratio and convert it to WebP
  const optimizedBuffer = await sharp(inputBuffer)
    .resize({
      width: 800,
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toBuffer();

  // Upload the WebP image to Supabase
  const { data, error } = await supabase.storage
    .from("hqnrd")
    .upload(path, optimizedBuffer, {
      cacheControl: "3600",
      upsert: true,
      contentType: "image/webp",
    });

  if (error) {
    throw new Error(`Failed to upload image to Supabase: ${error.message}`);
  }

  return data?.path;
}