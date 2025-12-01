import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@erickharlein/ui";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Erickharlein | Systems Engineer & AI Architect",
	description:
		"U.S. Navy OS2, Systems Engineer, and AI Architect. Founder of the TechKlein ecosystem.",
	keywords: [
		"Systems Engineer",
		"AI Architect",
		"U.S. Navy",
		"TechKlein",
		"Software Engineering",
	],
	authors: [{ name: "Erickharlein" }],
	creator: "Erickharlein",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://erickharlein.com",
		title: "Erickharlein | Systems Engineer & AI Architect",
		description:
			"U.S. Navy OS2, Systems Engineer, and AI Architect. Founder of the TechKlein ecosystem.",
		siteName: "Erickharlein",
	},
	twitter: {
		card: "summary_large_image",
		title: "Erickharlein | Systems Engineer & AI Architect",
		description:
			"U.S. Navy OS2, Systems Engineer, and AI Architect. Founder of the TechKlein ecosystem.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative min-h-screen flex flex-col">
						<Navigation />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
