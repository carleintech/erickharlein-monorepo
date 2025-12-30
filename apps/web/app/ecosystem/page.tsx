"use client";

import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogClose } from "@erickharlein/ui";
import { motion } from "framer-motion";
import {
	BookOpen,
	Brain,
	Building2,
	Code2,
	Coins,
	Globe,
	GraduationCap,
	Heart,
	Lightbulb,
	Monitor,
	Music,
	Rocket,
	Scale,
	Server,
	Shield,
	Sparkles,
	Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// TECHKLEIN Division Framework
const divisions = [
	{
		id: "kleinai",
		name: "KleinAI",
		tagline: "The Brain of Everything",
		description: "Core intelligence layer governing, connecting, protecting, and evolving all divisions. Dual-AI architecture (Klein + Ophir) ensures ethical, bounded, and human-aligned intelligence.",
		icon: Brain,
		color: "from-purple-500 to-indigo-600",
		role: "Core Intelligence",
		status: "In Development",
		manifesto: {
			title: "The Intelligence Manifesto",
			pillars: [
				{
					name: "Dual Consciousness",
					description: "Klein serves humanity. Ophir watches Klein. No single AI can ever be trusted with absolute power — not even ours."
				},
				{
					name: "Ethical Bounds",
					description: "Intelligence without restraint is danger. We build AI that questions itself, limits itself, and serves without dominance."
				},
				{
					name: "Human Sovereignty",
					description: "Every AI decision can be overridden. Every prediction can be challenged. Humans remain the final authority, always."
				}
			]
		}
	},
	{
		id: "kleinos",
		name: "KleinOS",
		tagline: "Secure AI-Native Operating System",
		description: "First-boot KleinAI integration, Zero Trust architecture, Humanity Mode for accessibility, Sovereignty Mode for privacy, and Crisis Mode for resilience.",
		icon: Monitor,
		color: "from-blue-500 to-cyan-600",
		role: "Platform & System",
		status: "In Development",
		manifesto: {
			title: "The Platform Manifesto",
			pillars: [
				{
					name: "Zero Trust by Design",
					description: "Trust is not inherited, it's earned every millisecond. No user, device, or network is trusted by default — verification is continuous."
				},
				{
					name: "Human-First Modes",
					description: "Accessibility isn't optional (Humanity Mode). Privacy is a right (Sovereignty Mode). Resilience is guaranteed (Crisis Mode)."
				},
				{
					name: "AI-Native Security",
					description: "Security isn't a feature — it's the foundation. From first boot, KleinAI protects, adapts, and evolves with every threat."
				}
			]
		}
	},
	{
		id: "kleinverse",
		name: "KleinVerse",
		tagline: "The Unified Digital World",
		description: "One account for all TECHKLEIN services. Shared identity, wallet, reputation, AI profile, and community spaces.",
		icon: Globe,
		color: "from-cyan-500 to-teal-600",
		role: "Digital Ecosystem",
		status: "In Development",
		manifesto: {
			title: "The Unity Manifesto",
			pillars: [
				{
					name: "One Identity, Total Control",
					description: "Your identity belongs to you. One login, infinite possibilities — but you decide what to share, when, and with whom."
				},
				{
					name: "Seamless Interoperability",
					description: "No more fragmented accounts. Your wallet, reputation, AI profile, and community flow across every TECHKLEIN service."
				},
				{
					name: "Community as Infrastructure",
					description: "Digital spaces are not extractive platforms — they're public squares where humans connect, create, and thrive together."
				}
			]
		}
	},
	{
		id: "kleindefense",
		name: "KleinDefense",
		tagline: "Security & Military Systems",
		description: "V.I.G.I.L., SentinelGuard, Watch Bill Systems, KleinSOC, IDS/IPS platforms, and CIC Decision AI for military operations.",
		icon: Shield,
		color: "from-red-500 to-orange-600",
		role: "Defense & Security",
		status: "In Development",
		manifesto: {
			title: "The Defense Manifesto",
			pillars: [
				{
					name: "Protection Without Compromise",
					description: "Security is non-negotiable. We defend lives, assets, and sovereignty — but never at the cost of human rights or dignity."
				},
				{
					name: "AI-Assisted, Human-Commanded",
					description: "AI enhances threat detection and response speed. But life-or-death decisions remain in human hands, always."
				},
				{
					name: "Transparent Accountability",
					description: "Every action is logged, auditable, and reviewable. Power without oversight is tyranny — we reject that path."
				}
			]
		}
	},
	{
		id: "kleincivic",
		name: "KleinCivic",
		tagline: "Justice, Safety & Government",
		description: "AGI (Accès Global à la Justice), Alèt community safety, digital ID validation, public safety dashboards, and civic reporting.",
		icon: Scale,
		color: "from-amber-500 to-yellow-600",
		role: "Civic & Justice",
		status: "In Development",
		manifesto: {
			title: "The Justice Manifesto",
			pillars: [
				{
					name: "Access Is a Right",
					description: "Justice delayed is justice denied. We remove barriers — financial, linguistic, geographic — so everyone can seek redress."
				},
				{
					name: "Safety Through Visibility",
					description: "Communities are safer when threats are visible and authorities are accountable. Transparency protects everyone."
				},
				{
					name: "Civic Power to the People",
					description: "Government serves citizens, not corporations. We build tools that amplify citizen voices and demand accountability."
				}
			]
		}
	},
	{
		id: "kleinfinance",
		name: "KleinFinance",
		tagline: "Digital Economy & Payments",
		description: "KobKlein cashless ecosystem, NFC cards, diaspora remittance, merchant POS systems. Building Haiti's digital economy with zero predatory fees.",
		icon: Coins,
		color: "from-emerald-500 to-green-600",
		role: "Financial & Economic",
		status: "In Development",
		manifesto: {
			title: "The Finance Manifesto",
			pillars: [
				{
					name: "Money Must Serve Life",
					description: "Financial systems should empower, not extract. We reject predatory fees, hidden charges, and exploitative terms."
				},
				{
					name: "Inclusion by Default",
					description: "Banking, payments, remittances — accessible to everyone, everywhere. No person left behind because they lack a bank account."
				},
				{
					name: "Economic Sovereignty",
					description: "Nations and communities deserve financial independence. We build tools that strengthen local economies, not weaken them."
				}
			]
		}
	},
	{
		id: "kleinculture",
		name: "KleinCulture",
		tagline: "Music, Media & Identity",
		description: "AyitiRitmo streaming platform, artist/DJ/producer ecosystems, cultural archives, event tech, and creator monetization.",
		icon: Music,
		color: "from-pink-500 to-rose-600",
		role: "Culture & Media",
		status: "In Development",
		manifesto: {
			title: "The Culture Manifesto",
			pillars: [
				{
					name: "Identity Is Infrastructure",
					description: "Culture is not entertainment — it's survival. We preserve, amplify, and monetize cultural expression without exploitation."
				},
				{
					name: "Creators First",
					description: "Artists, musicians, and storytellers deserve fair compensation. Platforms extract value — we redistribute it."
				},
				{
					name: "Archives as Resistance",
					description: "Cultural memory must be protected. We digitize, preserve, and make accessible the stories that define us."
				}
			]
		}
	},
	{
		id: "kleinhealth",
		name: "KleinHealth",
		tagline: "Human Care & Wellbeing",
		description: "Caring Compass home care, mental health AI companion, elder support tools. AI assists, never replaces humans.",
		icon: Heart,
		color: "from-red-400 to-pink-600",
		role: "Health & Human Care",
		status: "In Development",
		manifesto: {
			title: "The Care Manifesto",
			pillars: [
				{
					name: "Care Is a Human Act",
					description: "AI can support caregiving, but it cannot replace human compassion. Technology assists — humans heal."
				},
				{
					name: "Dignity in Every Stage",
					description: "From birth to end-of-life, every person deserves respect, autonomy, and care without compromise."
				},
				{
					name: "Mental Health Without Stigma",
					description: "AI companions provide support, not judgment. We normalize mental health care and make it accessible to all."
				}
			]
		}
	},
	{
		id: "kleinacademy",
		name: "KleinAcademy",
		tagline: "Education & Talent",
		description: "BaccPlus exam prep, cybersecurity training labs, AI literacy programs, military/civilian upskilling, youth mentorship.",
		icon: GraduationCap,
		color: "from-indigo-500 to-purple-600",
		role: "Education & Talent",
		status: "In Development",
		manifesto: {
			title: "The Education Manifesto",
			pillars: [
				{
					name: "Knowledge Multiplies Freedom",
					description: "Education is liberation. We provide tools that empower individuals to learn, grow, and transcend their circumstances."
				},
				{
					name: "Skills for the Future",
					description: "AI, cybersecurity, digital literacy — not luxuries, but necessities. We train the next generation for a world we're building."
				},
				{
					name: "Mentorship as Mission",
					description: "Learning is relational. We connect youth with mentors who guide, inspire, and hold them accountable."
				}
			]
		}
	},
	{
		id: "kleininfrastructure",
		name: "KleinInfrastructure",
		tagline: "Cloud, Data, Networks",
		description: "Enterprise cloud (AWS/Azure/GovCloud), edge computing, data centers, API gateways, encryption, and compliance systems.",
		icon: Server,
		color: "from-slate-500 to-gray-600",
		role: "Infrastructure & Cloud",
		status: "In Development",
		manifesto: {
			title: "The Infrastructure Manifesto",
			pillars: [
				{
					name: "Reliability Is Foundational",
					description: "Systems fail — but not ours. Redundancy, fault tolerance, and resilience ensure uptime when it matters most."
				},
				{
					name: "Security at Every Layer",
					description: "Encryption, compliance, zero trust — from hardware to API. Infrastructure is the first line of defense."
				},
				{
					name: "Scale Without Sacrifice",
					description: "Growth doesn't mean compromise. We build systems that scale globally while protecting privacy and sovereignty."
				}
			]
		}
	},
	{
		id: "kleinventures",
		name: "KleinVentures",
		tagline: "Startups, Labs & Innovation",
		description: "TechKlein Labs, experimental AI models, hardware projects, social innovation pilots, internal incubator.",
		icon: Rocket,
		color: "from-violet-500 to-fuchsia-600",
		role: "Innovation & Startups",
		status: "In Development",
		manifesto: {
			title: "The Innovation Manifesto",
			pillars: [
				{
					name: "Progress With Restraint",
					description: "Innovation is not recklessness. We experiment boldly but deploy responsibly — always asking 'should we?' before 'can we?'"
				},
				{
					name: "Labs as Incubators",
					description: "Great ideas need space to breathe. We fund, mentor, and scale projects that align with our ethical framework."
				},
				{
					name: "Fail Fast, Learn Faster",
					description: "Failure is data. We iterate quickly, learn relentlessly, and pivot without shame — because the mission is bigger than any single project."
				}
			]
		}
	},
];

// Klein Bible Books
const kleinBibleBooks = [
	{ book: "I", name: "Security", tagline: "Protection Before Power", icon: Shield },
	{ book: "II", name: "Justice", tagline: "Access Is Not a Privilege", icon: Scale },
	{ book: "III", name: "Finance", tagline: "Money Must Serve Life", icon: Coins },
	{ book: "IV", name: "Culture", tagline: "Identity Is Infrastructure", icon: Music },
	{ book: "V", name: "Health", tagline: "Care Is a Human Act", icon: Heart },
	{ book: "VI", name: "Education", tagline: "Knowledge Multiplies Freedom", icon: GraduationCap },
	{ book: "VII", name: "Leadership", tagline: "Authority Exists to Serve", icon: Users },
	{ book: "VIII", name: "Discipline", tagline: "Consistency Builds Trust", icon: BookOpen },
	{ book: "IX", name: "Integrity", tagline: "Trust Is Built When No One Is Watching", icon: Lightbulb },
	{ book: "X", name: "Innovation", tagline: "Progress With Restraint", icon: Code2 },
];

const ecosystemProducts = [
	{
		id: "kleinai",
		name: "KleinAI",
		tagline: "Security with soul. Freedom, even from itself.",
		description:
			"Revolutionary dual-AI governance system where Klein serves humanity while Ophir watches Klein — creating self-regulating AI that protects human agency by design.",
		status: "In Development",
		category: "AI & ML",
		gradient: "from-purple-500 to-indigo-500",
		icon: "🤖",
		links: [
			{ label: "Research Thesis", url: "/projects/kleinai-thesis" },
			{ label: "Dual-AI Architecture", url: "/projects/kleinai-dual-architecture" },
		],
	},
	{
		id: "kobklein",
		name: "KobKlein",
		tagline: "Digital cashless ecosystem for Haiti",
		description:
			"Complete fintech solution with NFC cards, POS systems, merchant dashboards, and diaspora remittance integration. Building Haiti's digital economy.",
		status: "Live",
		category: "Fintech",
		gradient: "from-emerald-500 to-teal-500",
		icon: "💳",
		links: [
			{ label: "Visit Website", url: "https://kobklein.com" },
			{ label: "View Project", url: "/projects/kobklein" },
		],
	},
	{
		id: "techklein-platform",
		name: "TechKlein Platform",
		tagline: "The command center for the entire ecosystem",
		description:
			"Unified platform integrating all TechKlein projects, services, and solutions. Central hub for AI governance, fintech, education, defense, and community impact.",
		status: "Live",
		category: "Platform",
		gradient: "from-blue-500 to-cyan-500",
		icon: "🌐",
		links: [
			{ label: "Visit Website", url: "https://techklein.com" },
			{ label: "View Project", url: "/projects/techklein-platform" },
		],
	},
	{
		id: "watchlog-ai",
		name: "WatchLog AI",
		tagline: "Automated watch and log system for military operations",
		description:
			"Digital automation replacing paper-based CIC watch logs. Real-time alerts, 12 O'Clock Reports, Bell Ringing Protocols, CAC authentication, and audit logging.",
		status: "Active Development",
		category: "Defense",
		gradient: "from-blue-600 to-indigo-600",
		icon: "🛡️",
		links: [{ label: "View Project", url: "/projects/watchlog-ai" }],
	},
	{
		id: "baccplus",
		name: "BaccPlus",
		tagline: "Haitian Baccalauréat exam prep platform",
		description:
			"Comprehensive study and exam preparation platform for Haitian students. Interactive lessons, practice tests, and progress tracking for academic success.",
		status: "Live",
		category: "Education",
		gradient: "from-orange-500 to-amber-500",
		icon: "📚",
		links: [
			{ label: "Visit Website", url: "https://baccplus.org" },
			{ label: "View Project", url: "/projects/baccplus" },
		],
	},
	{
		id: "kleinos",
		name: "KleinOS",
		tagline: "Operating system with Klein AI at its core",
		description:
			"Custom OS with first-time setup wizard and integrated Klein AI interface. Built for security, privacy, and intelligent system management.",
		status: "Planned",
		category: "Infrastructure",
		gradient: "from-violet-500 to-purple-500",
		icon: "💻",
		links: [{ label: "View Project", url: "/projects/kleinos" }],
	},
	{
		id: "techklein-academy",
		name: "TechKlein Academy",
		tagline: "AI and Cybersecurity training platform",
		description:
			"Comprehensive training offering courses in AI development, cybersecurity, and advanced computing. Upskilling the next generation of engineers.",
		status: "Planned",
		category: "Education",
		gradient: "from-pink-500 to-rose-500",
		icon: "🎓",
		links: [{ label: "View Project", url: "/projects/techklein-academy" }],
	},
	{
		id: "vigil",
		name: "V.I.G.I.L.",
		tagline: "Vital Intelligence Gathering for Immediate Lifesaving",
		description:
			"DoD-level military wearable with AI emotional/mental state monitoring. Real-time physiological tracking and stress detection for mission readiness.",
		status: "Planned",
		category: "Defense",
		gradient: "from-red-500 to-orange-500",
		icon: "⌚",
		links: [{ label: "View Project", url: "/projects/vigil" }],
	},
	{
		id: "ayitiritmo",
		name: "AyitiRitmo",
		tagline: "Haitian music streaming platform",
		description:
			"Streaming platform celebrating Haitian music, from konpa to rap. Supporting artists and preserving cultural heritage through technology.",
		status: "Live",
		category: "Media",
		gradient: "from-fuchsia-500 to-pink-500",
		icon: "🎵",
		links: [
			{ label: "Visit Website", url: "https://ayitiritmo.com" },
			{ label: "View Project", url: "/projects/ayitiritmo" },
		],
	},
	{
		id: "agi-haiti",
		name: "AGI",
		tagline: "Accès Global à la Justice",
		description:
			"Digital legal platform connecting Haitians with legal resources, advice, and representation. Making justice accessible to all.",
		status: "Live",
		category: "Government",
		gradient: "from-slate-500 to-zinc-500",
		icon: "⚖️",
		links: [
			{ label: "Visit Website", url: "https://agi.com" },
			{ label: "View Project", url: "/projects/agi-haiti" },
		],
	},
	{
		id: "haitivote",
		name: "HaitiVote",
		tagline: "Democratic voting platform for Haiti",
		description:
			"Secure digital voting platform empowering Haitian democracy. Transparent, accessible, and trustworthy election technology for the people.",
		status: "Live",
		category: "Government",
		gradient: "from-blue-500 to-indigo-500",
		icon: "🗳️",
		links: [
			{ label: "Visit Website", url: "https://haitivote.org" },
			{ label: "View Project", url: "/projects/haitivote" },
		],
	},
	{
		id: "feedhope",
		name: "FeedHope",
		tagline: "Food distribution program for Haiti",
		description:
			"Community-driven food distribution initiative leveraging technology to efficiently deliver aid and nutrition support to underserved communities.",
		status: "Live",
		category: "Community",
		gradient: "from-green-500 to-emerald-500",
		icon: "🍽️",
		links: [
			{ label: "Visit Website", url: "https://feedhope.com" },
			{ label: "View Project", url: "/projects/feedhope" },
		],
	},
	{
		id: "tchatcha509",
		name: "Tchatcha509",
		tagline: "OfferUp-style marketplace for Haiti",
		description:
			"P2P marketplace enabling Haitians to buy, sell, and trade locally. Building Haiti's digital commerce economy.",
		status: "Live",
		category: "E-Commerce",
		gradient: "from-amber-500 to-yellow-500",
		icon: "🛒",
		links: [
			{ label: "Visit Website", url: "https://tchatcha509.com" },
			{ label: "View Project", url: "/projects/tchatcha509" },
		],
	},
	{
		id: "kleincard",
		name: "KleinCard",
		tagline: "Reloadable NFC payment cards for Haiti",
		description:
			"NFC-enabled reloadable payment card system designed for Haitian market. Secure, fast, and accessible digital payment solution.",
		status: "Planned",
		category: "Fintech",
		gradient: "from-cyan-500 to-blue-500",
		icon: "💎",
		links: [{ label: "View Project", url: "/projects/kleincard" }],
	},
	{
		id: "sentinel-wms",
		name: "Sentinel WMS",
		tagline: "Watch Bill Management System",
		description:
			"Comprehensive watch bill management and scheduling system for naval operations. Built for maximum performance and reliability.",
		status: "In Development",
		category: "Defense",
		gradient: "from-indigo-500 to-purple-500",
		icon: "📋",
		links: [{ label: "View Project", url: "/projects/sentinel-wms" }],
	},
	{
		id: "caring-compass",
		name: "Caring Compass",
		tagline: "Home healthcare management platform",
		description:
			"Complete home care agency management system with client matching, scheduling, billing, and caregiver coordination.",
		status: "Live",
		category: "Healthcare",
		gradient: "from-rose-500 to-pink-500",
		icon: "🏥",
		links: [
			{ label: "Visit Website", url: "https://caringcompasshomescare.com" },
			{ label: "View Project", url: "/projects/caring-compass" },
		],
	},
	{
		id: "noesis",
		name: "Noesis",
		tagline: "Arts and creative expression platform",
		description:
			"Platform for artists, potters, and creators to showcase their work, connect with audiences, and sell their creations.",
		status: "Planned",
		category: "Creative",
		gradient: "from-purple-500 to-fuchsia-500",
		icon: "🎨",
		links: [{ label: "View Project", url: "/projects/noesis" }],
	},
];

export default function EcosystemPage() {
	const [hoveredDivision, setHoveredDivision] = useState<string | null>(null);
	const [selectedDivision, setSelectedDivision] = useState<typeof divisions[0] | null>(null);

	return (
		<div className="relative min-h-screen overflow-hidden">
			{/* Animated Background Grid */}
			<div className="fixed inset-0 -z-10">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				<motion.div
					className="absolute top-0 left-0 h-full w-full"
					animate={{
						background: [
							"radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
							"radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
							"radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
							"radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)",
						],
					}}
					transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
				/>
			</div>

			<div className="container mx-auto px-4 py-16 space-y-24">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center space-y-8"
				>
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm"
					>
						<Building2 className="w-5 h-5 text-purple-400" />
						<span className="text-sm font-bold tracking-wider text-purple-200">
							TECHKLEIN ECOSYSTEM
						</span>
					</motion.div>

					<h1 className="text-6xl md:text-8xl font-black">
						<span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
							One Intelligence.
						</span>
						<span className="block bg-gradient-to-r from-pink-200 via-cyan-200 to-white bg-clip-text text-transparent mt-2">
							Many Worlds.
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
						A civilization-grade technology framework spanning defense, justice, finance, culture,
						health, education, and innovation — all governed by ethical AI.
					</p>

					<div className="flex flex-wrap justify-center gap-4 pt-4">
						<Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm">
							11 Active Divisions
						</Badge>
						<Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm">
							25+ Products Live
						</Badge>
						<Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm">
							Dual-AI Governance
						</Badge>
					</div>
				</motion.div>

				{/* TECHKLEIN Framework Diagram */}
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
					className="space-y-12"
				>
					<div className="text-center space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
							The TECHKLEIN Framework
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Every division operates under the Klein Bible — our constitutional doctrine ensuring
							ethical, human-centered technology at scale.
						</p>
					</div>

					{/* Interactive Division Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{divisions.map((division, idx) => (
							<motion.div
								key={division.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 * idx }}
								onHoverStart={() => setHoveredDivision(division.id)}
								onHoverEnd={() => setHoveredDivision(null)}
								onClick={() => setSelectedDivision(division)}
								className="cursor-pointer"
							>
								<Card className="group relative h-full overflow-hidden border-2 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
									{/* Top gradient accent */}
									<div className={`h-1.5 bg-gradient-to-r ${division.color}`} />

									<CardHeader className="space-y-4">
										<div className="flex items-start justify-between">
											<motion.div
												className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${division.color} shadow-lg`}
												animate={
													hoveredDivision === division.id ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
												}
											>
												<division.icon className="w-8 h-8 text-white" />
											</motion.div>
											<Badge
												variant="outline"
												className={`text-xs font-semibold ${
													division.status === "Live"
														? "bg-green-500/20 text-green-300 border-green-500/50"
														: division.status === "Active"
															? "bg-blue-500/20 text-blue-300 border-blue-500/50"
															: division.status === "In Development"
																? "bg-yellow-500/20 text-yellow-300 border-yellow-500/50"
																: "bg-purple-500/20 text-purple-300 border-purple-500/50"
												}`}
											>
												{division.status}
											</Badge>
										</div>

										<div className="space-y-2">
											<CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
												{division.name}
											</CardTitle>
											<p className="text-sm font-bold text-purple-400">{division.tagline}</p>
											<p className="text-xs text-muted-foreground uppercase tracking-wide">{division.role}</p>
										</div>
									</CardHeader>

									<CardContent>
										<CardDescription className="text-sm leading-relaxed">
											{division.description}
										</CardDescription>
										<p className="text-xs text-purple-400 mt-4 font-semibold">Click to view manifesto →</p>
									</CardContent>

									{/* Hover glow effect */}
									<motion.div
										className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${division.color} blur-2xl -z-10`}
										style={{ transform: "scale(0.8)" }}
									/>
								</Card>
							</motion.div>
						))}
					</div>

					{/* Connection Diagram */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6 }}
						className="relative"
					>
						<Card className="glass-strong border-2 border-purple-500/30 overflow-hidden">
							<CardHeader>
								<CardTitle className="text-center text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
									How Everything Connects
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="relative py-8">
									{/* Central KleinAI Node */}
									<motion.div
										className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center relative z-10 shadow-2xl shadow-purple-500/50"
										animate={{
											boxShadow: [
												"0 0 60px rgba(168, 85, 247, 0.5)",
												"0 0 80px rgba(168, 85, 247, 0.7)",
												"0 0 60px rgba(168, 85, 247, 0.5)",
											],
										}}
										transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
									>
										<div className="text-center">
											<Brain className="w-16 h-16 text-white mx-auto mb-2" />
											<p className="text-white font-bold text-lg">KleinAI</p>
											<p className="text-white/80 text-xs">Core Intelligence</p>
										</div>
									</motion.div>

									{/* Connection Lines Description */}
									<div className="mt-12 text-center max-w-3xl mx-auto space-y-4">
										<p className="text-muted-foreground leading-relaxed">
											<span className="text-purple-400 font-bold">KleinAI</span> governs KleinOS,
											powers KleinVerse, secures KleinDefense, guides KleinCivic, audits
											KleinFinance, curates KleinCulture, supports KleinHealth, teaches
											KleinAcademy, runs KleinInfrastructure, and evolves KleinVentures.
										</p>
										<p className="text-lg font-bold text-foreground">
											This is why TECHKLEIN is not "many apps."
											<br />
											<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
												It is one intelligence, many domains.
											</span>
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</motion.section>

				{/* Klein Bible Section */}
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="space-y-12"
				>
					<div className="text-center space-y-4">
						<motion.div
							animate={{ rotate: [0, 5, -5, 0] }}
							transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
							className="inline-block"
						>
							<BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
						</motion.div>
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
							The Klein Bible
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Our constitutional doctrine — the moral operating system governing all of TECHKLEIN.
							These 10 books define our values, ethics, and principles.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
						{kleinBibleBooks.map((book, idx) => (
							<motion.div
								key={book.book}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.05 * idx }}
								whileHover={{ scale: 1.05, y: -5 }}
							>
								<Card className="group h-full text-center hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20">
									<CardHeader className="space-y-3">
										<div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
											<book.icon className="w-7 h-7 text-white" />
										</div>
										<div className="space-y-1">
											<p className="text-xs text-muted-foreground uppercase tracking-wider">Book {book.book}</p>
											<CardTitle className="text-lg group-hover:text-amber-400 transition-colors">
												{book.name}
											</CardTitle>
											<p className="text-xs text-muted-foreground italic">"{book.tagline}"</p>
										</div>
									</CardHeader>
								</Card>
							</motion.div>
						))}
					</div>

					<Card className="glass-strong border-2 border-amber-500/30">
						<CardContent className="p-8 space-y-4">
							<p className="text-lg text-center text-muted-foreground leading-relaxed">
								The Klein Bible is not marketing. It's not optional. It's the written constitution
								that ensures <span className="text-purple-400 font-bold">TECHKLEIN</span> never
								becomes the kind of system the world fears.
							</p>
							<p className="text-center text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
								"Security 1:1 — Every unsecured system is an invitation, not an accident."
							</p>
						</CardContent>
					</Card>
				</motion.section>

				{/* Manifesto Section */}
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
				>
					<Card className="glass-strong border-2 border-purple-500/50 overflow-hidden relative">
						<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
						<CardHeader className="relative z-10">
							<CardTitle className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
								The TECHKLEIN Manifesto
							</CardTitle>
						</CardHeader>
						<CardContent className="relative z-10 space-y-6 text-center max-w-4xl mx-auto">
							<p className="text-2xl font-bold text-foreground leading-relaxed">
								"We build intelligence to protect life, preserve dignity, and empower humanity —
								always."
							</p>
							<div className="grid md:grid-cols-3 gap-6 pt-6">
								<div className="space-y-2">
									<Shield className="w-10 h-10 mx-auto text-purple-400" />
									<h3 className="font-bold text-lg">Protection First</h3>
									<p className="text-sm text-muted-foreground">
										Security, privacy, and safety are architecture, not features.
									</p>
								</div>
								<div className="space-y-2">
									<Heart className="w-10 h-10 mx-auto text-pink-400" />
									<h3 className="font-bold text-lg">Human-Centered</h3>
									<p className="text-sm text-muted-foreground">
										Technology that strengthens humanity, never replaces it.
									</p>
								</div>
								<div className="space-y-2">
									<Sparkles className="w-10 h-10 mx-auto text-cyan-400" />
									<h3 className="font-bold text-lg">Ethical by Design</h3>
									<p className="text-sm text-muted-foreground">
										Klein Bible governance ensures we never drift from our values.
									</p>
								</div>
							</div>
							<p className="text-lg text-muted-foreground italic pt-6">
								TECHKLEIN is not a startup. It is a civilization-grade technology framework.
							</p>
						</CardContent>
					</Card>
				</motion.section>
			</div>

			{/* Division Manifesto Modal */}
			<Dialog open={selectedDivision !== null} onOpenChange={(open) => !open && setSelectedDivision(null)}>
				{selectedDivision && (
					<DialogContent>
						<DialogClose onClose={() => setSelectedDivision(null)} />
						
						<div className="flex flex-col md:flex-row gap-8 items-start">
							{/* Logo on the left */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="flex-shrink-0"
							>
								<div className="relative w-40 h-40 md:w-48 md:h-48">
									<Image
										src="/images/techklein-logo.png"
										alt="TechKlein Logo"
										fill
										className="object-contain opacity-90"
									/>
								</div>
							</motion.div>

							{/* Content on the right */}
							<div className="flex-1 space-y-6">
								<DialogHeader>
									<div className="flex items-center gap-4 mb-4">
										<div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedDivision.color} shadow-lg`}>
											<selectedDivision.icon className="w-8 h-8 text-white" />
										</div>
										<div>
											<DialogTitle>{selectedDivision.name}</DialogTitle>
											<DialogDescription>{selectedDivision.tagline}</DialogDescription>
										</div>
									</div>
								</DialogHeader>

								<DialogBody>
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
												{selectedDivision.manifesto.title}
											</h3>
											<p className="text-zinc-300 leading-relaxed">
												{selectedDivision.description}
											</p>
										</div>

										<div className="space-y-5 pt-4">
											{selectedDivision.manifesto.pillars.map((pillar, idx) => (
												<motion.div
													key={idx}
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: idx * 0.1 }}
													className="space-y-2 border-l-2 border-purple-500/50 pl-4"
												>
													<h4 className="text-lg font-bold text-white">
														{pillar.name}
													</h4>
													<p className="text-zinc-400 leading-relaxed">
														{pillar.description}
													</p>
												</motion.div>
											))}
										</div>

										<div className="pt-6 border-t border-zinc-800">
											<p className="text-sm text-zinc-500 italic text-center">
												Part of the TECHKLEIN Ecosystem — governed by the Klein Bible
											</p>
										</div>
									</div>
								</DialogBody>
							</div>
						</div>
					</DialogContent>
				)}
			</Dialog>
		</div>
	);
}
