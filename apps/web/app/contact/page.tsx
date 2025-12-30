"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@erickharlein/ui";
import { Clock, Github, Globe2, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Sparkles, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";

// Pre-generate particle positions to avoid hydration mismatch
const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
	id: i,
	left: [81.62, 37.59, 11.98, 65.16, 31.75, 23.93, 91.12, 71.77, 97.47, 0.76, 69.84, 53.03, 77.29, 99.80, 96.19][i],
	top: [40.97, 45.61, 2.71, 37.90, 10.92, 30.01, 16.18, 66.39, 12.78, 66.15, 60.13, 35.32, 63.67, 44.94, 17.56][i],
	duration: 3 + (i % 3) * 0.5,
	delay: (i % 4) * 0.5,
}));

export default function ContactPage() {
	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Enhanced Animated Background */}
			<div className="fixed inset-0 -z-10">
				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				
				{/* Animated Gradient Orbs */}
				<motion.div
					className="absolute top-20 right-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 blur-3xl"
					animate={{
						x: [0, 50, 0],
						y: [0, 30, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-20 left-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/40 to-pink-500/40 blur-3xl"
					animate={{
						x: [0, -50, 0],
						y: [0, 50, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-3xl"
					animate={{
						rotate: [0, 180, 360],
						scale: [1, 1.1, 1],
					}}
					transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				/>
				
				{/* Floating Particles */}
				{PARTICLES.map((particle) => (
					<motion.div
						key={particle.id}
						className="absolute w-1 h-1 rounded-full bg-blue-400/30"
						style={{
							left: `${particle.left}%`,
							top: `${particle.top}%`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.3, 0.8, 0.3],
						}}
						transition={{
							duration: particle.duration,
							repeat: Infinity,
							delay: particle.delay,
						}}
					/>
				))}
			</div>

			<div className="container py-16 max-w-7xl">
				{/* Enhanced Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-8 mb-16 text-center"
				>
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10"
					>
						<motion.div
							animate={{ rotate: [0, 360] }}
							transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
						>
							<Send className="h-5 w-5 text-blue-400" />
						</motion.div>
						<span className="text-sm font-bold tracking-wider text-blue-200 uppercase">Let's Connect</span>
					</motion.div>
					
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="text-6xl md:text-8xl font-black"
					>
						<span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
							Get in Touch
						</span>
					</motion.h1>
					
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
					>
						Have a question or want to work together?
						<span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
							I'd love to hear from you.
						</span>
					</motion.p>
					
					{/* Quick Stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="flex flex-wrap justify-center gap-6 pt-4"
					>
						<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20">
							<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
							<span className="text-sm text-green-300 font-semibold">Available Now</span>
						</div>
						<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
							<Clock className="w-4 h-4 text-blue-400" />
							<span className="text-sm text-blue-300">24-48h Response</span>
						</div>
						<div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
							<Globe2 className="w-4 h-4 text-purple-400" />
							<span className="text-sm text-purple-300">Global Projects</span>
						</div>
					</motion.div>
				</motion.div>

				<div className="grid lg:grid-cols-5 gap-8">
					{/* Contact Information - 2 columns */}
					<div className="lg:col-span-2 space-y-6">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
						>
							<Card className="glass group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden">
								<div className="h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-gradient" />
								<CardHeader>
									<div className="flex items-center gap-3 mb-2">
										<motion.div
											animate={{ rotate: [0, 10, -10, 0] }}
											transition={{ duration: 2, repeat: Infinity }}
										>
											<Zap className="w-6 h-6 text-blue-400" />
										</motion.div>
										<CardTitle className="text-3xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact Info</CardTitle>
									</div>
									<CardDescription className="text-base">
										Reach out through any channel
									</CardDescription>
								</CardHeader>
							<CardContent className="space-y-6">
									<motion.a
										href="mailto:erickharleinp@gmail.com"
										whileHover={{ scale: 1.02, x: 5 }}
										className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-500/5 transition-colors group"
									>
										<motion.div
											whileHover={{ rotate: 12 }}
											className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30"
										>
											<Mail className="h-7 w-7 text-white" />
										</motion.div>
										<div className="flex-1">
											<div className="font-bold text-lg text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
												Email
											</div>
											<div className="text-sm text-muted-foreground group-hover:text-blue-300 transition-colors">erickharleinp@gmail.com</div>
										</div>
									</motion.a>

<motion.a
										href="https://wa.me/18508610959"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.02, x: 5 }}
										className="flex items-start gap-4 p-3 rounded-xl hover:bg-green-500/5 transition-colors group"
									>
										<motion.div
											whileHover={{ rotate: -12 }}
											className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg shadow-green-500/30"
										>
											<MessageSquare className="h-7 w-7 text-white" />
										</motion.div>
										<div className="flex-1">
											<div className="font-bold text-lg text-foreground group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
												WhatsApp
											</div>
											<div className="text-sm text-muted-foreground group-hover:text-green-300 transition-colors">Quick chat available</div>
										</div>
									</motion.a>

									<div className="flex items-start gap-4 p-3 rounded-xl">
										<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
											<MapPin className="h-7 w-7 text-white" />
										</div>
										<div className="flex-1">
											<div className="font-bold text-lg text-foreground">Location</div>
											<div className="text-sm text-muted-foreground">United States</div>
										</div>
									</div>

									<div className="flex items-start gap-4 p-3 rounded-xl">
										<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/30">
											<Clock className="h-7 w-7 text-white" />
										</div>
										<div className="flex-1">
											<div className="font-bold text-lg text-foreground">Response Time</div>
										<div className="text-sm text-muted-foreground">Usually within 24-48 hours</div>
									</div>
								</div>
							</CardContent>
								</Card>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4 }}
							>
								<Card className="glass group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
									<div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient" />
									<CardHeader>
										<CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Social Links</CardTitle>
										<CardDescription className="text-base">Connect on these platforms</CardDescription>
									</CardHeader>
							<CardContent className="space-y-4">
									<motion.a
										href="https://github.com/carleintech"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.03, x: 5 }}
										className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-500/10 transition-colors group"
									>
										<motion.div
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}
											className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg"
										>
											<Github className="h-6 w-6 text-white" />
										</motion.div>
										<span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
											github.com/carleintech
										</span>
									</motion.a>
									<motion.a
										href="https://linkedin.com/in/carleintech"
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.03, x: 5 }}
										className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-500/10 transition-colors group"
									>
										<motion.div
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}
											className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg"
										>
											<Linkedin className="h-6 w-6 text-white" />
										</motion.div>
										<span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
											linkedin.com/in/carleintech
										</span>
									</motion.a>
							</CardContent>
								</Card>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
							>
								<Card className="relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500">
									<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all" />
									<CardContent className="relative pt-6 space-y-3">
										<div className="flex items-center gap-3">
											<motion.div
												animate={{ rotate: [0, 360] }}
												transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
											>
												<Sparkles className="h-6 w-6 text-indigo-400" />
											</motion.div>
											<strong className="text-lg bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Looking for consultation?</strong>
										</div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Consider booking a dedicated time slot for a more structured discussion about your
											project needs. I'm here to help bring your ideas to life.
										</p>
									</CardContent>
								</Card>
							</motion.div>
					</div>

					{/* Contact Form - 3 columns */}
					<motion.div
						className="lg:col-span-3"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
					>
						<Card className="glass group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 relative overflow-hidden">
							{/* Animated top bar */}
							<div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient" />
							
							{/* Subtle glow effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							
							<CardHeader className="relative">
								<div className="flex items-center gap-3 mb-2">
									<motion.div
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
									>
										<Send className="w-7 h-7 text-indigo-400" />
									</motion.div>
									<CardTitle className="text-4xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Send a Message</CardTitle>
								</div>
								<CardDescription className="text-base">I'll get back to you as soon as possible</CardDescription>
							</CardHeader>
							<CardContent className="relative">
								<ContactForm />
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
