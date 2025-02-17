"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ToggleTheme";

const Navbar = () => {
	return (
		<header className="w-full border-b bg-white dark:bg-gray-800">
			<div className="wrapper flex items-center justify-between">
				<Link href={"/"} className="w-36">
					<Image
						src={"/assets/images/logo.png"}
						width={58}
						height={10}
						alt="BFL logo"
					/>
				</Link>

				<nav className="md:flex-between hidden w-full max-w-xs">
					<NavItems />
				</nav>

				<div className="flex w-full justify-end items-center  gap-3">
					<ModeToggle />
					<MobileNav />
					<Button>Get Started</Button>
					<Button>Account</Button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
