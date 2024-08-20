import { z } from "zod";

export const newRoomCategorySchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "title must be at least 3 characters long" })
      .max(30, { message: "title must be less than 50 characters long" }),
    slug: z
      .string()
      .min(3, { message: "slug must be at least 3 characters long" })
      .max(30, { message: "slug must be less than 50 characters long" }),
    lang: z
      .enum(["en", "es", "de"])
  });
