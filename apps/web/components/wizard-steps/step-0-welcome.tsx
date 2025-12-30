"use client";

import { Button } from "@erickharlein/ui";
import { Sparkles, ArrowRight, Code, Shield, Lock, Database, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

interface Step0WelcomeProps {
	onNext: () => void;
}

export function Step0Welcome({ onNext }: Step0WelcomeProps) {
	return (
		<div className="relative overflow-hidden">
			{/* Animated Gradient Background Layer */}
			<div 
				className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 pointer-events-none"
				style={{
					background: 'linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e293b 50%, #0f172a 75%, #020617 100%)',
					backgroundSize: '300% 300%',
				}}
			>
				<div className="absolute inset-0 animate-drift" style={{
					background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 25%, rgba(14,165,233,0.1) 50%, rgba(99,102,241,0.1) 100%)',
					backgroundSize: '300% 300%',
				}} />
			</div>

			{/* Floating Orbs */}
			<div className="absolute top-20 right-10 w-64 h-64 bg-signal/10 rounded-full blur-3xl animate-glow pointer-events-none" />
			<div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-glow [animation-delay:1.5s] pointer-events-none" />

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="relative space-y-12 max-w-4xl mx-auto"
			>
			{/* Hero Section */}
			<div className="space-y-8 text-center">
				{/* Welcome Icon */}
				<motion.div
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
					whileHover={{ scale: 1.05, rotate: 5 }}
					className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/30"
				>
					<Sparkles className="h-12 w-12 text-white" />
				</motion.div>

				{/* Greeting */}
				<div className="space-y-6">
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
					>
						Build Your Platform
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
					>
						Your platform should run your business — not slow it down.
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.45 }}
						className="text-lg text-muted-foreground/80 max-w-xl mx-auto"
					>
						Let's engineer your custom system together, step by step.
					</motion.p>
				</div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="flex items-center justify-center gap-8 text-sm"
				>
					<div className="flex items-center gap-2">
						<Award className="h-4 w-4 text-purple-500" />
						<span className="text-muted-foreground">8+ Years Experience</span>
					</div>
					<div className="h-4 w-px bg-border" />
					<div className="flex items-center gap-2">
						<Code className="h-4 w-4 text-indigo-500" />
						<span className="text-muted-foreground">100+ Features Deployed</span>
					</div>
				</motion.div>
			</div>

			{/* Subtle Divider */}
			<motion.div
				initial={{ opacity: 0, scaleX: 0 }}
				animate={{ opacity: 1, scaleX: 1 }}
				transition={{ delay: 0.6 }}
				className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
			/>

			{/* This Is Not Web Design Section */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7 }}
				whileHover={{ scale: 1.01 }}
				className="glass-strong border-2 border-primary/40 hover:border-signal/60 rounded-2xl p-8 md:p-10 space-y-6 text-center transition-all duration-500 shadow-lg hover:shadow-signal/20"
			>
				<motion.div 
					whileHover={{ rotate: 360, scale: 1.1 }}
					transition={{ duration: 0.6 }}
					className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-2 shadow-lg shadow-purple-500/30"
				>
					<Code className="h-8 w-8 text-white" />
				</motion.div>
				<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
					This Is Not Web Design
				</h2>
				<div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
					<p>I don't use templates or pre-built themes.</p>
					<p>
						I <span className="font-semibold bg-gradient-to-r from-signal to-emerald-400 bg-clip-text text-transparent">engineer full business systems</span> — from backend
						architecture and databases to secure authentication, dashboards, and deployment.
					</p>
				</div>
			</motion.div>

			{/* What to Expect */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8 }}
				className="glass-strong border border-primary/30 rounded-2xl p-8 space-y-6"
			>
				<h3 className="text-2xl font-semibold text-center">What to Expect</h3>
				<div className="grid md:grid-cols-3 gap-6">
					{[
						{ emoji: "⚡", title: "Instant Pricing", desc: "See real-time cost estimates as you select features", color: "from-yellow-500/10 to-orange-500/10" },
						{ emoji: "🎯", title: "Custom Built", desc: "Every system engineered from scratch for your business", color: "from-blue-500/10 to-cyan-500/10" },
						{ emoji: "🔒", title: "Secure & Scalable", desc: "Enterprise-grade security and infrastructure", color: "from-green-500/10 to-emerald-500/10" },
					].map((item, i) => (
						<motion.div 
							key={item.title}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.85 + i * 0.1 }}
							whileHover={{ scale: 1.05, y: -4 }}
							className={`space-y-2 text-center p-4 rounded-xl bg-gradient-to-br ${item.color} border border-primary/20 hover:border-signal/40 transition-all cursor-pointer shadow-md hover:shadow-lg`}
						>
							<motion.div 
								className="text-4xl"
								whileHover={{ scale: 1.2, rotate: 5 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								{item.emoji}
							</motion.div>
							<div className="font-semibold text-foreground text-lg">{item.title}</div>
							<p className="text-sm text-muted-foreground">{item.desc}</p>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Process Overview */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.9 }}
				className="space-y-6"
			>
				<h3 className="text-2xl font-semibold text-center">This Will Take About 5 Minutes</h3>
				<div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
					{[
						"Domain & infrastructure setup",
						"Choose your project type & features",
						"Review your custom quote",
						"Secure your development slot",
					].map((step, index) => (
						<motion.div 
							key={step} 
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.95 + index * 0.05 }}
							whileHover={{ scale: 1.02, x: 4 }}
							className="flex items-center gap-3 glass border border-primary/20 hover:border-signal/50 rounded-xl p-4 cursor-pointer transition-all shadow-sm hover:shadow-md"
						>
							<motion.div 
								whileHover={{ rotate: 360 }}
								transition={{ duration: 0.5 }}
								className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white text-base font-bold flex-shrink-0 shadow-lg shadow-green-500/30"
							>
								{index + 1}
							</motion.div>
							<span className="text-muted-foreground font-medium">{step}</span>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* CTA Buttons */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.0 }}
				className="flex flex-col items-center gap-4"
			>
				<Button
					onClick={onNext}
					size="lg"
					className="group relative w-full md:w-auto px-16 py-7 text-xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 shadow-2xl shadow-signal/40 hover:shadow-signal/60 transition-all duration-500"
				>
					<motion.div
						className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
						initial={false}
					/>
					<span className="relative flex items-center">
						<Code className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
						🔧 Build Your Platform
						<ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
					</span>
				</Button>
				<motion.p 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
					className="text-sm text-muted-foreground flex items-center justify-center gap-2"
				>
					<Lock className="h-4 w-4 text-green-500" />
					Your information is secure. No spam, no hidden fees.
				</motion.p>
			</motion.div>

			{/* Security Trust Strip */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.1 }}
				className="border-t border-primary/20 pt-8"
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
					{[
						{ icon: Lock, color: "text-green-500", label: "Secure Architecture", glow: "hover:shadow-green-500/20" },
						{ icon: Database, color: "text-blue-500", label: "Scalable Systems", glow: "hover:shadow-blue-500/20" },
						{ icon: Shield, color: "text-purple-500", label: "Cybersecurity-Driven", glow: "hover:shadow-purple-500/20" },
						{ icon: Zap, color: "text-signal", label: "Engineered for Growth", glow: "hover:shadow-signal/20" },
					].map((item, i) => (
						<motion.div
							key={item.label}
							whileHover={{ scale: 1.05, y: -2 }}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.1 + i * 0.05 }}
							className={`flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-all cursor-pointer shadow-lg ${item.glow}`}
						>
							<item.icon className={`h-6 w-6 ${item.color}`} />
							<div className="text-sm font-semibold text-foreground">{item.label}</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.div>
		</div>
	);
}
