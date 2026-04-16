"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
	closeSheet: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({ closeSheet }) => {
	const pathname = usePathname();
	return (
		<ul className="flex w-full flex-col items-start gap-5 font-semibold md:w-max md:flex-row md:items-center md:justify-center md:gap-x-2 lg:gap-x-3 xl:gap-x-4 md:gap-y-0">
			{headerLinks.map((link) => {
				const isActive = pathname === link.route;

				return (
					<li key={link.route} onClick={closeSheet} className="w-full md:w-auto">
						<Link
							href={link.route}
							className={`block w-full py-1 text-sm leading-snug transition-colors hover:text-primary-600 dark:hover:text-primary-500 md:inline md:w-auto md:py-1.5 lg:text-[15px] xl:text-base ${
								isActive
									? "font-bold text-primary-600 dark:text-primary-500"
									: "text-slate-800 dark:text-slate-100"
							}`}>
							{link.label}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItems;
