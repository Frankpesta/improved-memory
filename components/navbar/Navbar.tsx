"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ToggleTheme";
import { GoogleTranslate } from "../google-translate";

const Navbar = () => {
	const handleLogin = () => {
		window.location.href = "https://app.zeloxai.com/login";
	};
	const handleRegister = () => {
		window.location.href = "https://app.zeloxai.com/register";
	};
	return (
		<header className="relative z-50 w-full overflow-visible border-b border-slate-200/90 bg-white dark:border-slate-700/90 dark:bg-gray-800">
			<div className="wrapper flex items-center gap-3 py-3 sm:gap-4 lg:gap-5">
				<Link
					href={"/"}
					className="relative z-10 flex shrink-0 items-center w-24 sm:w-28 md:w-32 lg:w-40">
					<Image
						src={"/logo.png"}
						width={100}
						height={60}
						alt="Zelox AI Logo"
						className="h-9 w-auto sm:h-10 md:h-11 lg:h-[52px]"
					/>
				</Link>

				<span className="lg:hidden pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base sm:text-lg text-gradient-brand select-none whitespace-nowrap">
					Zelox AI
				</span>

				<nav
					className="hidden min-h-10 min-w-0 flex-1 md:flex md:items-center md:justify-center md:px-1 lg:px-2"
					aria-label="Main">
					<div className="max-w-full min-w-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
						<NavItems closeSheet={() => {}} />
					</div>
				</nav>

				<div className="relative z-10 flex shrink-0 flex-nowrap items-center justify-end gap-2 sm:gap-2.5 md:gap-3 md:border-l md:border-slate-200/80 md:pl-3 lg:pl-4 dark:md:border-slate-600/80">
					<GoogleTranslate />
					<ModeToggle />
					<MobileNav />
					<div className="hidden items-center gap-2 md:flex lg:gap-2.5">
						<Button
							onClick={handleLogin}
							size={"sm"}
							className="whitespace-nowrap bg-primary-600 px-3 text-white lg:px-4">
							Sign In
						</Button>
						<Button
							onClick={handleRegister}
							size={"sm"}
							className="whitespace-nowrap bg-secondary-500 px-3 text-white lg:px-4">
							Sign Up
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
