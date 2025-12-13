import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@erickharlein/ui";
import { Code2, Coffee, Globe, GraduationCap, Heart, Music, Plane, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
	return (
		<div className="relative min-h-screen">
			{/* Animated Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950" />

				{/* Animated Orbs */}
				<div
					className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 dark:from-indigo-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: "4s" }}
				/>
				<div
					className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-rose-400/30 dark:from-pink-500/20 dark:to-rose-500/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: "6s", animationDelay: "1s" }}
				/>
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDuration: "5s", animationDelay: "2s" }}
				/>
			</div>

			<div className="container py-12 max-w-5xl relative z-10">
				{/* Hero Header */}
				<div className="space-y-6 mb-16 text-center">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
						Hey, I'm Erickharlein
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
						But everyone calls me <span className="font-semibold text-foreground">Carleintech</span>
						. I'm a sailor, engineer, husband, and father who believes technology should make life
						better — not replace what makes us human.
					</p>
				</div>

				{/* Personal Story */}
				<Card className="mb-12 glass border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
					<CardHeader>
						<CardTitle className="text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
							My Story
						</CardTitle>
						<CardDescription className="text-base">
							From Haiti to the U.S. Navy to building the future
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
							{/* Profile Image */}
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
								<div className="relative">
									<Image
										src="/images/erickharlein-profile.png"
										alt="Erickharlein Pierre - U.S. Navy Operations Specialist and Systems Engineer"
										width={300}
										height={300}
										className="rounded-2xl shadow-2xl ring-2 ring-primary/20 object-cover"
										priority
										unoptimized
									/>
								</div>
							</div>

							{/* Story Text */}
							<div className="space-y-4 text-base leading-relaxed">
								<p className="text-foreground">
									I grew up speaking French and Haitian Creole, and when I came to the United States, I
									had to learn English from scratch. That challenge taught me something fundamental:{" "}
									<span className="font-semibold">
										barriers are just problems waiting for solutions.
									</span>
								</p>
								<p className="text-muted-foreground">
									On June 14, 2021, I enlisted in the U.S. Navy with a clear purpose: to serve, to grow,
									and to prove that determination matters more than circumstances. I became an
									Operations Specialist, working in the Combat Information Center aboard USS New Orleans
									(LPD-18), managing combat systems, navigation, and tactical operations.
								</p>
								<p className="text-muted-foreground">
									But I didn't stop there. While serving full-time, I self-funded my bachelor's degree
									in Computer Network Engineering and Cybersecurity from the University of Maryland
									Global Campus. I graduated in December 2023 — all while supporting my wife and our
									1-year-old son.
								</p>
								<p className="text-muted-foreground">
									Today, I'm pursuing{" "}
									<span className="font-semibold text-foreground">
										two master's degrees simultaneously
									</span>{" "}
									— one at the Naval Postgraduate School in Applied Computing and another at Western
									Governors University in Cybersecurity and Information Assurance. My end of service is
									May 2026, and I'm applying for Officer Candidate School because I joined to lead, not
									just to serve.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* What Drives Me */}
				<div className="mb-12">
					<h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
						What Drives Me
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Card className="glass border-pink-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-in fade-in slide-in-from-left-4 duration-1000 delay-400">
							<CardHeader>
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Heart className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">Family & Balance</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
								<p>
									I'm a proud husband and father. My wife and 1-year-old son are my motivation for
									everything I do. Balancing military service, two master's programs, and family
									life isn't easy — but it's taught me what really matters: being present, staying
									disciplined, and never losing sight of why I started.
								</p>
								<p>
									Every late night studying, every system I build, every line of code I write — it's
									all for them.
								</p>
							</CardContent>
						</Card>

						<Card className="glass border-purple-500/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-in fade-in slide-in-from-right-4 duration-1000 delay-400">
							<CardHeader>
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Globe className="h-8 w-8 text-white" />
								</div>
								<CardTitle className="text-2xl">Making Impact</CardTitle>
							</CardHeader>
							<CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
								<p>
									I don't believe AI should replace people. I believe it should{" "}
									<span className="font-semibold text-foreground">elevate them</span>. That's why
									I'm building KleinAI — a system designed to answer "Who watches the watcher?" by
									creating AI that protects humanity by protecting us from itself.
								</p>
								<p>
									My Naval Postgraduate School thesis focuses on this: dual-AI architecture that
									ensures ethical autonomy and self-regulation. It's not just research — it's my
									vision for responsible AI.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Professional Journey */}
				<Card className="mb-12 glass border-indigo-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
					<CardHeader>
						<CardTitle className="text-3xl bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
							Professional Journey
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-6">
							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 flex items-center justify-center flex-shrink-0 shadow-lg">
									<Shield className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-foreground text-lg">
										U.S. Navy Operations Specialist
									</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Currently stationed at EWTGLANT as an instructor for AADS CIC Boat Control.
										Previously served aboard USS New Orleans (LPD-18) managing combat systems (AADS,
										SSDS), navigation (VMS, ECDIS), and tactical operations. Qualified as Piloting
										Officer and MWR Vice President. Scored 56 on the OAR — applying for Officer
										Candidate School.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-purple-500/5 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center flex-shrink-0 shadow-lg">
									<GraduationCap className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-foreground text-lg">Academic Excellence</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">
										<span className="font-semibold text-foreground">Naval Postgraduate School</span>{" "}
										— Master of Applied Computing (MAC), Curriculum 367
										<br />
										<span className="font-semibold text-foreground">
											Western Governors University
										</span>{" "}
										— Master of Science in Cybersecurity & Information Assurance
										<br />
										<span className="font-semibold text-foreground">
											University of Maryland Global Campus
										</span>{" "}
										— B.S. Computer Network Engineering & Cybersecurity (Dec 2023)
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-cyan-500/5 to-indigo-500/10 dark:from-cyan-500/10 dark:to-indigo-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400 flex items-center justify-center flex-shrink-0 shadow-lg">
									<Code2 className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-2">
									<h4 className="font-semibold text-foreground text-lg">Technical Background</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">
										8+ years building intelligent systems. CompTIA Security+ certified, currently
										pursuing CC and CISSP. Full-stack engineering (TypeScript, React, Next.js,
										Node.js), cloud architecture (AWS, Azure, GCP), AI/ML development (Python,
										TensorFlow), and cybersecurity. Trilingual: English, French, Haitian Creole.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Beyond Work */}
				<Card className="mb-12 glass border-rose-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
					<CardHeader>
						<CardTitle className="text-3xl bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400 bg-clip-text text-transparent">
							Beyond Work
						</CardTitle>
						<CardDescription className="text-base">
							What I do when I'm not building systems
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-rose-500/5 to-pink-500/10 dark:from-rose-500/10 dark:to-pink-500/5 border border-rose-500/20 hover:border-rose-500/40 transition-all duration-300 group">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Music className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-1">
									<h4 className="font-semibold text-foreground text-lg">Music & Culture</h4>
									<p className="text-sm text-muted-foreground">
										I love exploring different music genres — from Haitian konpa to American
										hip-hop. Music connects cultures, and I appreciate how it tells stories across
										languages.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-amber-500/5 to-orange-500/10 dark:from-amber-500/10 dark:to-orange-500/5 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 dark:from-amber-400 dark:to-orange-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Coffee className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-1">
									<h4 className="font-semibold text-foreground text-lg">Continuous Learning</h4>
									<p className="text-sm text-muted-foreground">
										Always reading, always learning. Whether it's AI research papers, cybersecurity
										frameworks, or naval tactics — I believe growth never stops.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-sky-500/5 to-cyan-500/10 dark:from-sky-500/10 dark:to-cyan-500/5 border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 group">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 dark:from-sky-400 dark:to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Plane className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-1">
									<h4 className="font-semibold text-foreground text-lg">Travel & Adventure</h4>
									<p className="text-sm text-muted-foreground">
										From Haiti to the U.S., and across the world through Navy deployments — I love
										experiencing new places, cultures, and perspectives.
									</p>
								</div>
							</div>

							<div className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-emerald-500/5 to-green-500/10 dark:from-emerald-500/10 dark:to-green-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
								<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
									<Heart className="h-6 w-6 text-white" />
								</div>
								<div className="space-y-1">
									<h4 className="font-semibold text-foreground text-lg">Mentorship & Community</h4>
									<p className="text-sm text-muted-foreground">
										As MWR Vice President, I learned that leadership is about lifting others up. I
										mentor junior sailors and aspiring engineers whenever I can.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Core Values */}
				<Card className="border-2 border-primary/30 glass-strong shadow-2xl hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_60px_rgba(129,140,248,0.2)] transition-all duration-500 hover:scale-[1.01] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
					<CardHeader>
						<CardTitle className="text-4xl text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
							What I Believe
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="space-y-2 p-5 rounded-lg bg-gradient-to-br from-indigo-500/5 to-purple-500/10 dark:from-indigo-500/10 dark:to-purple-500/5 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
								<h4 className="font-semibold text-foreground text-lg flex items-center gap-2">
									<span className="text-2xl">💪</span>
									Determination Over Circumstance
								</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									I learned English from scratch, self-funded my education, and balanced military
									service with family and academics. If you want something badly enough, you find a
									way.
								</p>
							</div>

							<div className="space-y-2 p-5 rounded-lg bg-gradient-to-br from-blue-500/5 to-cyan-500/10 dark:from-blue-500/10 dark:to-cyan-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
								<h4 className="font-semibold text-foreground text-lg flex items-center gap-2">
									<span className="text-2xl">⚓</span>
									Service Before Self
								</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									The Navy taught me that honor, courage, and commitment aren't just words — they're
									principles you live by. Leadership is earned through action, not rank.
								</p>
							</div>

							<div className="space-y-2 p-5 rounded-lg bg-gradient-to-br from-purple-500/5 to-pink-500/10 dark:from-purple-500/10 dark:to-pink-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
								<h4 className="font-semibold text-foreground text-lg flex items-center gap-2">
									<span className="text-2xl">🤝</span>
									Technology Should Serve Humanity
								</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									AI should empower teachers, doctors, engineers, and service members — not replace
									them. Every system I build is designed to elevate human potential.
								</p>
							</div>

							<div className="space-y-2 p-5 rounded-lg bg-gradient-to-br from-emerald-500/5 to-green-500/10 dark:from-emerald-500/10 dark:to-green-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
								<h4 className="font-semibold text-foreground text-lg flex items-center gap-2">
									<span className="text-2xl">🚀</span>
									Never Stop Growing
								</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Two master's degrees while serving full-time. CompTIA Security+, working toward
									CISSP. Because excellence isn't a destination — it's a commitment to constant
									improvement.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Closing */}
				<div className="mt-12 text-center space-y-4 animate-in fade-in duration-1000 delay-500">
					<p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
						I'm not just building technology — I'm building a future where AI respects human
						autonomy, where service members have smarter tools, and where families like mine can
						thrive.
					</p>
					<p className="text-xl font-semibold text-foreground">
						That's who I am. That's what drives me. That's why I do this.
					</p>
				</div>
			</div>
		</div>
	);
}
