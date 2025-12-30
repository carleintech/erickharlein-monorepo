"use client";

import { Button } from "@erickharlein/ui";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, Calculator } from "lucide-react";
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
								<span className="text-gradient">Ready to Build Your System?</span>
							</h2>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								Whether you're launching a new platform, scaling your business, or securing your operations — let's engineer it correctly from day one.
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
								<Button size="lg" className="glass-strong glow group bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:shadow-2xl hover:shadow-green-500/50">
									<Calculator className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
									Build Your Platform
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
									Book Strategy Call
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
