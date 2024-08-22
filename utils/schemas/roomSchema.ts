import { z } from "zod";

const featureOrAmenitySchema = z.object({
  iconName: z.string(),
  defaultName: z.string(),
  value: z.boolean(),
});

export const newRoomSchema = z.object({
  category_id: z.string().uuid(),
  meta_description: z.string().max(160), // Adjust max length as needed
  room_number: z.number().int().positive(),
  title: z.string().nonempty(),
  price_per_night: z.number().positive(),
  page_description: z.string(),
  bed_quantity: z.number().int().positive(),
  square_feet: z.number().int().positive(),
  features: z.array(featureOrAmenitySchema),
  amenities: z.array(featureOrAmenitySchema),
});