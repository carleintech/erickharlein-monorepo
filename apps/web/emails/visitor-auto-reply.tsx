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
	Link,
} from "@react-email/components";

interface VisitorAutoReplyEmailProps {
	name: string;
}

export default function VisitorAutoReplyEmail({ name }: VisitorAutoReplyEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>Thank you for contacting TechKlein — We received your message</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header */}
					<Section style={header}>
						<Heading style={h1}>✉️ Message Received</Heading>
						<Text style={subtitle}>TechKlein Portfolio</Text>
					</Section>

					<Hr style={hr} />

					{/* Main Content */}
					<Section style={section}>
						<Text style={greeting}>Hello {name},</Text>
						<Text style={text}>
							Thank you for reaching out to <strong>TechKlein</strong>. Your message has been
							successfully received and I appreciate you taking the time to connect.
						</Text>
						<Text style={text}>
							I review all inquiries personally and will respond to you within{" "}
							<strong>24-48 hours</strong>. If your inquiry is urgent, please feel free to reach
							out via WhatsApp.
						</Text>
					</Section>

					<Hr style={hr} />

					{/* Quick Links */}
					<Section style={section}>
						<Heading style={h2}>While You Wait</Heading>
						<Text style={text}>Feel free to explore:</Text>
						<Text style={linkList}>
							🚀{" "}
							<Link href="https://erickharlein.com/projects" style={link}>
								My Projects
							</Link>{" "}
							— See what I've built
						</Text>
						<Text style={linkList}>
							🌐{" "}
							<Link href="https://erickharlein.com/ecosystem" style={link}>
								TechKlein Ecosystem
							</Link>{" "}
							— The big vision
						</Text>
						<Text style={linkList}>
							💼{" "}
							<Link href="https://linkedin.com/in/carleintech" style={link}>
								LinkedIn Profile
							</Link>{" "}
							— Connect professionally
						</Text>
						<Text style={linkList}>
							💻{" "}
							<Link href="https://github.com/carleintech" style={link}>
								GitHub
							</Link>{" "}
							— Browse my code
						</Text>
					</Section>

					<Hr style={hr} />

					{/* Signature */}
					<Section style={section}>
						<Text style={signature}>Best regards,</Text>
						<Text style={signatureName}>Erickharlein Pierre</Text>
						<Text style={signatureTitle}>Founder & CEO</Text>
						<Text style={signatureCompany}>TechKlein</Text>
					</Section>

					{/* Footer */}
					<Hr style={hr} />
					<Section style={footer}>
						<Text style={footerText}>
							📧 Email:{" "}
							<Link href="mailto:erickharleinp@gmail.com" style={link}>
								erickharleinp@gmail.com
							</Link>
						</Text>
						<Text style={footerText}>
							💬 WhatsApp:{" "}
							<Link href="https://wa.me/18508610959" style={link}>
								+1 (850) 861-0959
							</Link>
						</Text>
						<Text style={footerText}>
							🌐 Website:{" "}
							<Link href="https://erickharlein.com" style={link}>
								erickharlein.com
							</Link>
						</Text>
						<Text style={footerDisclaimer}>
							This is an automated response. Please do not reply to this email directly.
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
	background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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

const greeting = {
	color: "#1f2937",
	fontSize: "18px",
	fontWeight: "600",
	lineHeight: "1.6",
	margin: "0 0 16px",
};

const text = {
	color: "#374151",
	fontSize: "16px",
	lineHeight: "1.6",
	margin: "12px 0",
};

const linkList = {
	color: "#374151",
	fontSize: "15px",
	lineHeight: "1.8",
	margin: "8px 0",
};

const link = {
	color: "#7c3aed",
	textDecoration: "none",
	fontWeight: "500",
};

const signature = {
	color: "#374151",
	fontSize: "16px",
	margin: "24px 0 8px",
};

const signatureName = {
	color: "#1f2937",
	fontSize: "18px",
	fontWeight: "700",
	margin: "4px 0",
};

const signatureTitle = {
	color: "#6b7280",
	fontSize: "14px",
	margin: "2px 0",
};

const signatureCompany = {
	color: "#7c3aed",
	fontSize: "16px",
	fontWeight: "600",
	margin: "2px 0",
};

const hr = {
	borderColor: "#e5e7eb",
	margin: "0",
};

const footer = {
	padding: "24px 48px",
	backgroundColor: "#f9fafb",
	borderBottomLeftRadius: "8px",
	borderBottomRightRadius: "8px",
};

const footerText = {
	color: "#6b7280",
	fontSize: "14px",
	lineHeight: "1.6",
	margin: "6px 0",
	textAlign: "center" as const,
};

const footerDisclaimer = {
	color: "#9ca3af",
	fontSize: "12px",
	lineHeight: "1.5",
	margin: "12px 0 0",
	textAlign: "center" as const,
	fontStyle: "italic",
};
