import { bookingFormSchema } from "@erickharlein/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Check if this is a project estimator request or standard booking
		const isProjectEstimator = body.project_type && body.selected_features !== undefined;

		let bookingData: {
			type: string;
			contact_name: string;
			contact_email: string;
			contact_phone: string;
			company?: string;
			[key: string]: unknown;
		};

		if (isProjectEstimator) {
			// Project Estimator Request
			bookingData = {
				type: "project_estimator",
				contact_name: body.contact_name,
				contact_email: body.contact_email,
				contact_phone: body.contact_phone || "",
				company: body.company || "",
				project_type: body.project_type,
				selected_features: body.selected_features || [],
				selected_addons: body.selected_addons || [],
				estimated_price: body.estimated_price || 0,
				price_range: body.price_range || { min: 0, max: 0 },
				estimated_timeline_weeks: body.estimated_timeline_weeks || 0,
				monthly_recurring: body.monthly_recurring || [],
				notes: body.notes || "",
				ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
				user_agent: request.headers.get("user-agent") || "unknown",
				timestamp: new Date().toISOString(),
			};

			// TODO: Send project estimator confirmation email to client with breakdown
			// TODO: Send notification email to admin with full project details
			// TODO: Store in CRM/database with project estimator flag

			console.log("Project Estimator Request:", bookingData);
		} else {
			// Standard Consultation Booking
			const validatedData = bookingFormSchema.parse(body);

			bookingData = {
				type: "consultation_booking",
				contact_name: validatedData.contact_name,
				contact_email: validatedData.contact_email,
				contact_phone: validatedData.contact_phone || "",
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

			// TODO: Send consultation confirmation email to client
			// TODO: Send notification email to admin
			// TODO: Store in calendar/CRM system

			console.log("Consultation Booking:", bookingData);
		}

		return NextResponse.json(
			{
				success: true,
				message: isProjectEstimator
					? "Project request submitted successfully. I'll review your requirements and contact you within 24 hours!"
					: "Booking request submitted successfully. We'll contact you soon!",
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
