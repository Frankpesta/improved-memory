"use client";
import React from "react";

/** Pill banner only – use when you need "Trusted By Crypto Investors Since 2020" without the hero image. */
const TrustedBannerImage = () => {
	return (
		<section className="py-6 px-4">
			<div className="container mx-auto flex justify-center">
				<div className="inline-flex items-center gap-3 rounded-full border border-primary-500/30 dark:border-primary-400/30 bg-primary-500/5 dark:bg-primary-950/40 px-6 py-3 backdrop-blur-sm">
					<span className="h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0" />
					<span className="text-sm font-medium text-foreground dark:text-primary-200">
						Trusted By Crypto Investors Since 2020
					</span>
				</div>
			</div>
		</section>
	);
};

export default TrustedBannerImage;
