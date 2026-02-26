"use client";
import React from "react";

const TowerResearchCard = () => {
	return (
		<section className="py-8 px-4">
			<div className="container mx-auto max-w-4xl">
				{/* Full border transparent card with gradient border */}
				<div
					className="relative rounded-2xl overflow-hidden p-[2px]"
					style={{
						background:
							"linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%)",
						boxShadow:
							"0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)",
					}}>
					<div className="rounded-2xl bg-background/30 dark:bg-background/20 backdrop-blur-md px-6 py-5 text-center">
						<p className="text-sm text-foreground/90 dark:text-primary-200/90 leading-relaxed max-w-3xl mx-auto">
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
