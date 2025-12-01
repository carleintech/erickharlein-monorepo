import { Suspense } from 'react';
import { prisma } from '@erickharlein/database';
import { ProjectCard } from '@/components/project-card';
import { ProjectFilters } from '@/components/project-filters';
import { Card, CardContent } from '@erickharlein/ui';

interface ProjectsPageProps {
  searchParams: {
    category?: string;
    status?: string;
    search?: string;
  };
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { category, status, search } = searchParams;

  // Build filter conditions
  const where: any = {
    visibility: 'PUBLIC',
  };

  if (category) {
    where.category = category;
  }

  if (status) {
    where.status = status;
  }

  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
      { tagline: { contains: search, mode: 'insensitive' } },
    ];
  }

  // Fetch projects with filters
  const projects = await prisma.project.findMany({
    where,
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: [{ featured: 'desc' }, { created_at: 'desc' }],
  });

  // Get unique categories and statuses for filters
  const categories = await prisma.project.findMany({
    where: { visibility: 'PUBLIC' },
    select: { category: true },
    distinct: ['category'],
  });

  const statuses = await prisma.project.findMany({
    where: { visibility: 'PUBLIC' },
    select: { status: true },
    distinct: ['status'],
  });

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-purple-950 dark:to-pink-950" />
        
        {/* Animated Orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-cyan-400/30 dark:from-indigo-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-rose-400/20 to-orange-400/20 dark:from-rose-500/10 dark:to-orange-500/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container py-12 relative z-10">
        {/* Header */}
        <div className="space-y-4 mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of systems, platforms, and solutions I've built across AI, fintech, government, and community impact.
          </p>
        </div>

      {/* Filters */}
      <Suspense fallback={<div>Loading filters...</div>}>
        <ProjectFilters
          categories={categories.map((c) => c.category)}
          statuses={statuses.map((s) => s.status)}
          currentCategory={category}
          currentStatus={status}
          currentSearch={search}
        />
      </Suspense>

        {/* Results */}
        <div className="mt-8 animate-in fade-in duration-1000 delay-300">
          {projects.length === 0 ? (
            <Card className="glass border-primary/20 shadow-xl">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="mb-6 text-center">
                <span className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 text-foreground">
                  Showing {projects.length} {projects.length === 1 ? 'project' : 'projects'}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
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
