import { ContactCTA } from "@/components/contact-cta";
import { HeroSectionSimple } from "@/components/hero-section-simple";

export default function HomePage() {
	return (
		<div className="flex flex-col">
			{/* Hero Section - Full screen, professional */}
			<HeroSectionSimple />

			{/* Clean CTA - Compact and direct */}
			<section className="py-16 md:py-20">
				<div className="container">
					<ContactCTA />
				</div>
			</section>
		</div>
	);
}
