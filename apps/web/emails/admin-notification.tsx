import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface AdminNotificationEmailProps {
	name: string;
	email: string;
	phone?: string;
	company?: string;
	message: string;
	ip_address: string;
	user_agent: string;
	timestamp: string;
}

export default function AdminNotificationEmail({
	name,
	email,
	phone,
	company,
	message,
	ip_address,
	user_agent,
	timestamp,
}: AdminNotificationEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New contact form submission from {name}</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header */}
					<Section style={header}>
						<Heading style={h1}>🚀 TechKlein Portfolio</Heading>
						<Text style={subtitle}>New Contact Form Submission</Text>
					</Section>

					<Hr style={hr} />

					{/* Contact Information */}
					<Section style={section}>
						<Heading style={h2}>Contact Details</Heading>
						<Text style={text}>
							<strong>Name:</strong> {name}
						</Text>
						<Text style={text}>
							<strong>Email:</strong>{" "}
							<a href={`mailto:${email}`} style={link}>
								{email}
							</a>
						</Text>
						{phone && (
							<Text style={text}>
								<strong>Phone:</strong> {phone}
							</Text>
						)}
						{company && (
							<Text style={text}>
								<strong>Company:</strong> {company}
							</Text>
						)}
					</Section>

					<Hr style={hr} />

					{/* Message */}
					<Section style={section}>
						<Heading style={h2}>Message</Heading>
						<Text style={messageBox}>{message}</Text>
					</Section>

					<Hr style={hr} />

					{/* Metadata */}
					<Section style={section}>
						<Heading style={h2}>Submission Details</Heading>
						<Text style={metadata}>
							<strong>Timestamp:</strong>{" "}
							{new Date(timestamp).toLocaleString("en-US", {
								dateStyle: "full",
								timeStyle: "long",
							})}
						</Text>
						<Text style={metadata}>
							<strong>IP Address:</strong> {ip_address}
						</Text>
						<Text style={metadata}>
							<strong>User Agent:</strong> {user_agent}
						</Text>
					</Section>

					{/* Footer */}
					<Hr style={hr} />
					<Section style={footer}>
						<Text style={footerText}>
							This notification was sent from your portfolio contact form at{" "}
							<a href="https://erickharlein.com" style={link}>
								erickharlein.com
							</a>
						</Text>
						<Text style={footerText}>
							Powered by <strong>TechKlein</strong> | Resend Email API
						</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

// Styles
const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
	borderRadius: "8px",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const header = {
	padding: "32px 48px",
	backgroundColor: "#7c3aed",
	borderTopLeftRadius: "8px",
	borderTopRightRadius: "8px",
};

const h1 = {
	color: "#ffffff",
	fontSize: "28px",
	fontWeight: "700",
	margin: "0 0 8px",
	lineHeight: "1.3",
};

const subtitle = {
	color: "#e9d5ff",
	fontSize: "16px",
	margin: "0",
	fontWeight: "500",
};

const section = {
	padding: "24px 48px",
};

const h2 = {
	color: "#1f2937",
	fontSize: "20px",
	fontWeight: "600",
	margin: "0 0 16px",
};

const text = {
	color: "#374151",
	fontSize: "16px",
	lineHeight: "1.6",
	margin: "8px 0",
};

const messageBox = {
	...text,
	backgroundColor: "#f3f4f6",
	padding: "16px",
	borderRadius: "6px",
	borderLeft: "4px solid #7c3aed",
	whiteSpace: "pre-wrap" as const,
	wordBreak: "break-word" as const,
};

const metadata = {
	color: "#6b7280",
	fontSize: "14px",
	lineHeight: "1.6",
	margin: "6px 0",
};

const hr = {
	borderColor: "#e5e7eb",
	margin: "0",
};

const footer = {
	padding: "24px 48px",
};

const footerText = {
	color: "#9ca3af",
	fontSize: "12px",
	lineHeight: "1.5",
	margin: "4px 0",
	textAlign: "center" as const,
};

const link = {
	color: "#7c3aed",
	textDecoration: "none",
};
