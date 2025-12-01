"use client";

import { Button } from "@erickharlein/ui";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
	return (
		<section className="py-20">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative max-w-4xl mx-auto"
				>
					{/* Glow Effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-violet-500/20 rounded-2xl blur-3xl" />

					{/* Content Card */}
					<div className="relative glass-strong rounded-2xl p-12 text-center space-y-8 border border-primary/20">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-4">
								<span className="text-gradient">Ready to Collaborate?</span>
							</h2>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								Whether you need consultation, technical review, or want to discuss a project — I'm
								here to help build intelligent, secure solutions.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex flex-wrap justify-center gap-4"
						>
							<Link href="/booking">
								<Button size="lg" className="glass-strong glow group">
									<Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
									Book Consultation
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
								</Button>
							</Link>
							<Link href="/contact">
								<Button
									size="lg"
									variant="outline"
									className="glass border-primary/50 hover:border-primary"
								>
									<MessageSquare className="mr-2 h-5 w-5" />
									Send Message
								</Button>
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
						>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
								<span>Available for consultation</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-cyan-500" />
								<span>24-48 hour response time</span>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
