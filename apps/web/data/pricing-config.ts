/**
 * Pricing Configuration for Project Estimator
 * All prices in USD
 */

export const PROJECT_TYPES = [
	{
		id: "SIMPLE_WEBSITE",
		name: "Simple Website",
		description: "Professional website with custom design",
		basePrice: 1000,
		timeline: { min: 1, max: 2, unit: "weeks" as const },
		includes: ["Custom Design", "Responsive Layout", "Contact Form", "SEO Basics"],
	},
	{
		id: "WEB_APPLICATION",
		name: "Web Application",
		description: "Full-featured web app with dashboard",
		basePrice: 1800,
		timeline: { min: 3, max: 6, unit: "weeks" as const },
		includes: ["User Authentication", "Admin Panel", "Database", "API Integration"],
	},
	{
		id: "FULL_PLATFORM",
		name: "Full Platform",
		description: "Complex platform with admin panel",
		basePrice: 2000,
		timeline: { min: 8, max: 12, unit: "weeks" as const },
		includes: ["Multi-user System", "Advanced Dashboard", "Analytics", "Scalable Architecture"],
	},
] as const;

export const CORE_FEATURES = [
	{
		id: "AUTH_LOGIN",
		name: "User Login / Registration",
		description: "Secure authentication system",
		price: 500,
		timeline: 3,
	},
	{
		id: "CLIENT_DASHBOARD",
		name: "Dashboard for Clients",
		description: "Custom client portal and dashboard",
		price: 1200,
		timeline: 5,
	},
	{
		id: "ADMIN_DASHBOARD",
		name: "Admin Dashboard",
		description: "Full-featured admin control panel",
		price: 2000,
		timeline: 7,
	},
	{
		id: "DOCUMENT_UPLOAD",
		name: "Document Upload / Storage",
		description: "Secure file management system",
		price: 800,
		timeline: 4,
	},
	{
		id: "PAYMENT_PROCESSING",
		name: "Payment Processing",
		description: "Stripe/payment gateway integration",
		price: 700,
		timeline: 4,
	},
	{
		id: "REFERRAL_PROGRAM",
		name: "Referral Program",
		description: "Automated referral tracking & rewards",
		price: 600,
		timeline: 3,
	},
	{
		id: "NOTIFICATIONS",
		name: "Notifications (Email/SMS)",
		description: "Automated notification system",
		price: 400,
		timeline: 2,
	},
	{
		id: "LIVE_CHAT",
		name: "Live Chat Support",
		description: "Real-time chat integration",
		price: 900,
		timeline: 5,
	},
	{
		id: "API_INTEGRATIONS",
		name: "API Integrations",
		description: "Third-party service integrations",
		price: 900,
		timeline: 4,
	},
	{
		id: "REPORTING_ANALYTICS",
		name: "Reporting / Analytics",
		description: "Custom reports and data visualization",
		price: 1100,
		timeline: 5,
	},
] as const;

export const ADD_ONS = [
	{
		id: "MOBILE_APP",
		name: "Mobile App (iOS/Android)",
		description: "Native mobile apps connected to web platform",
		price: 5000,
		timeline: { min: 8, max: 12, unit: "weeks" as const },
	},
	{
		id: "MULTILANGUAGE",
		name: "Multilanguage Support",
		description: "i18n implementation with multiple languages",
		price: 800,
		timeline: { min: 1, max: 2, unit: "weeks" as const },
	},
	{
		id: "MAINTENANCE_PLAN",
		name: "Ongoing Maintenance Plan",
		description: "Monthly maintenance, updates & support",
		price: 250,
		recurring: "monthly" as const,
		timeline: { min: 0, max: 0, unit: "weeks" as const },
	},
	{
		id: "HOSTING_SUPPORT",
		name: "Hosting + Support",
		description: "Managed hosting and technical support",
		price: 150,
		recurring: "monthly" as const,
		timeline: { min: 0, max: 0, unit: "weeks" as const },
	},
] as const;

/**
 * Calculate estimated price based on selections
 */
