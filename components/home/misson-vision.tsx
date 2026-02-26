import React from "react";
import { Target, Lightbulb } from "lucide-react";

interface VisionCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	type: "mission" | "vision";
}

const VisionCard: React.FC<VisionCardProps> = ({
	icon,
	title,
	description,
	type,
}) => (
	<div
		className={`p-8 rounded-2xl ${
			type === "mission"
				? "bg-primary-600 text-white"
				: "bg-white dark:bg-dark-200"
		}`}>
		<div
			className={`inline-flex p-3 rounded-xl mb-6 ${
				type === "mission"
					? "bg-white/10"
					: "bg-primary-50 dark:bg-primary-900/20"
			}`}>
			{icon}
		</div>
		<h3
			className={`text-2xl font-bold mb-4 ${
				type === "vision"
					? "text-neutral-900 dark:text-neutral-50"
					: "text-white"
			}`}>
			{title}
		</h3>
		<p
			className={`text-lg leading-relaxed ${
				type === "vision"
					? "text-neutral-600 dark:text-neutral-400"
					: "text-white/90"
			}`}>
			{description}
		</p>
	</div>
);

const MissionVisionSection = () => {
	return (
		<section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-neutral-50 dark:from-dark-400 dark:to-dark-300">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-8">
						<VisionCard
							type="mission"
							icon={<Target className="h-8 w-8 text-white" />}
							title="Our Mission"
							description="To provide a secure, transparent, and highly profitable AI-driven trading experience that allows investors to earn consistent passive income while leveraging cutting-edge technology."
						/>
						<VisionCard
							type="vision"
							icon={<Lightbulb className="h-8 w-8 text-primary-600" />}
							title="Our Vision"
							description="To become the leading AI-powered trading platform, revolutionizing how investors generate wealth through automation, efficiency, and financial innovation."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionVisionSection;
