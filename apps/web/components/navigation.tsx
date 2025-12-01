"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@erickharlein/ui";
import { cn } from "@erickharlein/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/ecosystem", label: "Ecosystem" },
	{ href: "/contact", label: "Contact" },
];

export function Navigation() {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-primary/20 glass-strong">
			<nav className="container flex h-16 items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 group">
					<motion.div
						className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center"
						whileHover={{ rotate: 180 }}
						transition={{ duration: 0.4 }}
					>
						<Sparkles className="h-4 w-4 text-white" />
					</motion.div>
					<span className="text-xl font-bold text-gradient">
						TECHKLEIN
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"px-4 py-2 text-sm font-medium transition-all rounded-lg relative group",
								pathname === item.href
									? "text-primary"
									: "text-muted-foreground hover:text-primary",
							)}
						>
							{item.label}
							{pathname === item.href && (
								<motion.div
									className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500"
									layoutId="activeNav"
								/>
							)}
						</Link>
					))}
				</div>

				{/* Right Side Actions */}
				<div className="flex items-center space-x-4">
					<Link href="/booking">
						<Button size="sm" className="hidden md:inline-flex">
							Book Consultation
						</Button>
					</Link>

					{/* Theme Toggle */}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						className="w-9 h-9"
					>
						<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>

					{/* Mobile Menu Toggle */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<motion.div
					className="md:hidden border-t border-primary/20 glass"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
				>
					<div className="container py-4 space-y-2">
						{navItems.map((item, index) => (
							<motion.div
								key={item.href}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<Link
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className={cn(
										"block px-4 py-3 text-base font-medium rounded-lg transition-all",
										pathname === item.href
											? "glass-strong text-primary glow"
											: "text-muted-foreground hover:glass hover:text-primary",
									)}
								>
									{item.label}
								</Link>
							</motion.div>
						))}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: navItems.length * 0.1 }}
						>
							<Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
								<Button size="sm" className="w-full mt-2">
									Book Consultation
								</Button>
							</Link>
						</motion.div>
					</div>
				</motion.div>
			)}
		</header>
	);
}
