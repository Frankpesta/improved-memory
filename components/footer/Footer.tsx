"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden>
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
}

function YouTubeIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden>
			<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
		</svg>
	);
}

const SOCIAL_LINKS = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/share/1CtrPNgPLS/?mibextid=wwXIfr",
		Icon: FacebookIcon,
	},
	{
		name: "YouTube",
		href: "https://youtube.com/@zeloxai?si=Lu8S1g5i-37rinaT",
		Icon: YouTubeIcon,
	},
] as const;

function SocialIconLinks({ className }: { className?: string }) {
	return (
		<div className={className}>
			{SOCIAL_LINKS.map(({ name, href, Icon }) => (
				<a
					key={href}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted/80"
					aria-label={`Zelox AI on ${name}`}>
					<Icon className="h-5 w-5" />
				</a>
			))}
		</div>
	);
}

const Footer = () => {
	const { theme, setTheme } = useTheme();
	const links = [
		{ name: "Faq", href: "/faq" },
		{ name: "Terms & Conditions", href: "/terms-and-conditions" },
		{ name: "Privacy Policy", href: "/privacy-policy" },
	];

	return (
		<footer className="bg-background border-t border-border py-6 mt-12">
			<div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
				{/* Navigation Links */}
				<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="hover:text-primary transition-colors">
							{link.name}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-1 sm:gap-2">
					<SocialIconLinks className="hidden sm:flex items-center gap-1 sm:gap-2" />
					{/* Theme Toggle */}
					<Button
						variant="outline"
						size="icon"
						className="shrink-0"
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
						aria-label="Toggle theme">
						{theme === "dark" ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</Button>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="mt-4 text-center text-xs text-muted-foreground">
				© {new Date().getFullYear()} Zelox AI. All rights reserved.
			</div>

			{/* Social icons below copyright on small screens only */}
			<SocialIconLinks className="mt-4 flex sm:hidden items-center justify-center gap-1" />
		</footer>
	);
};

export default Footer;
