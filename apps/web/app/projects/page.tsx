import { Card, CardContent } from "@erickharlein/ui";
import { Suspense } from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilters } from "@/components/project-filters";
import { projects as allProjects } from "@/data/projects";

interface ProjectsPageProps {
	searchParams: Promise<{
		category?: string;
		status?: string;
		search?: string;
	}>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
	const { category, status, search } = await searchParams;

	// Filter projects based on search params
	let filteredProjects = [...allProjects];

	if (category) {
		filteredProjects = filteredProjects.filter((p) => p.category === category);
	}

	if (status) {
		filteredProjects = filteredProjects.filter((p) => p.status === status);
	}

	if (search) {
		const searchLower = search.toLowerCase();
		filteredProjects = filteredProjects.filter(
			(p) =>
				p.title.toLowerCase().includes(searchLower) ||
				p.description.toLowerCase().includes(searchLower) ||
				p.tagline?.toLowerCase().includes(searchLower),
		);
	}

	// Sort by featured first, then by start date
	filteredProjects.sort((a, b) => {
		if (a.featured !== b.featured) {
			return a.featured ? -1 : 1;
		}
		if (a.start_date && b.start_date) {
			return b.start_date.getTime() - a.start_date.getTime();
		}
		return 0;
	});

	// Get unique categories and statuses for filters
	const categories = [...new Set(allProjects.map((p) => p.category))];
	const statuses = [...new Set(allProjects.map((p) => p.status))];

	return (
		<div className="relative min-h-screen">
			{/* Animated Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-pink-950" />

				{/* Animated Orbs */}
				<div
					className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: "5s" }}
				/>
				<div
					className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 dark:from-indigo-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: "7s", animationDelay: "1s" }}
				/>
				<div
					className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-rose-400/20 to-orange-400/20 dark:from-rose-500/10 dark:to-orange-500/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: "6s", animationDelay: "2s" }}
				/>
			</div>

			<div className="container py-12 relative z-10">
				{/* Header */}
				<div className="space-y-4 mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
						Our Products & Solutions
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						17+ live products serving millions — from defense operations to financial inclusion,
						education to cultural preservation. Each solution designed to solve real problems and create lasting impact.
					</p>
				</div>

				{/* Filters */}
				<Suspense fallback={<div>Loading filters...</div>}>
					<ProjectFilters
						categories={categories}
						statuses={statuses}
						currentCategory={category}
						currentStatus={status}
						currentSearch={search}
					/>
				</Suspense>

				{/* Results */}
				<div className="mt-8 animate-in fade-in duration-1000 delay-300">
					{filteredProjects.length === 0 ? (
						<Card className="glass border-primary/20 shadow-xl">
							<CardContent className="py-12 text-center">
								<p className="text-muted-foreground text-lg">
									No projects found matching your criteria.
								</p>
							</CardContent>
						</Card>
					) : (
						<>
							<div className="mb-6 text-center">
								<span className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 text-foreground">
									Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
								</span>
							</div>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
								{filteredProjects.map((project, index) => (
									<div
										key={project.id}
										className="animate-in fade-in slide-in-from-bottom-4 duration-700"
										style={{ animationDelay: `${index * 100}ms` }}
									>
										<ProjectCard project={project} />
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
