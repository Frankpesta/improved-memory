"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ToggleTheme";

const Navbar = () => {
	const handleLogin = () => {
		window.location.href = "https://app.credixai.com/login";
	};
	const handleRegister = () => {
		window.location.href = "https://app.credixai.com/register";
	};
	return (
		<header className="w-full border-b bg-white dark:bg-gray-800">
			<div className="wrapper flex items-center justify-between">
				<Link href={"/"} className="w-52">
					<Image
						src={"/assets/aifav.png"}
						width={100}
						height={60}
						alt="Credix AI Logo"
					/>
				</Link>

				<nav className="md:flex-between hidden w-full max-w-xs">
					<NavItems closeSheet={() => {}} />
				</nav>

				<div className="flex w-full justify-end items-center  gap-3">
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
