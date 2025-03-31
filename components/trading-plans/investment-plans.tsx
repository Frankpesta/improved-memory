import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Check,
	TrendingUp,
	DollarSign,
	RefreshCw,
	CalendarPlus,
} from "lucide-react";

const StepItem = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => (
	<div className="flex items-start space-x-4">
		<div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400">
			{icon}
		</div>
		<div className="space-y-1">
			<h3 className="font-medium dark:text-primary-300">{title}</h3>
			<p className="text-sm text-foreground/80 dark:text-foreground/70">
				{description}
			</p>
		</div>
	</div>
);

const TradingPlansProcess = () => {
	const steps = [
		{
			icon: <DollarSign className="w-5 h-5" />,
			title: "Invest",
			description: "Choose a plan that suits your budget and financial goals.",
		},
		{
			icon: <TrendingUp className="w-5 h-5" />,
			title: "Earn daily returns",
			description:
				"Our AI BOT trades daily and credits your account with profits.",
		},
		{
			icon: <CalendarPlus className="w-5 h-5" />,
			title: "Guaranteed extra earning days",
			description:
				"If an AI trading day is unprofitable, we add extra days to compensate.",
		},
		{
			icon: <RefreshCw className="w-5 h-5" />,
			title: "Withdraw anytime",
			description:
				"You can withdraw your earnings or reinvest for compounded growth.",
		},
		{
			icon: <DollarSign className="w-5 h-5" />,
			title: "Receive your full capital at the end of 90 days",
			description: "Your initial trading is returned to you.",
		},
	];

	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<Card className="border-primary-500/10 dark:border-primary/20">
					<CardContent className="p-8">
						<div className="max-w-3xl mx-auto space-y-8">
							<div className="space-y-2 text-center">
								<h2 className="text-3xl font-bold tracking-tight dark:text-primary-200">
									How Our Trading Plans Work
								</h2>
							</div>

							<div className="space-y-8">
								{steps.map((step, index) => (
									<div key={index} className="relative">
										<StepItem
											icon={step.icon}
											title={step.title}
											description={step.description}
										/>
										{index < steps.length - 1 && (
											<div className="absolute left-6 top-12 h-8 w-px bg-primary-500/10 dark:bg-primary-100/20" />
										)}
									</div>
								))}
							</div>

							<div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg flex items-center space-x-4">
								<div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-400">
									<Check className="w-5 h-5" />
								</div>
								<p className="text-foreground/90 dark:text-foreground/80">
									With a 94%+ trading accuracy rate, our AI BOT ensures steady
									and secure profits for all investors.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default TradingPlansProcess;
