import { ArrowLeft, Lock, Eye, Database, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Privacy Policy | Erickharlein",
	description:
		"Privacy policy for Erickharlein.com - how we collect, use, and protect your data",
};

export default function PrivacyPolicyPage() {
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
							<Lock className="h-4 w-4" />
							Privacy Policy
						</div>
						<h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
						<p className="text-muted-foreground text-lg">
							Last Updated: December 1, 2025
						</p>
					</div>

					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<section>
							<h2>Introduction</h2>
							<p>
								Erickharlein.com ("we," "our," or "us") respects your privacy.
								This Privacy Policy explains how we collect, use, store, and
								protect your information when you visit our website.
							</p>
							<p>
								This is a personal portfolio website showcasing projects,
								skills, and professional information. We collect minimal data
								necessary for site functionality and analytics.
							</p>
						</section>

						<section>
							<h2 className="flex items-center gap-2">
								<Eye className="h-5 w-5" />
								Information We Collect
							</h2>
							<h3>Automatically Collected Information</h3>
							<p>
								When you visit our website, we may automatically collect:
							</p>
							<ul>
								<li>
									<strong>Device Information:</strong> Browser type, operating
									system, device type
								</li>
								<li>
									<strong>Usage Data:</strong> Pages visited, time spent on
									pages, referring URLs
								</li>
								<li>
									<strong>Technical Data:</strong> IP address (anonymized),
									geographic location (country/region only)
								</li>
								<li>
									<strong>Performance Data:</strong> Page load times, errors,
									interactions
								</li>
							</ul>

							<h3>Information You Provide</h3>
							<p>
								If you contact us through forms or email, we may collect:
							</p>
							<ul>
								<li>Name</li>
								<li>Email address</li>
								<li>Message content</li>
								<li>Any other information you voluntarily provide</li>
							</ul>
						</section>

						<section>
							<h2>How We Use Your Information</h2>
							<p>We use collected information to:</p>
							<ul>
								<li>Operate and maintain the website</li>
								<li>Improve user experience and site performance</li>
								<li>Analyze traffic and usage patterns</li>
								<li>Respond to inquiries and communications</li>
								<li>Detect and prevent security threats</li>
								<li>Comply with legal obligations</li>
							</ul>
							<p>
								<strong>We do NOT:</strong>
							</p>
							<ul>
								<li>Sell your personal information</li>
								<li>Share your data with third-party advertisers</li>
								<li>Use your information for marketing without consent</li>
								<li>Track you across other websites</li>
							</ul>
						</section>

						<section>
							<h2 className="flex items-center gap-2">
								<Database className="h-5 w-5" />
								Data Storage & Security
							</h2>
							<p>
								Your data is stored securely using industry-standard practices:
							</p>
							<ul>
								<li>Encrypted connections (HTTPS/TLS)</li>
								<li>Secure hosting infrastructure (Vercel)</li>
								<li>Industry-standard encryption protocols</li>
								<li>Regular security audits</li>
								<li>Access controls and authentication</li>
							</ul>
							<p>
								While we implement robust security measures, no system is 100%
								secure. We cannot guarantee absolute security but commit to
								protecting your data responsibly.
							</p>
						</section>

						<section>
							<h2>Cookies and Analytics</h2>
							<p>We use cookies and similar technologies for:</p>
							<ul>
								<li>
									<strong>Essential Cookies:</strong> Required for site
									functionality (session management, security)
								</li>
								<li>
									<strong>Analytics Cookies:</strong> Track usage patterns to
									improve the site (anonymized data)
								</li>
								<li>
									<strong>Preference Cookies:</strong> Remember your settings
									(theme preference, language)
								</li>
							</ul>
							<p>
								You can control cookies through your browser settings. Blocking
								cookies may affect site functionality.
							</p>
						</section>

						<section>
							<h2>Third-Party Services</h2>
							<p>
								We use trusted third-party services that may collect data:
							</p>
							<ul>
								<li>
									<strong>Vercel:</strong> Hosting and deployment platform
									<br />
									<a
										href="https://vercel.com/legal/privacy-policy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary"
									>
										Vercel Privacy Policy
									</a>
								</li>
								<li>
									<strong>GitHub:</strong> Code repository and version control
									<br />
									<a
										href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary"
									>
										GitHub Privacy Statement
									</a>
								</li>
								<li>
									<strong>Cloudflare:</strong> DNS and security services
									<br />
									<a
										href="https://www.cloudflare.com/privacypolicy/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary"
									>
										Cloudflare Privacy Policy
									</a>
								</li>
							</ul>
							<p>
								These services have their own privacy policies. We recommend
								reviewing them.
							</p>
						</section>

						<section>
							<h2 className="flex items-center gap-2">
								<Shield className="h-5 w-5" />
								Your Rights
							</h2>
							<p>You have the right to:</p>
							<ul>
								<li>
									<strong>Access:</strong> Request a copy of your personal data
								</li>
								<li>
									<strong>Correction:</strong> Request correction of inaccurate
									data
								</li>
								<li>
									<strong>Deletion:</strong> Request deletion of your personal
									data
								</li>
								<li>
									<strong>Portability:</strong> Receive your data in a portable
									format
								</li>
								<li>
									<strong>Objection:</strong> Object to data processing
								</li>
								<li>
									<strong>Opt-Out:</strong> Opt out of analytics tracking
								</li>
							</ul>
							<p>
								To exercise these rights, contact us at:{" "}
								<a href="mailto:privacy@techklein.com" className="text-primary">
									privacy@techklein.com
								</a>
							</p>
						</section>

						<section>
							<h2>Data Retention</h2>
							<p>We retain data only as long as necessary:</p>
							<ul>
								<li>
									<strong>Analytics Data:</strong> 90 days (anonymized after 30
									days)
								</li>
								<li>
									<strong>Contact Form Data:</strong> 2 years or until deletion
									request
								</li>
								<li>
									<strong>Log Files:</strong> 30 days for security purposes
								</li>
							</ul>
						</section>

						<section>
							<h2>Children's Privacy</h2>
							<p>
								This website is not intended for children under 13 years of age.
								We do not knowingly collect personal information from children.
								If you believe a child has provided us with personal information,
								contact us immediately.
							</p>
						</section>

						<section>
							<h2>International Data Transfers</h2>
							<p>
								Your data may be transferred to and processed in the United
								States or other countries where our service providers operate. By
								using this website, you consent to such transfers.
							</p>
							<p>
								We ensure appropriate safeguards are in place for international
								transfers, complying with GDPR and other applicable regulations.
							</p>
						</section>

						<section>
							<h2>Changes to This Policy</h2>
							<p>
								We may update this Privacy Policy periodically. Changes will be
								posted on this page with an updated "Last Updated" date.
								Significant changes will be highlighted prominently.
							</p>
							<p>
								Continued use of the website after changes constitutes acceptance
								of the updated policy.
							</p>
						</section>

						<section>
							<h2>Contact Information</h2>
							<p>
								For questions, concerns, or requests regarding this Privacy
								Policy:
							</p>
							<p className="bg-muted p-4 rounded-lg font-mono text-sm">
								TechKlein LLC
								<br />
								Email:{" "}
								<a
									href="mailto:privacy@techklein.com"
									className="text-primary"
								>
									privacy@techklein.com
								</a>
								<br />
								Website:{" "}
								<a href="https://techklein.com" className="text-primary">
									https://techklein.com
								</a>
							</p>
						</section>

						<div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mt-8">
							<p className="text-sm text-muted-foreground mb-0">
								<strong>Note:</strong> By using Erickharlein.com, you
								acknowledge that you have read, understood, and agree to this
								Privacy Policy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

