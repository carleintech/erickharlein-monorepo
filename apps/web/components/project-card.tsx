import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Badge,
} from "@erickharlein/ui";
import { ExternalLink, Github } from "lucide-react";
import type { Project, Technology } from "@prisma/client";

interface ProjectCardProps {
	project: Project & {
		technologies: Array<{
			technology: Technology;
		}>;
	};
}

export function ProjectCard({ project }: ProjectCardProps) {
	const categoryColors: Record<string, string> = {
		AI: "from-purple-500 to-indigo-500",
		FINTECH: "from-emerald-500 to-teal-500",
		DEFENSE: "from-blue-500 to-cyan-500",
		EDUCATION: "from-orange-500 to-amber-500",
		COMMUNITY: "from-pink-500 to-rose-500",
		GOVERNMENT: "from-slate-500 to-gray-500",
		INFRASTRUCTURE: "from-violet-500 to-purple-500",
	};

	const categoryColor = categoryColors[project.category] || "from-gray-500 to-slate-500";

	return (
		<Card className="flex flex-col h-full glass border-primary/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden">
			{/* Gradient Top Border */}
			<div className={`h-1 bg-gradient-to-r ${categoryColor}`} />
			
			<CardHeader>
				<div className="flex items-start justify-between gap-2">
					<Badge 
						variant="secondary" 
						className="bg-gradient-to-r from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 border-primary/20"
					>
						{project.category.replace(/_/g, " ")}
					</Badge>
					<Badge
						variant={project.status === "COMPLETED" ? "default" : "outline"}
						className={project.status === "COMPLETED" ? "bg-gradient-to-r from-emerald-500 to-green-500 border-0" : ""}
					>
						{project.status.replace(/_/g, " ")}
					</Badge>
				</div>
				<CardTitle className="mt-4">
					<Link
						href={`/projects/${project.slug}`}
						className="hover:text-primary transition-colors bg-gradient-to-r from-foreground to-foreground group-hover:from-primary group-hover:to-purple-600 bg-clip-text group-hover:text-transparent"
					>
						{project.title}
					</Link>
				</CardTitle>
				<CardDescription className="text-base">{project.tagline}</CardDescription>
			</CardHeader>

			<CardContent className="flex-1 flex flex-col justify-between">
				<p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
					{project.description}
				</p>

				<div className="space-y-4">
					{/* Technologies */}
					<div className="flex flex-wrap gap-2">
						{project.technologies.slice(0, 3).map(({ technology }) => (
							<Badge 
								key={technology.id} 
								variant="outline" 
								className={`text-xs bg-gradient-to-r ${categoryColor} bg-opacity-5 border-primary/30 hover:border-primary/60 transition-colors`}
							>
								{technology.name}
							</Badge>
						))}
						{project.technologies.length > 3 && (
							<Badge 
								variant="outline" 
								className="text-xs bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-gray-500/30"
							>
								+{project.technologies.length - 3}
							</Badge>
						)}
					</div>

					{/* Links */}
					<div className="flex gap-3 pt-2 border-t border-border/50">
						{project.demo_url && (
							<a
								href={project.demo_url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-primary hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 group/link"
							>
								<ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
								Demo
							</a>
						)}
						{project.github_url && (
							<a
								href={project.github_url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-primary hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1.5 group/link"
							>
								<Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
								GitHub
							</a>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
