"use client";

import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@erickharlein/ui";
import Image from "next/image";

export function CertificationsSection() {
	const certifications = [
		{
			name: "CompTIA CySA+ ce Certification",
			issuer: "CompTIA",
			issued: "January 2026",
			expires: "January 9, 2029",
			gradient: "from-blue-500 to-cyan-500",
			icon: Shield,
			logo: "/images/certifications/cysa-plus/CySA+-png.png",
			description: "Cybersecurity Analyst — Advanced threat detection and security analytics"
		},
		{
			name: "CompTIA Security Analytics Professional",
			subtitle: "CSAP Stackable Certification",
			issuer: "CompTIA",
			issued: "January 2026",
			expires: "January 9, 2029",
			gradient: "from-purple-500 to-pink-500",
			icon: Award,
			logo: "/images/certifications/cysa-plus/CySA+-png.png",
			description: "Comprehensive security analytics and professional certification stack"
		},
		{
			name: "Information Technology Security",
			issuer: "ETA International",
			issued: "September 2024",
			expires: "September 4, 2029",
			gradient: "from-orange-500 to-rose-500",
			icon: Shield,
			logo: "/images/certifications/ITS/ITS.png",
			description: "IT security fundamentals and best practices"
		},
		{
			name: "CompTIA Security+ ce Certification",
			issuer: "CompTIA",
			issued: "January 2026",
			expires: "January 9, 2029",
			gradient: "from-green-500 to-emerald-500",
			icon: CheckCircle,
			logo: "/images/certifications/security-plus/Security+-png.png",
			description: "Core cybersecurity skills and knowledge"
		}
	];

	return (
		<section className="relative py-20">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
			
			<div className="container relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<motion.div
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
					>
						<Award className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium">Industry-Recognized Credentials</span>
					</motion.div>
					
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
						<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
							Professional Certifications
						</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Validated expertise in cybersecurity, threat analysis, and information security
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
					{certifications.map((cert, index) => (
						<motion.div
							key={cert.name}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -10, scale: 1.02 }}
							className="relative group"
						>
							{/* Glow Effect */}
							<div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
							
							<Card className="relative glass border-primary/30 overflow-hidden h-full">
								{/* Top Accent Bar */}
								<div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />
								
								<CardContent className="p-6 space-y-4">
									{/* Logo and Issuer */}
									<div className="flex items-start justify-between">
										{cert.logo ? (
											<div className="w-20 h-20 relative flex items-center justify-center bg-white rounded-xl p-2 shadow-lg group-hover:scale-110 transition-transform">
												<Image
													src={cert.logo}
													alt={`${cert.name} logo`}
													width={80}
													height={80}
													className="object-contain"
												/>
											</div>
										) : (
											<div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
												<cert.icon className="h-7 w-7 text-white" />
											</div>
										)}
										<div className="text-right">
											<p className="text-xs text-muted-foreground">Issued by</p>
											<p className="font-bold text-sm">{cert.issuer}</p>
										</div>
									</div>

									{/* Certification Name */}
									<div>
										<h3 className="font-black text-xl mb-1">{cert.name}</h3>
										{cert.subtitle && (
											<p className="text-sm text-muted-foreground font-medium">{cert.subtitle}</p>
										)}
									</div>

									{/* Description */}
									<p className="text-sm text-muted-foreground leading-relaxed">
										{cert.description}
									</p>

									{/* Dates */}
									<div className="pt-4 border-t border-border/50 space-y-2">
										<div className="flex items-center gap-2 text-xs">
											<Calendar className="h-3.5 w-3.5 text-muted-foreground" />
											<span className="text-muted-foreground">Issued:</span>
											<span className="font-medium">{cert.issued}</span>
										</div>
										<div className="flex items-center gap-2 text-xs">
											<CheckCircle className="h-3.5 w-3.5 text-green-500" />
											<span className="text-muted-foreground">Valid Until:</span>
											<span className="font-bold text-green-500">{cert.expires}</span>
										</div>
									</div>

									{/* Active Badge */}
									<div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
										<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
										<span className="text-xs font-bold text-green-500">ACTIVE & VALID</span>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Bottom Statement */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					className="text-center mt-16"
				>
					<div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/30 backdrop-blur-sm">
						<Shield className="h-5 w-5 text-primary" />
						<p className="text-sm md:text-base font-bold">
							All certifications current and actively maintained through {new Date().getFullYear() + 3}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
