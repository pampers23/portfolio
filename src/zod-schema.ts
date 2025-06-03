import { z } from "zod";

export const formSchema = z.object({
  user_name: z.string().min(1, "Name is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});
