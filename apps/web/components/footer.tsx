"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-primary/20 bg-background/50 backdrop-blur-sm relative overflow-hidden">
			{/* Animated Background Line */}
			<motion.div
				className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
				animate={{ x: ["-100%", "100%"] }}
				transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
			/>

			<div className="container py-8 relative">
				{/* Main Content */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Brand */}
					<Link href="/" className="inline-flex items-center gap-2 group">
						<motion.div
							className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center"
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
						>
							<Sparkles className="h-4 w-4 text-white" />
						</motion.div>
						<span className="font-bold text-lg text-gradient">TechKlein</span>
					</Link>

					{/* Quick Links - Horizontal */}
					<nav className="flex flex-wrap justify-center gap-6 text-sm">
						<Link
							href="/about"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							About
						</Link>
						<Link
							href="/projects"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Projects
						</Link>
						<Link
							href="/ecosystem"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Ecosystem
						</Link>
						<Link
							href="/contact"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Contact
						</Link>
					</nav>

					{/* Connect */}
					<div className="flex gap-3">
						<motion.a
						href="https://github.com/carleintech"
							target="_blank"
							rel="noopener noreferrer"
							className="glass p-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Github className="h-4 w-4" />
						</motion.a>
						<motion.a
						href="https://linkedin.com/in/carleintech"
							target="_blank"
							rel="noopener noreferrer"
							className="glass p-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Linkedin className="h-4 w-4" />
						</motion.a>
						<motion.a
						href="mailto:erickharleinp@gmail.com"
							className="glass p-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
							whileHover={{ scale: 1.1, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Mail className="h-4 w-4" />
						</motion.a>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-6 pt-6 border-t border-primary/10">
					{/* Legal Links */}
					<div className="flex flex-wrap justify-center gap-4 mb-4 text-xs">
						<Link
							href="/legal/copyright"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Copyright & IP
						</Link>
						<span className="text-muted-foreground/30">•</span>
						<Link
							href="/legal/privacy-policy"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
						<span className="text-muted-foreground/30">•</span>
						<Link
							href="/legal/terms"
							className="text-muted-foreground hover:text-primary transition-colors"
						>
							Terms of Service
						</Link>
					</div>
					{/* Copyright */}
					<div className="text-center text-xs text-muted-foreground">
						<span>&copy; {new Date().getFullYear()} TechKlein LLC | EIN: 41-2544231</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
