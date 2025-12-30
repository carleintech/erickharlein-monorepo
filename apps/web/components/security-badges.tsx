"use client";

import { Shield, Lock, Zap, Database, Key, Server } from "lucide-react";

export function SecurityBadges() {
	const badges = [
		{
			icon: Shield,
			title: "Bank-Level Encryption",
			description: "256-bit SSL/TLS",
		},
		{
			icon: Lock,
			title: "Zero-Trust Security",
			description: "Multiple auth layers",
		},
		{
			icon: Database,
			title: "Secure Architecture",
			description: "SOC 2 compliant",
		},
		{
			icon: Zap,
			title: "99.9% Uptime",
			description: "Production-grade hosting",
		},
		{
			icon: Key,
			title: "Data Protection",
			description: "GDPR & CCPA ready",
		},
		{
			icon: Server,
			title: "Scalable Infrastructure",
			description: "Built for growth",
		},
	];

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{badges.map((badge, index) => (
				<div
					key={index}
					className="p-4 rounded-xl glass border border-primary/20 hover:border-primary/40 transition-colors group"
				>
					<div className="flex flex-col items-center text-center space-y-2">
						<div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
							<badge.icon className="h-6 w-6" />
						</div>
						<div>
							<p className="text-sm font-bold">{badge.title}</p>
							<p className="text-xs text-muted-foreground">{badge.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
