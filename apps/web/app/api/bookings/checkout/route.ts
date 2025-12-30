import Stripe from "stripe";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2025-12-15.clover",
}) : null;

export async function POST(req: NextRequest) {
	try {
		if (!stripe) {
			return NextResponse.json({ error: "Payment system not configured" }, { status: 503 });
		}

		const { bookingData } = await req.json();

		if (!bookingData) {
			return NextResponse.json({ error: "Missing booking data" }, { status: 400 });
		}

		// Create Stripe checkout session
		const session = await stripe.checkout.sessions.create({
			mode: "payment",
			customer_email: bookingData.contact?.email || "",
			line_items: [
				{
					quantity: 1,
					price_data: {
						currency: "usd",
						unit_amount: Math.round(bookingData.pricing.depositAmount * 100),
						product_data: {
							name: "TechKlein Project Deposit",
							description: `Development slot reservation - ${bookingData.pricing.depositPercentage}% deposit`,
							images: ["https://erickharlein.com/images/techklein-logo.png"],
						},
					},
				},
			],
			metadata: {
				project_type: bookingData.projectType || "custom",
				service_type: "project",
				total_amount: bookingData.pricing.totalOneTime?.toString() || "0",
				monthly_amount: bookingData.pricing.totalMonthly?.toString() || "0",
				timeline_weeks: bookingData.estimatedTimelineWeeks?.toString() || "0",
				deposit_percentage: bookingData.pricing.depositPercentage?.toString() || "20",
				contact_name: bookingData.contact?.name || "",
				contact_email: bookingData.contact?.email || "",
				contact_phone: bookingData.contact?.phone || "",
				contact_company: bookingData.contact?.company || "",
			},
			success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/booking/cancelled`,
		});

		return NextResponse.json({ url: session.url });
	} catch (error) {
		console.error("Stripe checkout error:", error);

		if (error instanceof Stripe.errors.StripeError) {
			return NextResponse.json({ error: error.message }, { status: error.statusCode || 500 });
		}

		return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
	}
}
