import React from "react";
import { UserPlus, Bot, Wallet } from "lucide-react";

interface TimelineStepProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	step: number;
	isLast?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
	icon,
	title,
	description,
	step,
	isLast,
}) => (
	<div className="relative flex items-start">
		{/* Step number */}
		<div className="flex items-center justify-center">
			<div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center z-10">
				{icon}
			</div>
			{!isLast && (
				<div className="absolute top-12 left-6 w-0.5 h-full bg-primary-200 dark:bg-primary-800" />
			)}
		</div>

		{/* Content */}
		<div className="ml-8 pb-12">
			<div className="flex items-center mb-2">
				<span className="text-sm font-medium text-primary-600 mr-2">
					Step {step}
				</span>
				<h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
					{title}
				</h3>
			</div>
			<p className="text-neutral-600 dark:text-neutral-400">{description}</p>
		</div>
	</div>
);

const HowItWorks = () => {
	const steps = [
		{
			icon: <UserPlus className="h-6 w-6 text-white" />,
			title: "Register & Deposit",
			description:
				"Create an account and deposit your trading in crypto (BTC, ETH, USDT, etc.).",
		},
		{
			icon: <Bot className="h-6 w-6 text-white" />,
			title: "AI BOT Trades for You",
			description:
				"Once your deposit is confirmed, our AI BOT automatically starts trading and generating daily returns.",
		},
		{
			icon: <Wallet className="h-6 w-6 text-white" />,
			title: "Earn & Withdraw Profits",
			description:
				"You receive your daily earnings directly in your account and can withdraw anytime after your 90-day cycle.",
		},
	];

	return (
		<section className="py-16 bg-neutral-50 dark:bg-dark-300">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
							How It Works
						</h2>
						<div className="w-20 h-1 bg-primary-600 mx-auto"></div>
					</div>

					<div className="relative">
						{steps.map((step, index) => (
							<TimelineStep
								key={index}
								step={index + 1}
								icon={step.icon}
								title={step.title}
								description={step.description}
								isLast={index === steps.length - 1}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
