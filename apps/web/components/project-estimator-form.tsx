"use client";

import { Button, Card, CardContent, Input, Label, Textarea, useToast } from "@erickharlein/ui";
import { DollarSign, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import {
	PROJECT_TYPES,
	CORE_FEATURES,
	ADD_ONS,
	USE_CASE_PRESETS,
	calculateEstimate,
	MINIMUM_PROJECT_THRESHOLD,
} from "@/data/pricing-config";

interface ProjectEstimate {
	basePrice: number;
	minPrice: number;
	maxPrice: number;
	timelineWeeks: number;
	monthlyRecurring: { name: string; price: number }[];
}

export function ProjectEstimatorForm() {
	const [projectType, setProjectType] = useState<string | null>(null);
	const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
	const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
	const [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		notes: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { toast } = useToast();

	const estimate: ProjectEstimate = calculateEstimate({
		projectType,
		features: selectedFeatures,
		addOns: selectedAddOns,
	});

	const showEstimate = projectType !== null;
	const meetsMinimum = estimate.basePrice >= MINIMUM_PROJECT_THRESHOLD;

	const toggleFeature = (featureId: string) => {
		setSelectedFeatures((prev) =>
			prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
		);
	};

	const toggleAddOn = (addOnId: string) => {
		setSelectedAddOns((prev) =>
			prev.includes(addOnId) ? prev.filter((id) => id !== addOnId) : [...prev, addOnId],
		);
	};

	const applyPreset = (presetId: string) => {
		const preset = USE_CASE_PRESETS.find((p) => p.id === presetId);
		if (preset) {
			setProjectType(preset.selections.projectType);
			setSelectedFeatures([...preset.selections.features]);
			setSelectedAddOns([...preset.selections.addOns]);
			toast({
				title: "Preset Applied",
				description: `${preset.name} configuration has been loaded.`,
			});
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!projectType) {
			toast({
				title: "Select Project Type",
				description: "Please select a project type to continue.",
				variant: "destructive",
			});
			return;
		}

		if (!contactInfo.name || !contactInfo.email) {
			toast({
				title: "Contact Information Required",
				description: "Please provide your name and email.",
				variant: "destructive",
			});
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/bookings", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					contact_name: contactInfo.name,
					contact_email: contactInfo.email,
					contact_phone: contactInfo.phone,
					company: contactInfo.company,
					project_type: projectType,
					selected_features: selectedFeatures,
					selected_addons: selectedAddOns,
					estimated_price: estimate.basePrice,
					price_range: { min: estimate.minPrice, max: estimate.maxPrice },
					estimated_timeline_weeks: estimate.timelineWeeks,
					monthly_recurring: estimate.monthlyRecurring,
					notes: contactInfo.notes,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to submit request");
			}

			toast({
				title: "Request Submitted Successfully!",
				description: "I'll review your project and contact you within 24 hours with next steps.",
			});

			// Reset form
			setProjectType(null);
			setSelectedFeatures([]);
			setSelectedAddOns([]);
			setContactInfo({ name: "", email: "", phone: "", company: "", notes: "" });
		} catch {
			toast({
				title: "Submission Failed",
				description: "Please try again or contact me directly at hello@erickharlein.com",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-8">
			{/* Use Case Presets */}
			<div className="space-y-4">
				<div className="flex items-center gap-2">
					<Sparkles className="h-5 w-5 text-purple-500" />
					<h3 className="text-xl font-semibold">Quick Start Presets</h3>
				</div>
				<p className="text-sm text-muted-foreground">
					Choose a preset to auto-fill features for common project types
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
					{USE_CASE_PRESETS.map((preset) => (
						<button
							key={preset.id}
							type="button"
							onClick={() => applyPreset(preset.id)}
							className="p-4 rounded-xl border-2 border-primary/20 hover:border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 hover:scale-105 transition-all duration-300 text-left group"
						>
							<div className="text-3xl mb-2">{preset.icon}</div>
							<div className="font-semibold text-sm group-hover:text-primary transition-colors">
								{preset.name}
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Section 1: Project Type */}
			<div className="space-y-4">
				<div>
					<h3 className="text-xl font-semibold mb-2">1. Type of Project</h3>
					<p className="text-sm text-muted-foreground">Select the complexity level</p>
				</div>
				<div className="grid md:grid-cols-3 gap-4">
					{PROJECT_TYPES.map((type) => (
						<button
							key={type.id}
							type="button"
							onClick={() => setProjectType(type.id)}
							className={`p-5 rounded-xl border-2 transition-all duration-300 text-left ${
								projectType === type.id
									? "border-primary bg-primary/10 shadow-lg scale-105"
									: "border-primary/20 hover:border-primary/40 hover:scale-102"
							}`}
						>
							<div className="font-semibold text-lg mb-2">{type.name}</div>
							<div className="text-sm text-muted-foreground mb-3">{type.description}</div>
							<div className="flex items-center justify-between">
								<span className="text-primary font-bold">${type.basePrice.toLocaleString()}</span>
								<span className="text-xs text-muted-foreground">
									{type.timeline.min}-{type.timeline.max} {type.timeline.unit}
								</span>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Section 2: Core Features */}
			<div className="space-y-4">
				<div>
					<h3 className="text-xl font-semibold mb-2">2. Features You Need</h3>
					<p className="text-sm text-muted-foreground">Select all that apply</p>
				</div>
				<div className="grid md:grid-cols-2 gap-3">
					{CORE_FEATURES.map((feature) => (
						<button
							key={feature.id}
							type="button"
							onClick={() => toggleFeature(feature.id)}
							className={`p-4 rounded-lg border-2 transition-all duration-300 text-left flex items-start gap-3 ${
								selectedFeatures.includes(feature.id)
									? "border-green-500 bg-green-500/10"
									: "border-primary/20 hover:border-primary/40"
							}`}
						>
							<div
								className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
									selectedFeatures.includes(feature.id)
										? "bg-green-500"
										: "border-2 border-primary/30"
								}`}
							>
								{selectedFeatures.includes(feature.id) && (
									<CheckCircle2 className="h-4 w-4 text-white" />
								)}
							</div>
							<div className="flex-1">
								<div className="font-semibold mb-1">{feature.name}</div>
								<div className="text-xs text-muted-foreground mb-2">{feature.description}</div>
								<div className="text-sm font-bold text-primary">
									+${feature.price.toLocaleString()}
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Section 3: Add-Ons */}
			<div className="space-y-4">
				<div>
					<h3 className="text-xl font-semibold mb-2">3. Extra Add-Ons</h3>
					<p className="text-sm text-muted-foreground">Optional enhancements</p>
				</div>
				<div className="grid md:grid-cols-2 gap-3">
					{ADD_ONS.map((addOn) => (
						<button
							key={addOn.id}
							type="button"
							onClick={() => toggleAddOn(addOn.id)}
							className={`p-4 rounded-lg border-2 transition-all duration-300 text-left flex items-start gap-3 ${
								selectedAddOns.includes(addOn.id)
									? "border-purple-500 bg-purple-500/10"
									: "border-primary/20 hover:border-primary/40"
							}`}
						>
							<div
								className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
									selectedAddOns.includes(addOn.id) ? "bg-purple-500" : "border-2 border-primary/30"
								}`}
							>
								{selectedAddOns.includes(addOn.id) && <CheckCircle2 className="h-4 w-4 text-white" />}
							</div>
							<div className="flex-1">
								<div className="font-semibold mb-1">{addOn.name}</div>
								<div className="text-xs text-muted-foreground mb-2">{addOn.description}</div>
								<div className="text-sm font-bold text-purple-500">
									+${addOn.price.toLocaleString()}
								{'recurring' in addOn && addOn.recurring && <span className="text-xs">/{addOn.recurring}</span>}
								</div>
							</div>
						</button>
					))}
				</div>
			</div>

			{/* Price Estimate Display */}
			{showEstimate && (
				<Card className="glass-strong border-2 border-primary/40 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
					<CardContent className="pt-6 space-y-6">
						<div className="text-center">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-4">
								<DollarSign className="h-4 w-4 text-green-400" />
								<span className="text-sm font-medium text-green-300">Your Estimated Price</span>
							</div>
							<div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
								${estimate.minPrice.toLocaleString()} – ${estimate.maxPrice.toLocaleString()}
							</div>
							<p className="text-sm text-muted-foreground">
								Base estimate: ${estimate.basePrice.toLocaleString()}
							</p>
						</div>

						<div className="flex items-center justify-center gap-6 text-center">
							<div>
								<div className="flex items-center justify-center gap-2 mb-1">
									<Calendar className="h-4 w-4 text-cyan-400" />
									<span className="text-sm font-medium text-muted-foreground">Timeline</span>
								</div>
								<div className="text-2xl font-bold text-foreground">
									{estimate.timelineWeeks} weeks
								</div>
							</div>
						</div>

						{estimate.monthlyRecurring.length > 0 && (
							<div className="border-t border-primary/20 pt-4">
								<div className="text-sm font-semibold mb-2">Monthly Recurring Costs:</div>
								{estimate.monthlyRecurring.map((item) => (
									<div key={item.name} className="flex justify-between text-sm text-muted-foreground">
										<span>{item.name}</span>
										<span className="font-bold text-purple-400">${item.price}/mo</span>
									</div>
								))}
							</div>
						)}

						{!meetsMinimum && (
							<div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
								<p className="text-sm text-yellow-300 font-medium">
									⚠️ Projects start at ${MINIMUM_PROJECT_THRESHOLD.toLocaleString()} for serious
									business systems
								</p>
							</div>
						)}

						<p className="text-xs text-center text-muted-foreground">
							* Actual price might adjust after final scoping call
						</p>
					</CardContent>
				</Card>
			)}

			{/* Contact Information */}
			<div className="space-y-4">
				<div>
					<h3 className="text-xl font-semibold mb-2">4. Your Information</h3>
					<p className="text-sm text-muted-foreground">Let's connect to discuss your project</p>
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name *</Label>
						<Input
							id="name"
							value={contactInfo.name}
							onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
							placeholder="Your name"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Email *</Label>
						<Input
							id="email"
							type="email"
							value={contactInfo.email}
							onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
							placeholder="your.email@example.com"
							required
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone">Phone</Label>
						<Input
							id="phone"
							value={contactInfo.phone}
							onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
							placeholder="+1 (555) 000-0000"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="company">Company</Label>
						<Input
							id="company"
							value={contactInfo.company}
							onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
							placeholder="Your company name"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="notes">Additional Notes</Label>
					<Textarea
						id="notes"
						value={contactInfo.notes}
						onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
						placeholder="Tell me more about your project, timeline, or specific requirements..."
						rows={4}
					/>
				</div>
			</div>

			{/* Submit Button */}
			<div className="space-y-4">
				<Button
					type="submit"
					className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
					disabled={isSubmitting || !projectType}
				>
					{isSubmitting ? "Submitting..." : "Submit Your Request"}
				</Button>

				<p className="text-center text-sm text-muted-foreground">
					You'll receive a response within 24 hours with next steps
				</p>
			</div>
		</form>
	);
}
