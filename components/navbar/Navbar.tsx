"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ToggleTheme";

const Navbar = () => {
	const handleLogin = () => {
		window.location.href = "https://app.zeloxai.com/login";
	};
	const handleRegister = () => {
		window.location.href = "https://app.zeloxai.com/register";
	};
	return (
		<header className="relative w-full border-b bg-white dark:bg-gray-800">
			<div className="wrapper flex items-center justify-between gap-3 md:gap-4">
				<Link
					href={"/"}
					className="relative z-10 w-28 shrink-0 md:w-52 flex items-center">
					<Image
						src={"/logo.png"}
						width={100}
						height={60}
						alt="Zelox AI Logo"
						className="h-10 w-auto md:h-[60px]"
					/>
				</Link>

				<span className="md:hidden pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base sm:text-lg text-gradient-brand select-none whitespace-nowrap">
					Zelox AI
				</span>

				<nav className="hidden md:flex flex-1 justify-center max-w-xs">
					<NavItems closeSheet={() => {}} />
				</nav>

				<div className="relative z-10 flex items-center justify-end gap-2 md:gap-3 shrink-0">
					<ModeToggle />
					<MobileNav />
					<div className="hidden md:flex gap-3">
						<Button
							onClick={handleLogin}
							size={"sm"}
							className="bg-primary-600 text-white">
							Sign In
						</Button>
						<Button
							onClick={handleRegister}
							size={"sm"}
							className="bg-secondary-500 text-white">
							Sign Up
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
