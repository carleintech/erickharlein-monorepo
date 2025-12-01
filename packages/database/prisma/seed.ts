import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	console.log("🌱 Starting database seed...");

	// Clear existing data (dev only)
	await prisma.activityLog.deleteMany();
	await prisma.projectTechnology.deleteMany();
	await prisma.booking.deleteMany();
	await prisma.blogPost.deleteMany();
	await prisma.technology.deleteMany();
	await prisma.project.deleteMany();
	await prisma.profile.deleteMany();
	await prisma.user.deleteMany();

	// Create admin user
	const _admin = await prisma.user.create({
		data: {
			email: "erick@erickharlein.com",
			name: "Erick Harlein",
			role: "SUPER_ADMIN",
			profile: {
				create: {
					title: "Systems Engineer & AI Architect | U.S. Navy OS2",
					bio: "Naval Operations Specialist and Systems Engineer specializing in AI architecture, cybersecurity, and large-scale infrastructure. Founder of the TechKlein ecosystem — building intelligent systems that bridge military precision with cutting-edge technology.",
					location: "United States",
					timezone: "America/New_York",
					military_branch: "U.S. Navy",
					military_rank: "OS2",
					github_url: "https://github.com/erickharlein",
					linkedin_url: "https://linkedin.com/in/erickharlein",
					years_experience: 8,
					projects_completed: 12,
				},
			},
		},
	});

	console.log("✅ Created admin user");

	// Create technologies
	const technologies = await Promise.all([
		prisma.technology.create({
			data: {
				slug: "nextjs",
				name: "Next.js",
				category: "FRAMEWORK",
				proficiency: 95,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "typescript",
				name: "TypeScript",
				category: "LANGUAGE",
				proficiency: 95,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "react",
				name: "React",
				category: "FRAMEWORK",
				proficiency: 95,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "nodejs",
				name: "Node.js",
				category: "FRAMEWORK",
				proficiency: 90,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "python",
				name: "Python",
				category: "LANGUAGE",
				proficiency: 90,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "postgresql",
				name: "PostgreSQL",
				category: "DATABASE",
				proficiency: 85,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "docker",
				name: "Docker",
				category: "DEVOPS",
				proficiency: 85,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "aws",
				name: "AWS",
				category: "CLOUD",
				proficiency: 80,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "tensorflow",
				name: "TensorFlow",
				category: "AI_ML",
				proficiency: 80,
			},
		}),
		prisma.technology.create({
			data: {
				slug: "supabase",
				name: "Supabase",
				category: "DATABASE",
				proficiency: 85,
			},
		}),
	]);

	console.log("✅ Created technologies");

	// Create real projects
	const _kleinai = await prisma.project.create({
		data: {
			slug: "kleinai",
			title: "KleinAI",
			tagline: "Intelligent AI Assistant for the TechKlein Ecosystem",
			description:
				"Advanced conversational AI system built to manage, orchestrate, and automate workflows across the entire TechKlein platform. Integrates natural language processing, task automation, and system monitoring.",
			category: "AI_ML",
			status: "IN_PROGRESS",
			visibility: "PUBLIC",
			featured: true,
			github_url: "https://github.com/erickharlein/kleinai",
			start_date: new Date("2024-01-15"),
			technologies: {
				create: [
					{ technology_id: technologies.find((t) => t.slug === "python")?.id },
					{ technology_id: technologies.find((t) => t.slug === "tensorflow")?.id },
					{ technology_id: technologies.find((t) => t.slug === "nodejs")?.id },
				],
			},
		},
	});

	const _ophir = await prisma.project.create({
		data: {
			slug: "ophir",
			title: "Ophir",
			tagline: "AI Governance & Regulatory Framework",
			description:
				"Compliance and governance system designed to monitor, audit, and regulate AI systems within the TechKlein ecosystem. Ensures ethical AI deployment, bias detection, and regulatory compliance.",
			category: "AI_ML",
			status: "IN_PROGRESS",
			visibility: "PUBLIC",
			featured: true,
			start_date: new Date("2024-03-01"),
			technologies: {
				create: [
					{ technology_id: technologies.find((t) => t.slug === "python")?.id },
					{ technology_id: technologies.find((t) => t.slug === "postgresql")?.id },
				],
			},
		},
	});

	const _kobklein = await prisma.project.create({
		data: {
			slug: "kobklein",
			title: "KobKlein",
			tagline: "Digital Payments Platform for Haiti",
			description:
				"Secure, blockchain-integrated digital payments ecosystem designed for Haiti. Features mobile money transfers, merchant payments, and financial inclusion tools for underserved communities.",
			category: "FINTECH",
			status: "IN_PROGRESS",
			visibility: "PUBLIC",
			featured: true,
			start_date: new Date("2023-09-01"),
			technologies: {
				create: [
					{ technology_id: technologies.find((t) => t.slug === "nextjs")?.id },
					{ technology_id: technologies.find((t) => t.slug === "typescript")?.id },
					{ technology_id: technologies.find((t) => t.slug === "postgresql")?.id },
				],
			},
		},
	});

	const _feedhope = await prisma.project.create({
		data: {
			slug: "feedhope",
			title: "FeedHope",
			tagline: "Community Food Distribution Platform",
			description:
				"Logistics and distribution platform connecting food banks, volunteers, and communities in need. Real-time inventory management, route optimization, and impact tracking.",
			category: "COMMUNITY",
			status: "COMPLETED",
			visibility: "PUBLIC",
			featured: false,
			start_date: new Date("2023-06-01"),
			end_date: new Date("2024-02-01"),
			technologies: {
				create: [
					{ technology_id: technologies.find((t) => t.slug === "react")?.id },
					{ technology_id: technologies.find((t) => t.slug === "nodejs")?.id },
				],
			},
		},
	});

	const _watchbill = await prisma.project.create({
		data: {
			slug: "watchbill-automation",
			title: "Watchbill Automation",
			tagline: "U.S. Navy Scheduling System",
			description:
				"Automated watch scheduling and personnel management system for U.S. Navy operations. Optimizes crew rotations, ensures compliance with rest requirements, and integrates with existing Navy systems.",
			category: "MILITARY",
			status: "COMPLETED",
			visibility: "PUBLIC",
			featured: true,
			start_date: new Date("2022-04-01"),
			end_date: new Date("2023-08-01"),
			technologies: {
				create: [
					{ technology_id: technologies.find((t) => t.slug === "python")?.id },
					{ technology_id: technologies.find((t) => t.slug === "postgresql")?.id },
				],
			},
		},
	});

	console.log("✅ Created projects");

	// Create sample booking
	await prisma.booking.create({
		data: {
			contact_name: "John Smith",
			contact_email: "john.smith@example.com",
			contact_phone: "+1-555-0123",
			company: "Tech Innovations Inc.",
			service_type: "CONSULTATION",
			preferred_date: new Date("2025-01-15T14:00:00Z"),
			duration: 60,
			status: "PENDING",
			notes: "Interested in discussing AI system architecture for enterprise deployment.",
		},
	});

	console.log("✅ Created sample booking");

	console.log("🎉 Seed completed successfully!");
}

main()
	.catch((e) => {
		console.error("❌ Seed failed:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
