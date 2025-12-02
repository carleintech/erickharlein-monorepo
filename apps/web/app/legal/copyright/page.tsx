import { ArrowLeft, Scale, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Copyright & Intellectual Property Notice | Erickharlein",
	description:
		"Legal notice regarding copyright and intellectual property protection for TechKlein ecosystem and Erickharlein.com",
};

export default function CopyrightPage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 py-16 max-w-4xl">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Home
				</Link>

				<div className="space-y-8">
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
							<Shield className="h-4 w-4" />
							Legal Notice
						</div>
						<h1 className="text-4xl font-bold tracking-tight">
							Copyright & Intellectual Property Notice
						</h1>
						<p className="text-muted-foreground text-lg">
							Last Updated: December 1, 2025
						</p>
					</div>

					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 mb-8">
							<div className="flex items-start gap-3">
								<AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
								<div>
									<h3 className="text-lg font-semibold text-amber-500 dark:text-amber-400 mt-0 mb-2">
										Important Legal Notice
									</h3>
									<p className="text-sm text-foreground/90 mb-0">
										All content, code, designs, and intellectual property on this
										website and within the TechKlein ecosystem are legally
										protected. Unauthorized use will result in legal action.
									</p>
								</div>
							</div>
						</div>

						<section>
							<h2 className="flex items-center gap-2">
								<Scale className="h-5 w-5" />
								Ownership of Intellectual Property
							</h2>
							<p>
								All content, source code, software, designs, logos, graphics,
								text, images, documentation, AI systems, database schemas,
								monorepo architecture, and other intellectual property
								accessible through <strong>Erickharlein.com</strong> and the{" "}
								<strong>TechKlein ecosystem</strong> are the exclusive property
								of <strong>Erickharlein Pierre</strong> and{" "}
								<strong>TechKlein LLC</strong>.
							</p>
							<p>
								This includes, but is not limited to:
							</p>
							<ul>
								<li>Source code and software applications</li>
								<li>
									KleinAI, Ophir AI, and all AI governance systems
								</li>
								<li>
									KobKlein, BaccPlus, AyitiRitmo, and all ecosystem projects
								</li>
								<li>UI components, design systems, and layouts</li>
								<li>Database schemas and API architectures</li>
								<li>Branding, logos, icons, and creative assets</li>
								<li>Documentation and technical specifications</li>
								<li>All in-progress and unreleased projects</li>
							</ul>
						</section>

						<section>
							<h2>Legal Protection</h2>
							<p>
								All works are protected under:
							</p>
							<ul>
								<li>
									<strong>United States Copyright Law (Title 17 U.S.C.)</strong>
								</li>
								<li>
									<strong>Digital Millennium Copyright Act (DMCA)</strong>
								</li>
								<li>
									<strong>Berne Convention for the Protection of Literary and Artistic Works</strong>
								</li>
								<li>
									<strong>TRIPS Agreement (Trade-Related Aspects of Intellectual Property Rights)</strong>
								</li>
								<li>
									<strong>WIPO Copyright Treaty</strong>
								</li>
							</ul>
							<p>
								Copyright © 2025–Present TechKlein LLC & Erickharlein Pierre.
								All rights reserved worldwide.
							</p>
						</section>

						<section>
							<h2>Protection of In-Progress Work</h2>
							<p>
								All projects displayed on this portfolio—whether marked as
								"Planned," "In Development," "Beta," or "Live"—are protected
								intellectual property. This includes experimental features,
								unreleased code, design mockups, and conceptual work.
							</p>
							<p>
								Viewing project descriptions does <strong>not</strong> grant any
								license to use, copy, or implement similar solutions.
							</p>
						</section>

						<section>
							<h2>GitHub Repository Protection</h2>
							<p>
								While certain repositories may be viewable on GitHub, this does{" "}
								<strong>not</strong> constitute an open-source license unless
								explicitly stated. The TechKlein Proprietary License (TPL)
								applies to all repositories unless a different license is clearly
								specified.
							</p>
							<p>
								Educational viewing is permitted; copying, forking for
								commercial use, or redistribution is strictly prohibited.
							</p>
						</section>

						<section>
							<h2>Prohibited Actions</h2>
							<p>
								Without express written permission, you may <strong>NOT</strong>:
							</p>
							<ul>
								<li>
									Copy, reproduce, modify, or distribute any portion of this
									website or codebase
								</li>
								<li>
									Use the code, designs, or architecture for commercial purposes
								</li>
								<li>
									Reverse-engineer, decompile, or extract internal logic
								</li>
								<li>
									Host, re-upload, or package any part of the software
								</li>
								<li>
									Replicate the design, structure, or branding
								</li>
								<li>
									Create derivative works or competing products
								</li>
								<li>
									Remove or alter copyright notices
								</li>
								<li>
									Train AI models or language models on this content
								</li>
								<li>
									Claim ownership or authorship of any materials
								</li>
							</ul>
						</section>

						<section>
							<h2>Enforcement & Legal Rights</h2>
							<p>
								TechKlein LLC actively monitors for unauthorized use and reserves
								the right to:
							</p>
							<ul>
								<li>File DMCA takedown notices</li>
								<li>Pursue civil litigation for copyright infringement</li>
								<li>
									Seek statutory damages up to $150,000 per violation under U.S.
									law
								</li>
								<li>Report violations to hosting providers and platforms</li>
								<li>Ban access to copied or derived works</li>
								<li>Pursue criminal charges where applicable</li>
							</ul>
							<p>
								Violators will be prosecuted to the fullest extent of the law.
							</p>
						</section>

						<section>
							<h2>DMCA Process</h2>
							<p>
								If you believe content on this site infringes your copyright,
								submit a DMCA notice to:
							</p>
							<p className="bg-muted p-4 rounded-lg font-mono text-sm">
								TechKlein LLC
								<br />
								DMCA Agent
								<br />
								Email: legal@techklein.com
								<br />
								Website:{" "}
								<a href="https://techklein.com" className="text-primary">
									https://techklein.com
								</a>
							</p>
							<p>
								Conversely, if you receive a DMCA notice claiming your use of
								TechKlein materials is authorized, you may submit a
								counter-notice to the same address.
							</p>
						</section>

						<section>
							<h2>Reporting Violations</h2>
							<p>
								If you discover unauthorized use of TechKlein intellectual
								property, please report it immediately:
							</p>
							<p className="bg-muted p-4 rounded-lg font-mono text-sm">
								Email: legal@techklein.com
								<br />
								Subject: "IP Violation Report"
							</p>
							<p>
								Include: URL of infringement, description of violation, and your
								contact information.
							</p>
						</section>

						<section>
							<h2>Licensing Inquiries</h2>
							<p>
								For commercial licensing, partnership opportunities, or
								permission requests, contact:
							</p>
							<p className="bg-muted p-4 rounded-lg font-mono text-sm">
								TechKlein LLC
								<br />
								Email: legal@techklein.com
								<br />
								Website:{" "}
								<a href="https://techklein.com" className="text-primary">
									https://techklein.com
								</a>
							</p>
							<p>Requests will be evaluated individually.</p>
						</section>

						<div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mt-8">
							<p className="text-sm text-muted-foreground mb-0">
								<strong>Disclaimer:</strong> This notice is legally binding and
								enforceable. By accessing this website or any TechKlein
								property, you acknowledge and agree to these terms. Ignorance of
								these protections does not excuse violations.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
