"use client";

import { Button } from "@erickharlein/ui";
import { ArrowRight, Check, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import type { BookingWizardState } from "@/types/booking-wizard";
import { ADD_ONS } from "@/data/pricing-config";
import { formatPrice } from "@erickharlein/utils";

interface Step5AddOnsProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

export function Step5AddOns({ state, onUpdate, onNext, onBack }: Step5AddOnsProps) {
	const toggleAddOn = (addOnId: string) => {
		const currentAddOns = state.selectedAddOns || [];
		const newAddOns = currentAddOns.includes(addOnId)
			? currentAddOns.filter((a) => a !== addOnId)
			: [...currentAddOns, addOnId];

		onUpdate({ selectedAddOns: newAddOns });
	};

	const hasRecurring = state.selectedAddOns?.some((id) => {
		const addOn = ADD_ONS.find((a) => a.id === id);
		return !!addOn && "recurring" in addOn && !!addOn.recurring;
	});

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-4xl">
			<div>
				<h2 className="text-3xl font-bold mb-2">Add-Ons & Services</h2>
				<p className="text-muted-foreground">Enhance your platform with these optional services</p>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				{ADD_ONS.map((addOn) => {
					const isSelected = state.selectedAddOns?.includes(addOn.id) || false;

					return (
						<motion.button
							key={addOn.id}
							type="button"
							onClick={() => toggleAddOn(addOn.id)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`p-6 rounded-xl border-2 transition-all text-left space-y-4 relative ${
								isSelected
									? "border-blue-500 bg-blue-500/10 shadow-lg"
									: "border-primary/20 hover:border-primary/40"
							}`}
						>
							{/* Selection Indicator */}
							<div
								className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all ${
									isSelected ? "bg-blue-500 text-white" : "bg-muted text-muted-foreground"
								}`}
							>
								{isSelected && <Check className="h-5 w-5" />}
							</div>

							{/* Content */}
							<div className="pr-12">
								<div className="flex items-center gap-2 mb-1">
									<h3 className="font-semibold text-lg">{addOn.name}</h3>
								{"recurring" in addOn && addOn.recurring && <RefreshCw className="h-4 w-4 text-blue-400" />}
								</div>
								<p className="text-sm text-muted-foreground">{addOn.description}</p>
							</div>

							{/* Pricing */}
							<div className="flex items-baseline gap-2 pt-2 border-t border-primary/10">
								<span className="text-2xl font-bold">{formatPrice(addOn.price)}</span>
								<span className="text-xs text-muted-foreground uppercase tracking-wider">
									{"recurring" in addOn && addOn.recurring ? "/ month" : "one-time"}
								</span>
							</div>

							{"recurring" in addOn && addOn.recurring && (
								<div className="flex items-center gap-1 text-xs text-blue-400">
									<RefreshCw className="h-3 w-3" />
									<span>Recurring monthly fee</span>
								</div>
							)}
						</motion.button>
					);
				})}
			</div>

			{/* Recurring Notice */}
			{hasRecurring && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="glass border border-blue-500/30 rounded-xl p-6 flex items-start gap-3"
				>
					<RefreshCw className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
					<div>
						<h4 className="font-semibold text-blue-400 mb-1">Recurring Services Selected</h4>
						<p className="text-sm text-muted-foreground">
							Some of your selections include monthly recurring fees. These will be billed separately after your
							platform launches.
						</p>
					</div>
				</motion.div>
			)}

			{/* Summary */}
			{state.selectedAddOns && state.selectedAddOns.length > 0 && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="glass-strong border border-primary/30 rounded-xl p-6"
				>
					<p className="text-sm text-muted-foreground mb-2">
						Selected {state.selectedAddOns.length} add-on{state.selectedAddOns.length !== 1 ? "s" : ""}
					</p>
					<div className="flex flex-wrap gap-2">
						{state.selectedAddOns.map((addOnId) => {
							const addOn = ADD_ONS.find((a) => a.id === addOnId);
							return addOn ? (
								<span
									key={addOnId}
									className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm border border-blue-500/30"
								>
									{addOn.name}
								</span>
							) : null;
						})}
					</div>
				</motion.div>
			)}

			{/* Navigation */}
			<div className="flex gap-4 pt-6">
				<Button onClick={onBack} variant="outline" size="lg">
					Back
				</Button>
				<Button onClick={onNext} size="lg" className="flex-1">
					Continue
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</motion.div>
	);
}
