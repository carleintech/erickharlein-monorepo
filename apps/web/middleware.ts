import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// List of valid route patterns
	const validRoutes = [
		"/",
		"/about",
		"/booking",
		"/contact",
		"/ecosystem",
		"/projects",
		"/legal/copyright",
		"/legal/privacy-policy",
		"/legal/terms",
		"/api/bookings",
		"/api/contact",
	];

	// Check if the path matches a valid static route
	const isValidStaticRoute = validRoutes.some((route) => pathname === route);

	// Check if it's a dynamic project route
	const isProjectRoute = /^\/projects\/[a-z0-9-]+$/.test(pathname);

	// Check if it's an API route
	const isApiRoute = pathname.startsWith("/api/");

	// Check if it's a static file (images, fonts, etc.)
	const isStaticFile =
		pathname.startsWith("/_next/") ||
		pathname.startsWith("/images/") ||
		pathname.includes(".") ||
		pathname.startsWith("/favicon") ||
		pathname.startsWith("/robots") ||
		pathname.startsWith("/humans");

	// Allow valid routes and static files to pass through
	if (isValidStaticRoute || isProjectRoute || isApiRoute || isStaticFile) {
		return NextResponse.next();
	}

	// For any other route, continue to Next.js routing
	// which will eventually hit the catch-all [...notFound] route
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico).*)",
	],
};
