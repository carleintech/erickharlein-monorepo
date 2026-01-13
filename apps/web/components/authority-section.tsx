"use client";

import { Card, CardContent } from "@erickharlein/ui";
import { Shield, Code, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export function AuthoritySection() {
	const credentials = [
		{ 
			icon: Shield, 
			text: "CompTIA CySA+ ce Certified", 
			color: "text-blue-400", 
			expires: "Valid through 2029",
			logo: "/images/certifications/cysa-plus/CySA+-png.png"
		},
		{ 
			icon: Award, 
			text: "CompTIA Security+ ce Certified", 
			color: "text-green-400", 
			expires: "Valid through 2029",
			logo: "/images/certifications/security-plus/Security+-png.png"
		},
		{ 
			icon: Shield, 
			text: "CSAP Stackable Certification", 
			color: "text-purple-400", 
			expires: "Valid through 2029",
			logo: "/images/certifications/cysa-plus/CySA+-png.png"
		},
		{ 
			icon: Code, 
			text: "IT Security Certified (ETA)", 
			color: "text-orange-400", 
			expires: "Valid through 2029",
			logo: "/images/certifications/ITS/ITS.png"
		},
	];

	return (
		<Card className="glass border-primary/30 shadow-xl">
			<CardContent className="p-6">
				{/* Header */}
				<div className="flex items-center gap-3 mb-4 pb-4 border-b border-primary/20">
					<div className="relative">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50" />
						<div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
							EH
						</div>
					</div>
					<div>
						<h3 className="font-bold text-lg">Erick Harlein Pierre</h3>
						<p className="text-sm text-muted-foreground">Full-Stack Architect & Security Engineer</p>
					</div>
				</div>

				{/* Credentials */}
				<div className="space-y-3 mb-4">
					{credentials.map((cred, index) => (
						<div key={index} className="flex items-start gap-3">
						{cred.logo ? (
							<div className="w-10 h-10 relative flex items-center justify-center bg-white rounded-lg p-1.5 flex-shrink-0">
								<Image
									src={cred.logo}
									alt={`${cred.text} logo`}
									width={40}
									height={40}
									className="object-contain"
								/>
							</div>
						) : (
							<div className={`p-2 rounded-lg bg-background/50 ${cred.color} mt-0.5`}>
								<cred.icon className="h-4 w-4" />
							</div>
						)}
						</div>
					))}
				</div>

				{/* Trust Signals */}
				<div className="pt-4 border-t border-primary/20 space-y-2">
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<CheckCircle className="h-4 w-4 text-green-500" />
						<span>Every line written personally by me</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<CheckCircle className="h-4 w-4 text-green-500" />
						<span>No templates, no outsourcing, no AI</span>
					</div>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<CheckCircle className="h-4 w-4 text-green-500" />
						<span>Built for scale, security, and speed</span>
					</div>
				</div>

				{/* CTA */}
				<div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30">
					<p className="text-sm text-center font-medium text-primary">
						You're not hiring a team — you're hiring an expert who builds everything.
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
