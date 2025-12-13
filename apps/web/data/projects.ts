export type ProjectCategory =
	| "AI_ML"
	| "WEB_APP"
	| "MOBILE_APP"
	| "INFRASTRUCTURE"
	| "BLOCKCHAIN"
	| "GOVERNMENT"
	| "MILITARY"
	| "FINTECH"
	| "EDUCATION"
	| "COMMUNITY";

export type ProjectStatus = "PLANNED" | "IN_PROGRESS" | "COMPLETED" | "MAINTENANCE" | "ARCHIVED";

export interface Technology {
	id: string;
	name: string;
}

export interface Project {
	id: string;
	slug: string;
	title: string;
	tagline?: string;
	description: string;
	content?: string;
	category: ProjectCategory;
	status: ProjectStatus;
	thumbnail_url?: string;
	demo_url?: string;
	github_url?: string;
	start_date?: Date;
	end_date?: Date;
	featured: boolean;
	technologies: Technology[];
}

export const projects: Project[] = [
	{
		id: "1",
		slug: "ai-powered-analytics",
		title: "AI-Powered Analytics Platform",
		tagline: "Real-time analytics with machine learning insights",
		description:
			"Built an enterprise-grade analytics platform that processes millions of events per day, providing real-time insights and predictive analytics using machine learning models.",
		content:
			"This platform handles massive scale data processing with Apache Kafka, uses TensorFlow for predictive models, and provides beautiful visualizations through a React dashboard. Deployed on AWS with auto-scaling capabilities.",
		category: "AI_ML",
		status: "COMPLETED",
		demo_url: "https://demo.example.com",
		github_url: "https://github.com/example/analytics",
		start_date: new Date("2024-01-01"),
		end_date: new Date("2024-06-30"),
		featured: true,
		technologies: [
			{ id: "1", name: "Python" },
			{ id: "2", name: "TensorFlow" },
			{ id: "3", name: "React" },
			{ id: "4", name: "Apache Kafka" },
			{ id: "5", name: "AWS" },
		],
	},
	{
		id: "2",
		slug: "military-logistics-system",
		title: "Military Logistics Management System",
		tagline: "Mission-critical supply chain coordination",
		description:
			"Developed a secure logistics management system for military operations, enabling real-time tracking of assets, personnel, and mission-critical supplies across multiple locations.",
		content:
			"Built with security-first architecture, this system provides end-to-end encryption, role-based access control, and offline capabilities for deployed units. Integrated with existing DOD systems.",
		category: "MILITARY",
		status: "COMPLETED",
		start_date: new Date("2023-06-01"),
		end_date: new Date("2024-03-31"),
		featured: true,
		technologies: [
			{ id: "6", name: "Node.js" },
			{ id: "7", name: "PostgreSQL" },
			{ id: "8", name: "Docker" },
			{ id: "9", name: "Kubernetes" },
			{ id: "10", name: "React Native" },
		],
	},
	{
		id: "3",
		slug: "fintech-payment-gateway",
		title: "Fintech Payment Gateway",
		tagline: "Secure, scalable payment processing",
		description:
			"Architected and implemented a PCI-DSS compliant payment gateway processing thousands of transactions per second with 99.99% uptime.",
		content:
			"Handles credit card processing, ACH transfers, and cryptocurrency payments. Built with microservices architecture for high availability and horizontal scaling.",
		category: "FINTECH",
		status: "MAINTENANCE",
		demo_url: "https://payments.example.com",
		start_date: new Date("2023-01-01"),
		featured: true,
		technologies: [
			{ id: "11", name: "Go" },
			{ id: "12", name: "Redis" },
			{ id: "13", name: "MongoDB" },
			{ id: "14", name: "gRPC" },
			{ id: "15", name: "Stripe API" },
		],
	},
	{
		id: "4",
		slug: "community-health-platform",
		title: "Community Health Platform",
		tagline: "Connecting communities with healthcare resources",
		description:
			"Created a mobile-first platform connecting underserved communities with healthcare providers, mental health resources, and wellness programs.",
		category: "COMMUNITY",
		status: "IN_PROGRESS",
		github_url: "https://github.com/example/health-platform",
		start_date: new Date("2024-03-01"),
		featured: false,
		technologies: [
			{ id: "16", name: "React Native" },
			{ id: "17", name: "Firebase" },
			{ id: "18", name: "TypeScript" },
			{ id: "19", name: "Tailwind CSS" },
		],
	},
	{
		id: "5",
		slug: "blockchain-voting-system",
		title: "Blockchain Voting System",
		tagline: "Transparent and secure digital voting",
		description:
			"Designed a blockchain-based voting system ensuring transparency, security, and verifiability for government and organizational elections.",
		category: "BLOCKCHAIN",
		status: "COMPLETED",
		github_url: "https://github.com/example/blockchain-voting",
		start_date: new Date("2023-09-01"),
		end_date: new Date("2024-02-28"),
		featured: false,
		technologies: [
			{ id: "20", name: "Solidity" },
			{ id: "21", name: "Ethereum" },
			{ id: "22", name: "Web3.js" },
			{ id: "23", name: "Next.js" },
		],
	},
	{
		id: "6",
		slug: "cloud-infrastructure-automation",
		title: "Cloud Infrastructure Automation",
		tagline: "Infrastructure as Code at scale",
		description:
			"Built comprehensive infrastructure automation platform managing multi-cloud deployments with Terraform, reducing deployment time by 80%.",
		category: "INFRASTRUCTURE",
		status: "COMPLETED",
		start_date: new Date("2023-03-01"),
		end_date: new Date("2023-12-31"),
		featured: true,
		technologies: [
			{ id: "24", name: "Terraform" },
			{ id: "25", name: "AWS" },
			{ id: "26", name: "Azure" },
			{ id: "27", name: "Python" },
			{ id: "28", name: "GitLab CI" },
		],
	},
];
