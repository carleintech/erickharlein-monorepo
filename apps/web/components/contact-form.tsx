"use client";

import { Button, Input, Label, Textarea, useToast } from "@erickharlein/ui";
import { type ContactFormData, contactFormSchema } from "@erickharlein/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			toast({
				title: "Message sent!",
				description: "Thank you for reaching out. I'll get back to you soon.",
			});

			reset();
		} catch (_error) {
			toast({
				title: "Error",
				description: "Failed to send message. Please try again or email directly.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="name">Name *</Label>
				<Input id="name" {...register("name")} placeholder="Your name" />
				{errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
			</div>

			<div className="space-y-2">
				<Label htmlFor="email">Email *</Label>
				<Input
					id="email"
					type="email"
					{...register("email")}
					placeholder="your.email@example.com"
				/>
				{errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
			</div>

			<div className="space-y-2">
				<Label htmlFor="phone">Phone</Label>
				<Input id="phone" {...register("phone")} placeholder="+1 (555) 000-0000" />
				{errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
			</div>

			<div className="space-y-2">
				<Label htmlFor="company">Company</Label>
				<Input id="company" {...register("company")} placeholder="Your company name" />
				{errors.company && <p className="text-sm text-destructive">{errors.company.message}</p>}
			</div>

			<div className="space-y-2">
				<Label htmlFor="message">Message *</Label>
				<Textarea
					id="message"
					{...register("message")}
					placeholder="Tell me about your project or inquiry..."
					rows={5}
				/>
				{errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
			</div>

			<Button type="submit" className="w-full" disabled={isSubmitting}>
				{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
				{isSubmitting ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
}
