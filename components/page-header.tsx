import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
	title: string;
	description?: string;
	className?: string;
	align?: "left" | "center";
}

const PageHeader = ({
	title,
	description,
	className,
	align = "left",
}: PageHeaderProps) => {
	return (
		<div
			className={cn(
				"py-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background",
				align === "center" && "text-center",
				className
			)}>
			<h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
				{title}
			</h1>
			{description && (
				<p className="max-w-fulltext-lg text-muted-foreground sm:text-xl py-6 px-4 sm:text-left">
					{description}
				</p>
			)}
		</div>
	);
};

export default PageHeader;
