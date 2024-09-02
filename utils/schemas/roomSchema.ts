import { z } from 'zod';

const featureOrAmenitySchema = z.object({
  iconName: z.string().nonempty(),
  value: z.boolean(),
});

// Schema for media files
const mediaFilesSchema = z.object({
  ogImg: z.string().optional(),
  cardImg: z.string().optional(),
  roomLayout: z.string().optional(),
  roomVideo: z.string().optional(),
  gallery: z.array(z.string()).optional(),
});

// Updated schema for a new room
export const newRoomSchema = z.object({
  category_id: z.string().uuid(),
  meta_description: z.string().max(160),
  room_number: z.number().int().positive(),
  title: z.string().nonempty(),
  price_per_night: z.number().positive(),
  page_description: z.string(),
  bed_quantity: z.number().int().positive(),
  square_feet: z.number().int().positive(),
  features: z.array(featureOrAmenitySchema),
  amenities: z.array(featureOrAmenitySchema),
  mediaFiles: mediaFilesSchema,
});
