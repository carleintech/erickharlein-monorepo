"use client";

import { Button } from "@erickharlein/ui";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Home, Search, ArrowLeft, Sparkles, Zap, Ghost, Rocket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
	const router = useRouter();
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [glitchActive, setGlitchActive] = useState(false);
	const [score, setScore] = useState(0);
	const controls = useAnimation();

	// Track mouse for parallax effect
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth - 0.5) * 20,
				y: (e.clientY / window.innerHeight - 0.5) * 20,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// Random glitch effect
	useEffect(() => {
		const glitchInterval = setInterval(() => {
			if (Math.random() > 0.7) {
				setGlitchActive(true);
				setTimeout(() => setGlitchActive(false), 150);
			}
		}, 3000);

		return () => clearInterval(glitchInterval);
	}, []);

	// Floating animation
	const floatingAnimation = {
		y: [0, -20, 0],
		rotate: [0, 5, 0, -5, 0],
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut",
		},
	};

	// Handle ghost click (easter egg game)
	const handleGhostClick = () => {
		setScore(score + 1);
		controls.start({
			scale: [1, 1.5, 1],
			rotate: [0, 360],
			transition: { duration: 0.5 },
		});
	};

	return (
		<div className="relative min-h-screen overflow-hidden flex items-center justify-center">
			{/* Animated Background */}
			<div className="fixed inset-0 -z-10">
				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				
				{/* Animated Gradient Orbs */}
				<motion.div
					className="absolute top-20 left-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl"
					animate={{
						x: mousePosition.x * 2,
						y: mousePosition.y * 2,
						scale: [1, 1.2, 1],
					}}
					transition={{ duration: 3, repeat: Infinity }}
				/>
				<motion.div
					className="absolute bottom-20 right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl"
					animate={{
						x: -mousePosition.x * 1.5,
						y: -mousePosition.y * 1.5,
						scale: [1, 1.1, 1],
					}}
					transition={{ duration: 4, repeat: Infinity }}
				/>

				{/* Floating Particles */}
				{Array.from({ length: 30 }).map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-purple-400/40 to-pink-400/40"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -100, 0],
							opacity: [0.2, 0.8, 0.2],
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: 3 + Math.random() * 3,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			<div className="container px-4 py-16">
				<div className="max-w-4xl mx-auto text-center space-y-12">
					{/* Score Badge (Easter Egg) */}
					{score > 0 && (
						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm"
						>
							<Sparkles className="w-5 h-5 text-yellow-400" />
							<span className="text-sm font-bold text-yellow-300">Ghost Hunter Score: {score}</span>
						</motion.div>
					)}

					{/* Animated 404 */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<motion.h1
							className={`text-[12rem] md:text-[20rem] font-black leading-none select-none ${
								glitchActive ? "glitch" : ""
							}`}
							style={{
								background: "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)",
								backgroundSize: "300% 300%",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
							animate={{
								backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: "linear",
							}}
						>
							404
						</motion.h1>

						{/* Floating Elements around 404 */}
						<motion.div
							className="absolute top-0 left-1/4 cursor-pointer"
							animate={floatingAnimation}
							onClick={handleGhostClick}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<Ghost className="w-12 h-12 text-purple-400 drop-shadow-glow" />
						</motion.div>
						<motion.div
							className="absolute top-1/4 right-1/4"
							animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
						>
							<Sparkles className="w-10 h-10 text-pink-400 drop-shadow-glow" />
						</motion.div>
						<motion.div
							className="absolute bottom-1/4 left-1/3"
							animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
						>
							<Zap className="w-8 h-8 text-cyan-400 drop-shadow-glow" />
						</motion.div>
					</motion.div>

					{/* Glitch Text */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="space-y-4"
					>
						<h2 className="text-4xl md:text-6xl font-bold">
							<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
								Lost in the Digital Void
							</span>
						</h2>
						<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							The page you're looking for has been{" "}
							<motion.span
								className="text-purple-400 font-bold"
								animate={{ opacity: [1, 0.5, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								teleported
							</motion.span>{" "}
							to another dimension
						</p>
					</motion.div>

					{/* Interactive Message */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="relative"
					>
						<motion.div
							className="inline-block p-6 rounded-2xl glass border border-purple-500/30 backdrop-blur-lg"
							whileHover={{ scale: 1.02 }}
							style={{
								x: mousePosition.x * 0.5,
								y: mousePosition.y * 0.5,
							}}
						>
							<p className="text-lg text-muted-foreground mb-4">
								💡 <span className="font-semibold text-foreground">Pro tip:</span> Try clicking the floating ghost! 👻
							</p>
							<p className="text-sm text-muted-foreground/70">
								(Yes, this is an easter egg)
							</p>
						</motion.div>
					</motion.div>

					{/* Action Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9 }}
						className="flex flex-wrap gap-4 justify-center"
					>
						<Link href="/">
							<Button
								size="lg"
								className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
							>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
									animate={{ x: ["-100%", "100%"] }}
									transition={{ duration: 2, repeat: Infinity }}
								/>
								<Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
								Back to Home
								<Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
							</Button>
						</Link>

						<Button
							size="lg"
							variant="outline"
							onClick={() => router.back()}
							className="group border-2 hover:border-purple-500/50 hover:bg-purple-500/10"
						>
							<ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
							Go Back
						</Button>

						<Link href="/projects">
							<Button
								size="lg"
								variant="outline"
								className="group border-2 hover:border-cyan-500/50 hover:bg-cyan-500/10"
							>
								<Search className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
								Explore Projects
							</Button>
						</Link>
					</motion.div>

					{/* Helpful Links */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2 }}
						className="pt-12 border-t border-border/50"
					>
						<p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
						<div className="flex flex-wrap gap-4 justify-center">
							{[
								{ href: "/about", label: "About" },
								{ href: "/projects", label: "Projects" },
								{ href: "/ecosystem", label: "Ecosystem" },
								{ href: "/contact", label: "Contact" },
							].map((link, i) => (
								<motion.div
									key={link.href}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.3 + i * 0.1 }}
								>
									<Link
										href={link.href}
										className="text-sm text-primary hover:text-purple-400 transition-colors underline-offset-4 hover:underline"
									>
										{link.label}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Fun Fact */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
						className="pt-8"
					>
						<motion.p
							className="text-xs text-muted-foreground/50"
							animate={{ opacity: [0.5, 1, 0.5] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
							Fun fact: HTTP 404 means "Not Found" and was named after room 404 at CERN where the web was born 🌐
						</motion.p>
					</motion.div>
				</div>
			</div>

			<style jsx global>{`
				@keyframes glitch {
					0% { transform: translate(0) }
					20% { transform: translate(-2px, 2px) }
					40% { transform: translate(-2px, -2px) }
					60% { transform: translate(2px, 2px) }
					80% { transform: translate(2px, -2px) }
					100% { transform: translate(0) }
				}
				
				.glitch {
					animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both;
				}

				.drop-shadow-glow {
					filter: drop-shadow(0 0 20px currentColor);
				}
			`}</style>
		</div>
	);
}
