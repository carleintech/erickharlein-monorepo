"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, Shield, Users, Database, CreditCard } from "lucide-react";
import { Card, CardContent } from "@erickharlein/ui";
import type { BookingWizardState } from "@/types/booking-wizard";

interface VisualPreviewProps {
	state: BookingWizardState;
}

export function VisualPreview({ state }: VisualPreviewProps) {
	const hasAuth = state.selectedFeatures.includes("AUTH_LOGIN");
	const hasDashboard = state.selectedFeatures.includes("CLIENT_DASHBOARD");
	const hasAdmin = state.selectedFeatures.includes("ADMIN_DASHBOARD");
	const hasPayments = state.selectedFeatures.includes("PAYMENT_PROCESSING");
	const hasMobileApp = state.selectedAddOns.includes("MOBILE_APP");
	const hasDatabase = state.selectedFeatures.includes("DOCUMENT_UPLOAD");

	return (
		<div className="sticky top-24 space-y-4">
			<Card className="glass-strong border-2 border-purple-500/40 shadow-2xl overflow-hidden">
				<CardContent className="p-6 space-y-4">
					{/* Header */}
					<div className="flex items-center gap-3 pb-4 border-b border-primary/20">
						<Monitor className="h-6 w-6 text-purple-400" />
						<div>
							<h3 className="font-bold text-lg">Your Platform Preview</h3>
							<p className="text-xs text-muted-foreground">Real-time visual builder</p>
						</div>
					</div>

					{/* Main Preview Area */}
					<div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg overflow-hidden border-2 border-primary/30">
						<AnimatePresence mode="wait">
							{/* Base Platform */}
							<motion.div
								key="base"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="absolute inset-0 flex items-center justify-center p-8"
							>
								<div className="w-full h-full border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
									<div className="text-center space-y-2">
										<Monitor className="h-12 w-12 mx-auto text-primary/50" />
										<p className="text-sm text-muted-foreground">Your Platform</p>
									</div>
								</div>
							</motion.div>

							{/* Feature Overlays */}
							{hasAuth && (
								<motion.div
									key="auth"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ type: "spring", duration: 0.5 }}
									className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 rounded-lg p-3"
								>
									<Shield className="h-8 w-8 text-blue-400" />
									<p className="text-xs text-blue-400 mt-1 font-semibold">Secure Login</p>
								</motion.div>
							)}

							{hasDashboard && (
								<motion.div
									key="dashboard"
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
									className="absolute top-4 right-4 bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-lg p-3"
								>
									<Users className="h-8 w-8 text-purple-400" />
									<p className="text-xs text-purple-400 mt-1 font-semibold">Client Portal</p>
								</motion.div>
							)}

							{hasAdmin && (
								<motion.div
									key="admin"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
									className="absolute bottom-4 left-4 bg-orange-500/20 backdrop-blur-sm border border-orange-500/50 rounded-lg p-3"
								>
									<Database className="h-8 w-8 text-orange-400" />
									<p className="text-xs text-orange-400 mt-1 font-semibold">Admin Panel</p>
								</motion.div>
							)}

							{hasPayments && (
								<motion.div
									key="payments"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
									className="absolute bottom-4 right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg p-3"
								>
									<CreditCard className="h-8 w-8 text-green-400" />
									<p className="text-xs text-green-400 mt-1 font-semibold">Payments</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{/* Mobile App Preview */}
					{hasMobileApp && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
						>
							<Smartphone className="h-8 w-8 text-pink-400 flex-shrink-0" />
							<div>
								<p className="text-sm font-semibold text-pink-400">Mobile App Included</p>
								<p className="text-xs text-muted-foreground">iOS & Android native apps</p>
							</div>
						</motion.div>
					)}

					{/* Feature Count */}
					<div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary/20">
						<div className="text-center p-3 rounded-lg bg-primary/5">
							<p className="text-2xl font-bold text-primary">{state.selectedFeatures.length}</p>
							<p className="text-xs text-muted-foreground">Features</p>
						</div>
						<div className="text-center p-3 rounded-lg bg-purple-500/10">
							<p className="text-2xl font-bold text-purple-400">{state.selectedAddOns.length}</p>
							<p className="text-xs text-muted-foreground">Add-ons</p>
						</div>
					</div>

					{/* Placeholder for Future Images */}
					<div className="text-center text-xs text-muted-foreground/50 pt-2">
						💡 Tip: Replace with actual mockups by swapping preview images
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
