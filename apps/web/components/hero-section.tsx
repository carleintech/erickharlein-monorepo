"use client";

import { Button } from "@erickharlein/ui";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const titles = ["Full-Stack Engineer", "Systems Architect", "AI Specialist", "Cloud Solutions Expert"];

const taglines = [
	"Crafting elegant solutions with modern technology",
	"Building scalable systems that drive innovation",
	"Transforming ideas into powerful digital experiences",
	"Engineering the future, one line at a time",
];

export function HeroSection() {
	const [titleIndex, setTitleIndex] = useState(0);
	const [taglineIndex, setTaglineIndex] = useState(0);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		let titleInterval: NodeJS.Timeout;
		let taglineInterval: NodeJS.Timeout;

		// Delay start to avoid Strict Mode double renders
		const startTimer = setTimeout(() => {
			titleInterval = setInterval(() => {
				setTitleIndex((prev) => (prev + 1) % titles.length);
			}, 3500);

			taglineInterval = setInterval(() => {
				setTaglineIndex((prev) => (prev + 1) % taglines.length);
			}, 5500);
		}, 100);

		return () => {
			clearTimeout(startTimer);
			if (titleInterval) clearInterval(titleInterval);
			if (taglineInterval) clearInterval(taglineInterval);
		};
	}, []);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
			{/* TechKlein Logo Background - Faded */}
			<div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
				<Image
					src="/images/techklein-logo.png"
					alt="TechKlein"
					width={800}
					height={800}
					className="object-contain"
					priority
				/>
			</div>

			{/* Grid Pattern Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

			{/* Enhanced Floating Orbs with More Movement */}
			<motion.div
				className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-pink-500/30 dark:from-indigo-500/20 dark:via-purple-600/10 dark:to-pink-600/20 rounded-full blur-3xl"
				animate={{
					x: [0, 150, -50, 0],
					y: [0, 100, 50, 0],
					scale: [1, 1.3, 1.1, 1],
					rotate: [0, 90, 180, 0],
				}}
				transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-violet-500/30 dark:from-cyan-500/20 dark:via-blue-600/10 dark:to-violet-600/20 rounded-full blur-3xl"
				animate={{
					x: [0, -150, 50, 0],
					y: [0, -100, -50, 0],
					scale: [1, 1.2, 1.15, 1],
					rotate: [0, -90, -180, 0],
				}}
				transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-rose-500/20 via-orange-500/10 to-amber-500/20 dark:from-rose-500/15 dark:via-orange-600/8 dark:to-amber-600/15 rounded-full blur-3xl"
				animate={{
					x: [0, 80, -80, 0],
					y: [0, -80, 80, 0],
					scale: [1, 1.25, 1.05, 1],
				}}
				transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			{/* Floating Particles - Only render on client to avoid hydration issues */}
			{isMounted && (
				<div className="absolute inset-0">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 bg-primary/30 rounded-full"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
							}}
							animate={{
								y: [0, -30, 0],
								opacity: [0.2, 0.8, 0.2],
								scale: [1, 1.5, 1],
							}}
							transition={{
								duration: 3 + Math.random() * 4,
								repeat: Number.POSITIVE_INFINITY,
								delay: Math.random() * 2,
							}}
						/>
					))}
				</div>
			)}

			{/* Content */}
			<div className="container relative z-10 px-4">
				<div className="max-w-6xl mx-auto text-center space-y-8">
					{/* Floating Badge */}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4"
					>
						<Sparkles className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium">Available for exciting projects</span>
						<motion.div
							className="w-2 h-2 rounded-full bg-green-500"
							animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
							transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
						/>
					</motion.div>

					{/* Name with Enhanced Glow */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1 }}
					>
						<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
							<motion.span
								className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
								animate={{
									backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
								}}
								transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
								style={{ backgroundSize: "200% auto" }}
							>
								Erickharlein Pierre
							</motion.span>
						</h1>
					</motion.div>

					{/* Rotating Title with Icons */}
					<motion.div
						key={`title-${titleIndex}`}
						initial={{ opacity: 0, y: 20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -20, scale: 0.9 }}
						transition={{ duration: 0.6 }}
						className="min-h-16 flex items-center justify-center"
					>
						<div className="flex items-center gap-3">
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
							>
								<Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
							</motion.div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
								{titles[titleIndex]}
							</h2>
							<motion.div
								animate={{ scale: [1, 1.2, 1] }}
								transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
							>
								<Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
							</motion.div>
						</div>
					</motion.div>

					{/* Enhanced Tagline */}
					<motion.div
						key={`tagline-${taglineIndex}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.7 }}
						className="min-h-14 flex items-center justify-center"
					>
						<p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
							{taglines[taglineIndex]}
						</p>
					</motion.div>

					{/* Enhanced Stats with Animations */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8"
					>
						{[
							{ value: "8+", label: "Years Experience", icon: "🎯" },
							{ value: "50+", label: "Projects Delivered", icon: "🚀" },
							{ value: "100%", label: "Client Satisfaction", icon: "⭐" },
						].map((stat, idx) => (
							<motion.div
								key={stat.label}
								initial={{ opacity: 0, scale: 0.5, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								transition={{
									delay: 0.6 + idx * 0.15,
									type: "spring",
									stiffness: 200,
								}}
								whileHover={{ scale: 1.05, y: -5 }}
								className="relative group"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
								<div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 min-w-[140px]">
									<div className="text-4xl mb-2">{stat.icon}</div>
									<div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
										{stat.value}
									</div>
									<div className="text-xs sm:text-sm text-muted-foreground font-medium">
										{stat.label}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Enhanced CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="flex flex-wrap justify-center gap-4 pt-10"
					>
						<Link href="/projects">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
									<span className="relative z-10 flex items-center gap-2">
										<Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
										View My Work
										<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
									</span>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-primary"
										initial={{ x: "100%" }}
										whileHover={{ x: 0 }}
										transition={{ duration: 0.3 }}
									/>
								</Button>
							</motion.div>
						</Link>
						<Link href="/contact">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button 
									size="lg" 
									variant="outline" 
									className="group border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300"
								>
									<span className="flex items-center gap-2">
										Let's Connect
										<motion.span
											animate={{ x: [0, 5, 0] }}
											transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
										>
											→
										</motion.span>
									</span>
								</Button>
							</motion.div>
						</Link>
					</motion.div>

					{/* Tech Stack Badges */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1 }}
						className="pt-12"
					>
						<p className="text-sm text-muted-foreground mb-4">Powered by</p>
						<div className="flex flex-wrap justify-center gap-3">
							{["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech, idx) => (
								<motion.div
									key={tech}
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 1.2 + idx * 0.1 }}
									whileHover={{ y: -2 }}
									className="px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors"
								>
									{tech}
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					className="flex flex-col items-center gap-2 text-muted-foreground"
				>
					<span className="text-xs">Scroll to explore</span>
					<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
							className="w-1.5 h-1.5 rounded-full bg-primary"
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
