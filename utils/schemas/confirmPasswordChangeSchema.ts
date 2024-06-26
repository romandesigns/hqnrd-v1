import { z } from "zod";

export const confirmPasswordChangeSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});
