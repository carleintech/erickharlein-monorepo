"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from "@erickharlein/ui";
import { Code2, Coffee, Globe, GraduationCap, Heart, Music, Plane, Shield, ArrowRight, Lock, Users, Rocket, Sparkles, Zap, Brain, Target, Award, Eye, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InteractiveStorySlider } from "@/components/interactive-story-slider";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});

	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.7]);
	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);
	const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

	const heroY = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 100]), {
		stiffness: 100,
		damping: 30
	});

	return (
		<div ref={containerRef} className="relative min-h-screen overflow-hidden">
			{/* Futuristic Grid Background */}
			<div className="fixed inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950" />
				
				{/* Animated Grid */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
				
				{/* Flowing Particles */}
				<motion.div 
					animate={{ 
						backgroundPosition: ["0% 0%", "100% 100%"],
					}}
					transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage: "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
						backgroundSize: "200% 200%"
					}}
				/>

				{/* 3D Floating Orbs */}
				<motion.div
					animate={{ 
						x: [0, 100, 0],
						y: [0, -100, 0],
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360]
					}}
					transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{ 
						x: [0, -100, 0],
						y: [0, 100, 0],
						scale: [1, 1.3, 1],
						rotate: [360, 180, 0]
					}}
					transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{ 
						scale: [1, 1.5, 1],
						opacity: [0.3, 0.6, 0.3]
					}}
					transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
				/>

				{/* Scan Lines Effect */}
				<motion.div 
					animate={{ y: ["-100%", "100%"] }}
					transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
					className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent h-32"
				/>
			</div>

			<motion.div style={{ opacity, scale }} className="container py-20 max-w-7xl relative z-10">
				{/* Hero Header - 3D Perspective */}
				<motion.div 
					style={{ y: heroY }}
					className="relative mb-32 perspective-1000"
				>
					{/* Holographic Title */}
					<motion.div
						initial={{ opacity: 0, y: -50, rotateX: -20 }}
						animate={{ opacity: 1, y: 0, rotateX: 0 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="text-center space-y-8 relative"
					>
						{/* Floating Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3 }}
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 backdrop-blur-xl mb-6"
						>
							<Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
							<span className="text-sm font-semibold text-indigo-300">Systems Engineer & Naval Officer Candidate</span>
							<Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
						</motion.div>

						<h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6">
							<motion.span 
								className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
								animate={{ 
									backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
								}}
								transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
								style={{ backgroundSize: "200% auto" }}
							>
								ERICKHARLEIN
							</motion.span>
						</h1>

						<motion.p 
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed px-4"
						>
							But everyone calls me{" "}
							<motion.span 
								className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
								whileHover={{ scale: 1.1 }}
							>
								Carleintech
							</motion.span>
							. Sailor, Engineer, Husband, Father.
						</motion.p>

						{/* 3D Stats Cards */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
						>
							{[
								{ icon: Shield, label: "Navy OS", value: "5+ Years", color: "from-blue-500 to-cyan-500" },
								{ icon: Brain, label: "AI Research", value: "KleinAI", color: "from-purple-500 to-pink-500" },
								{ icon: Award, label: "Master's", value: "2x Concurrent", color: "from-indigo-500 to-purple-500" },
								{ icon: Code2, label: "Projects", value: "50+ Built", color: "from-rose-500 to-orange-500" },
							].map((stat, i) => (
								<motion.div
									key={i}
									whileHover={{ y: -10, rotateY: 5, scale: 1.05 }}
									className="relative group"
								>
									<div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-40 transition-opacity blur-xl rounded-2xl`} />
									<div className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl">
										<stat.icon className="w-8 h-8 mb-3 mx-auto text-slate-400 group-hover:text-slate-200 transition-colors" />
										<div className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-1">
											{stat.value}
										</div>
										<div className="text-sm text-slate-400">{stat.label}</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Signature Statement - Holographic Card */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
						whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative max-w-5xl mx-auto mt-20"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" />
						<div className="relative p-12 rounded-3xl bg-slate-900/70 border-2 border-indigo-500/30 backdrop-blur-2xl overflow-hidden group">
							{/* Animated Border */}
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
								className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl"
							/>
							
							<div className="relative z-10 text-center space-y-4">
								<motion.p 
								className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black px-4"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
									I don't build products.
								</span>
							</motion.p>
							<motion.p 
								className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white px-4"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
								>
									I build systems that protect people, scale businesses, and respect humanity.
								</motion.p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Personal Story - Bento Grid Style */}
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="mb-32"
				>
					<div className="relative">
						<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-3xl rounded-3xl" />
						<div className="relative rounded-3xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl overflow-hidden">
							<div className="p-8 md:p-12">
								<div className="flex items-center gap-4 mb-8">
									<motion.div
										animate={{ rotate: [0, 360] }}
										transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
										className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
									>
										<Terminal className="w-8 h-8 text-white" />
									</motion.div>
									<div>
										<h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
											My Journey
										</h2>
										<p className="text-slate-400 text-lg mt-1">Six chapters. One mission.</p>
									</div>
								</div>

								<p className="text-slate-300 text-lg mb-8 max-w-3xl">
									From Haiti to the U.S. Navy to building AI systems that protect humanity — this is not just a career path. It's a story of responsibility, discipline, and purpose.
								</p>

								<div className="flex items-center gap-4 text-sm text-slate-400">
									<div className="flex items-center gap-2">
										<kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700">←</kbd>
										<kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700">→</kbd>
										<span>Navigate</span>
									</div>
									<div className="flex items-center gap-2">
										<kbd className="px-3 py-1 bg-slate-800 rounded border border-slate-700">Space</kbd>
										<span>Auto-play</span>
									</div>
									<div className="hidden md:block text-slate-500">
										Swipe on mobile
									</div>
								</div>
							</div>

							{/* Interactive Story Slider */}
							<InteractiveStorySlider />
						</div>
					</div>
				</motion.div>

				{/* What Drives Me - Magnetic Cards */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					className="mb-32"
				>
					<motion.h2 
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
					>
						What Drives Me
					</motion.h2>
					<div className="grid md:grid-cols-2 gap-8">
						{/* Family Card */}
						<motion.div
							initial={{ opacity: 0, x: -100, rotateY: -20 }}
							whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02, rotateY: 2, z: 50 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="relative group perspective-1000"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
							<div className="relative p-8 rounded-3xl bg-slate-900/70 border border-pink-500/30 backdrop-blur-xl overflow-hidden">
								{/* Animated Corner Accent */}
								<motion.div
									animate={{ rotate: 360 }}
									transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
									className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-2xl"
								/>
								
								<div className="relative z-10">
									<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 shadow-2xl">
										<Heart className="h-10 w-10 text-white" />
									</div>
									<h3 className="text-3xl font-black text-white mb-4">Family & Balance</h3>
									<div className="space-y-4 text-slate-300 leading-relaxed">
										<p>
											I'm a proud husband and father. My wife and 1-year-old son are my motivation for
											everything I do. Balancing military service, two master's programs, and family
											life isn't easy — but it's taught me what really matters: being present, staying
											disciplined, and never losing sight of why I started.
										</p>
										<p className="font-semibold text-white">
											Every late night studying, every system I build, every line of code I write — it's
											all for them.
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Impact Card */}
						<motion.div
							initial={{ opacity: 0, x: 100, rotateY: 20 }}
							whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
							viewport={{ once: true }}
							whileHover={{ scale: 1.02, rotateY: -2, z: 50 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="relative group perspective-1000"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
							<div className="relative p-8 rounded-3xl bg-slate-900/70 border border-purple-500/30 backdrop-blur-xl overflow-hidden">
								<motion.div
									animate={{ rotate: -360 }}
									transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
									className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl"
								/>
								
								<div className="relative z-10">
									<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 shadow-2xl">
										<Globe className="h-10 w-10 text-white" />
									</div>
									<h3 className="text-3xl font-black text-white mb-4">Making Impact</h3>
									<div className="space-y-4 text-slate-300 leading-relaxed">
										<p>
											I don't believe AI should replace people. I believe it should{" "}
											<span className="font-bold text-white">elevate them</span>. That's why
											I'm building KleinAI — a system designed to answer "Who watches the watcher?" by
											creating AI that protects humanity by protecting us from itself.
										</p>
										<p className="font-semibold text-white">
											My Naval Postgraduate School thesis focuses on this: dual-AI architecture that
											ensures ethical autonomy and self-regulation. It's not just research — it's my
											vision for responsible AI.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Engineering Philosophy - Floating Hexagons */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8 }}
					className="mb-32"
				>
					<div className="text-center mb-16">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
							className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 mx-auto mb-6 shadow-2xl"
						>
							<Rocket className="h-12 w-12 text-white" />
						</motion.div>
						<h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
							My Engineering Philosophy
						</h2>
						<p className="text-2xl text-slate-400">
							Design for humans. Secure by default. Build for the future.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: Users,
								title: "Human-Centered Systems",
								desc: "Technology should amplify human capability, not replace it. Every system I design puts people first — their needs, their workflows, their growth.",
								gradient: "from-blue-500 to-cyan-500",
								delay: 0
							},
							{
								icon: Lock,
								title: "Security Is Infrastructure",
								desc: "Security isn't a feature — it's the foundation. From encryption to auth, every line of code respects the trust users place in the system.",
								gradient: "from-green-500 to-emerald-500",
								delay: 0.2
							},
							{
								icon: Target,
								title: "Growth Is Engineered",
								desc: "Scalability isn't luck — it's architecture. I build systems that grow with your business, handling demand without breaking.",
								gradient: "from-purple-500 to-pink-500",
								delay: 0.4
							}
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: item.delay }}
								whileHover={{ y: -20, rotateX: 10, scale: 1.05 }}
								className="relative group perspective-1000"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
								<div className="relative h-full p-8 rounded-3xl bg-slate-900/60 border-2 border-slate-700/50 group-hover:border-slate-600 backdrop-blur-xl transition-all">
									<div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
										<item.icon className="h-8 w-8 text-white" />
									</div>
									<h4 className="font-black text-2xl text-white mb-4">{item.title}</h4>
									<p className="text-slate-300 leading-relaxed">{item.desc}</p>
								</div>
								
								{/* Hover Glow */}
								<motion.div
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 blur-2xl rounded-3xl -z-10`}
								/>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Mission Statement - Holographic */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
					whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-32"
				>
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-[100px]" />
						<div className="relative p-12 md:p-16 rounded-[2rem] bg-slate-900/80 border-2 border-indigo-500/40 backdrop-blur-2xl overflow-hidden">
							{/* Scan Lines */}
							<motion.div
								animate={{ y: ["-100%", "200%"] }}
								transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
								className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent h-32"
							/>
							
							<div className="relative z-10 text-center space-y-12">
								<div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mx-auto shadow-2xl">
									<Code2 className="h-12 w-12 text-white" />
								</div>
								
								<h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
									This Is Not Web Design.
									<br />
									This Is Engineering.
								</h2>

								<div className="space-y-6 text-xl md:text-2xl max-w-4xl mx-auto">
									<p className="font-bold text-white">
										I am not a web designer.
									</p>
									<p className="font-bold text-white">
										I am a Full-Stack Engineer, Systems Architect, and Cybersecurity Specialist who builds serious business platforms from the ground up.
									</p>
								</div>

								{/* No Section */}
								<div className="grid md:grid-cols-3 gap-6 my-12">
									{["No Templates", "No Shortcuts", "No Themes"].map((text, i) => (
										<motion.div
											key={i}
											whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
											className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/5 border-2 border-red-500/30 hover:border-red-500/60 transition-colors"
										>
											<div className="text-5xl mb-3">🚫</div>
											<p className="font-black text-xl text-white">{text}</p>
											<p className="text-sm text-slate-400 mt-2">
												{i === 0 && "Every line is custom"}
												{i === 1 && "Built correctly from scratch"}
												{i === 2 && "Real infrastructure"}
											</p>
										</motion.div>
									))}
								</div>

								<div className="space-y-6 text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
									<p>
										Every system I build is <span className="font-bold text-white">custom-engineered</span> — from backend logic and databases to secure authentication, APIs, dashboards, and user experience — all designed to support real operations, real growth, and real revenue.
									</p>
									<p className="font-bold text-white text-xl">
										Security is not an afterthought in my process. It is a foundation.
									</p>
								</div>

								{/* Specializations Grid */}
								<div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/30">
									<p className="text-2xl font-black text-white mb-8">I specialize in complex systems including:</p>
									<div className="grid md:grid-cols-2 gap-4 text-left">
										{[
											"Business platforms & dashboards",
											"Client & admin portals",
											"Secure document management systems",
											"Payment & financial platforms",
											"Custom web applications",
											"Scalable backend infrastructure"
										].map((text, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{ delay: i * 0.1 }}
												className="flex items-center gap-3"
											>
												<div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
												<span className="text-slate-200 font-semibold">{text}</span>
											</motion.div>
										))}
									</div>
								</div>

								<div className="p-10 rounded-3xl bg-slate-800/50 border-2 border-slate-700/50">
									<p className="text-xl text-slate-300 mb-4">
										If you are looking for a website, there are many designers who can help you.
									</p>
									<p className="text-2xl md:text-3xl font-black text-white">
										If you are building a company and need a real system behind it, you are in the right place.
									</p>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Professional Journey - Timeline Style */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-32"
				>
					<h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
						Professional Journey
					</h2>
					<div className="space-y-6">
						{[
							{
								icon: Shield,
								title: "U.S. Navy Operations Specialist",
								desc: "Currently stationed at EWTGLANT as an instructor for AADS CIC Boat Control. Previously served aboard USS New Orleans (LPD-18) managing combat systems (AADS, SSDS), navigation (VMS, ECDIS), and tactical operations. Qualified as Piloting Officer and MWR Vice President. Scored 56 on the OAR — applying for Officer Candidate School.",
								gradient: "from-blue-500 to-indigo-500"
							},
							{
								icon: GraduationCap,
								title: "Academic Excellence",
								desc: "Naval Postgraduate School — Master of Applied Computing (MAC), Curriculum 367. Western Governors University — Master of Science in Cybersecurity & Information Assurance. University of Maryland Global Campus — B.S. Computer Network Engineering & Cybersecurity (Dec 2023)",
								gradient: "from-purple-500 to-pink-500"
							},
							{
								icon: Code2,
								title: "Technical Background",
								desc: "8+ years building intelligent systems. CompTIA Security+ certified, currently pursuing CC and CISSP. Full-stack engineering (TypeScript, React, Next.js, Node.js), cloud architecture (AWS, Azure, GCP), AI/ML development (Python, TensorFlow), and cybersecurity. Trilingual: English, French, Haitian Creole.",
								gradient: "from-cyan-500 to-indigo-500"
							}
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.2 }}
								whileHover={{ scale: 1.02, x: 20 }}
								className="flex gap-6 p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-700/50 hover:border-slate-600 backdrop-blur-xl transition-all group"
							>
								<div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform`}>
									<item.icon className="h-8 w-8 text-white" />
								</div>
								<div className="space-y-3">
									<h4 className="font-black text-2xl text-white">{item.title}</h4>
									<p className="text-slate-300 leading-relaxed">{item.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Beyond Work - Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mb-32"
				>
					<h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
						Beyond Work
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{[
							{ icon: Music, title: "Music & Culture", desc: "I love exploring different music genres — from Haitian konpa to American hip-hop. Music connects cultures, and I appreciate how it tells stories across languages.", gradient: "from-rose-500 to-pink-500" },
							{ icon: Coffee, title: "Continuous Learning", desc: "Always reading, always learning. Whether it's AI research papers, cybersecurity frameworks, or naval tactics — I believe growth never stops.", gradient: "from-amber-500 to-orange-500" },
							{ icon: Plane, title: "Travel & Adventure", desc: "From Haiti to the U.S., and across the world through Navy deployments — I love experiencing new places, cultures, and perspectives.", gradient: "from-sky-500 to-cyan-500" },
							{ icon: Heart, title: "Mentorship & Community", desc: "As MWR Vice President, I learned that leadership is about lifting others up. I mentor junior sailors and aspiring engineers whenever I can.", gradient: "from-emerald-500 to-green-500" }
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
								className="relative group"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity`} />
								<div className="relative p-6 rounded-3xl bg-slate-900/60 border border-slate-700/50 group-hover:border-slate-600 backdrop-blur-xl">
									<div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform`}>
										<item.icon className="h-7 w-7 text-white" />
									</div>
									<h4 className="font-black text-xl text-white mb-3">{item.title}</h4>
									<p className="text-slate-300 leading-relaxed">{item.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Core Values - Interactive 3D Cards */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="mb-32"
				>
					<div className="text-center mb-16">
						<motion.div
							animate={{ rotate: [0, 5, 0, -5, 0] }}
							transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
							className="inline-block text-7xl mb-6"
						>
							⚡
						</motion.div>
						<h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
							What I Believe
						</h2>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								emoji: "💪",
								title: "Determination Over Circumstance",
								desc: "I learned English from scratch, self-funded my education, and balanced military service with family and academics. If you want something badly enough, you find a way.",
								gradient: "from-indigo-500 to-purple-500",
								tagline: "This principle guides every system I design"
							},
							{
								emoji: "⚓",
								title: "Service Before Self",
								desc: "The Navy taught me that honor, courage, and commitment aren't just words — they're principles you live by. Leadership is earned through action, not rank.",
								gradient: "from-blue-500 to-cyan-500",
								tagline: "This principle guides every system I design"
							},
							{
								emoji: "🤝",
								title: "Technology Should Serve Humanity",
								desc: "AI should empower teachers, doctors, engineers, and service members — not replace them. Every system I build is designed to elevate human potential.",
								gradient: "from-purple-500 to-pink-500",
								tagline: "This principle guides every system I design"
							},
							{
								emoji: "🚀",
								title: "Never Stop Growing",
								desc: "Two master's degrees while serving full-time. CompTIA Security+, working toward CISSP. Because excellence isn't a destination — it's a commitment to constant improvement.",
								gradient: "from-emerald-500 to-green-500",
								tagline: "This principle guides every system I design"
							}
						].map((value, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 100, rotateX: -20 }}
								whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.15 }}
								whileHover={{ y: -15, rotateX: 5, scale: 1.03 }}
								className="relative group perspective-1000 cursor-pointer"
							>
								<div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
								<div className="relative h-full p-8 rounded-3xl bg-slate-900/70 border-2 border-slate-700/50 group-hover:border-slate-600 backdrop-blur-xl overflow-hidden transition-all">
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
										className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${value.gradient} opacity-5 rounded-full blur-3xl`}
									/>
									
									<div className="relative z-10 space-y-4">
										<div className="text-6xl mb-4">{value.emoji}</div>
										<h4 className="font-black text-2xl text-white">{value.title}</h4>
										<p className="text-slate-300 leading-relaxed">{value.desc}</p>
										<motion.p
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
											className={`text-sm font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent pt-2`}
										>
											→ {value.tagline}
										</motion.p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Final Statement - Magnetic Pull */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="relative mb-20"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-[120px]" />
					<div className="relative">
						<motion.div
							animate={{ 
								boxShadow: [
									"0 0 80px rgba(99, 102, 241, 0.3)",
									"0 0 120px rgba(168, 85, 247, 0.4)",
									"0 0 80px rgba(236, 72, 153, 0.3)",
									"0 0 120px rgba(99, 102, 241, 0.4)"
								]
							}}
							transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
							className="p-12 md:p-16 rounded-[2rem] bg-slate-900/90 border-2 border-indigo-500/50 backdrop-blur-2xl"
						>
							<div className="text-center space-y-8">
								<p className="text-2xl md:text-3xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
									I'm not just building technology — I'm building a future where AI respects human
									autonomy, where service members have smarter tools, and where families like mine can
									thrive.
								</p>

								<motion.div
									whileHover={{ scale: 1.05 }}
									className="p-10 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/30"
								>
									<p className="text-3xl md:text-5xl font-black text-white leading-relaxed">
										"Everything I build is ultimately for one purpose:
									</p>
									<p className="text-3xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-relaxed mt-4">
										to give people more control over their lives."
									</p>
								</motion.div>

								<p className="text-2xl md:text-3xl font-black text-white pt-6">
									That's who I am. That's what drives me. That's why I do this.
								</p>
							</div>
						</motion.div>
					</div>
				</motion.div>

				{/* Final CTA - Magnetic Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center space-y-10 pt-10"
				>
					<div className="space-y-6">
						<p className="text-3xl md:text-4xl font-black text-white max-w-3xl mx-auto leading-relaxed">
							If your mission aligns with this vision,
						</p>
						<p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
							let's build something that matters.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-6 pt-8">
						<Link href="/booking">
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Button size="lg" className="group relative overflow-hidden px-10 py-7 text-lg font-black rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl">
									<motion.div
										animate={{ x: ["0%", "100%"] }}
										transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
										className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
									/>
									<ArrowRight className="mr-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
									Build Your Platform
								</Button>
							</motion.div>
						</Link>
						
						<Link href="/contact">
							<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
								<Button size="lg" variant="outline" className="px-10 py-7 text-lg font-black rounded-2xl border-2 border-indigo-500/50 hover:border-indigo-500 bg-slate-900/50 backdrop-blur-xl">
									<Zap className="mr-3 h-6 w-6" />
									Book Strategy Call
								</Button>
							</motion.div>
						</Link>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
