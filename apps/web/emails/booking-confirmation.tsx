interface BookingConfirmationEmailProps {
	customerName: string;
	projectType: string;
	totalAmount: number;
	depositAmount: number;
	monthlyAmount?: number;
	timelineWeeks: number;
	customerEmail: string;
	customerPhone?: string;
}

export function BookingConfirmationEmail({
	customerName,
	projectType,
	totalAmount,
	depositAmount,
	monthlyAmount,
	timelineWeeks,
	customerEmail,
	customerPhone,
}: BookingConfirmationEmailProps) {
	return (
		<html lang="en">
		<body
			style={{
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
				lineHeight: "1.6",
				color: "#1f2937",
				backgroundColor: "#f9fafb",
				margin: 0,
				padding: 0,
			}}
		>
			<div
				style={{
					maxWidth: "600px",
					margin: "40px auto",
					backgroundColor: "#ffffff",
					borderRadius: "12px",
					overflow: "hidden",
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				}}
			>
				{/* Header */}
				<div
					style={{
						background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
						padding: "40px 30px",
						textAlign: "center",
					}}
				>
					<div
						style={{
							width: "64px",
							height: "64px",
							backgroundColor: "rgba(255, 255, 255, 0.2)",
							borderRadius: "50%",
							margin: "0 auto 20px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							border: "3px solid rgba(255, 255, 255, 0.3)",
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#ffffff"
							strokeWidth="3"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<title>Check</title>
							<polyline points="20 6 9 17 4 12" />
						</svg>
					</div>
					<h1
						style={{
							color: "#ffffff",
							fontSize: "28px",
							fontWeight: "700",
							margin: "0 0 10px 0",
						}}
					>
						Payment Confirmed! 🎉
					</h1>
					<p
						style={{
							color: "rgba(255, 255, 255, 0.9)",
							fontSize: "16px",
							margin: 0,
						}}
					>
						Your project slot is reserved
					</p>
				</div>

				{/* Content */}
				<div style={{ padding: "40px 30px" }}>
					<p style={{ fontSize: "16px", marginTop: 0 }}>
						Hey <strong>{customerName}</strong>,
					</p>
					<p style={{ fontSize: "16px" }}>
						Thank you for trusting TechKlein with your project! Your deposit has
						been received and your project slot is now officially reserved.
					</p>

					{/* Project Details */}
					<div
						style={{
							backgroundColor: "#f3f4f6",
							borderRadius: "8px",
							padding: "24px",
							marginTop: "30px",
							marginBottom: "30px",
						}}
					>
						<h2
							style={{
								fontSize: "18px",
								fontWeight: "600",
								margin: "0 0 16px 0",
								color: "#1f2937",
							}}
						>
							📋 Project Details
						</h2>
						<table style={{ width: "100%", borderCollapse: "collapse" }}>
							<tbody>
								<tr>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											color: "#6b7280",
										}}
									>
										Project Type:
									</td>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											fontWeight: "600",
											textAlign: "right",
										}}
									>
										{projectType}
									</td>
								</tr>
								<tr>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											color: "#6b7280",
										}}
									>
										Total Amount:
									</td>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											fontWeight: "600",
											textAlign: "right",
										}}
									>
										${totalAmount.toLocaleString()}
									</td>
								</tr>
								<tr>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											color: "#6b7280",
										}}
									>
										Deposit Paid:
									</td>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											fontWeight: "600",
											textAlign: "right",
											color: "#10b981",
										}}
									>
										${depositAmount.toLocaleString()} ✓
									</td>
								</tr>
								{monthlyAmount && (
									<tr>
										<td
											style={{
												padding: "8px 0",
												fontSize: "14px",
												color: "#6b7280",
											}}
										>
											Monthly Payment:
										</td>
										<td
											style={{
												padding: "8px 0",
												fontSize: "14px",
												fontWeight: "600",
												textAlign: "right",
											}}
										>
											${monthlyAmount.toLocaleString()}/mo
										</td>
									</tr>
								)}
								<tr>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											color: "#6b7280",
										}}
									>
										Timeline:
									</td>
									<td
										style={{
											padding: "8px 0",
											fontSize: "14px",
											fontWeight: "600",
											textAlign: "right",
										}}
									>
										{timelineWeeks} weeks
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* What Happens Next */}
					<h2
						style={{
							fontSize: "18px",
							fontWeight: "600",
							marginTop: "30px",
							marginBottom: "20px",
						}}
					>
						🚀 What Happens Next?
					</h2>
					<div style={{ marginBottom: "20px" }}>
						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								marginBottom: "16px",
							}}
						>
							<div
								style={{
									width: "32px",
									height: "32px",
									backgroundColor: "#10b981",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#ffffff",
									fontWeight: "700",
									fontSize: "14px",
									flexShrink: 0,
									marginRight: "12px",
								}}
							>
								1
							</div>
							<div>
								<strong style={{ fontSize: "15px", display: "block" }}>
									Check Your Email
								</strong>
								<span style={{ fontSize: "14px", color: "#6b7280" }}>
									You'll receive a separate email with your payment receipt
								</span>
							</div>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "flex-start",
								marginBottom: "16px",
							}}
						>
							<div
								style={{
									width: "32px",
									height: "32px",
									backgroundColor: "#3b82f6",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#ffffff",
									fontWeight: "700",
									fontSize: "14px",
									flexShrink: 0,
									marginRight: "12px",
								}}
							>
								2
							</div>
							<div>
								<strong style={{ fontSize: "15px", display: "block" }}>
									Kickoff Call (Within 24 Hours)
								</strong>
								<span style={{ fontSize: "14px", color: "#6b7280" }}>
									I'll email you a Calendly link to schedule our first strategy
									session
								</span>
							</div>
						</div>

						<div style={{ display: "flex", alignItems: "flex-start" }}>
							<div
								style={{
									width: "32px",
									height: "32px",
									backgroundColor: "#8b5cf6",
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#ffffff",
									fontWeight: "700",
									fontSize: "14px",
									flexShrink: 0,
									marginRight: "12px",
								}}
							>
								3
							</div>
							<div>
								<strong style={{ fontSize: "15px", display: "block" }}>
									Development Begins
								</strong>
								<span style={{ fontSize: "14px", color: "#6b7280" }}>
									After requirements gathering, I'll start building your solution
								</span>
							</div>
						</div>
					</div>

					{/* Important Info */}
					<div
						style={{
							backgroundColor: "#e0f2fe",
							borderLeft: "4px solid #0ea5e9",
							borderRadius: "4px",
							padding: "16px",
							marginTop: "30px",
							marginBottom: "30px",
						}}
					>
						<p
							style={{
								margin: "0 0 8px 0",
								fontSize: "14px",
								fontWeight: "600",
								color: "#0c4a6e",
							}}
						>
							💡 Important Information
						</p>
						<p style={{ margin: 0, fontSize: "14px", color: "#0c4a6e" }}>
							Your deposit is non-refundable but fully credited toward your
							total project cost. It secures your dedicated development time and
							ensures we can start work immediately.
						</p>
					</div>

					{/* Contact Details */}
					<h3
						style={{
							fontSize: "16px",
							fontWeight: "600",
							marginTop: "30px",
							marginBottom: "12px",
						}}
					>
						Your Contact Details:
					</h3>
					<p style={{ fontSize: "14px", color: "#6b7280", margin: "4px 0" }}>
						<strong>Email:</strong> {customerEmail}
					</p>
					{customerPhone && (
						<p style={{ fontSize: "14px", color: "#6b7280", margin: "4px 0" }}>
							<strong>Phone:</strong> {customerPhone}
						</p>
					)}

					<p style={{ fontSize: "16px", marginTop: "30px", marginBottom: "8px" }}>
						Got questions? Just reply to this email or reach out anytime.
					</p>
					<p style={{ fontSize: "16px", margin: "8px 0" }}>
						Let's build something amazing! 🚀
					</p>
					<p style={{ fontSize: "16px", margin: "8px 0" }}>
						<strong>Erick Klein</strong>
						<br />
						<span style={{ color: "#6b7280", fontSize: "14px" }}>
							TechKlein
						</span>
					</p>
				</div>

				{/* Footer */}
				<div
					style={{
						backgroundColor: "#f9fafb",
						padding: "24px 30px",
						textAlign: "center",
						borderTop: "1px solid #e5e7eb",
					}}
				>
					<p
						style={{
							margin: "0 0 8px 0",
							fontSize: "12px",
							color: "#9ca3af",
						}}
					>
						© 2024 TechKlein. All rights reserved.
					</p>
					<p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>
						If you didn't make this booking, please contact us immediately.
					</p>
				</div>
			</div>
		</body>
	</html>
	);
}

export default BookingConfirmationEmail;
