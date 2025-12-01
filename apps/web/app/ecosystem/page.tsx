import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@erickharlein/ui";
import { ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

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
		status: "Beta",
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
		status: "Active Development",
		category: "Platform",
		gradient: "from-blue-500 to-cyan-500",
		icon: "🌐",
		links: [{ label: "View Project", url: "/projects/techklein-platform" }],
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
		status: "In Development",
		category: "Education",
		gradient: "from-orange-500 to-amber-500",
		icon: "📚",
		links: [{ label: "View Project", url: "/projects/baccplus" }],
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
		status: "Planned",
		category: "Media",
		gradient: "from-fuchsia-500 to-pink-500",
		icon: "🎵",
		links: [{ label: "View Project", url: "/projects/ayitiritmo" }],
	},
	{
		id: "agi-haiti",
		name: "AGI",
		tagline: "Accès Global à la Justice",
		description:
			"Digital legal platform connecting Haitians with legal resources, advice, and representation. Making justice accessible to all.",
		status: "Planned",
		category: "Government",
		gradient: "from-slate-500 to-zinc-500",
		icon: "⚖️",
		links: [{ label: "View Project", url: "/projects/agi-haiti" }],
	},
	{
		id: "feedhope",
		name: "FeedHope",
		tagline: "Food distribution program for Haiti",
		description:
			"Community-driven food distribution initiative leveraging technology to efficiently deliver aid and nutrition support to underserved communities.",
		status: "Planned",
		category: "Community",
		gradient: "from-green-500 to-emerald-500",
		icon: "🍽️",
		links: [{ label: "View Project", url: "/projects/feedhope" }],
	},
	{
		id: "tchatcha509",
		name: "Tchatcha509",
		tagline: "OfferUp-style marketplace for Haiti",
		description:
			"P2P marketplace enabling Haitians to buy, sell, and trade locally. Building Haiti's digital commerce economy.",
		status: "Planned",
		category: "E-Commerce",
		gradient: "from-amber-500 to-yellow-500",
		icon: "🛒",
		links: [{ label: "View Project", url: "/projects/tchatcha509" }],
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
		status: "In Development",
		category: "Healthcare",
		gradient: "from-rose-500 to-pink-500",
		icon: "🏥",
		links: [{ label: "View Project", url: "/projects/caring-compass" }],
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
	return (
		<div className="relative min-h-screen">
			{/* Animated Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden">
				<div
					className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl animate-pulse"
					style={{ animationDuration: "4s" }}
				/>
				<div
					className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 blur-3xl animate-pulse"
					style={{ animationDuration: "6s" }}
				/>
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/20 blur-3xl animate-pulse"
					style={{ animationDuration: "5s" }}
				/>
			</div>

			<div className="container mx-auto px-4 py-16 space-y-16">
				{/* Header */}
				<div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm">
						<Sparkles className="h-4 w-4 text-purple-400" />
						<span className="text-sm font-medium text-purple-300">TechKlein Ecosystem</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
						Building the Future
					</h1>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						A comprehensive suite of AI-powered solutions spanning defense, fintech, education, and
						community impact. Each product designed to solve real problems and create lasting
						change.
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{ecosystemProducts.map((product, index) => (
						<Card
							key={product.id}
							className="group glass hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							{/* Top gradient border */}
							<div className={`h-1 bg-gradient-to-r ${product.gradient}`} />

							<CardHeader className="space-y-3">
								<div className="flex items-start justify-between gap-4">
									<div
										className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} text-4xl`}
									>
										{product.icon}
									</div>
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.gradient} text-white`}
									>
										{product.status}
									</span>
								</div>
								<div className="space-y-2">
									<CardTitle className="text-2xl group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
										{product.name}
									</CardTitle>
									<p className="text-sm font-medium text-muted-foreground">{product.tagline}</p>
								</div>
							</CardHeader>

							<CardContent className="space-y-4">
								<CardDescription className="text-sm leading-relaxed">
									{product.description}
								</CardDescription>

								<div className="flex items-center gap-2">
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.gradient} bg-opacity-20 text-white/90`}
									>
										{product.category}
									</span>
								</div>

								{product.links.length > 0 && (
									<div className="pt-4 border-t border-border/50 flex flex-wrap gap-3">
										{product.links.map((link) => (
											<Link
												key={link.url}
												href={link.url}
												className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
												target={link.url.startsWith("http") ? "_blank" : undefined}
												rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
											>
												{link.label}
												<ExternalLink className="h-3 w-3 group-hover/link:scale-110 transition-transform" />
											</Link>
										))}
									</div>
								)}
							</CardContent>
						</Card>
					))}
				</div>

				{/* Vision Statement */}
				<Card
					className="glass-strong border-2 border-purple-500/30 animate-in fade-in slide-in-from-bottom-4"
					style={{ animationDelay: "1600ms" }}
				>
					<CardHeader>
						<CardTitle className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Our Vision
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-muted-foreground leading-relaxed">
						<p className="text-lg">
							TechKlein exists at the intersection of innovation and impact. We build technology
							that matters — systems that protect, empower, educate, and connect.
						</p>
						<p>
							From AI governance systems that put humanity first, to fintech solutions opening
							economic doors in Haiti, to defense platforms keeping our servicemembers safe — every
							product in our ecosystem serves a purpose beyond profit.
						</p>
						<p className="font-semibold text-foreground">
							We're not just building software. We're building a better future.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
