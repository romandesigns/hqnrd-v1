import { z } from "zod";

export const passwordChangeSchema = z
  .object({
    password: z
      .string()
      .min(4, { message: "password must be at least 4 characters long" })
      .max(30, { message: "password must be less than 30 characters long" }),
    confirmPassword: z
      .string()
      .min(4, {
        message: "confirmation password must be at least 4 characters long",
      })
      .max(30, {
        message: "confirmation password must be less than 30 characters long",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
