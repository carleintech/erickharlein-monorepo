"use client";

import { Button } from "@erickharlein/ui";
import { ArrowRight, FileText, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { BookingWizardState } from "@/types/booking-wizard";
import { CORE_FEATURES, ADD_ONS, PROJECT_TYPES } from "@/data/pricing-config";
import { formatPrice } from "@erickharlein/utils";
import { BusinessImpact } from "@/components/business-impact";
import { TimelineVisual } from "@/components/timeline-visual";
import { SecurityBadges } from "@/components/security-badges";

interface Step7ReviewProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

export function Step7Review({ state, onUpdate, onNext, onBack }: Step7ReviewProps) {
	const [contractAccepted, setContractAccepted] = useState(false);

	const projectType = PROJECT_TYPES.find((p) => p.id === state.projectType);
	const selectedFeatures = CORE_FEATURES.filter((f) => state.selectedFeatures?.includes(f.id));
	const selectedAddOns = ADD_ONS.filter((a) => state.selectedAddOns?.includes(a.id));

	const handleAcceptContract = () => {
		const newValue = !contractAccepted;
		setContractAccepted(newValue);
		onUpdate({ contractAccepted: newValue });
	};

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-3xl">
			<div>
				<h2 className="text-3xl font-bold mb-2">Review Your Project</h2>
				<p className="text-muted-foreground">Double-check everything before we proceed</p>
			</div>

			{/* Project Summary */}
			<div className="glass-strong border border-primary/30 rounded-xl p-8 space-y-6">
				{/* Domain */}
				<div>
					<h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Domain</h3>
					<p className="text-lg">{state.domain.domainName || "Not specified"}</p>
					{state.domain.hasDomain && state.domain.currentHost && (
						<p className="text-sm text-muted-foreground">Current host: {state.domain.currentHost}</p>
					)}
				</div>

				{/* Project Type */}
				{projectType && (
					<div>
						<h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
							Project Type
						</h3>
						<p className="text-lg font-semibold">{projectType.name}</p>
						<p className="text-sm text-muted-foreground">{projectType.description}</p>
					</div>
				)}

				{/* Features */}
				{selectedFeatures.length > 0 && (
					<div>
						<h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
							Features ({selectedFeatures.length})
						</h3>
						<div className="grid md:grid-cols-2 gap-3">
							{selectedFeatures.map((feature) => (
								<div
									key={feature.id}
									className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-primary/10"
								>
									<Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
									<div className="flex-1 min-w-0">
										<p className="font-medium text-sm">{feature.name}</p>
										<p className="text-xs text-muted-foreground">{formatPrice(feature.price)}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Add-Ons */}
				{selectedAddOns.length > 0 && (
					<div>
						<h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
							Add-Ons ({selectedAddOns.length})
						</h3>
						<div className="space-y-2">
							{selectedAddOns.map((addOn) => (
								<div
									key={addOn.id}
									className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-primary/10"
								>
									<div>
										<p className="font-medium text-sm">{addOn.name}</p>
									</div>
									<p className="text-sm font-semibold">
										{formatPrice(addOn.price)}
									{"recurring" in addOn && addOn.recurring && (
										<span className="text-xs text-muted-foreground">/mo</span>
									)}
									</p>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Contact Info */}
				<div>
					<h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
						Contact Information
					</h3>
					<div className="space-y-1">
						<p className="text-sm">
							<span className="font-medium">{state.contact.name}</span>
						</p>
						<p className="text-sm text-muted-foreground">{state.contact.email}</p>
						<p className="text-sm text-muted-foreground">{state.contact.phone}</p>
						{state.contact.company && <p className="text-sm text-muted-foreground">{state.contact.company}</p>}
					</div>
				</div>
			</div>

			{/* Business Impact Section */}
			<BusinessImpact state={state} />

			{/* Timeline Visual */}
			<TimelineVisual weeks={state.estimatedTimelineWeeks} />

			{/* Security Badges */}
			<div className="space-y-4">
				<h3 className="text-2xl font-bold text-center">Built on Enterprise-Grade Security</h3>
				<SecurityBadges />
			</div>

			{/* Contract Terms */}
			<div className="border-2 border-primary/30 rounded-xl p-6 space-y-4">
				<div className="flex items-center gap-3">
					<FileText className="h-6 w-6 text-purple-400" />
					<h3 className="font-bold text-lg">Service Agreement</h3>
				</div>

				<div className="prose prose-sm dark:prose-invert max-h-64 overflow-y-auto p-4 rounded-lg bg-muted/50">
					<h4>TechKlein Development Services Agreement</h4>

					<p>
						<strong>1. Services:</strong> TechKlein LLC will provide custom software development services as
						specified in your project quote. All work is performed by Erick Harlein personally - no outsourcing, no
						templates.
					</p>

					<p>
						<strong>2. Timeline:</strong> Estimated timeline is {state.estimatedTimelineWeeks} weeks from deposit
						payment. This is an estimate and may adjust based on project complexity and change requests.
					</p>

					<p>
						<strong>3. Payment:</strong> A {state.pricing.depositPercentage}% deposit (
						{formatPrice(state.pricing.depositAmount)}) is required to begin work. The remaining balance is due
						upon project completion before final delivery.
					</p>

					<p>
						<strong>4. Intellectual Property:</strong> Upon full payment, all code and designs created specifically
						for your project become your property. Third-party libraries and frameworks remain under their
						respective licenses.
					</p>

					<p>
						<strong>5. Support:</strong> 30 days of bug fixes and technical support included after launch. Ongoing
						maintenance available separately.
					</p>

					<p>
						<strong>6. Refunds:</strong> Deposit is non-refundable once development begins. Refunds may be issued
						for unperformed work at my discretion.
					</p>

					<p>
						<strong>7. Changes:</strong> Scope changes may affect timeline and pricing. Major changes require a new
						quote.
					</p>

					<p>
						<strong>8. Confidentiality:</strong> Your project details and business information remain confidential.
					</p>

					<p className="text-xs text-muted-foreground mt-4">
						By proceeding with payment, you agree to these terms. Full contract will be provided via email.
					</p>
				</div>

				{/* Acceptance Checkbox */}
				<button
					type="button"
					onClick={handleAcceptContract}
					className={`w-full p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
						contractAccepted
							? "border-green-500 bg-green-500/10"
							: "border-primary/20 hover:border-primary/40"
					}`}
				>
					<div
						className={`flex items-center justify-center w-6 h-6 rounded border-2 transition-all ${
							contractAccepted ? "bg-green-500 border-green-500" : "border-muted-foreground"
						}`}
					>
						{contractAccepted && <Check className="h-4 w-4 text-white" />}
					</div>
					<span className="text-sm font-medium">
						I have read and agree to the Service Agreement and Terms of Service
					</span>
				</button>
			</div>

			{/* Navigation */}
			<div className="flex gap-4 pt-6">
				<Button onClick={onBack} variant="outline" size="lg">
					Back
				</Button>
				<Button onClick={onNext} disabled={!contractAccepted} size="lg" className="flex-1">
					Proceed to Payment
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</motion.div>
	);
}
