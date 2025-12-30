"use client";

import { motion } from "framer-motion";
import { DollarSign, Zap, TrendingUp, Shield, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@erickharlein/ui";
import type { BookingWizardState } from "@/types/booking-wizard";

interface BusinessImpactProps {
	state: BookingWizardState;
}

export function BusinessImpact({ state }: BusinessImpactProps) {
	// Calculate business impact based on features
	const hasPayments = state.selectedFeatures.includes("PAYMENT_PROCESSING");
	const hasDashboard = state.selectedFeatures.includes("CLIENT_DASHBOARD") || state.selectedFeatures.includes("ADMIN_DASHBOARD");
	const hasAuth = state.selectedFeatures.includes("AUTH_LOGIN");
	const hasNotifications = state.selectedFeatures.includes("NOTIFICATIONS");

	const impacts = [
		{
			icon: DollarSign,
			title: "Increase Revenue",
			description: hasPayments 
				? "Accept online payments 24/7, no manual invoicing"
				: "Professional platform attracts higher-value clients",
			color: "text-green-400",
			bgColor: "bg-green-500/10",
			borderColor: "border-green-500/30",
		},
		{
			icon: Clock,
			title: "Save 20+ Hours/Week",
			description: hasDashboard
				? "Automated dashboards eliminate manual reporting"
				: "Digital workflows replace manual processes",
			color: "text-blue-400",
			bgColor: "bg-blue-500/10",
			borderColor: "border-blue-500/30",
		},
		{
			icon: Users,
			title: "Scale Operations",
			description: hasAuth
				? "Serve 100+ clients simultaneously with user portals"
				: "Handle more customers without hiring extra staff",
			color: "text-purple-400",
			bgColor: "bg-purple-500/10",
			borderColor: "border-purple-500/30",
		},
		{
			icon: Shield,
			title: "Protect Your Business",
			description: "Bank-level security, encrypted data, GDPR compliance",
			color: "text-orange-400",
			bgColor: "bg-orange-500/10",
			borderColor: "border-orange-500/30",
		},
		{
			icon: TrendingUp,
			title: "Professional Image",
			description: "Custom platform positions you as industry leader",
			color: "text-pink-400",
			bgColor: "bg-pink-500/10",
			borderColor: "border-pink-500/30",
		},
		{
			icon: Zap,
			title: "Automate Everything",
			description: hasNotifications
				? "Automated emails, SMS, and notifications save hours daily"
				: "Reduce repetitive tasks with smart automation",
			color: "text-yellow-400",
			bgColor: "bg-yellow-500/10",
			borderColor: "border-yellow-500/30",
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="space-y-6"
		>
			<Card className="glass-strong border-2 border-primary/40 shadow-2xl">
				<CardHeader>
					<CardTitle className="flex items-center gap-3 text-2xl">
						<TrendingUp className="h-7 w-7 text-green-400" />
						Your Business Impact
					</CardTitle>
					<p className="text-muted-foreground">This isn't just a platform — it's a growth investment</p>
				</CardHeader>
				<CardContent>
					<div className="grid md:grid-cols-2 gap-4">
						{impacts.map((impact, index) => (
							<motion.div
								key={impact.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								className={`p-4 rounded-xl border-2 ${impact.borderColor} ${impact.bgColor} hover:scale-[1.02] transition-transform`}
							>
								<div className="flex items-start gap-3">
									<div className={`p-2 rounded-lg bg-background/50 ${impact.color}`}>
										<impact.icon className="h-6 w-6" />
									</div>
									<div className="flex-1">
										<h4 className={`font-bold mb-1 ${impact.color}`}>{impact.title}</h4>
										<p className="text-sm text-muted-foreground">{impact.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* ROI Callout */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6 }}
						className="mt-6 p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-500/30"
					>
						<div className="flex items-center gap-3 mb-3">
							<DollarSign className="h-8 w-8 text-green-400" />
							<h4 className="text-xl font-bold text-green-400">Typical ROI: 300-500%</h4>
						</div>
						<p className="text-sm text-muted-foreground">
							Most clients recover their investment within 3-6 months through increased revenue, 
							time savings, and operational efficiency. This is an investment that pays for itself.
						</p>
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
