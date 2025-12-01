"use client";

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@erickharlein/ui";
import type { Project, Technology } from "@prisma/client";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectWithTechnologies extends Project {
	technologies: Array<{
		technology: Technology;
	}>;
}

interface ProjectsGridProps {
	projects: ProjectWithTechnologies[];
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, rotateY: -15, z: -50 },
	visible: {
		opacity: 1,
		rotateY: 0,
		z: 0,
		transition: {
			duration: 0.6,
			type: "spring",
			stiffness: 100,
		},
	},
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<section className="py-20">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						<span className="text-gradient">Featured Projects</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Intelligent systems built with military precision — from AI governance to digital
						finance.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{projects.map((project) => (
						<motion.div key={project.id} variants={cardVariants} style={{ perspective: 1000 }}>
							<Link href={`/projects/${project.slug}`}>
								<Card className="glass-strong border-0 h-full group hover:glow-cyan transition-all duration-300 cursor-pointer overflow-hidden">
									{/* Category Badge Overlay */}
									<div className="absolute top-4 right-4 z-10">
										<Badge className="bg-primary/20 backdrop-blur-sm border-primary/30">
											{project.category.replace(/_/g, " ")}
										</Badge>
									</div>

									{/* Gradient Overlay */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

									<CardHeader className="relative">
										<motion.div
											className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											<span className="text-2xl font-bold text-white">
												{project.title.charAt(0)}
											</span>
										</motion.div>
										<CardTitle className="text-xl group-hover:text-primary transition-colors">
											{project.title}
										</CardTitle>
										{project.tagline && (
											<CardDescription className="text-muted-foreground line-clamp-2">
												{project.tagline}
											</CardDescription>
										)}
									</CardHeader>

									<CardContent className="space-y-4">
										<p className="text-sm text-foreground/80 line-clamp-3">{project.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap gap-2">
											{project.technologies.slice(0, 3).map(({ technology }) => (
												<span
													key={technology.id}
													className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-secondary"
												>
													{technology.name}
												</span>
											))}
											{project.technologies.length > 3 && (
												<span className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">
													+{project.technologies.length - 3}
												</span>
											)}
										</div>

										{/* Links */}
										<div className="flex items-center gap-3 pt-2">
											{project.demo_url && (
												<motion.a
													href={project.demo_url}
													target="_blank"
													rel="noopener noreferrer"
													onClick={(e) => e.stopPropagation()}
													className="flex items-center gap-1 text-sm text-primary hover:text-primary/80"
													whileHover={{ scale: 1.05 }}
												>
													<ExternalLink className="h-4 w-4" />
													<span>Demo</span>
												</motion.a>
											)}
											{project.github_url && (
												<motion.a
													href={project.github_url}
													target="_blank"
													rel="noopener noreferrer"
													onClick={(e) => e.stopPropagation()}
													className="flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground"
													whileHover={{ scale: 1.05 }}
												>
													<Github className="h-4 w-4" />
													<span>Code</span>
												</motion.a>
											)}
											{project.start_date && (
												<div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
													<Calendar className="h-3 w-3" />
													<span>{new Date(project.start_date).getFullYear()}</span>
												</div>
											)}
										</div>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-center mt-12"
				>
					<Link
						href="/projects"
						className="inline-flex items-center gap-2 px-6 py-3 glass-strong rounded-lg hover:glow transition-all text-primary font-semibold"
					>
						View All Projects on GitHub
						<ExternalLink className="h-4 w-4" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
