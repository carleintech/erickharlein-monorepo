import { contactFormSchema } from "@erickharlein/utils";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import AdminNotificationEmail from "@/emails/admin-notification";
import VisitorAutoReplyEmail from "@/emails/visitor-auto-reply";
import { getSupabase } from "@/lib/supabase";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate input
		const validatedData = contactFormSchema.parse(body);

		// Collect metadata
		const contactData = {
			...validatedData,
			ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
			user_agent: request.headers.get("user-agent") || "unknown",
			timestamp: new Date().toISOString(),
		};

		console.log("📬 Processing contact form submission:", {
			name: contactData.name,
			email: contactData.email,
			timestamp: contactData.timestamp,
		});

		// Track email sending results
		const emailResults = {
			adminNotification: false,
			visitorAutoReply: false,
			adminEmailId: null as string | null,
			visitorEmailId: null as string | null,
			errors: [] as string[],
		};

		// Send emails (both in parallel for speed) - only if Resend is configured
		if (resend) {
			await Promise.allSettled([
				// 1. Admin Notification - Professional template
				resend.emails
					.send({
						from: process.env.FROM_EMAIL || "TechKlein <hello@erickharlein.com>",
						to: ["erickharleinp@gmail.com"],
						subject: `🚀 New Contact: ${validatedData.name}${validatedData.company ? ` from ${validatedData.company}` : ""}`,
						react: AdminNotificationEmail(contactData),
					})
					.then((result) => {
						emailResults.adminNotification = true;
						emailResults.adminEmailId = result.data?.id || null;
						console.log("✅ Admin notification sent:", result.data?.id);
					})
					.catch((error) => {
						emailResults.errors.push(`Admin notification failed: ${error.message}`);
						console.error("❌ Admin notification error:", error);
					}),

				// 2. Visitor Auto-Reply - Instant trust boost
				resend.emails
					.send({
						from: process.env.FROM_EMAIL || "TechKlein <hello@erickharlein.com>",
						to: [validatedData.email],
						subject: "Thank you for contacting TechKlein — We received your message",
						react: VisitorAutoReplyEmail({ name: validatedData.name }),
					})
					.then((result) => {
						emailResults.visitorAutoReply = true;
						emailResults.visitorEmailId = result.data?.id || null;
						console.log("✅ Auto-reply sent:", result.data?.id);
					})
					.catch((error) => {
						emailResults.errors.push(`Auto-reply failed: ${error.message}`);
						console.error("❌ Auto-reply error:", error);
					}),
			]);

			// Log email results
			console.log("📊 Email delivery summary:", {
				adminSent: emailResults.adminNotification,
				autoReplySent: emailResults.visitorAutoReply,
				errors: emailResults.errors.length,
			});
		} else {
			console.log("⚠️ Email service not configured - skipping notifications");
		}

		// Save to Supabase database
		try {
			const supabase = getSupabase();
			if (supabase) {
				const { error: dbError } = await supabase
					.from("contact_submissions")
					.insert({
						name: validatedData.name,
						email: validatedData.email,
						phone: validatedData.phone || null,
						company: validatedData.company || null,
						message: validatedData.message,
						ip_address: contactData.ip_address,
						user_agent: contactData.user_agent,
						referrer: request.headers.get("referer") || null,
						admin_email_sent: emailResults.adminNotification,
						visitor_email_sent: emailResults.visitorAutoReply,
						admin_email_id: emailResults.adminEmailId,
						visitor_email_id: emailResults.visitorEmailId,
						status: "new",
					} as any);

				if (dbError) {
					console.error("❌ Database save failed:", dbError);
					// Don't fail the request - email was sent successfully
				} else {
					console.log("✅ Contact saved to database");
				}
			} else {
				console.log("⚠️ Database not configured - skipping save");
			}
		} catch (dbError) {
			console.error("❌ Database error:", dbError);
			// Continue - don't fail the request if DB fails
		}

		// Return success even if some emails failed (graceful degradation)
		return NextResponse.json(
			{
				success: true,
				message: "Message received successfully. You should receive a confirmation email shortly.",
				emailStatus: {
					delivered: emailResults.adminNotification || emailResults.visitorAutoReply,
					adminNotification: emailResults.adminNotification,
					autoReply: emailResults.visitorAutoReply,
				},
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("❌ Contact form error:", error);

		// Handle validation errors
		if (error instanceof Error && error.name === "ZodError") {
			return NextResponse.json(
				{
					success: false,
					error: "Invalid form data. Please check your input and try again.",
				},
				{ status: 400 },
			);
		}

		// Handle other errors
		return NextResponse.json(
			{
				success: false,
				error: "We couldn't process your message. Please try again or contact us directly at erickharleinp@gmail.com",
			},
			{ status: 500 },
		);
	}
}
