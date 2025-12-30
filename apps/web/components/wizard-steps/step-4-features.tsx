"use client";

import { Button } from "@erickharlein/ui";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { BookingWizardState } from "@/types/booking-wizard";
import { CORE_FEATURES } from "@/data/pricing-config";
import { formatPrice } from "@erickharlein/utils";

interface Step4FeaturesProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

export function Step4Features({ state, onUpdate, onNext, onBack }: Step4FeaturesProps) {
	const toggleFeature = (featureId: string) => {
		const currentFeatures = state.selectedFeatures || [];
		const newFeatures = currentFeatures.includes(featureId)
			? currentFeatures.filter((f) => f !== featureId)
			: [...currentFeatures, featureId];

		onUpdate({ selectedFeatures: newFeatures });
	};

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-5xl">
			<div>
				<h2 className="text-3xl font-bold mb-2">Select Features</h2>
				<p className="text-muted-foreground">Add the capabilities your platform needs</p>
			</div>

			<div className="grid md:grid-cols-2 gap-6">
				{CORE_FEATURES.map((feature) => {
					const isSelected = state.selectedFeatures?.includes(feature.id) || false;

					return (
						<motion.button
							key={feature.id}
							type="button"
							onClick={() => toggleFeature(feature.id)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`p-6 rounded-xl border-2 transition-all text-left space-y-4 relative ${
								isSelected
									? "border-green-500 bg-green-500/10 shadow-lg"
									: "border-primary/20 hover:border-primary/40"
							}`}
						>
							{/* Selection Indicator */}
							<div
								className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all ${
									isSelected ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
								}`}
							>
								{isSelected && <Check className="h-5 w-5" />}
							</div>

							{/* Content */}
							<div className="pr-12">
								<h3 className="font-semibold text-lg mb-1">{feature.name}</h3>
								<p className="text-sm text-muted-foreground">{feature.description}</p>
							</div>

							{/* Pricing */}
							<div className="flex items-baseline gap-2 pt-2 border-t border-primary/10">
								<span className="text-2xl font-bold">{formatPrice(feature.price)}</span>
								<span className="text-xs text-muted-foreground uppercase tracking-wider">one-time</span>
							</div>
						</motion.button>
					);
				})}
			</div>

			{/* Summary */}
			{state.selectedFeatures && state.selectedFeatures.length > 0 && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className="glass-strong border border-primary/30 rounded-xl p-6"
				>
					<p className="text-sm text-muted-foreground mb-2">
						Selected {state.selectedFeatures.length} feature{state.selectedFeatures.length !== 1 ? "s" : ""}
					</p>
					<div className="flex flex-wrap gap-2">
						{state.selectedFeatures.map((featureId) => {
							const feature = CORE_FEATURES.find((f) => f.id === featureId);
							return feature ? (
								<span
									key={featureId}
									className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm border border-green-500/30"
								>
									{feature.name}
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
					Continue {state.selectedFeatures && state.selectedFeatures.length > 0 ? `with ${state.selectedFeatures.length} feature${state.selectedFeatures.length !== 1 ? "s" : ""}` : "without features"}
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</motion.div>
	);
}
