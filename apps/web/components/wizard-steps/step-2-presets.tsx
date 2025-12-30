"use client";

import { Button } from "@erickharlein/ui";
import { ArrowRight, Briefcase, ShoppingCart, UserCheck, GraduationCap, MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { BookingWizardState } from "@/types/booking-wizard";
import { USE_CASE_PRESETS } from "@/data/pricing-config";

interface Step2PresetsProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

const PRESET_ICONS = {
	"Tax Business": Briefcase,
	"Online Store": ShoppingCart,
	"Service Company": UserCheck,
	Education: GraduationCap,
	Consulting: MessageSquare,
	Community: Users,
};

export function Step2Presets({ state, onUpdate, onNext, onBack }: Step2PresetsProps) {
	const handlePresetClick = (presetName: string) => {
		const preset = USE_CASE_PRESETS.find((p) => p.name === presetName);
		if (!preset) return;

		onUpdate({
			presetId: preset.id,
			projectType: preset.selections.projectType,
			selectedFeatures: [...preset.selections.features],
			selectedAddOns: [...preset.selections.addOns],
		});
	};

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-4xl">
			<div>
				<h2 className="text-3xl font-bold mb-2">Choose Your Use Case</h2>
				<p className="text-muted-foreground">Start with a preset or skip to customize manually</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{USE_CASE_PRESETS.map((preset) => {
					const Icon = PRESET_ICONS[preset.name as keyof typeof PRESET_ICONS];
					const isSelected = state.presetId === preset.id;

					return (
						<motion.button
							key={preset.name}
							type="button"
							onClick={() => handlePresetClick(preset.name)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`p-6 rounded-xl border-2 transition-all text-left space-y-4 ${
								isSelected
									? "border-indigo-500 bg-indigo-500/10 shadow-xl"
									: "border-primary/20 hover:border-primary/40"
							}`}
						>
							{Icon && (
								<div
									className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
										isSelected
											? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
											: "bg-muted text-muted-foreground"
									}`}
								>
									<Icon className="h-6 w-6" />
								</div>
							)}

							<div>
								<h3 className="font-semibold text-lg mb-1">{preset.name}</h3>
								<p className="text-sm text-muted-foreground">{preset.description}</p>
							</div>

							<div className="pt-2 border-t border-primary/10">
								<p className="text-xs text-muted-foreground mb-2">Includes:</p>
								<ul className="space-y-1">
									{preset.selections.features.slice(0, 3).map((featureId: string) => (
										<li key={featureId} className="text-xs text-muted-foreground flex items-center gap-1">
											<span className="text-green-500">✓</span>
											{featureId}
										</li>
									))}
									{preset.selections.features.length > 3 && (
										<li className="text-xs text-muted-foreground/70">
											+{preset.selections.features.length - 3} more
										</li>
									)}
								</ul>
							</div>
						</motion.button>
					);
				})}
			</div>

			{/* Skip Option */}
			<div className="text-center">
				<p className="text-sm text-muted-foreground mb-4">Don't see your use case?</p>
				<Button onClick={onNext} variant="outline" size="lg">
					Skip & Customize Manually
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>

			{/* Navigation */}
			<div className="flex gap-4 pt-6">
				<Button onClick={onBack} variant="outline" size="lg">
					Back
				</Button>
				{state.presetId && (
					<Button onClick={onNext} size="lg" className="flex-1">
						Continue with Preset
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
		</motion.div>
	);
}
