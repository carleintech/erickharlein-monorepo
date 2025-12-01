import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@erickharlein/ui";
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
	return (
		<div className="relative min-h-screen">
			{/* Animated Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden">
				<div
					className="absolute top-20 right-10 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl animate-pulse"
					style={{ animationDuration: "4s" }}
				/>
				<div
					className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-3xl animate-pulse"
					style={{ animationDuration: "6s" }}
				/>
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-3xl animate-pulse"
					style={{ animationDuration: "5s" }}
				/>
			</div>

			<div className="container py-12 max-w-5xl">
				{/* Header */}
				<div className="space-y-6 mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm">
						<Send className="h-4 w-4 text-blue-400" />
						<span className="text-sm font-medium text-blue-300">Let's Connect</span>
					</div>
					<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
						Get in Touch
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						Have a question or want to work together? I'd love to hear from you.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Contact Information */}
					<div className="space-y-6">
						<Card
							className="glass hover:scale-[1.01] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
							style={{ animationDelay: "200ms" }}
						>
							<div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
							<CardHeader>
								<CardTitle className="text-2xl">Contact Information</CardTitle>
								<CardDescription>
									Feel free to reach out through any of these channels
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<a
									href="mailto:erick@erickharlein.com"
									className="flex items-start gap-4 group hover:scale-[1.02] transition-all duration-300"
								>
									<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
										<Mail className="h-6 w-6 text-white" />
									</div>
									<div className="flex-1">
										<div className="font-semibold text-foreground group-hover:text-blue-400 transition-colors">
											Email
										</div>
										<div className="text-sm text-muted-foreground">erick@erickharlein.com</div>
									</div>
								</a>

								<a
									href="https://wa.me/15551234567"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start gap-4 group hover:scale-[1.02] transition-all duration-300"
								>
									<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
										<MessageSquare className="h-6 w-6 text-white" />
									</div>
									<div className="flex-1">
										<div className="font-semibold text-foreground group-hover:text-green-400 transition-colors">
											WhatsApp
										</div>
										<div className="text-sm text-muted-foreground">Quick chat available</div>
									</div>
								</a>

								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
										<MapPin className="h-6 w-6 text-white" />
									</div>
									<div className="flex-1">
										<div className="font-semibold text-foreground">Location</div>
										<div className="text-sm text-muted-foreground">United States</div>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500">
										<Phone className="h-6 w-6 text-white" />
									</div>
									<div className="flex-1">
										<div className="font-semibold text-foreground">Response Time</div>
										<div className="text-sm text-muted-foreground">Usually within 24-48 hours</div>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card
							className="glass hover:scale-[1.01] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
							style={{ animationDelay: "400ms" }}
						>
							<div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
							<CardHeader>
								<CardTitle className="text-2xl">Social & Professional</CardTitle>
								<CardDescription>Connect with me on these platforms</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<a
									href="https://github.com/erickharlein"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
								>
									<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 group-hover:scale-110 transition-transform">
										<Github className="h-5 w-5 text-white" />
									</div>
									<span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
										github.com/erickharlein
									</span>
								</a>
								<a
									href="https://linkedin.com/in/erickharlein"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
								>
									<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform">
										<Linkedin className="h-5 w-5 text-white" />
									</div>
									<span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
										linkedin.com/in/erickharlein
									</span>
								</a>
							</CardContent>
						</Card>

						<Card
							className="glass-strong border-2 border-indigo-500/30 animate-in fade-in slide-in-from-bottom-4"
							style={{ animationDelay: "600ms" }}
						>
							<CardContent className="pt-6 space-y-3">
								<div className="flex items-center gap-2 text-indigo-400">
									<Sparkles className="h-5 w-5" />
									<strong className="text-foreground">Looking for consultation?</strong>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Consider booking a dedicated time slot for a more structured discussion about your
									project needs. I'm here to help bring your ideas to life.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div
						className="animate-in fade-in slide-in-from-bottom-4"
						style={{ animationDelay: "800ms" }}
					>
						<Card className="glass hover:shadow-2xl transition-all duration-300">
							<div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
							<CardHeader>
								<CardTitle className="text-2xl">Send a Message</CardTitle>
								<CardDescription>I'll get back to you as soon as possible</CardDescription>
							</CardHeader>
							<CardContent>
								<ContactForm />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
