"use client";

import { Button } from "@erickharlein/ui";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { BookingWizardState } from "@/types/booking-wizard";
import { PROJECT_TYPES } from "@/data/pricing-config";
import { formatPrice } from "@erickharlein/utils";

interface Step3ProjectTypeProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

export function Step3ProjectType({ state, onUpdate, onNext, onBack }: Step3ProjectTypeProps) {
	const handleSelectType = (typeId: string) => {
		onUpdate({ projectType: typeId });
	};

	const canProceed = state.projectType !== null;

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-4xl">
			<div>
				<h2 className="text-3xl font-bold mb-2">Select Project Type</h2>
				<p className="text-muted-foreground">Choose the foundation that fits your needs</p>
			</div>

			<div className="grid md:grid-cols-3 gap-6">
				{PROJECT_TYPES.map((type) => {
					const isSelected = state.projectType === type.id;

					return (
						<motion.button
							key={type.id}
							type="button"
							onClick={() => handleSelectType(type.id)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`p-8 rounded-2xl border-2 transition-all text-left space-y-6 ${
								isSelected
									? "border-indigo-500 bg-indigo-500/10 shadow-2xl scale-105"
									: "border-primary/20 hover:border-primary/40"
							}`}
						>
							{/* Header */}
							<div>
								<h3 className="font-bold text-2xl mb-1">{type.name}</h3>
								<p className="text-sm text-muted-foreground">{type.description}</p>
							</div>

							{/* Pricing */}
							<div className="space-y-1">
								<div className="flex items-baseline gap-2">
									<span className="text-4xl font-bold">{formatPrice(type.basePrice)}</span>
									<span className="text-muted-foreground">starting</span>
								</div>
							</div>

							{/* Timeline */}
							<div className="flex items-center gap-2 text-sm text-muted-foreground">
								<Clock className="h-4 w-4" />
								<span>
									{type.timeline.min}-{type.timeline.max} {type.timeline.unit} delivery
								</span>
							</div>

							{/* Includes */}
							<div className="pt-4 border-t border-primary/10 space-y-2">
								<p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
									Included
								</p>
								<ul className="space-y-2">
									{type.includes.map((item) => (
										<li key={item} className="text-sm flex items-start gap-2">
											<span className="text-green-500 mt-0.5">✓</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Selection Badge */}
							{isSelected && (
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-green-500 text-white font-semibold"
								>
									<span>✓</span>
									Selected
								</motion.div>
							)}
						</motion.button>
					);
				})}
			</div>

			{/* Navigation */}
			<div className="flex gap-4 pt-6">
				<Button onClick={onBack} variant="outline" size="lg">
					Back
				</Button>
				<Button onClick={onNext} disabled={!canProceed} size="lg" className="flex-1">
					Continue
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</motion.div>
	);
}