export function calculateEstimate(selections: {
	projectType: string | null;
	features: string[];
	addOns: string[];
	includeContentCreation?: boolean;
}) {
	let total = 0;
	let timelineWeeks = 0;
	const monthlyRecurring: { name: string; price: number }[] = [];

	// Add project type base price
	if (selections.projectType) {
		const project = PROJECT_TYPES.find((p) => p.id === selections.projectType);
		if (project) {
			total += project.basePrice;
			timelineWeeks += project.timeline.min;
		}
	}

	// Add feature prices
	for (const featureId of selections.features) {
		const feature = CORE_FEATURES.find((f) => f.id === featureId);
		if (feature) {
			total += feature.price;
			timelineWeeks += Math.ceil(feature.timeline / 7);
		}
	}

	// Add add-on prices
	for (const addOnId of selections.addOns) {
		const addOn = ADD_ONS.find((a) => a.id === addOnId);
		if (addOn) {
			if ("recurring" in addOn && addOn.recurring) {
				monthlyRecurring.push({ name: addOn.name, price: addOn.price });
			} else {
				total += addOn.price;
				timelineWeeks += addOn.timeline.min;
			}
		}
	}

	// Add content creation if selected
	if (selections.includeContentCreation) {
		total += 1200; // CONTENT_CREATION_PRICE
		timelineWeeks += 1;
	}

	// Calculate monthly recurring total
	const totalMonthly = monthlyRecurring.reduce((sum, item) => sum + item.price, 0);

	// Calculate price range (±20%)
	const minPrice = Math.floor(total * 0.9);
	const maxPrice = Math.ceil(total * 1.1);

	return {
		basePrice: total,
		minPrice,
		maxPrice,
		totalPrice: total,
		timelineWeeks,
		monthlyRecurring,
		totalMonthly,
	};
}

/**
 * Use case presets for quick selection
 */
export const USE_CASE_PRESETS = [
	{
		id: "TAX_BUSINESS",
		name: "Tax Business Platform",
		icon: "🧾",
		description: "Complete platform for tax preparation and client management",
		selections: {
			projectType: "FULL_PLATFORM",
			features: [
				"AUTH_LOGIN",
				"CLIENT_DASHBOARD",
				"ADMIN_DASHBOARD",
				"DOCUMENT_UPLOAD",
				"PAYMENT_PROCESSING",
				"NOTIFICATIONS",
			],
			addOns: ["MAINTENANCE_PLAN"],
		},
	},
	{
		id: "ONLINE_STORE",
		name: "Online Store",
		icon: "🛍",
		description: "E-commerce platform with payment processing",
		selections: {
			projectType: "WEB_APPLICATION",
			features: ["AUTH_LOGIN", "PAYMENT_PROCESSING", "NOTIFICATIONS", "REPORTING_ANALYTICS"],
			addOns: [],
		},
	},
	{
		id: "SERVICE_COMPANY",
		name: "Service Company System",
		icon: "🏥",
		description: "Client portal for service-based businesses",
		selections: {
			projectType: "WEB_APPLICATION",
			features: [
				"AUTH_LOGIN",
				"CLIENT_DASHBOARD",
				"ADMIN_DASHBOARD",
				"DOCUMENT_UPLOAD",
				"NOTIFICATIONS",
			],
			addOns: ["MAINTENANCE_PLAN"],
		},
	},
	{
		id: "EDUCATION_PLATFORM",
		name: "Education Platform",
		icon: "🎓",
		description: "Learning management system with course delivery",
		selections: {
			projectType: "FULL_PLATFORM",
			features: [
				"AUTH_LOGIN",
				"CLIENT_DASHBOARD",
				"ADMIN_DASHBOARD",
				"PAYMENT_PROCESSING",
				"NOTIFICATIONS",
				"REPORTING_ANALYTICS",
			],
			addOns: [],
		},
	},
	{
		id: "CONSULTING_DASHBOARD",
		name: "Consulting Dashboard",
		icon: "🧑‍💼",
		description: "Client management and project tracking system",
		selections: {
			projectType: "WEB_APPLICATION",
			features: [
				"AUTH_LOGIN",
				"CLIENT_DASHBOARD",
				"ADMIN_DASHBOARD",
				"DOCUMENT_UPLOAD",
				"REPORTING_ANALYTICS",
			],
			addOns: ["HOSTING_SUPPORT"],
		},
	},
	{
		id: "COMMUNITY_PLATFORM",
		name: "Community Platform",
		icon: "🌍",
		description: "Social platform with user engagement features",
		selections: {
			projectType: "FULL_PLATFORM",
			features: [
				"AUTH_LOGIN",
				"CLIENT_DASHBOARD",
				"ADMIN_DASHBOARD",
				"LIVE_CHAT",
				"NOTIFICATIONS",
				"REPORTING_ANALYTICS",
			],
			addOns: ["MAINTENANCE_PLAN"],
		},
	},
] as const;

// Minimum project threshold
export const MINIMUM_PROJECT_THRESHOLD = 5000;
