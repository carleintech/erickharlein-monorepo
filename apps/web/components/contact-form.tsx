"use client";

import { Button, Input, Label, Textarea, useToast } from "@erickharlein/ui";
import { type ContactFormData, contactFormSchema } from "@erickharlein/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<div className="grid md:grid-cols-2 gap-6">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="space-y-2"
				>
					<Label htmlFor="name" className="text-base font-semibold">Name *</Label>
					<Input
						id="name"
						{...register("name")}
						placeholder="John Doe"
						className="h-12 bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
					/>
					{errors.name && <p className="text-sm text-red-400 flex items-center gap-1 mt-1">⚠️ {errors.name.message}</p>}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15 }}
					className="space-y-2"
				>
					<Label htmlFor="email" className="text-base font-semibold">Email *</Label>
					<Input
						id="email"
						type="email"
						{...register("email")}
						placeholder="john@example.com"
						className="h-12 bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
					/>
					{errors.email && <p className="text-sm text-red-400 flex items-center gap-1 mt-1">⚠️ {errors.email.message}</p>}
				</motion.div>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="space-y-2"
				>
					<Label htmlFor="phone" className="text-base font-semibold">Phone</Label>
					<Input
						id="phone"
						{...register("phone")}
						placeholder="+1 (555) 000-0000"
						className="h-12 bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
					/>
					{errors.phone && <p className="text-sm text-red-400 flex items-center gap-1 mt-1">⚠️ {errors.phone.message}</p>}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25 }}
					className="space-y-2"
				>
					<Label htmlFor="company" className="text-base font-semibold">Company</Label>
					<Input
						id="company"
						{...register("company")}
						placeholder="Your company name"
						className="h-12 bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
					/>
					{errors.company && <p className="text-sm text-red-400 flex items-center gap-1 mt-1">⚠️ {errors.company.message}</p>}
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="space-y-2"
			>
				<Label htmlFor="message" className="text-base font-semibold">Message *</Label>
				<Textarea
					id="message"
					{...register("message")}
					placeholder="Tell me about your project or inquiry..."
					rows={6}
					className="bg-zinc-900/50 border-zinc-800 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
				/>
				{errors.message && <p className="text-sm text-red-400 flex items-center gap-1 mt-1">⚠️ {errors.message.message}</p>}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.35 }}
			>
				<Button
					type="submit"
					className="w-full h-14 text-base font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 group"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							<Loader2 className="mr-2 h-5 w-5 animate-spin" />
							Sending...
						</>
					) : (
						<>
							<Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							Send Message
							<Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
						</>
					)}
				</Button>
			</motion.div>
		</form>
	);
}
