import { z } from "zod";

export const createSupportTicketSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(20, { message: "Title must be less than 20 characters long" }),
  author_name: z
    .string(),
  assignee_name: z
    .string(),
  type: z
    .enum(["development", "administrative"])
    .refine((val) => val !== undefined, {
      message: "Development type is required",
    }),
  assignee_id: z.string().uuid({ message: "Assignee ID must be a valid UUID" }),
  priority: z
    .enum(["high", "medium", "low"])
    .refine((val) => val !== undefined, {
      message: "Priority is required",
    }),
  due: z.string().refine(
    (val) => {
      const date = new Date(val);
      return !isNaN(date.getTime()) && date.toISOString() === val;
    },
    {
      message: "Due Date must be a valid ISO 8601 date-time string",
    },
  ),
  dev_task: z
    .enum(["fix", "new implementation", "optimization",'n/a'])
    .refine((val) => val !== undefined, {
      message: "Task type is required",
    }),
  page: z
    .string()
    .min(3, { message: "Page must be at least 3 characters long" })
    .max(15, { message: "Page must be less than 15 characters long" }),
  component: z
    .string()
    .min(3, { message: "Component must be at least 3 characters long" })
    .max(15, { message: "Component must be less than 15 characters long" }),
  status: z
    .enum(["in progress", "done", "cancelled", "backlog"])
    .refine((val) => val !== undefined, {
      message: "Status is required",
    }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" })
    .max(50, { message: "Description must be less than 50 characters long" }),
  author_id: z.string().uuid({ message: "Author ID must be a valid UUID" }),
});
