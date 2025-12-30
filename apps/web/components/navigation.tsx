"use client";

import { Button } from "@erickharlein/ui";
import { cn } from "@erickharlein/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Moon, Sparkles, Sun, X, Zap, Home, Briefcase, Code2, Mail, Layers } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const navItems = [
	{ href: "/", label: "Home", icon: Home },
	{ href: "/about", label: "About", icon: Sparkles },
	{ href: "/services", label: "Services", icon: Briefcase },
	{ href: "/projects", label: "Projects", icon: Code2 },
	{ href: "/ecosystem", label: "Ecosystem", icon: Layers },
	{ href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { scrollY } = useScroll();
	
	// Transform values based on scroll
	const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1]);
	const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.header
			style={{ opacity: navOpacity }}
			className={cn(
				"fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
				scrolled ? "w-[95%] max-w-6xl" : "w-[98%] max-w-7xl"
			)}
		>
			<motion.nav
				className={cn(
					"relative rounded-2xl border transition-all duration-500",
					scrolled 
						? "glass-strong border-primary/40 shadow-2xl shadow-black/20" 
						: "glass border-primary/20 shadow-xl shadow-black/10"
				)}
			>
				{/* Gradient border animation */}
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
				
				{/* Animated gradient line on top */}
				<motion.div
					className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-t-2xl"
					animate={{
						backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "linear"
					}}
					style={{ backgroundSize: "200% 100%" }}
				/>

				<div className="relative flex h-16 items-center justify-between px-6">
					{/* Logo - Morphing design */}
					<Link href="/" className="flex items-center gap-3 group">
						<motion.div
							className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center overflow-hidden"
							whileHover={{ scale: 1.1, rotate: 180 }}
							transition={{ type: "spring", stiffness: 260, damping: 20 }}
						>
							{/* Animated sparkle effect */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"
								animate={{
									rotate: [0, 360],
									scale: [1, 1.2, 1],
								}}
								transition={{ duration: 3, repeat: Infinity }}
							/>
							<Zap className="h-5 w-5 text-white relative z-10" />
						</motion.div>
						<div className="flex flex-col">
							<span className="text-lg font-black tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
								TECHKLEIN
							</span>
							<span className="text-[8px] font-semibold text-muted-foreground tracking-widest -mt-1">
								ENGINEERING EXCELLENCE
							</span>
						</div>
					</Link>

					{/* Desktop Navigation - Floating Pills */}
					<div className="hidden md:flex items-center gap-2">
						{navItems.map((item) => {
							const Icon = item.icon;
							const isActive = pathname === item.href;
							
							return (
								<Link key={item.href} href={item.href}>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className={cn(
											"relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2",
											isActive
												? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 text-white border border-primary/40 shadow-lg shadow-primary/20"
												: "text-muted-foreground hover:text-foreground hover:bg-primary/5"
										)}
									>
										{isActive && (
											<motion.div
												layoutId="navPill"
												className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-xl"
												transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
											/>
										)}
										<Icon className={cn("h-4 w-4 relative z-10", isActive && "text-blue-400")} />
										<span className="relative z-10">{item.label}</span>
										
										{/* Hover glow effect */}
										{!isActive && (
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-cyan-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
											/>
										)}
									</motion.div>
								</Link>
							);
						})}
					</div>

					{/* Right Side Actions */}
					<div className="flex items-center gap-3">
						{/* CTA Button - Premium design */}
						<Link href="/booking" className="hidden md:block">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button 
									size="sm" 
									className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 border-0 shadow-lg shadow-blue-500/30 font-semibold"
								>
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
										animate={{
											x: ["-100%", "100%"],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "linear"
										}}
									/>
									<span className="relative z-10 flex items-center gap-2">
										<Sparkles className="h-3.5 w-3.5" />
										Book Now
									</span>
								</Button>
							</motion.div>
						</Link>

						{/* Theme Toggle - Morphing design */}
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
								className="w-10 h-10 rounded-xl hover:bg-primary/10 relative overflow-hidden group"
							>
								<motion.div
									className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
								/>
								<Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
								<Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</motion.div>

						{/* Mobile Menu Toggle - Futuristic */}
						<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden">
							<Button
								variant="ghost"
								size="icon"
								className="w-10 h-10 rounded-xl hover:bg-primary/10"
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								<motion.div
									animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
									transition={{ duration: 0.3 }}
								>
									{mobileMenuOpen ? (
										<X className="h-5 w-5" />
									) : (
										<Menu className="h-5 w-5" />
									)}
								</motion.div>
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu - Slide from top */}
			{mobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: -20, scale: 0.95 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className="md:hidden mt-2 p-4 rounded-2xl glass-strong border border-primary/40 shadow-2xl"
				>
					<div className="space-y-2">
						{navItems.map((item, index) => {
							const Icon = item.icon;
							const isActive = pathname === item.href;
							
							return (
								<motion.div
									key={item.href}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05 }}
								>
									<Link
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className={cn(
											"flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all",
											isActive
												? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 text-white border border-primary/40 shadow-lg"
												: "text-muted-foreground hover:text-foreground hover:bg-primary/5"
										)}
									>
										<Icon className={cn("h-5 w-5", isActive && "text-blue-400")} />
										{item.label}
									</Link>
								</motion.div>
							);
						})}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: navItems.length * 0.05 }}
							className="pt-2"
						>
							<Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
								<Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 border-0 shadow-lg">
									<Sparkles className="h-4 w-4 mr-2" />
									Book Consultation
								</Button>
							</Link>
						</motion.div>
					</div>
				</motion.div>
			)}
		</motion.header>
	);
}
