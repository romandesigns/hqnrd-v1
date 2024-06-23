import { z } from "zod";

export const companySchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "name must be at least 3 characters long" })
      .max(50, { message: "name must be less than 50 characters long" }),
    lastName: z
      .string()
      .min(3, { message: "last name must be at least 3 characters long" })
      .max(50, { message: "last name must be less than 50 characters long" }),
    gender: z
      .enum(["male", "female", "other"])
      .refine((val) => val !== undefined, { message: "Gender is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneCountry: z.string(),
    phone: z.string(),
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
    dob: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
