export type ProjectCategory =
	| "AI & ML"
	| "Fintech"
	| "Platform"
	| "Defense"
	| "Education"
	| "Infrastructure"
	| "Media"
	| "Government"
	| "Community"
	| "E-Commerce"
	| "Healthcare"
	| "Creative";

export type ProjectStatus = "Planned" | "In Development" | "Active Development" | "Live" | "Active" | "Maintenance";

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
	website_url?: string;
	start_date?: Date;
	end_date?: Date;
	featured: boolean;
	technologies: Technology[];
	gradient?: string;
	icon?: string;
}

export const projects: Project[] = [
	{
		id: "kleinai",
		slug: "kleinai",
		title: "KleinAI",
		tagline: "Security with soul. Freedom, even from itself.",
		description:
			"Revolutionary dual-AI governance system where Klein serves humanity while Ophir watches Klein — creating self-regulating AI that protects human agency by design.",
		category: "AI & ML",
		status: "In Development",
		website_url: "https://kleinai.techklein.com",
		github_url: "https://github.com/carleintech/kleinai",
		gradient: "from-purple-500 to-indigo-500",
		icon: "🤖",
		featured: true,
		technologies: [
			{ id: "1", name: "Python" },
			{ id: "2", name: "TensorFlow" },
			{ id: "3", name: "PyTorch" },
			{ id: "4", name: "LangChain" },
		],
	},
	{
		id: "kobklein",
		slug: "kobklein",
		title: "KobKlein",
		tagline: "Digital cashless ecosystem for Haiti",
		description:
			"Complete fintech solution with NFC cards, POS systems, merchant dashboards, and diaspora remittance integration. Building Haiti's digital economy.",
		category: "Fintech",
		status: "Live",
		website_url: "https://kobklein.com",
		github_url: "https://github.com/carleintech/kobklein",
		gradient: "from-emerald-500 to-teal-500",
		icon: "💳",
		featured: true,
		start_date: new Date("2023-01-01"),
		technologies: [
			{ id: "5", name: "React" },
			{ id: "6", name: "Node.js" },
			{ id: "7", name: "PostgreSQL" },
			{ id: "8", name: "NFC Technology" },
		],
	},
	{
		id: "techklein-platform",
		slug: "techklein-platform",
		title: "TechKlein Platform",
		tagline: "The command center for the entire ecosystem",
		description:
			"Unified platform integrating all TechKlein projects, services, and solutions. Central hub for AI governance, fintech, education, defense, and community impact.",
		category: "Platform",
		status: "Live",
		website_url: "https://techklein.com",
		github_url: "https://github.com/carleintech/techklein-platform",
		gradient: "from-blue-500 to-cyan-500",
		icon: "🌐",
		featured: true,
		start_date: new Date("2022-06-01"),
		technologies: [
			{ id: "9", name: "Next.js" },
			{ id: "10", name: "TypeScript" },
			{ id: "11", name: "Tailwind CSS" },
			{ id: "12", name: "Vercel" },
		],
	},
	{
		id: "watchlog-ai",
		slug: "watchlog-ai",
		title: "WatchLog AI",
		tagline: "Automated watch and log system for military operations",
		description:
			"Digital automation replacing paper-based CIC watch logs. Real-time alerts, 12 O'Clock Reports, Bell Ringing Protocols, CAC authentication, and audit logging.",
		category: "Defense",
		status: "Active Development",
		website_url: "https://watchlog.techklein.com",
		github_url: "https://github.com/carleintech/watchlog-ai",
		gradient: "from-blue-600 to-indigo-600",
		icon: "🛡️",
		featured: true,
		start_date: new Date("2023-09-01"),
		technologies: [
			{ id: "13", name: "React" },
			{ id: "14", name: "Node.js" },
			{ id: "15", name: "MongoDB" },
			{ id: "16", name: "WebSocket" },
		],
	},
	{
		id: "baccplus",
		slug: "baccplus",
		title: "BaccPlus",
		tagline: "Haitian Baccalauréat exam prep platform",
		description:
			"Comprehensive study and exam preparation platform for Haitian students. Interactive lessons, practice tests, and progress tracking for academic success.",
		category: "Education",
		status: "Live",
		website_url: "https://baccplus.org",
		github_url: "https://github.com/carleintech/baccplus",
		gradient: "from-orange-500 to-amber-500",
		icon: "📚",
		featured: false,
		start_date: new Date("2023-03-01"),
		technologies: [
			{ id: "17", name: "React" },
			{ id: "18", name: "Firebase" },
			{ id: "19", name: "Material-UI" },
		],
	},
	{
		id: "kleinos",
		slug: "kleinos",
		title: "KleinOS",
		tagline: "Operating system with Klein AI at its core",
		description:
			"Custom OS with first-time setup wizard and integrated Klein AI interface. Built for security, privacy, and intelligent system management.",
		category: "Infrastructure",
		status: "Planned",
		website_url: "https://kleinos.techklein.com",
		github_url: "https://github.com/carleintech/kleinos",
		gradient: "from-violet-500 to-purple-500",
		icon: "💻",
		featured: true,
		technologies: [
			{ id: "20", name: "Linux Kernel" },
			{ id: "21", name: "C++" },
			{ id: "22", name: "Python" },
			{ id: "23", name: "Electron" },
		],
	},
	{
		id: "techklein-academy",
		slug: "techklein-academy",
		title: "TechKlein Academy",
		tagline: "AI and Cybersecurity training platform",
		description:
			"Comprehensive training offering courses in AI development, cybersecurity, and advanced computing. Upskilling the next generation of engineers.",
		category: "Education",
		status: "Planned",
		website_url: "https://academy.techklein.com",
		github_url: "https://github.com/carleintech/techklein-academy",
		gradient: "from-pink-500 to-rose-500",
		icon: "🎓",
		featured: false,
		technologies: [
			{ id: "24", name: "Next.js" },
			{ id: "25", name: "Prisma" },
			{ id: "26", name: "Stripe" },
		],
	},
	{
		id: "vigil",
		slug: "vigil",
		title: "V.I.G.I.L.",
		tagline: "Vital Intelligence Gathering for Immediate Lifesaving",
		description:
			"DoD-level military wearable with AI emotional/mental state monitoring. Real-time physiological tracking and stress detection for mission readiness.",
		category: "Defense",
		status: "Planned",
		website_url: "https://vigil.techklein.com",
		github_url: "https://github.com/carleintech/vigil",
		gradient: "from-red-500 to-orange-500",
		icon: "⌚",
		featured: true,
		technologies: [
			{ id: "27", name: "IoT" },
			{ id: "28", name: "Machine Learning" },
			{ id: "29", name: "React Native" },
			{ id: "30", name: "TensorFlow Lite" },
		],
	},
	{
		id: "ayitiritmo",
		slug: "ayitiritmo",
		title: "AyitiRitmo",
		tagline: "Haitian music streaming platform",
		description:
			"Streaming platform celebrating Haitian music, from konpa to rap. Supporting artists and preserving cultural heritage through technology.",
		category: "Media",
		status: "Live",
		website_url: "https://ayitiritmo.com",
		github_url: "https://github.com/carleintech/ayitiritmo",
		gradient: "from-fuchsia-500 to-pink-500",
		icon: "🎵",
		featured: false,
		start_date: new Date("2023-06-01"),
		technologies: [
			{ id: "31", name: "React" },
			{ id: "32", name: "Node.js" },
			{ id: "33", name: "AWS S3" },
			{ id: "34", name: "Stripe" },
		],
	},
	{
		id: "agi-haiti",
		slug: "agi-haiti",
		title: "AGI",
		tagline: "Accès Global à la Justice",
		description:
			"Digital legal platform connecting Haitians with legal resources, advice, and representation. Making justice accessible to all.",
		category: "Government",
		status: "Live",
		website_url: "https://agi.com",
		github_url: "https://github.com/carleintech/agi-haiti",
		gradient: "from-slate-500 to-zinc-500",
		icon: "⚖️",
		featured: false,
		start_date: new Date("2023-04-01"),
		technologies: [
			{ id: "35", name: "Vue.js" },
			{ id: "36", name: "Laravel" },
			{ id: "37", name: "MySQL" },
		],
	},
	{
		id: "haitivote",
		slug: "haitivote",
		title: "HaitiVote",
		tagline: "Democratic voting platform for Haiti",
		description:
			"Secure digital voting platform empowering Haitian democracy. Transparent, accessible, and trustworthy election technology for the people.",
		category: "Government",
		status: "Live",
		website_url: "https://haitivote.org",
		github_url: "https://github.com/carleintech/haitivote",
		gradient: "from-blue-500 to-indigo-500",
		icon: "🗳️",
		featured: false,
		start_date: new Date("2023-08-01"),
		technologies: [
			{ id: "38", name: "Blockchain" },
			{ id: "39", name: "Smart Contracts" },
			{ id: "40", name: "React" },
		],
	},
	{
		id: "feedhope",
		slug: "feedhope",
		title: "FeedHope",
		tagline: "Food distribution program for Haiti",
		description:
			"Community-driven food distribution initiative leveraging technology to efficiently deliver aid and nutrition support to underserved communities.",
		category: "Community",
		status: "Live",
		website_url: "https://feedhope.com",
		github_url: "https://github.com/carleintech/feedhope",
		gradient: "from-green-500 to-emerald-500",
		icon: "🍽️",
		featured: false,
		start_date: new Date("2023-02-01"),
		technologies: [
			{ id: "41", name: "React" },
			{ id: "42", name: "Firebase" },
			{ id: "43", name: "Google Maps API" },
		],
	},
	{
		id: "tchatcha509",
		slug: "tchatcha509",
		title: "Tchatcha509",
		tagline: "OfferUp-style marketplace for Haiti",
		description:
			"P2P marketplace enabling Haitians to buy, sell, and trade locally. Building Haiti's digital commerce economy.",
		category: "E-Commerce",
		status: "Live",
		website_url: "https://tchatcha509.com",
		github_url: "https://github.com/carleintech/tchatcha509",
		gradient: "from-amber-500 to-yellow-500",
		icon: "🛒",
		featured: false,
		start_date: new Date("2023-05-01"),
		technologies: [
			{ id: "44", name: "React Native" },
			{ id: "45", name: "Node.js" },
			{ id: "46", name: "PostgreSQL" },
			{ id: "47", name: "Stripe" },
		],
	},
	{
		id: "kleincard",
		slug: "kleincard",
		title: "KleinCard",
		tagline: "Reloadable NFC payment cards for Haiti",
		description:
			"NFC-enabled reloadable payment card system designed for Haitian market. Secure, fast, and accessible digital payment solution.",
		category: "Fintech",
		status: "Planned",
		website_url: "https://kleincard.com",
		github_url: "https://github.com/carleintech/kleincard",
		gradient: "from-cyan-500 to-blue-500",
		icon: "💎",
		featured: false,
		technologies: [
			{ id: "48", name: "NFC Technology" },
			{ id: "49", name: "Blockchain" },
			{ id: "50", name: "React" },
		],
	},
	{
		id: "sentinel-wms",
		slug: "sentinel-wms",
		title: "Sentinel WMS",
		tagline: "Watch Bill Management System",
		description:
			"Comprehensive watch bill management and scheduling system for naval operations. Built for maximum performance and reliability.",
		category: "Defense",
		status: "In Development",
		website_url: "https://sentinel.techklein.com",
		github_url: "https://github.com/carleintech/sentinel-wms",
		gradient: "from-indigo-500 to-purple-500",
		icon: "📋",
		featured: false,
		start_date: new Date("2024-01-01"),
		technologies: [
			{ id: "51", name: "React" },
			{ id: "52", name: "Node.js" },
			{ id: "53", name: "PostgreSQL" },
			{ id: "54", name: "Docker" },
		],
	},
	{
		id: "caring-compass",
		slug: "caring-compass",
		title: "Caring Compass",
		tagline: "Home healthcare management platform",
		description:
			"Complete home care agency management system with client matching, scheduling, billing, and caregiver coordination.",
		category: "Healthcare",
		status: "Live",
		website_url: "https://caringcompasshomescare.com",
		github_url: "https://github.com/carleintech/caring-compass",
		gradient: "from-rose-500 to-pink-500",
		icon: "🏥",
		featured: false,
		start_date: new Date("2023-07-01"),
		technologies: [
			{ id: "55", name: "React" },
			{ id: "56", name: "Node.js" },
			{ id: "57", name: "MongoDB" },
			{ id: "58", name: "Stripe" },
		],
	},
	{
		id: "noesis",
		slug: "noesis",
		title: "Noesis",
		tagline: "Arts and creative expression platform",
		description:
			"Platform for artists, potters, and creators to showcase their work, connect with audiences, and sell their creations.",
		category: "Creative",
		status: "Planned",
		website_url: "https://noesis.art",
		github_url: "https://github.com/carleintech/noesis",
		gradient: "from-purple-500 to-fuchsia-500",
		icon: "🎨",
		featured: false,
		technologies: [
			{ id: "59", name: "Next.js" },
			{ id: "60", name: "Prisma" },
			{ id: "61", name: "Cloudinary" },
			{ id: "62", name: "Stripe" },
		],
	},
];
