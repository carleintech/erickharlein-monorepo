/**
 * Booking Wizard Types and State Management
 */

export interface BookingWizardState {
	// Current Progress
	currentStep: number;
	completedSteps: number[];

	// Step 1: Domain & Infrastructure
	domain: {
		hasDomain: boolean | null;
		domainName: string;
		currentHost: string;
		needsTransferHelp: boolean;
	};

	// Step 2: Preset Selection (optional quick start)
	presetId: string | null;

	// Step 3: Project Type
	projectType: string | null;

	// Step 4: Features
	selectedFeatures: string[];

	// Step 5: Add-Ons
	selectedAddOns: string[];

	// Step 6: Content Creation & Contact Information
	includeContentCreation: boolean;
	contact: {
		name: string;
		email: string;
		phone: string;
		company: string;
		notes: string;
	};

	// Step 8: Contract & Terms
	contractAccepted: boolean;

	// Pricing (calculated)
	pricing: {
		basePrice: number;
		featuresTotal: number;
		addOnsOneTime: number;
		addOnsMonthly: number;
		contentCreation: number;
		totalOneTime: number;
		totalMonthly: number;
		depositAmount: number;
		depositPercentage: number;
	};

	// Timeline (calculated)
	estimatedTimelineWeeks: number;

	// Session
	sessionToken?: string;
	lastSaved?: Date;
}

export const INITIAL_WIZARD_STATE: BookingWizardState = {
	currentStep: 0,
	completedSteps: [],
	domain: {
		hasDomain: null,
		domainName: "",
		currentHost: "",
		needsTransferHelp: false,
	},
	presetId: null,
	projectType: null,
	selectedFeatures: [],
	selectedAddOns: [],
	includeContentCreation: false,
	contact: {
		name: "",
		email: "",
		phone: "",
		company: "",
		notes: "",
	},
	contractAccepted: false,
	pricing: {
		basePrice: 0,
		featuresTotal: 0,
		addOnsOneTime: 0,
		addOnsMonthly: 0,
		contentCreation: 0,
		totalOneTime: 0,
		totalMonthly: 0,
		depositAmount: 0,
		depositPercentage: 20,
	},
	estimatedTimelineWeeks: 0,
};

export const WIZARD_STEPS = [
	{ id: 0, name: "Welcome", title: "Welcome to Your Project Builder" },
	{ id: 1, name: "Domain", title: "Domain & Infrastructure" },
	{ id: 2, name: "Preset", title: "Quick Start Presets" },
	{ id: 3, name: "Project Type", title: "Type of Project" },
	{ id: 4, name: "Features", title: "Features You Need" },
	{ id: 5, name: "Add-Ons", title: "Extra Add-Ons" },
	{ id: 6, name: "Contact", title: "Your Information" },
	{ id: 7, name: "Review", title: "Review & Contract" },
	{ id: 8, name: "Deposit", title: "Secure Your Slot" },
] as const;

export const CONTENT_CREATION_PRICE = 1200;
export const DEFAULT_DEPOSIT_PERCENTAGE = 20;
