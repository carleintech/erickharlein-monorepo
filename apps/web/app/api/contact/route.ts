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

		// TODO: Send email notification (integrate with SendGrid, Resend, etc.)
		// TODO: Store in your preferred system (email, CRM, spreadsheet, etc.)

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
