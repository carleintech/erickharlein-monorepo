"use client";

import { Button } from "@erickharlein/ui";
import { CreditCard, Shield, Lock, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { BookingWizardState } from "@/types/booking-wizard";
import { formatPrice } from "@erickharlein/utils";

interface Step8DepositProps {
	state: BookingWizardState;
	onBack: () => void;
}

export function Step8Deposit({ state, onBack }: Step8DepositProps) {
	const [isProcessing, setIsProcessing] = useState(false);
	const [selectedPath, setSelectedPath] = useState<"deposit" | "call" | null>(null);

	const handleStripeCheckout = async () => {
		setIsProcessing(true);

		try {
			// TODO: Create Stripe checkout session
			const response = await fetch("/api/bookings/checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					bookingData: state,
				}),
			});

			const { url } = await response.json();
			if (url) {
				window.location.href = url;
			}
		} catch (error) {
			console.error("Checkout error:", error);
			setIsProcessing(false);
		}
	};

	const handleCalendlyClick = () => {
		// TODO: Replace with your actual Calendly URL
		const calendlyUrl = "https://calendly.com/erickharlein/strategy-call";
		window.open(calendlyUrl, "_blank");
	};

	return (
		<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8 max-w-4xl mx-auto">
			<div className="text-center">
				<h2 className="text-4xl font-bold mb-2">Choose Your Next Step</h2>
				<p className="text-lg text-muted-foreground">Start with a strategy call or secure your development slot</p>
			</div>

			{/* Path Selection Cards */}
			<div className="grid md:grid-cols-2 gap-6">
				{/* Option 1: Strategy Call */}
				<motion.div
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					className={`glass-strong border-2 rounded-2xl p-8 text-left transition-all ${
						selectedPath === "call"
							? "border-blue-500 shadow-lg shadow-blue-500/20"
							: "border-primary/30 hover:border-blue-500/50"
					}`}
				>
					<div className="space-y-4">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
							<Calendar className="h-8 w-8 text-white" />
						</div>

						<div>
							<h3 className="text-2xl font-bold mb-2">Book Free Strategy Call</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Let's discuss your project in detail before committing. I'll walk you through the technical approach, timeline, and answer all your questions.
							</p>
						</div>

						<div className="space-y-2 text-sm">
							<div className="flex items-start gap-2">
								<span className="text-blue-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">30-minute consultation</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-blue-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">Review project scope & requirements</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-blue-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">Get technical recommendations</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-blue-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">No commitment required</span>
							</div>
						</div>

						<Button 
							onClick={() => {
								setSelectedPath("call");
								handleCalendlyClick();
							}}
							className="w-full bg-blue-500 hover:bg-blue-600 text-white"
						>
							<MessageSquare className="h-4 w-4 mr-2" />
							Schedule Call
						</Button>
					</div>
				</motion.div>

				{/* Option 2: Pay Deposit */}
				<motion.div
					whileHover={{ scale: 1.02 }}
					className={`glass-strong border-2 rounded-2xl p-8 transition-all ${
						selectedPath === "deposit"
							? "border-green-500 shadow-lg shadow-green-500/20"
							: "border-primary/30 hover:border-green-500/50"
					}`}
				>
					<div className="space-y-4">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-xl">
							<CreditCard className="h-8 w-8 text-white" />
						</div>

						<div>
							<h3 className="text-2xl font-bold mb-2">Secure Development Slot</h3>
							<p className="text-sm text-muted-foreground mb-4">
								Ready to start? Reserve your spot in the development queue with a deposit. Limited slots available each month.
							</p>
						</div>

						<div className="space-y-2 text-sm">
							<div className="flex items-start gap-2">
								<span className="text-green-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">Immediate slot reservation</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-green-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">Priority scheduling</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-green-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">Locked-in pricing</span>
							</div>
							<div className="flex items-start gap-2">
								<span className="text-green-400 flex-shrink-0">✓</span>
								<span className="text-muted-foreground">Development starts ASAP</span>
							</div>
						</div>

						<div className="pt-4 border-t border-primary/20">
							<p className="text-xs text-muted-foreground mb-2">Deposit Due Today:</p>
							<p className="text-3xl font-bold text-green-400">{formatPrice(state.pricing.depositAmount)}</p>
							<p className="text-xs text-muted-foreground mt-1">
								{state.pricing.depositPercentage}% of {formatPrice(state.pricing.totalOneTime)} total
							</p>
						</div>

						<Button
							onClick={() => {
								setSelectedPath("deposit");
								handleStripeCheckout();
							}}
							disabled={isProcessing}
							className="w-full bg-green-500 hover:bg-green-600 text-white"
						>
							{isProcessing ? "Processing..." : "Pay Deposit & Reserve Slot"}
						</Button>
					</div>
				</motion.div>
			</div>

			{/* Project Cost Summary */}
			<div className="glass-strong border-2 border-primary/30 rounded-2xl p-8 space-y-6">
				<h3 className="font-semibold text-lg mb-4">Project Investment Summary</h3>
				<div className="space-y-4">
					<div className="flex items-baseline justify-between pb-4 border-b border-primary/20">
						<div>
							<p className="text-sm text-muted-foreground mb-1">Total Project Cost</p>
							<p className="text-3xl font-bold">{formatPrice(state.pricing.totalOneTime)}</p>
						</div>
						{state.pricing.totalMonthly > 0 && (
							<div className="text-right">
								<p className="text-sm text-muted-foreground mb-1">Monthly Recurring</p>
								<p className="text-2xl font-semibold text-blue-400">
									{formatPrice(state.pricing.totalMonthly)}
									<span className="text-sm text-muted-foreground">/mo</span>
								</p>
							</div>
						)}
					</div>

					<div className="grid md:grid-cols-2 gap-4">
						<div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
							<p className="text-xs text-muted-foreground mb-1">
								Deposit Required ({state.pricing.depositPercentage}%)
							</p>
							<p className="text-3xl font-bold text-green-400">{formatPrice(state.pricing.depositAmount)}</p>
						</div>
						<div className="p-4 rounded-lg bg-muted/50">
							<p className="text-xs text-muted-foreground mb-1">Balance Due at Completion</p>
							<p className="text-2xl font-semibold">
								{formatPrice(state.pricing.totalOneTime - state.pricing.depositAmount)}
							</p>
						</div>
					</div>
				</div>

				<div className="pt-4 border-t border-primary/20">
					<p className="text-sm text-muted-foreground">
						Estimated timeline: <span className="font-semibold text-foreground">{state.estimatedTimelineWeeks} weeks</span>
					</p>
				</div>
			</div>

			{/* What Happens After You Choose */}
			<div className="glass border border-primary/30 rounded-xl p-6 space-y-4">
				<h3 className="font-semibold text-lg">What Happens After You Choose?</h3>
				<div className="grid md:grid-cols-2 gap-6">
					<div>
						<p className="text-sm font-semibold text-blue-400 mb-3">📅 If you book a strategy call:</p>
						<div className="space-y-2">
							{[
								"Pick your preferred time slot",
								"Receive calendar invite with meeting link",
								"30-minute discussion about your project",
								"No pressure — decide after the call",
							].map((step) => (
								<div key={step} className="flex items-start gap-2">
									<span className="text-blue-400 flex-shrink-0 text-xs">✓</span>
									<p className="text-sm text-muted-foreground">{step}</p>
								</div>
							))}
						</div>
					</div>
					<div>
						<p className="text-sm font-semibold text-green-400 mb-3">🚀 If you pay the deposit:</p>
						<div className="space-y-2">
							{[
								"Development slot reserved immediately",
								"Confirmation email with contract details",
								"Kickoff call scheduled within 24 hours",
								"Development begins after requirements finalized",
							].map((step) => (
								<div key={step} className="flex items-start gap-2">
									<span className="text-green-400 flex-shrink-0 text-xs">✓</span>
									<p className="text-sm text-muted-foreground">{step}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Security Badges */}
			<div className="grid md:grid-cols-3 gap-4">
				<div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
					<Shield className="h-5 w-5 text-green-500" />
					<div>
						<p className="text-xs font-semibold">Secure Payment</p>
						<p className="text-xs text-muted-foreground">Stripe Encrypted</p>
					</div>
				</div>
				<div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
					<Lock className="h-5 w-5 text-blue-500" />
					<div>
						<p className="text-xs font-semibold">Protected</p>
						<p className="text-xs text-muted-foreground">PCI Compliant</p>
					</div>
				</div>
				<div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
					<CreditCard className="h-5 w-5 text-purple-500" />
					<div>
						<p className="text-xs font-semibold">All Cards Accepted</p>
						<p className="text-xs text-muted-foreground">Visa, MC, Amex</p>
					</div>
				</div>
			</div>

			{/* CTA */}
			<div className="space-y-4">
				<Button
					onClick={handleStripeCheckout}
					disabled={isProcessing}
					size="lg"
					className="w-full py-6 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
				>
					<CreditCard className="mr-2 h-5 w-5" />
					{isProcessing ? "Processing..." : `Pay ${formatPrice(state.pricing.depositAmount)} Deposit`}
				</Button>

				<Button onClick={onBack} variant="ghost" size="lg" className="w-full" disabled={isProcessing}>
					← Go Back & Edit
				</Button>
			</div>

			<p className="text-xs text-center text-muted-foreground">
				Your payment is secure and encrypted. By proceeding, you agree to the Service Agreement terms.
			</p>
		</motion.div>
	);
}
