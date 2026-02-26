"use client";
import React from "react";

const TowerResearchCard = () => {
	return (
		<section className="py-8 px-4">
			<div className="container mx-auto max-w-4xl flex justify-center">
				{/* Circle-style badge with gradient border */}
				<div
					className="relative rounded-full overflow-hidden p-[2px] w-full max-w-2xl"
					style={{
						background:
							"linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)",
						boxShadow:
							"0 0 24px rgba(139, 92, 246, 0.25), 0 0 48px rgba(59, 130, 246, 0.12)",
					}}>
					<div className="rounded-full bg-background/30 dark:bg-background/20 backdrop-blur-md px-8 py-6 text-center">
						<p className="text-sm text-foreground/90 dark:text-primary-200/90 leading-relaxed">
							Developed and operated by{" "}
							<span className="font-semibold text-primary-700 dark:text-primary-300">
								TOWER RESEARCH CAPITAL
							</span>{" "}
							a UK-registered research and technology company (Company Reg No.
							06005750)
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TowerResearchCard;
