import { Button } from "@erickharlein/ui";
import Link from "next/link";
import { XCircle, ArrowLeft, MessageSquare } from "lucide-react";

export default function BookingCancelledPage() {
	return (
		<main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-glow" />
				<div className="absolute bottom-20 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-glow [animation-delay:1.5s]" />
			</div>

			<div className="max-w-2xl w-full glass-strong border-2 border-orange-500/50 rounded-2xl p-8 space-y-8 shadow-2xl">
				{/* Icon */}
				<div className="text-center space-y-4">
					<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-500/20 border-4 border-orange-500 animate-in zoom-in duration-500">
						<XCircle className="h-12 w-12 text-orange-500" />
					</div>

					<div>
						<h1 className="text-4xl md:text-5xl font-bold mb-3">Payment Cancelled</h1>
						<p className="text-xl text-muted-foreground">No worries — your project details are saved!</p>
					</div>
				</div>

				{/* Info Section */}
				<div className="glass border border-primary/30 rounded-xl p-6 space-y-4">
					<h3 className="font-semibold text-lg">What happened?</h3>
					<p className="text-muted-foreground">
						You cancelled the payment process. This is completely normal — maybe you want to:
					</p>
					<ul className="space-y-3 text-muted-foreground">
						<li className="flex items-start gap-3">
							<span className="text-signal flex-shrink-0">✓</span>
							<span>Review your project selections again</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-signal flex-shrink-0">✓</span>
							<span>Talk to me before committing to a deposit</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-signal flex-shrink-0">✓</span>
							<span>Adjust your budget or timeline expectations</span>
						</li>
						<li className="flex items-start gap-3">
							<span className="text-signal flex-shrink-0">✓</span>
							<span>Simply not ready yet (totally fine!)</span>
						</li>
					</ul>
				</div>

				{/* Alternative Actions */}
				<div className="glass border border-blue-500/30 rounded-xl p-6 space-y-4">
					<h3 className="font-semibold text-lg text-blue-400">👋 Still interested?</h3>
					<p className="text-muted-foreground text-sm">
						If you'd like to discuss your project before committing, I'm happy to jump on a free 30-minute strategy call.
						No pressure, no hard sell — just technical guidance.
					</p>
					<Link href="/contact">
						<Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
							<MessageSquare className="h-4 w-4 mr-2" />
							Book Free Strategy Call
						</Button>
					</Link>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4">
					<Link href="/booking" className="flex-1">
						<Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" size="lg">
							<ArrowLeft className="h-4 w-4 mr-2" />
							Back to Booking Wizard
						</Button>
					</Link>
					<Link href="/" className="flex-1">
						<Button variant="outline" className="w-full" size="lg">
							← Back to Home
						</Button>
					</Link>
				</div>

				<p className="text-xs text-center text-muted-foreground pt-4 border-t border-primary/20">
					No payment was processed. Your information remains private and secure.
				</p>
			</div>
		</main>
	);
}
