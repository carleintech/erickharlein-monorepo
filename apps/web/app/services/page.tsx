"use client";

import { Card, CardContent } from "@erickharlein/ui";
import {
	Shield,
	Workflow,
	Code2,
	DollarSign,
	Server,
	Users,
	CheckCircle2,
	Rocket,
	ArrowRight,
	Sparkles,
	Target,
	TrendingUp,
	Brain,
	Lock,
	Globe2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AuthoritySection } from "@/components/authority-section";

const services = [
	{
		id: "business-platforms",
		icon: Users,
		title: "Custom Business Platforms",
		subtitle: "End-to-end platforms built to automate and scale your operations",
		gradient: "from-blue-500 to-cyan-500",
		category: "platform",
		includes: [
			"Client portals & dashboards",
			"Admin management systems",
			"Secure authentication & roles",
			"Document upload & storage",
			"Workflow automation",
			"Analytics & reporting",
		],
		perfectFor: "Tax companies, service businesses, startups, agencies, and growing enterprises.",
	},
	{
		id: "web-applications",
		icon: Code2,
		title: "Full-Stack Web Applications",
		subtitle: "Production-grade web apps built with modern architecture",
		gradient: "from-purple-500 to-indigo-500",
		category: "platform",
		includes: [
			"Custom frontend & backend",
			"API development & integration",
			"Database design",
			"Performance optimization",
			"High-availability deployment",
		],
		perfectFor: "From concept to production — no templates, no shortcuts.",
	},
	{
		id: "security",
		icon: Shield,
		title: "Security-Focused Development",
		subtitle: "Your platform is built like infrastructure, not a brochure",
		gradient: "from-emerald-500 to-teal-500",
		category: "security",
		includes: [
			"Encrypted data storage",
			"Secure authentication & access control",
			"Protected APIs",
			"Hardened hosting configuration",
			"Compliance-minded architecture",
		],
		perfectFor: "Security is engineered into the system from day one.",
	},
	{
		id: "payments",
		icon: DollarSign,
		title: "Payments & Financial Systems",
		subtitle: "Build systems that move real money safely",
		gradient: "from-green-500 to-emerald-500",
		category: "automation",
		includes: [
			"Payment processing (Stripe, etc.)",
			"Subscription & invoicing systems",
			"Referral & commission tracking",
			"Transaction history & reporting",
			"Financial dashboards",
		],
		perfectFor: "Designed for stability, accuracy, and trust.",
	},
	{
		id: "automation",
		icon: Workflow,
		title: "Automation & Workflow Engineering",
		subtitle: "Replace manual work with intelligent systems",
		gradient: "from-orange-500 to-amber-500",
		category: "automation",
		includes: [
			"Client onboarding automation",
			"Email & SMS notifications",
			"Document processing",
			"Task pipelines",
			"Business logic engines",
		],
		perfectFor: "Your platform should work for you — not the other way around.",
	},
	{
		id: "infrastructure",
		icon: Server,
		title: "Infrastructure & Deployment",
		subtitle: "Your system lives on production infrastructure, not a laptop",
		gradient: "from-pink-500 to-rose-500",
		category: "platform",
		includes: [
			"Secure hosting setup",
			"Cloud deployment",
			"Backup systems",
			"Monitoring & uptime management",
			"Performance scaling",
		],
		perfectFor: "Built for growth from day one.",
	},
];

