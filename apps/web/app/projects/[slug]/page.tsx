import { prisma } from "@erickharlein/database";
import { Badge, Button, Card, CardContent, Separator } from "@erickharlein/ui";
import { formatDate } from "@erickharlein/utils";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const projects = await prisma.project.findMany({
		where: { visibility: "PUBLIC" },
		select: { slug: true },
	});

	return projects.map((project: { slug: string }) => ({
		slug: project.slug,
	}));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	const { slug } = await params;
	const project = await prisma.project.findUnique({
		where: {
			slug,
			visibility: "PUBLIC",
		},
		include: {
			technologies: {
				include: {
					technology: true,
				},
			},
		},
	});

	if (!project) {
		notFound();
	}

	// Increment view count
	await prisma.project.update({
		where: { id: project.id },
		data: { view_count: { increment: 1 } },
	});

	return (
		<div className="container py-12 max-w-4xl">
			{/* Back Button */}
			<Link href="/projects">
				<Button variant="ghost" className="mb-6 gap-2">
					<ArrowLeft className="h-4 w-4" />
					Back to Projects
				</Button>
			</Link>

			{/* Header */}
			<div className="space-y-4 mb-8">
				<div className="flex items-center gap-2">
					<Badge>{project.category.replace(/_/g, " ")}</Badge>
					<Badge variant={project.status === "COMPLETED" ? "default" : "outline"}>
						{project.status.replace(/_/g, " ")}
					</Badge>
				</div>

				<h1 className="text-4xl font-bold">{project.title}</h1>

				{project.tagline && <p className="text-xl text-muted-foreground">{project.tagline}</p>}

				{/* Meta Info */}
				<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
					{project.start_date && (
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							{formatDate(project.start_date, "MMM yyyy")}
							{project.end_date && ` - ${formatDate(project.end_date, "MMM yyyy")}`}
						</div>
					)}
				</div>

				{/* Links */}
				<div className="flex gap-3">
					{project.demo_url && (
						<a href={project.demo_url} target="_blank" rel="noopener noreferrer">
							<Button className="gap-2">
								<ExternalLink className="h-4 w-4" />
								Live Demo
							</Button>
						</a>
					)}
					{project.github_url && (
						<a href={project.github_url} target="_blank" rel="noopener noreferrer">
							<Button variant="outline" className="gap-2">
								<Github className="h-4 w-4" />
								View Code
							</Button>
						</a>
					)}
				</div>
			</div>

			<Separator className="my-8" />

			{/* Description */}
			<Card className="mb-8">
				<CardContent className="pt-6">
					<h2 className="text-2xl font-bold mb-4">Overview</h2>
					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<p className="text-muted-foreground leading-relaxed">{project.description}</p>
					</div>
				</CardContent>
			</Card>

			{/* Content (if exists) */}
			{project.content && (
				<Card className="mb-8">
					<CardContent className="pt-6">
						<h2 className="text-2xl font-bold mb-4">Details</h2>
						<div className="prose prose-neutral dark:prose-invert max-w-none">
							<p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
								{project.content}
							</p>
						</div>
					</CardContent>
				</Card>
			)}

			{/* Technologies */}
			<Card>
				<CardContent className="pt-6">
					<h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map(
							({ technology }: { technology: { id: string; name: string } }) => (
								<Badge key={technology.id} variant="secondary" className="text-sm px-3 py-1">
									{technology.name}
								</Badge>
							),
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
