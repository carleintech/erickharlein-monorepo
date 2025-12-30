"use client";

import { Button, Input, Label } from "@erickharlein/ui";
import { ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { BookingWizardState } from "@/types/booking-wizard";

interface Step1DomainProps {
	state: BookingWizardState;
	onUpdate: (updates: Partial<BookingWizardState>) => void;
	onNext: () => void;
	onBack: () => void;
}

export function Step1Domain({ state, onUpdate, onNext, onBack }: Step1DomainProps) {
	const [showTransferHelp, setShowTransferHelp] = useState(false);

	const hasDomain = state.domain.hasDomain;

	const handleDomainChoice = (choice: boolean) => {
		onUpdate({
			domain: {
				...state.domain,
				hasDomain: choice,
				domainName: "",
				currentHost: "",
				needsTransferHelp: false,
			},
		});
	};

	const canProceed =
		hasDomain !== null &&
		((hasDomain && state.domain.domainName.length > 0) ||
			(!hasDomain && state.domain.domainName.length > 0));

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			className="space-y-8 max-w-2xl"
		>
			<div>
				<h2 className="text-3xl font-bold mb-2">Domain & Infrastructure</h2>
				<p className="text-muted-foreground">Let's set up your online presence</p>
			</div>

			{/* Do you have a domain? */}
			<div className="space-y-4">
				<Label className="text-lg font-semibold">Do you already own a domain name?</Label>
				<div className="grid md:grid-cols-2 gap-4">
					<button
						type="button"
						onClick={() => handleDomainChoice(true)}
						className={`p-6 rounded-xl border-2 transition-all text-left ${
							hasDomain === true
								? "border-green-500 bg-green-500/10 scale-105"
								: "border-primary/20 hover:border-primary/40"
						}`}
					>
						<div className="text-4xl mb-3">✅</div>
						<div className="font-semibold text-lg mb-1">Yes, I have one</div>
						<p className="text-sm text-muted-foreground">I'll provide my domain details</p>
					</button>
					<button
						type="button"
						onClick={() => handleDomainChoice(false)}
						className={`p-6 rounded-xl border-2 transition-all text-left ${
							hasDomain === false
								? "border-purple-500 bg-purple-500/10 scale-105"
								: "border-primary/20 hover:border-primary/40"
						}`}
					>
						<div className="text-4xl mb-3">🆕</div>
						<div className="font-semibold text-lg mb-1">No, I need one</div>
						<p className="text-sm text-muted-foreground">Help me get started</p>
					</button>
				</div>
			</div>

			{/* If Yes - Existing Domain */}
			{hasDomain === true && (
				<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="domainName">Your Domain Name *</Label>
						<Input
							id="domainName"
							placeholder="example.com"
							value={state.domain.domainName}
							onChange={(e) =>
								onUpdate({
									domain: { ...state.domain, domainName: e.target.value },
								})
							}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="currentHost">Current Host / Registrar</Label>
						<Input
							id="currentHost"
							placeholder="GoDaddy, Namecheap, etc."
							value={state.domain.currentHost}
							onChange={(e) =>
								onUpdate({
									domain: { ...state.domain, currentHost: e.target.value },
								})
							}
						/>
					</div>

					<div className="flex gap-3">
						<Button
							variant="outline"
							onClick={() => setShowTransferHelp(!showTransferHelp)}
							className="flex-1"
						>
							<HelpCircle className="mr-2 h-4 w-4" />
							{showTransferHelp ? "Hide" : "Show"} Transfer Help
						</Button>
					</div>

					{showTransferHelp && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							className="glass border border-cyan-500/30 rounded-xl p-6 space-y-4"
						>
							<h4 className="font-semibold text-cyan-400">What I'll Need to Transfer Your Domain:</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li className="flex items-start gap-2">
									<span className="text-cyan-500">•</span>
									<span>Domain login credentials (or admin access)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-cyan-500">•</span>
									<span>DNS management access</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-cyan-500">•</span>
									<span>Authorization/EPP code (if transferring registrar)</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-cyan-500">•</span>
									<span>Current hosting provider details</span>
								</li>
							</ul>
							<p className="text-sm text-cyan-300">
								Don't worry - I'll guide you through every step of the process.
							</p>
						</motion.div>
					)}
				</motion.div>
			)}

			{/* If No - New Domain */}
			{hasDomain === false && (
				<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
					<div className="space-y-2">
						<Label htmlFor="desiredDomain">What will your domain name be? *</Label>
						<Input
							id="desiredDomain"
							placeholder="mycompany.com"
							value={state.domain.domainName}
							onChange={(e) =>
								onUpdate({
									domain: { ...state.domain, domainName: e.target.value },
								})
							}
						/>
						<p className="text-xs text-muted-foreground">We'll check availability and secure it for you</p>
					</div>

					<div className="glass-strong border border-primary/30 rounded-xl p-6 space-y-3">
						<div className="flex items-start gap-3">
							<div className="text-2xl">🛡️</div>
							<div>
								<h4 className="font-semibold text-foreground mb-1">Powered by Cloudflare</h4>
								<p className="text-sm text-muted-foreground leading-relaxed">
									We utilize Cloudflare for best-in-class security, performance, DDoS protection, and
									global CDN. Your platform will be fast, secure, and scalable from day one.
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			{/* Navigation */}
			<div className="flex gap-4 pt-6">
				<Button onClick={onBack} variant="outline" size="lg">
					Back
				</Button>
				<Button onClick={onNext} disabled={!canProceed} size="lg" className="flex-1">
					Continue
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</motion.div>
	);
}
