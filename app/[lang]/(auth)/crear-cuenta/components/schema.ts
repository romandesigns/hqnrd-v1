import { z } from "zod";

export const signUpUserSchema = z
  .object({
    name: z.string().min(3).max(50),
    lastName: z.string().min(3).max(50),
    gender: z.enum(["male", "female", "other"]),
    email: z.string().email().min(3).max(70),
    telCountry: z.string(),
    tel: z.string(),
    password: z.string().min(4).max(30),
    confirmPassword: z.string().min(4).max(30),
    dateOfBirth: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
