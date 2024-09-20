import { z } from 'zod';

const featureOrAmenitySchema = z.object({
  iconName: z.string().nonempty(),
  value: z.boolean(),
});

const videoSource = z.object({
  src: z.string().optional(),
  poster: z.string().optional(),
});

// Schema for media files
const mediaFilesSchema = z.object({
  og_img: z.string().optional(),
  card_img: z.string().optional(),
  room_layout: z.string().optional(),
  room_video: videoSource,
  gallery: z.object({
    t_16_9: z.string(),
    t_1_1: z.string(),
    r_9_16: z.string(),
    b_1_1: z.string(),
    b_16_9: z.string(),
  }).optional(),
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
  media_files: mediaFilesSchema,
});