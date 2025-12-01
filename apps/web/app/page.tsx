import { ContactCTA } from "@/components/contact-cta";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section - Full screen, professional */}
			<HeroSection />

			{/* Clean CTA - Compact and direct */}
			<section className="py-16 md:py-20">
				<div className="container">
					<ContactCTA />
				</div>
			</section>
		</div>
	);
}
