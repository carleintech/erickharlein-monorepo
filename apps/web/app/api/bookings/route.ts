import { bookingFormSchema } from "@erickharlein/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate input
		const validatedData = bookingFormSchema.parse(body);

		// Log booking submission
		const bookingData = {
			contact_name: validatedData.contact_name,
			contact_email: validatedData.contact_email,
			contact_phone: validatedData.contact_phone,
			company: validatedData.company,
			service_type: validatedData.service_type,
			preferred_date: new Date(validatedData.preferred_date),
			duration: validatedData.duration,
			timezone: validatedData.timezone,
			notes: validatedData.notes,
			ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
			user_agent: request.headers.get("user-agent") || "unknown",
			timestamp: new Date().toISOString(),
		};

		// TODO: Send confirmation email to client
		// TODO: Send notification email to admin
		// TODO: Store in your preferred system (email, CRM, spreadsheet, etc.)

		console.log("Booking submitted:", bookingData);

		return NextResponse.json(
			{
				success: true,
				message: "Booking request submitted successfully. We'll contact you soon!",
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("Booking submission error:", error);

		if (error instanceof Error && error.name === "ZodError") {
			return NextResponse.json(
				{
					success: false,
					error: "Invalid booking data",
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
