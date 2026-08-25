import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.email("Invalid email address").max(254, "Email too long"),
  phone: z.string().trim().max(20, "Phone number too long").optional(),
  company: z.string().trim().max(100, "Company name too long").optional(),
  website: z.string().trim()
    .refine((value) => !value || /^https?:\/\//i.test(value), "Website must start with http:// or https://")
    .refine((value) => !value || z.url().safeParse(value).success, "Invalid website URL")
    .optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject too long"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message too long"),
  websiteCompany: z.string().max(0, "Spam detected").optional(),
});
