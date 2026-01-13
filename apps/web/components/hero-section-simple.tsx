"use client";

import { Button } from "@erickharlein/ui";
import { ArrowRight, Code2, Sparkles, Calculator } from "lucide-react";
import Link from "next/link";

const titles = ["Full-Stack Engineer", "Systems Architect", "AI Specialist", "Cloud Solutions Expert"];

export function HeroSectionSimple() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95">
			{/* Grid Pattern Background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

			{/* Gradient Orbs */}
			<div className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 rounded-full blur-3xl" />
			<div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 rounded-full blur-3xl" />

			{/* Content */}
			<div className="container relative z-10 px-4">
				<div className="max-w-6xl mx-auto text-center space-y-8">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
						<Sparkles className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium">Available for exciting projects</span>
						<span className="w-2 h-2 rounded-full bg-green-500" />
					</div>

					{/* Name */}
					<div>
						<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
							<span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
								Erickharlein Pierre
							</span>
						</h1>
					</div>

					{/* Title */}
					<div className="min-h-16 flex items-center justify-center">
						<div className="flex items-center gap-3">
							<Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
							<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
								{titles[0]}
							</h2>
						</div>
					</div>

					{/* Tagline */}
					<div className="min-h-14 flex items-center justify-center">
						<p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
							Crafting elegant solutions with modern technology
						</p>
					</div>

					{/* Stats */}
					<div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
						{[
							{ value: "4", label: "Active Certifications", icon: "🛡️" },
							{ value: "8+", label: "Years Experience", icon: "🎯" },
							{ value: "50+", label: "Projects Delivered", icon: "🚀" },
						].map((stat) => (
							<div key={stat.label} className="relative group">
								<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl" />
								<div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 min-w-[140px]">
									<div className="text-4xl mb-2">{stat.icon}</div>
									<div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
										{stat.value}
									</div>
									<div className="text-xs sm:text-sm text-muted-foreground font-medium">
										{stat.label}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-wrap justify-center gap-4 pt-10">
						<Link href="/projects">
							<Button size="lg" className="group bg-gradient-to-r from-primary via-purple-500 to-pink-500">
								<Sparkles className="w-5 h-5 mr-2" />
								View My Work
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</Link>
						<Link href="/booking">
							<Button size="lg" className="group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
								<Calculator className="w-5 h-5 mr-2" />
								Build Your Platform
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</Link>
						<Link href="/contact">
							<Button size="lg" variant="outline" className="border-2">
								Let's Connect →
							</Button>
						</Link>
					</div>

					{/* Tech Stack */}
					<div className="pt-12">
						<p className="text-sm text-muted-foreground mb-4">Powered by</p>
						<div className="flex flex-wrap justify-center gap-3">
							{["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
								<div
									key={tech}
									className="px-4 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 text-sm font-medium"
								>
									{tech}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
				<div className="flex flex-col items-center gap-2 text-muted-foreground">
					<span className="text-xs">Scroll to explore</span>
					<div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
						<div className="w-1.5 h-1.5 rounded-full bg-primary" />
					</div>
				</div>
			</div>
		</section>
	);
}
