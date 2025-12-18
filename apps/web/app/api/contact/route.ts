import { contactFormSchema } from "@erickharlein/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate input
		const validatedData = contactFormSchema.parse(body);

		// Log the contact submission
		const contactData = {
			...validatedData,
			ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
			user_agent: request.headers.get("user-agent") || "unknown",
			timestamp: new Date().toISOString(),
		};

		// Send email notification
		try {
			// Using Resend API (free tier: 100 emails/day)
			const resendApiKey = process.env.RESEND_API_KEY;
			
			if (resendApiKey) {
				const emailResponse = await fetch("https://api.resend.com/emails", {
					method: "POST",
					headers: {
						"Authorization": `Bearer ${resendApiKey}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						from: "Portfolio Contact <onboarding@resend.dev>",
						to: ["erickharleinp@gmail.com"],
						subject: `New Contact Form Submission from ${validatedData.name}`,
						html: `
							<h2>New Contact Form Submission</h2>
							<p><strong>Name:</strong> ${validatedData.name}</p>
							<p><strong>Email:</strong> ${validatedData.email}</p>
							${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
							${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
							<p><strong>Message:</strong></p>
							<p>${validatedData.message.replace(/\n/g, "<br>")}</p>
							<hr>
							<p><small>IP: ${contactData.ip_address}</small></p>
							<p><small>Time: ${contactData.timestamp}</small></p>
						`,
					}),
				});

				if (!emailResponse.ok) {
					console.error("Failed to send email:", await emailResponse.text());
				}
			} else {
				console.warn("RESEND_API_KEY not configured. Email not sent.");
			}
		} catch (emailError) {
			console.error("Error sending email:", emailError);
			// Don't fail the request if email fails
		}

		console.log("Contact form submission:", contactData);

		return NextResponse.json(
			{
				success: true,
				message: "Message received successfully",
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error("Contact form error:", error);

		if (error instanceof Error && error.name === "ZodError") {
			return NextResponse.json(
				{
					success: false,
					error: "Invalid form data",
				},
				{ status: 400 },
			);
		}

		return NextResponse.json(
			{
				success: false,
				error: "Internal server error",
			},
			{ status: 500 },
		);
	}
}
