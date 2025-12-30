import Stripe from "stripe";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { BookingConfirmationEmail } from "@/emails/booking-confirmation";
import { supabase } from "@/lib/supabase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2025-12-15.clover",
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
	const body = await req.text();
	const headersList = await headers();
	const signature = headersList.get("stripe-signature");

	if (!signature) {
		return NextResponse.json({ error: "No signature provided" }, { status: 400 });
	}

	let event: Stripe.Event;

	try {
		event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
	} catch (err) {
		const error = err as Error;
		console.error("Webhook signature verification failed:", error.message);
		return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
	}

	// Handle successful payment
	if (event.type === "checkout.session.completed") {
		const session = event.data.object as Stripe.Checkout.Session;

		console.log("✅ Payment successful:", {
			session_id: session.id,
			customer_email: session.customer_email,
			amount_total: session.amount_total,
			metadata: session.metadata,
		});

		// Save booking to database
		let bookingEmailId: string | null = null;

		try {
			const monthlyAmount = session.metadata?.monthly_amount
				? Number(session.metadata.monthly_amount)
				: undefined;

			const { error: dbError } = await supabase
				.from("booking_submissions")
				.insert({
					service_name: session.metadata?.project_type || "Custom Project",
					service_type: session.metadata?.service_type || "project",
					stripe_session_id: session.id,
					stripe_payment_intent_id: session.payment_intent as string | null,
					payment_status: session.payment_status || "unpaid",
					booking_status: "pending",
					amount_total: session.amount_total || 0,
					currency: session.currency || "usd",
					client_name: session.metadata?.contact_name || session.customer_details?.name || null,
					client_email: session.customer_email || session.customer_details?.email || null,
					client_phone: session.metadata?.contact_phone || null,
					client_company: session.metadata?.contact_company || null,
					timeline_weeks: session.metadata?.timeline_weeks ? Number(session.metadata.timeline_weeks) : null,
					deposit_percentage: session.metadata?.deposit_percentage ? Number(session.metadata.deposit_percentage) : null,
					monthly_amount: monthlyAmount || null,
					metadata: session.metadata as Record<string, string>,
				});

			if (dbError) {
				console.error("❌ Database save failed:", dbError);
			} else {
				console.log("✅ Booking saved to database");
			}
		} catch (dbError) {
			console.error("❌ Database error:", dbError);
		}

		// Send confirmation email using Resend
		if (resend && session.customer_email) {
			try {
				let bookingEmailId: string | null = null;
				
				const depositAmount = (session.amount_total || 0) / 100;
				const totalAmount = Number(session.metadata?.total_amount || 0);
				const monthlyAmount = session.metadata?.monthly_amount
					? Number(session.metadata.monthly_amount)
					: undefined;

				const emailHtml = await render(
					BookingConfirmationEmail({
						customerName: session.metadata?.contact_name || "there",
						projectType: session.metadata?.project_type || "Custom Project",
						totalAmount,
						depositAmount,
						monthlyAmount,
						timelineWeeks: Number(session.metadata?.timeline_weeks || 0),
						customerEmail: session.customer_email,
						customerPhone: session.metadata?.contact_phone,
					}),
					{ pretty: false }
				);

				const { data, error } = await resend.emails.send({
					from: process.env.FROM_EMAIL || "TechKlein <hello@erickharlein.com>",
					to: [session.customer_email],
					subject: "🎉 Payment Confirmed - Your Development Slot is Reserved!",
					html: emailHtml,
				});

				if (error) {
					console.error("❌ Failed to send confirmation email:", error);
				} else {
					bookingEmailId = data?.id || null;
					console.log("✅ Confirmation email sent:", data?.id);

					// Update booking record with email status
					try {
						await supabase
							.from("booking_submissions")
							.update({
								booking_email_sent: true,
								booking_email_id: bookingEmailId,
							})
							.eq("stripe_session_id", session.id);
					} catch (updateError) {
						console.error("❌ Failed to update email status:", updateError);
					}
				}
			} catch (emailError) {
				console.error("❌ Error sending confirmation email:", emailError);
			}
		} else if (!resend) {
			console.log("ℹ️ Resend not configured, skipping email");
		}
	}

	// Handle payment failure
	if (event.type === "payment_intent.payment_failed") {
		const paymentIntent = event.data.object as Stripe.PaymentIntent;
		console.error("❌ Payment failed:", paymentIntent.id);
		// TODO: Send failure notification email
	}

	return NextResponse.json({ received: true });
}
