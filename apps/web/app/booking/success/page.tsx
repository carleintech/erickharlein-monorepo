import { Button } from "@erickharlein/ui";
import Link from "next/link";
import { CheckCircle, Mail, Calendar, Rocket } from "lucide-react";

export default function BookingSuccessPage() {
	return (
		<main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-glow" />
				<div className="absolute bottom-20 left-10 w-80 h-80 bg-signal/10 rounded-full blur-3xl animate-glow [animation-delay:1.5s]" />
			</div>

			<div className="max-w-2xl w-full glass-strong border-2 border-green-500/50 rounded-2xl p-8 space-y-8 shadow-2xl">
				{/* Success Icon */}
				<div className="text-center space-y-4">
					<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border-4 border-green-500 animate-in zoom-in duration-500">
						<CheckCircle className="h-12 w-12 text-green-500" />
					</div>

					<div>
						<h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
							Payment Successful!
						</h1>
						<p className="text-xl text-muted-foreground">Your development slot has been reserved 🎉</p>
					</div>
				</div>

				{/* What's Next Section */}
				<div className="glass border border-primary/30 rounded-xl p-6 space-y-4">
					<h3 className="font-semibold text-lg flex items-center gap-2">
						<Rocket className="h-5 w-5 text-signal" />
						What happens next?
					</h3>
					<div className="space-y-4">
						<div className="flex items-start gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
								1
							</div>
							<div>
								<p className="font-semibold text-foreground mb-1 flex items-center gap-2">
									<Mail className="h-4 w-4" />
									Check your email
								</p>
								<p className="text-sm text-muted-foreground">
									You'll receive a confirmation email with your project details and receipt
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">
								2
							</div>
							<div>
								<p className="font-semibold text-foreground mb-1 flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									Kickoff call within 24 hours
								</p>
								<p className="text-sm text-muted-foreground">
									I'll reach out to schedule your project kickoff call to finalize requirements
								</p>
							</div>
						</div>

						<div className="flex items-start gap-4 p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
							<div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">
								3
							</div>
							<div>
								<p className="font-semibold text-foreground mb-1 flex items-center gap-2">
									<Rocket className="h-4 w-4" />
									Development begins
								</p>
								<p className="text-sm text-muted-foreground">
									Your project starts immediately after we finalize the scope and requirements
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Important Info */}
				<div className="glass border border-signal/30 rounded-xl p-6 space-y-3">
					<h3 className="font-semibold text-signal">📌 Important Information</h3>
					<ul className="space-y-2 text-sm text-muted-foreground">
						<li className="flex items-start gap-2">
							<span className="text-signal flex-shrink-0">•</span>
							<span>Your development slot is now locked in — no one else can take it</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-signal flex-shrink-0">•</span>
							<span>The deposit is applied toward your total project cost</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-signal flex-shrink-0">•</span>
							<span>Remaining balance is due upon project completion</span>
						</li>
						<li className="flex items-start gap-2">
							<span className="text-signal flex-shrink-0">•</span>
							<span>
								Questions? Email me at{" "}
								<a href="mailto:erickharleinp@gmail.com" className="text-signal hover:underline">
									erickharleinp@gmail.com
								</a>
							</span>
						</li>
					</ul>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4">
					<Link href="/" className="flex-1">
						<Button variant="outline" className="w-full" size="lg">
							← Back to Home
						</Button>
					</Link>
					<Link href="/contact" className="flex-1">
						<Button
							className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
							size="lg"
						>
							Contact Me
						</Button>
					</Link>
				</div>

				<p className="text-xs text-center text-muted-foreground pt-4 border-t border-primary/20">
					Thank you for choosing TechKlein. Let's build something exceptional together! 🚀
				</p>
			</div>
		</main>
	);
}
