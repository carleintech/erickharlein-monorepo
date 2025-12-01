import { prisma } from "@erickharlein/database";
import { contactFormSchema } from "@erickharlein/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate input
		const validatedData = contactFormSchema.parse(body);

		// Log the contact submission in activity log
		await prisma.activityLog.create({
			data: {
				event_type: "CONTACT_FORM_SUBMISSION",
				metadata: {
					name: validatedData.name,
					email: validatedData.email,
					phone: validatedData.phone,
					company: validatedData.company,
					message_length: validatedData.message.length,
				},
				ip_address:
					request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
				user_agent: request.headers.get("user-agent") || "unknown",
			},
		});

		// TODO: Send email notification (integrate with SendGrid, Resend, etc.)
		// For now, we'll just log it

		console.log("Contact form submission:", validatedData);

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
