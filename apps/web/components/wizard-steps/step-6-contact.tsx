"use client";

import { Button, Input, Label, Textarea } from "@erickharlein/ui";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { BookingWizardState } from "@/types/booking-wizard";
import { CONTENT_CREATION_PRICE } from "@/types/booking-wizard";
import { formatPrice } from "@erickharlein/utils";

interface Step6ContactProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

export function Step6Contact({ state, onUpdate, onNext, onBack }: Step6ContactProps) {
	const [wantsContentCreation, setWantsContentCreation] = useState(false);

	const handleContentCreationToggle = () => {
		const newValue = !wantsContentCreation;
		setWantsContentCreation(newValue);
		onUpdate({
			includeContentCreation: newValue,
		});
	};

	const canProceed =
		state.contact.name.length > 0 && state.contact.email.length > 0 && state.contact.phone.length > 0;

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-2xl">
			<div>
				<h2 className="text-3xl font-bold mb-2">Contact Information</h2>
				<p className="text-muted-foreground">How can I reach you about your project?</p>
			</div>

			{/* Contact Form */}
			<div className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="name">Full Name *</Label>
					<Input
						id="name"
						placeholder="John Doe"
						value={state.contact.name}
						onChange={(e) =>
							onUpdate({
								contact: { ...state.contact, name: e.target.value },
							})
						}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="email">Email Address *</Label>
					<Input
						id="email"
						type="email"
						placeholder="john@company.com"
						value={state.contact.email}
						onChange={(e) =>
							onUpdate({
								contact: { ...state.contact, email: e.target.value },
							})
						}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone">Phone Number *</Label>
					<Input
						id="phone"
						type="tel"
						placeholder="+1 (555) 123-4567"
						value={state.contact.phone}
						onChange={(e) =>
							onUpdate({
								contact: { ...state.contact, phone: e.target.value },
							})
						}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="company">Company Name (Optional)</Label>
					<Input
						id="company"
						placeholder="ACME Inc."
						value={state.contact.company}
						onChange={(e) =>
							onUpdate({
								contact: { ...state.contact, company: e.target.value },
							})
						}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="notes">Additional Notes (Optional)</Label>
					<Textarea
						id="notes"
						placeholder="Tell me more about your business, timeline, or any specific requirements..."
						rows={4}
						value={state.contact.notes}
						onChange={(e) =>
							onUpdate({
								contact: { ...state.contact, notes: e.target.value },
							})
						}
					/>
				</div>
			</div>

			{/* Content Creation Upsell */}
			<motion.button
				type="button"
				onClick={handleContentCreationToggle}
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 0.99 }}
				className={`w-full p-6 rounded-xl border-2 transition-all text-left flex items-start gap-4 ${
					wantsContentCreation
						? "border-purple-500 bg-purple-500/10 shadow-lg"
						: "border-primary/20 hover:border-primary/40"
				}`}
			>
				<div
					className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-all ${
						wantsContentCreation ? "bg-purple-500 text-white" : "bg-muted text-muted-foreground"
					}`}
				>
					{wantsContentCreation && <Check className="h-5 w-5" />}
				</div>

				<div className="flex-1">
					<div className="flex items-baseline justify-between mb-2">
						<h4 className="font-semibold text-lg">Brand Content Creation</h4>
						<span className="text-2xl font-bold">{formatPrice(CONTENT_CREATION_PRICE)}</span>
					</div>
					<p className="text-sm text-muted-foreground mb-3">
						I can write all the content for your platform - copy, legal pages, about sections, service descriptions,
						and more. Professional, polished, and ready to launch.
					</p>
					<div className="flex flex-wrap gap-2">
						{["Homepage Copy", "About & Services", "Legal Pages", "SEO Optimization"].map((item) => (
							<span key={item} className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
								{item}
							</span>
						))}
					</div>
				</div>
			</motion.button>

			{/* Navigation */}
			<div className="flex gap-4 pt-6">
				<Button onClick={onBack} variant="outline" size="lg">
					Back
				</Button>
				<Button onClick={onNext} disabled={!canProceed} size="lg" className="flex-1">
					Continue to Review
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</motion.div>
	);
}
