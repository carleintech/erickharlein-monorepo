"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@erickharlein/ui";

interface TimelineVisualProps {
	weeks: number;
}

export function TimelineVisual({ weeks }: TimelineVisualProps) {
	const phases = [
		{
			name: "Discovery & Design",
			duration: Math.ceil(weeks * 0.15),
			description: "Architecture planning, UI/UX design, database schema",
			color: "from-blue-500 to-cyan-500",
		},
		{
			name: "Core Development",
			duration: Math.ceil(weeks * 0.50),
			description: "Backend APIs, frontend components, feature integration",
			color: "from-purple-500 to-pink-500",
		},
		{
			name: "Testing & Security",
			duration: Math.ceil(weeks * 0.20),
			description: "QA testing, security audit, performance optimization",
			color: "from-orange-500 to-red-500",
		},
		{
			name: "Launch & Support",
			duration: Math.ceil(weeks * 0.15),
			description: "Deployment, documentation, post-launch support",
			color: "from-green-500 to-emerald-500",
		},
	];

	let weekCounter = 0;

	return (
		<Card className="glass-strong border-2 border-primary/40 shadow-xl">
			<CardHeader>
				<CardTitle className="flex items-center gap-3">
					<Calendar className="h-6 w-6 text-blue-400" />
					Your Project Timeline
				</CardTitle>
				<div className="flex items-center gap-3">
					<div className="text-3xl font-bold text-primary">{weeks} weeks</div>
					<div className="text-sm text-muted-foreground">From deposit to launch</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-4">
				{phases.map((phase, index) => {
					const startWeek = weekCounter + 1;
					weekCounter += phase.duration;
					const endWeek = weekCounter;

					return (
						<motion.div
							key={phase.name}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							className="relative"
						>
							{/* Phase Card */}
							<div className="p-4 rounded-xl glass border-2 border-primary/20 hover:border-primary/40 transition-colors">
								<div className="flex items-start gap-4">
									{/* Week Range */}
									<div className="flex-shrink-0 text-center">
										<div className={`text-sm font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
											Week {startWeek}
											{phase.duration > 1 && `-${endWeek}`}
										</div>
										<div className="text-xs text-muted-foreground">
											{phase.duration} week{phase.duration > 1 ? "s" : ""}
										</div>
									</div>

									{/* Phase Details */}
									<div className="flex-1">
										<h4 className="font-bold mb-1 flex items-center gap-2">
											{phase.name}
											{index === 0 && <Rocket className="h-4 w-4 text-blue-400" />}
										</h4>
										<p className="text-sm text-muted-foreground">{phase.description}</p>
									</div>

									{/* Progress Indicator */}
									<div className="flex-shrink-0">
										<div className={`w-3 h-3 rounded-full bg-gradient-to-r ${phase.color}`} />
									</div>
								</div>

								{/* Progress Bar */}
								<div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: "100%" }}
										transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
										className={`h-full bg-gradient-to-r ${phase.color}`}
									/>
								</div>
							</div>

							{/* Connector Line */}
							{index < phases.length - 1 && (
								<div className="flex justify-center py-2">
									<div className="w-0.5 h-6 bg-gradient-to-b from-primary/50 to-primary/10" />
								</div>
							)}
						</motion.div>
					);
				})}

				{/* Launch Callout */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5 }}
					className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 flex items-center gap-3"
				>
					<CheckCircle className="h-8 w-8 text-green-400 flex-shrink-0" />
					<div>
						<p className="font-bold text-green-400">On-Time Delivery Guarantee</p>
						<p className="text-sm text-muted-foreground">
							I work full-time on your project. No distractions, no delays, no excuses.
						</p>
					</div>
				</motion.div>
			</CardContent>
		</Card>
	);
}
