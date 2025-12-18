import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@erickharlein/ui";
import { ExternalLink, Github, Globe } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	// Use the gradient from the project data, or fallback to a default
	const gradientColor = project.gradient || "from-gray-500 to-slate-500";

	return (
		<Card className="flex flex-col h-full glass border-primary/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
			{/* Gradient Top Border */}
			<div className={`h-1 bg-gradient-to-r ${gradientColor}`} />

			<CardHeader>
				<div className="flex items-start justify-between gap-4">
					{/* Icon */}
					{project.icon && (
						<div
							className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradientColor} text-3xl group-hover:scale-110 transition-transform`}
						>
							{project.icon}
						</div>
					)}
					<div className="flex flex-col gap-2 items-end">
						<Badge
							variant="outline"
							className={`text-xs font-semibold ${
								project.status === "Live"
									? "bg-green-500/20 text-green-300 border-green-500/50"
									: project.status === "Active" || project.status === "Active Development"
										? "bg-blue-500/20 text-blue-300 border-blue-500/50"
										: project.status === "In Development"
											? "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
											: "bg-purple-500/20 text-purple-300 border-purple-500/50"
							}`}
						>
							{project.status}
						</Badge>
						<Badge
							variant="outline"
							className="text-xs bg-primary/10 border-primary/30"
						>
							{project.category}
						</Badge>
					</div>
				</div>
				<CardTitle className="mt-4 text-xl group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
					<Link href={`/projects/${project.slug}`}>
						{project.title}
					</Link>
				</CardTitle>
				{project.tagline && (
					<CardDescription className="text-sm font-medium">{project.tagline}</CardDescription>
				)}
			</CardHeader>

			<CardContent className="flex-1 flex flex-col justify-between">
				<p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
					{project.description}
				</p>

				<div className="space-y-4">
					{/* Technologies */}
					{project.technologies.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{project.technologies.slice(0, 3).map((technology) => (
								<Badge
									key={technology.id}
									variant="outline"
									className="text-xs"
								>
									{technology.name}
								</Badge>
							))}
							{project.technologies.length > 3 && (
								<Badge
									variant="outline"
									className="text-xs"
								>
									+{project.technologies.length - 3}
								</Badge>
							)}
						</div>
					)}

					{/* Links */}
					{(project.website_url || project.demo_url || project.github_url) && (
						<div className="flex flex-wrap gap-3 pt-2 border-t border-border/50">
							{project.website_url && (
								<a
									href={project.website_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-medium text-primary hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 group/link"
								>
									<Globe className="h-3 w-3 group-hover/link:scale-110 transition-transform" />
									Website
								</a>
							)}
							{project.demo_url && (
								<a
									href={project.demo_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-medium text-primary hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 group/link"
								>
									<ExternalLink className="h-3 w-3 group-hover/link:scale-110 transition-transform" />
									Demo
								</a>
							)}
							{project.github_url && (
								<a
									href={project.github_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-medium text-primary hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 group/link"
								>
									<Github className="h-3 w-3 group-hover/link:scale-110 transition-transform" />
									GitHub
								</a>
							)}
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
