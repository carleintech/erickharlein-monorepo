"use client";

import { motion } from "framer-motion";

const journeySteps = [
	{ icon: "🇭🇹", label: "Haiti", color: "from-blue-500 to-red-500" },
	{ icon: "🇺🇸", label: "USA", color: "from-red-500 to-blue-500" },
	{ icon: "⚓", label: "Navy", color: "from-blue-600 to-cyan-600" },
	{ icon: "🎓", label: "University", color: "from-purple-500 to-pink-500" },
	{ icon: "🧠", label: "AI & Cyber", color: "from-indigo-500 to-purple-500" },
	{ icon: "🚀", label: "Systems Architect", color: "from-cyan-500 to-teal-500" },
];

export function JourneyTimeline() {
	return (
		<div className="relative py-8">
			<div className="flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between max-w-4xl mx-auto relative">
				{/* Timeline Line - Hidden on mobile */}
				<div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full" />
				
				{journeySteps.map((step, index) => (
					<motion.div
						key={step.label}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="relative z-10 flex flex-col items-center"
					>
						<motion.div
							whileHover={{ scale: 1.2, rotate: 5 }}
							className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl shadow-2xl cursor-pointer border-4 border-background`}
						>
							{step.icon}
						</motion.div>
						<span className="text-xs md:text-sm font-semibold text-foreground mt-2 text-center max-w-[80px]">
							{step.label}
						</span>
					</motion.div>
				))}
			</div>
		</div>
	);
}
