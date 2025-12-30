"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@erickharlein/ui";
import { Calendar, DollarSign, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BookingWizardState } from "@/types/booking-wizard";

interface PricingSidebarProps {
	state: BookingWizardState;
}

export function PricingSidebar({ state }: PricingSidebarProps) {
	const { pricing, estimatedTimelineWeeks } = state;
	const hasMonthlyFees = pricing.addOnsMonthly > 0;

	return (
		<div className="sticky top-20 space-y-4">
			{/* Main Price Card */}
			<Card className="glass-strong border-2 border-primary/40 shadow-2xl">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-xl">
						<DollarSign className="h-5 w-5 text-green-500" />
						Live Estimate
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					{/* Total One-Time Investment */}
					<div>
						<div className="text-sm text-muted-foreground mb-2">Project Investment</div>
						<AnimatePresence mode="wait">
							<motion.div
								key={pricing.totalOneTime}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
							>
								${pricing.totalOneTime.toLocaleString()}
							</motion.div>
						</AnimatePresence>
						<div className="text-xs text-muted-foreground mt-1">one-time payment</div>
					</div>

					{/* Breakdown */}
					{pricing.totalOneTime > 0 && (
						<div className="space-y-2 text-sm border-t border-primary/20 pt-4">
							{pricing.basePrice > 0 && (
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									className="flex justify-between"
								>
									<span className="text-muted-foreground">Base Project</span>
									<span className="font-semibold">${pricing.basePrice.toLocaleString()}</span>
								</motion.div>
							)}
							{pricing.featuresTotal > 0 && (
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									className="flex justify-between"
								>
									<span className="text-muted-foreground">Features</span>
									<span className="font-semibold text-green-500">
										+${pricing.featuresTotal.toLocaleString()}
									</span>
								</motion.div>
							)}
							{pricing.addOnsOneTime > 0 && (
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									className="flex justify-between"
								>
									<span className="text-muted-foreground">Add-Ons</span>
									<span className="font-semibold text-purple-500">
										+${pricing.addOnsOneTime.toLocaleString()}
									</span>
								</motion.div>
							)}
							{pricing.contentCreation > 0 && (
								<motion.div
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									className="flex justify-between"
								>
									<span className="text-muted-foreground">Content Creation</span>
									<span className="font-semibold text-cyan-500">
										+${pricing.contentCreation.toLocaleString()}
									</span>
								</motion.div>
							)}
						</div>
					)}

					{/* Monthly Recurring */}
					{hasMonthlyFees && (
						<div className="border-t border-primary/20 pt-4">
							<div className="text-sm text-muted-foreground mb-2">Ongoing Operations</div>
							<AnimatePresence mode="wait">
								<motion.div
									key={pricing.totalMonthly}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									className="text-3xl font-bold text-purple-400"
								>
									${pricing.totalMonthly.toLocaleString()}
									<span className="text-lg text-muted-foreground">/month</span>
								</motion.div>
							</AnimatePresence>
						</div>
					)}

					{/* Timeline */}
					{estimatedTimelineWeeks > 0 && (
						<div className="border-t border-primary/20 pt-4">
							<div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
								<Calendar className="h-4 w-4" />
								Estimated Timeline
							</div>
							<AnimatePresence mode="wait">
								<motion.div
									key={estimatedTimelineWeeks}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									className="text-2xl font-bold text-cyan-400"
								>
									{estimatedTimelineWeeks} weeks
								</motion.div>
							</AnimatePresence>
						</div>
					)}

					{/* Deposit Amount */}
					{pricing.depositAmount > 0 && (
						<div className="border-t border-primary/20 pt-4 bg-gradient-to-br from-green-500/10 to-emerald-500/5 -mx-6 -mb-6 px-6 pb-6 mt-6 rounded-b-xl">
							<div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
								<TrendingUp className="h-4 w-4 text-green-500" />
								Deposit Required ({pricing.depositPercentage}%)
							</div>
							<AnimatePresence mode="wait">
								<motion.div
									key={pricing.depositAmount}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									className="text-3xl font-bold text-green-400"
								>
									${pricing.depositAmount.toLocaleString()}
								</motion.div>
							</AnimatePresence>
							<div className="text-xs text-muted-foreground mt-1">to secure your development slot</div>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Info Card */}
			<Card className="glass border-primary/20">
				<CardContent className="pt-6 space-y-3 text-sm">
					<div className="flex items-start gap-2">
						<div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5" />
						<p className="text-muted-foreground">Prices update live as you make selections</p>
					</div>
					<div className="flex items-start gap-2">
						<div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5" />
						<p className="text-muted-foreground">Final price confirmed after strategy call</p>
					</div>
					<div className="flex items-start gap-2">
						<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5" />
						<p className="text-muted-foreground">All systems built from scratch with security-first approach</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
