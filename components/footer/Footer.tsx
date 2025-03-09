"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Footer = () => {
	const { theme, setTheme } = useTheme();
	const links = [
		{ name: "Faq", href: "/faq" },
		{ name: "Terms & Conditions", href: "/terms-and-conditions" },
		{ name: "Privacy Policy", href: "/privacy-policy" },
	];

	return (
		<footer className="bg-background border-t border-border py-6 mt-12">
			<div className="container mx-auto px-4 flex  items-center flex-row justify-between gap-4">
				{/* Navigation Links */}
				<div className="flex flex-wrap justify-center  gap-4 text-sm text-muted-foreground">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="hover:text-primary transition-colors">
							{link.name}
						</Link>
					))}
				</div>

				{/* Theme Toggle */}
				<Button
					variant="outline"
					size="icon"
					className="mt-2 md:mt-0"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					aria-label="Toggle theme">
					{theme === "dark" ? (
						<Sun className="h-5 w-5" />
					) : (
						<Moon className="h-5 w-5" />
					)}
				</Button>
			</div>

			{/* Copyright Section */}
			<div className="mt-4 text-center text-xs text-muted-foreground">
				© {new Date().getFullYear()} Credix AI. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
