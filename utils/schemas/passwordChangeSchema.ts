import { z } from "zod";

export const passwordChangeSchema = z
  .object({
    code: z.string().uuid({ message: "code must be a valid UUID" }),
    password: z
      .string()
      .min(4, { message: "Password must be at least 4 characters long" })
      .max(30, { message: "Password must be less than 30 characters long" }),
    confirmPassword: z
      .string()
      .min(4, {
        message: "Confirmation password must be at least 4 characters long",
      })
      .max(30, {
        message: "Confirmation password must be less than 30 characters long",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
