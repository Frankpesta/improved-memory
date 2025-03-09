"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	const handleLogin = () => {
		window.location.href = "https://app.credixai.com/login";
	};

	const handleRegister = () => {
		window.location.href = "https://app.credixai.com/register";
	};

	const closeSheet = () => setOpen(false);

	return (
		<nav className="md:hidden">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger className="align-middle" onClick={() => setOpen(true)}>
					<MenuIcon width={24} height={24} className="cursor-pointer" />
				</SheetTrigger>
				<SheetContent
					side="left"
					className="flex flex-col gap-6 bg-white dark:bg-gray-900 md:hidden">
					<Image
						src={"/assets/aifav.png"}
						alt="logo"
						width={100}
						height={100}
					/>
					<Separator className="border border-gray-50" />
					<NavItems closeSheet={closeSheet} />
					<div className="flex flex-col gap-3 lg:hidden space-y-4">
						<Button
							onClick={handleLogin}
							size="lg"
							className="bg-primary-600 text-white">
							Sign In
						</Button>
						<Button
							onClick={handleRegister}
							size="lg"
							className="bg-secondary-500 text-white">
							Sign Up
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
