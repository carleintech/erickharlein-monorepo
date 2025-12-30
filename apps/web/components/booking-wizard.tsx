"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BookingWizardState } from "@/types/booking-wizard";
import { INITIAL_WIZARD_STATE, WIZARD_STEPS } from "@/types/booking-wizard";
import { calculateEstimate } from "@/data/pricing-config";
import { PricingSidebar } from "./pricing-sidebar";
import { VisualPreview } from "./visual-preview";
import { AuthoritySection } from "./authority-section";
import { Step0Welcome } from "./wizard-steps/step-0-welcome";
import { Step1Domain } from "./wizard-steps/step-1-domain";
import { Step2Presets } from "./wizard-steps/step-2-presets";
import { Step3ProjectType } from "./wizard-steps/step-3-project-type";
import { Step4Features } from "./wizard-steps/step-4-features";
import { Step5AddOns } from "./wizard-steps/step-5-addons";
import { Step6Contact } from "./wizard-steps/step-6-contact";
import { Step7Review } from "./wizard-steps/step-7-review";
import { Step8Deposit } from "./wizard-steps/step-8-deposit";

export function BookingWizard() {
	const [currentStep, setCurrentStep] = useState(0);
	const [state, setState] = useState<BookingWizardState>(INITIAL_WIZARD_STATE);
	const [sessionId, setSessionId] = useState<string | null>(null);

	// Initialize session
	useEffect(() => {
		const existingSession = sessionStorage.getItem("booking-wizard-session");
		if (existingSession) {
			const { id, state: savedState } = JSON.parse(existingSession);
			setSessionId(id);
			setState(savedState);
		} else {
			const newSessionId = `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
			setSessionId(newSessionId);
		}
	}, []);

	// Calculate pricing whenever selections change
	const updatePricing = useCallback((newState: BookingWizardState) => {
		const estimate = calculateEstimate({
			projectType: newState.projectType,
			features: newState.selectedFeatures || [],
			addOns: newState.selectedAddOns || [],
			includeContentCreation: newState.includeContentCreation || false,
		});

		const depositPercentage = 20;
		const depositAmount = Math.round(estimate.totalPrice * (depositPercentage / 100));

		return {
			...newState,
			pricing: {
				basePrice: estimate.basePrice,
				featuresTotal: 0, // Calculated in estimate
				addOnsOneTime: 0, // Calculated in estimate
				addOnsMonthly: estimate.totalMonthly,
				contentCreation: newState.includeContentCreation ? 1200 : 0,
				totalOneTime: estimate.totalPrice,
				totalMonthly: estimate.totalMonthly,
				depositPercentage,
				depositAmount,
			},
			estimatedTimelineWeeks: estimate.timelineWeeks,
		};
	}, []);

	// Update state handler
	const handleUpdate = useCallback((updates: Partial<BookingWizardState>) => {
		setState((prev) => {
			const newState = { ...prev, ...updates };
			const stateWithPricing = updatePricing(newState);

			// Save to session
			if (sessionId) {
				sessionStorage.setItem(
					"booking-wizard-session",
					JSON.stringify({
						id: sessionId,
						state: stateWithPricing,
						timestamp: Date.now(),
					})
				);
			}

			return stateWithPricing;
		});
	}, [sessionId, updatePricing]);

	// Auto-save every 30 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			if (sessionId && currentStep > 0) {
				sessionStorage.setItem(
					"booking-wizard-session",
					JSON.stringify({
						id: sessionId,
						state,
						timestamp: Date.now(),
					})
				);
			}
		}, 30000); // 30 seconds

		return () => clearInterval(interval);
	}, [sessionId, state, currentStep]);

	// Navigation handlers
	const handleNext = () => {
		if (currentStep < WIZARD_STEPS.length - 1) {
			setCurrentStep((prev) => prev + 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	// Render current step
	const renderStep = () => {
		const stepProps = {
			state,
			onUpdate: handleUpdate,
			onNext: handleNext,
			onBack: handleBack,
		};

		switch (currentStep) {
			case 0:
				return <Step0Welcome onNext={handleNext} />;
			case 1:
				return <Step1Domain {...stepProps} />;
			case 2:
				return <Step2Presets {...stepProps} />;
			case 3:
				return <Step3ProjectType {...stepProps} />;
			case 4:
				return <Step4Features {...stepProps} />;
			case 5:
				return <Step5AddOns {...stepProps} />;
			case 6:
				return <Step6Contact {...stepProps} />;
			case 7:
				return <Step7Review {...stepProps} />;
			case 8:
				return <Step8Deposit state={state} onBack={handleBack} />;
			default:
				return null;
		}
	};

	const currentStepData = WIZARD_STEPS[currentStep];
	const showSidebar = currentStep > 0 && currentStep < 8;
	const showVisualPreview = currentStep >= 3 && currentStep <= 5;
	const progressPercentage = (currentStep / (WIZARD_STEPS.length - 1)) * 100;

	return (
		<div className="min-h-screen py-20">
			<div className="container mx-auto px-4">
				{/* Progress Bar */}
				{currentStep > 0 && (
					<div className="max-w-7xl mx-auto mb-12">
						<div className="space-y-3">
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">
									Step {currentStep} of {WIZARD_STEPS.length - 1}
								</span>
								<span className="font-semibold">{currentStepData.title}</span>
							</div>
							<div className="relative h-2 bg-muted rounded-full overflow-hidden">
								<motion.div
									className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
									initial={{ width: 0 }}
									animate={{ width: `${progressPercentage}%` }}
									transition={{ duration: 0.3 }}
								/>
							</div>
						</div>
					</div>
				)}

				{/* Main Content */}
				<div className={`grid ${showSidebar ? "lg:grid-cols-[1fr_380px]" : "grid-cols-1"} gap-12 max-w-7xl mx-auto`}>
					{/* Step Content */}
					<div className="min-w-0">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentStep}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.3 }}
							>
								{renderStep()}
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Sidebar - Visual Preview + Pricing */}
					{showSidebar && (
						<div className="lg:sticky lg:top-24 h-fit space-y-6">
							{showVisualPreview && <VisualPreview state={state} />}
							<PricingSidebar state={state} />
						</div>
					)}
				</div>

				{/* Authority Section */}
				{currentStep > 0 && currentStep < 8 && (
					<div className="max-w-7xl mx-auto mt-12">
						<AuthoritySection />
					</div>
				)}
			</div>
		</div>
	);
}
