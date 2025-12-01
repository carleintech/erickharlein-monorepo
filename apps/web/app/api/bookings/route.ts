import { prisma } from "@erickharlein/database";
import { bookingFormSchema } from "@erickharlein/utils";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate input
		const validatedData = bookingFormSchema.parse(body);

		// Create booking
		const booking = await prisma.booking.create({
			data: {
				contact_name: validatedData.contact_name,
				contact_email: validatedData.contact_email,
				contact_phone: validatedData.contact_phone,
				company: validatedData.company,
				service_type: validatedData.service_type,
				preferred_date: new Date(validatedData.preferred_date),
				duration: validatedData.duration,
				timezone: validatedData.timezone,
				notes: validatedData.notes,
				status: "PENDING",
			},
		});

		// Log activity
		await prisma.activityLog.create({
			data: {
				event_type: "BOOKING_CREATED",
				metadata: {
					booking_id: booking.id,
					service_type: booking.service_type,
					contact_email: booking.contact_email,
				},
				ip_address:
					request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
				user_agent: request.headers.get("user-agent") || "unknown",
			},
		});

		// TODO: Send confirmation email to client
		// TODO: Send notification email to admin

		console.log("Booking created:", booking);

		return NextResponse.json(
			{
				success: true,
				message: "Booking request submitted successfully",
				booking: {
					id: booking.id,
					status: booking.status,
				},
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("Booking creation error:", error);

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

export async function GET(_request: NextRequest) {
	try {
		// This would be protected by auth in production
		const bookings = await prisma.booking.findMany({
			orderBy: {
				created_at: "desc",
			},
			take: 50,
		});

		return NextResponse.json({ bookings });
	} catch (error) {
		console.error("Fetch bookings error:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
