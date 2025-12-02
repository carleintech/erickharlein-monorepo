import { ArrowLeft, FileText, AlertCircle, Scale } from "lucide-react";
import Link from "next/link";

export const metadata = {
	title: "Terms of Service | Erickharlein",
	description: "Terms of Service for Erickharlein.com portfolio website",
};

export default function TermsPage() {
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
							<FileText className="h-4 w-4" />
							Terms of Service
						</div>
						<h1 className="text-4xl font-bold tracking-tight">
							Terms of Service
						</h1>
						<p className="text-muted-foreground text-lg">
							Last Updated: December 1, 2025
						</p>
					</div>

					<div className="prose prose-neutral dark:prose-invert max-w-none">
						<section>
							<h2>Acceptance of Terms</h2>
							<p>
								Welcome to Erickharlein.com. By accessing or using this website,
								you agree to be bound by these Terms of Service ("Terms"). If
								you do not agree to these Terms, you must not access or use this
								website.
							</p>
							<p>
								This website is a personal portfolio operated by{" "}
								<strong>Erickharlein Pierre</strong> and{" "}
								<strong>TechKlein LLC</strong>. These Terms apply to all
								visitors, users, and others who access the site.
							</p>
						</section>

						<section>
							<h2>Allowed Use</h2>
							<p>You may use this website to:</p>
							<ul>
								<li>
									View and learn about my professional work, projects, and skills
								</li>
								<li>Navigate through portfolio content for personal research</li>
								<li>Contact me through provided communication channels</li>
								<li>
									Link to public pages for non-commercial, educational purposes
								</li>
							</ul>
							<p>
								You must use this website lawfully and in accordance with these
								Terms.
							</p>
						</section>

						<section>
							<h2 className="flex items-center gap-2">
								<AlertCircle className="h-5 w-5" />
								Prohibited Use
							</h2>
							<p>
								You may <strong>NOT</strong> use this website to:
							</p>
							<ul>
								<li>
									Copy, reproduce, modify, or distribute any content without
									written permission
								</li>
								<li>
									Scrape, crawl, or harvest data using automated tools or bots
								</li>
								<li>
									Reverse-engineer or extract source code or design elements
								</li>
								<li>
									Use content for commercial purposes without authorization
								</li>
								<li>
									Train AI models, language models, or machine learning systems
									on site content
								</li>
								<li>
									Impersonate me or misrepresent your affiliation with me or
									TechKlein
								</li>
								<li>Transmit malware, viruses, or harmful code</li>
								<li>
									Interfere with site operation or security features
								</li>
								<li>
									Violate any applicable laws, regulations, or third-party
									rights
								</li>
								<li>
									Engage in any activity that could damage, disable, or impair
									the website
								</li>
							</ul>
							<p>
								Violation of these prohibitions may result in immediate
								termination of access and legal action.
							</p>
						</section>

						<section>
							<h2 className="flex items-center gap-2">
								<Scale className="h-5 w-5" />
								Intellectual Property Rights
							</h2>
							<p>
								All content on this website—including but not limited to text,
								graphics, logos, images, code, software, designs, and
								documentation—is the exclusive property of{" "}
								<strong>Erickharlein Pierre</strong> and{" "}
								<strong>TechKlein LLC</strong>.
							</p>
							<p>
								All materials are protected by:
							</p>
							<ul>
								<li>United States Copyright Law (Title 17 U.S.C.)</li>
								<li>Digital Millennium Copyright Act (DMCA)</li>
								<li>International copyright treaties</li>
								<li>Trademark and trade dress laws</li>
							</ul>
							<p>
								Unauthorized use, reproduction, or distribution of any content is
								strictly prohibited and may result in civil and criminal
								penalties.
							</p>
							<p>
								For detailed information, see our{" "}
								<Link href="/legal/copyright" className="text-primary">
									Copyright & IP Notice
								</Link>
								.
							</p>
						</section>

						<section>
							<h2>User-Generated Content</h2>
							<p>
								If you submit content to us (e.g., through contact forms,
								comments, or communications), you grant us a non-exclusive,
								royalty-free license to use, reproduce, and display that content
								as necessary to operate the site and respond to your inquiry.
							</p>
							<p>
								You represent and warrant that:
							</p>
							<ul>
								<li>You own or have rights to the submitted content</li>
								<li>The content does not violate any laws or third-party rights</li>
								<li>The content is not defamatory, offensive, or harmful</li>
							</ul>
						</section>

						<section>
							<h2>No Warranty Disclaimer</h2>
							<p>
								This website and all content are provided{" "}
								<strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong>{" "}
								without warranties of any kind, either express or implied.
							</p>
							<p>We do not warrant that:</p>
							<ul>
								<li>The website will be uninterrupted or error-free</li>
								<li>
									Defects will be corrected or that the site is free of viruses
								</li>
								<li>
									The information is accurate, complete, or current
								</li>
								<li>The website will meet your specific requirements</li>
							</ul>
							<p>
								<strong>Use this website at your own risk.</strong>
							</p>
						</section>

						<section>
							<h2>Limitation of Liability</h2>
							<p>
								To the fullest extent permitted by law,{" "}
								<strong>Erickharlein Pierre</strong> and{" "}
								<strong>TechKlein LLC</strong> shall not be liable for any:
							</p>
							<ul>
								<li>
									Direct, indirect, incidental, consequential, or punitive
									damages
								</li>
								<li>Loss of profits, data, or business opportunities</li>
								<li>Damages arising from use or inability to use the website</li>
								<li>
									Damages resulting from unauthorized access or data breaches
								</li>
								<li>
									Damages from errors, omissions, or inaccuracies in content
								</li>
							</ul>
							<p>
								This limitation applies even if we have been advised of the
								possibility of such damages.
							</p>
							<p>
								Some jurisdictions do not allow limitation of liability, so this
								may not apply to you.
							</p>
						</section>

						<section>
							<h2>Indemnification</h2>
							<p>
								You agree to indemnify, defend, and hold harmless{" "}
								<strong>Erickharlein Pierre</strong>,{" "}
								<strong>TechKlein LLC</strong>, and our affiliates from any
								claims, damages, losses, liabilities, and expenses (including
								attorney fees) arising from:
							</p>
							<ul>
								<li>Your violation of these Terms</li>
								<li>Your violation of any laws or third-party rights</li>
								<li>Your use or misuse of the website</li>
								<li>Any content you submit or transmit</li>
							</ul>
						</section>

						<section>
							<h2>External Links</h2>
							<p>
								This website may contain links to third-party websites or
								services that are not owned or controlled by us.
							</p>
							<p>
								We have no control over and assume no responsibility for the
								content, privacy policies, or practices of third-party sites. You
								acknowledge and agree that we are not liable for any damage or
								loss caused by use of third-party sites.
							</p>
							<p>
								<strong>
									We recommend reviewing the terms and privacy policies of any
									third-party sites you visit.
								</strong>
							</p>
						</section>

						<section>
							<h2>Termination</h2>
							<p>
								We reserve the right to terminate or suspend your access to the
								website immediately, without prior notice or liability, for any
								reason, including:
							</p>
							<ul>
								<li>Violation of these Terms</li>
								<li>Fraudulent, abusive, or illegal activity</li>
								<li>At our sole discretion</li>
							</ul>
							<p>
								Upon termination, your right to use the website will cease
								immediately.
							</p>
						</section>

						<section>
							<h2>Governing Law</h2>
							<p>
								These Terms are governed by and construed in accordance with the
								laws of the <strong>Commonwealth of Virginia</strong> and the{" "}
								<strong>United States of America</strong>, without regard to
								conflict of law principles.
							</p>
							<p>
								Any disputes arising from these Terms or use of the website shall
								be resolved exclusively in the state or federal courts located in
								Virginia. You consent to the personal jurisdiction of such
								courts.
							</p>
						</section>

						<section>
							<h2>Dispute Resolution</h2>
							<p>
								If a dispute arises, you agree to first contact us at{" "}
								<a href="mailto:legal@techklein.com" className="text-primary">
									legal@techklein.com
								</a>{" "}
								to attempt informal resolution before pursuing formal legal
								action.
							</p>
						</section>

						<section>
							<h2>Severability</h2>
							<p>
								If any provision of these Terms is found to be invalid or
								unenforceable, the remaining provisions will remain in full force
								and effect.
							</p>
						</section>

						<section>
							<h2>Entire Agreement</h2>
							<p>
								These Terms, along with our{" "}
								<Link href="/legal/privacy-policy" className="text-primary">
									Privacy Policy
								</Link>{" "}
								and{" "}
								<Link href="/legal/copyright" className="text-primary">
									Copyright Notice
								</Link>
								, constitute the entire agreement between you and{" "}
								<strong>TechKlein LLC</strong> regarding use of this website.
							</p>
						</section>

						<section>
							<h2>Updates to These Terms</h2>
							<p>
								We reserve the right to modify or update these Terms at any time.
								Changes will be posted on this page with an updated "Last
								Updated" date.
							</p>
							<p>
								Material changes will be highlighted prominently. Continued use
								of the website after changes constitutes acceptance of the
								updated Terms.
							</p>
							<p>
								<strong>
									It is your responsibility to review these Terms periodically.
								</strong>
							</p>
						</section>

						<section>
							<h2>Contact Information</h2>
							<p>
								For questions, concerns, or notices regarding these Terms of
								Service:
							</p>
							<p className="bg-muted p-4 rounded-lg font-mono text-sm">
								TechKlein LLC
								<br />
								Email:{" "}
								<a href="mailto:legal@techklein.com" className="text-primary">
									legal@techklein.com
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
								<strong>Acknowledgment:</strong> By using Erickharlein.com, you
								acknowledge that you have read, understood, and agree to be bound
								by these Terms of Service.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
