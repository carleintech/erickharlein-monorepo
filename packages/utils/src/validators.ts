import { z } from "zod";

export const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	phone: z.string().optional(),
	company: z.string().optional(),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

export const bookingFormSchema = z.object({
	contact_name: z.string().min(2, "Name must be at least 2 characters"),
	contact_email: z.string().email("Invalid email address"),
	contact_phone: z.string().optional(),
	company: z.string().optional(),
	service_type: z.enum([
		"CONSULTATION",
		"TECH_REVIEW",
		"SYSTEM_DESIGN",
		"AI_STRATEGY",
		"MENTORSHIP",
		"OTHER",
	]),
	preferred_date: z.string().refine((val) => !Number.isNaN(Date.parse(val)), "Invalid date"),
	duration: z.number().min(30).max(240),
	timezone: z.string().default("America/New_York"),
	notes: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
