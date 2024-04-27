import { z } from "zod";

export const signInUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(4, { message: "password must be at least 4 characters long" })
    .max(30, { message: "password must be less than 30 characters long" }),
});