export default function ServicesPage() {
	const [hoveredService, setHoveredService] = useState<string | null>(null);

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Ultra Modern Animated Background */}
			<div className="fixed inset-0 -z-10">
				{/* Gradient mesh background */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-background to-background" />
				
				{/* Animated grid */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

				{/* Floating orbs */}
				<motion.div
					className="absolute top-20 left-20 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl"
					animate={{
						x: [0, 100, 0],
						y: [0, 50, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl"
					animate={{
						x: [0, -80, 0],
						y: [0, 80, 0],
						scale: [1, 1.3, 1],
					}}
					transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-3xl"
					animate={{
						x: [0, 60, 0],
						y: [0, -60, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
				/>
			</div>

			<div className="container py-16 max-w-7xl relative z-10">
				{/* Hero Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-8 mb-20 text-center"
				>
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10"
					>
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						>
							<Sparkles className="h-5 w-5 text-blue-400" />
						</motion.div>
						<span className="text-sm font-bold tracking-wider text-blue-200 uppercase">What I Build</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-6xl md:text-8xl font-black"
					>
						<span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
							Premium Services
						</span>
					</motion.h1>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="space-y-4 max-w-4xl mx-auto"
					>
						<p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
							Engineering Real Systems for Real Businesses
						</p>
						<p className="text-xl text-muted-foreground leading-relaxed">
							No templates. No shortcuts. Just custom digital infrastructure that scales.
						</p>
					</motion.div>

					{/* Quick stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="flex flex-wrap justify-center gap-8 pt-8"
					>
						{[
							{ icon: Target, label: "100% Custom Built", color: "from-blue-500 to-cyan-500" },
							{ icon: Shield, label: "Security First", color: "from-green-500 to-emerald-500" },
							{ icon: TrendingUp, label: "Built to Scale", color: "from-purple-500 to-pink-500" },
						].map((stat, i) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.7 + i * 0.1 }}
								className="flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-primary/30 backdrop-blur-sm"
							>
								<div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
									<stat.icon className="w-5 h-5 text-white" />
								</div>
								<span className="text-sm font-semibold">{stat.label}</span>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{/* Services Grid - Bento Box Style */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
					{services.map((service, index) => {
						const Icon = service.icon;
						const isHovered = hoveredService === service.id;
						
						return (
							<motion.div
								key={service.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * index }}
								onHoverStart={() => setHoveredService(service.id)}
								onHoverEnd={() => setHoveredService(null)}
								whileHover={{ scale: 1.02, y: -5 }}
								className="group"
							>
								<Card className="h-full relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 glass">
									{/* Gradient bar */}
									<div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
									
									{/* Hover glow effect */}
									<motion.div
										className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
									/>
									
									<CardContent className="p-6 space-y-6 relative">
										{/* Icon */}
										<motion.div
											animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : {}}
											transition={{ duration: 0.5 }}
											className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg shadow-black/20`}
										>
											<Icon className="w-8 h-8 text-white" />
										</motion.div>

										{/* Title */}
										<div className="space-y-2">
											<h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
												{service.title}
											</h3>
											<p className="text-sm text-muted-foreground leading-relaxed">
												{service.subtitle}
											</p>
										</div>

										{/* Features */}
										<div className="space-y-2">
											{service.includes.slice(0, 4).map((item) => (
												<motion.div
													key={item}
													initial={{ opacity: 0, x: -10 }}
													animate={{ opacity: 1, x: 0 }}
													className="flex items-start gap-2"
												>
													<CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
													<span className="text-xs text-muted-foreground">{item}</span>
												</motion.div>
											))}
											{service.includes.length > 4 && (
												<p className="text-xs text-muted-foreground italic">
													+{service.includes.length - 4} more features
												</p>
											)}
										</div>

										{/* Perfect for */}
										<div className="pt-4 border-t border-primary/20">
											<p className="text-xs italic text-muted-foreground leading-relaxed">
												{service.perfectFor}
											</p>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>

				{/* Consulting Highlight */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.8 }}
				>
					<Card className="relative overflow-hidden border-2 border-purple-500/40 glass-strong mb-20">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-cyan-500/10" />
						<div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500" />
						
						<CardContent className="relative p-12 text-center space-y-6">
							<motion.div
								animate={{ rotate: [0, 360] }}
								transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
								className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 items-center justify-center shadow-xl"
							>
								<Brain className="w-10 h-10 text-white" />
							</motion.div>

							<div className="space-y-4">
								<h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
									Consulting & System Architecture
								</h2>
								<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
									Before code is written, the system is engineered. Let's design your digital infrastructure together.
								</p>
							</div>

							<div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6">
								{[
									{ icon: Brain, label: "Business Analysis" },
									{ icon: Rocket, label: "Architecture Planning" },
									{ icon: Lock, label: "Security Assessment" },
								].map((item) => (
									<div key={item.label} className="flex items-center gap-3 p-4 rounded-xl glass border border-primary/30">
										<item.icon className="w-5 h-5 text-purple-400" />
										<span className="text-sm font-semibold">{item.label}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1 }}
				>
					<Card className="relative overflow-hidden border-2 border-primary/40 glass-strong">
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
						<div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-gradient" />
						
						<CardContent className="relative p-12 text-center space-y-8">
							<div className="space-y-4">
								<h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
									Ready to Build Something Real?
								</h2>
								<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
									Let's discuss your project and see how we can bring it to life
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<Link href="/booking">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all flex items-center gap-2"
									>
										Get Your Project Quote
										<ArrowRight className="w-5 h-5" />
									</motion.button>
								</Link>
								<Link href="/contact">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="px-8 py-4 rounded-2xl glass border-2 border-primary/40 hover:border-primary/60 font-semibold text-lg transition-all flex items-center gap-2"
									>
										<Globe2 className="w-5 h-5" />
										Schedule a Call
									</motion.button>
								</Link>
							</div>

							<p className="text-sm text-muted-foreground">
								Interactive project builder • Instant pricing • No commitment required
							</p>
						</CardContent>
					</Card>
				</motion.div>

				{/* Authority Section - Show Certifications */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="max-w-2xl mx-auto mb-20"
				>
					<div className="text-center mb-8">
						<h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
							Certified Security Professional
						</h2>
						<p className="text-muted-foreground">
							Industry-recognized cybersecurity certifications backing every project
						</p>
					</div>
					<AuthoritySection />
				</motion.div>
			</div>
		</div>
	);
}
