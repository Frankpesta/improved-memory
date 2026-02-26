import React from "react";
import { Bot, TrendingUp, Shield, Clock, Wallet, Users } from "lucide-react";

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
	icon,
	title,
	description,
}) => (
	<div className="p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg hover:shadow-xl transition-shadow">
		<div className="flex items-start space-x-4">
			<div className="flex-shrink-0">
				<div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20">
					{icon}
				</div>
			</div>
			<div className="flex-1">
				<h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
					{title}
				</h3>
				<p className="text-neutral-600 dark:text-neutral-400">{description}</p>
			</div>
		</div>
	</div>
);

const FeaturesSection = () => {
	const features = [
		{
			icon: <Bot className="h-6 w-6 text-primary-600" />,
			title: "AI-Powered Trading",
			description:
				"Our BOT executes precise trades 24/7 with over 94% accuracy, ensuring steady and reliable earnings.",
		},
		{
			icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
			title: "Daily Returns",
			description:
				"Earn between 1% to 4% daily, depending on your trading amount, for a period of 90 days.",
		},
		{
			icon: <Shield className="h-6 w-6 text-primary-600" />,
			title: "Capital Insurance",
			description:
				"Your funds are secured with our capital protection measures, ensuring that your principal remains safe.",
		},
		{
			icon: <Clock className="h-6 w-6 text-primary-600" />,
			title: "Extra Trading Days for Losses",
			description:
				"On rare days when the AI BOT encounters losses, we extend your trading period, ensuring you don't lose out on any profits.",
		},
		{
			icon: <Wallet className="h-6 w-6 text-primary-600" />,
			title: "Seamless Crypto Transactions",
			description:
				"Invest and withdraw profits in crypto, ensuring fast and secure transactions.",
		},
		{
			icon: <Users className="h-6 w-6 text-primary-600" />,
			title: "Trust & Transparency",
			description:
				"Credix AI is trusted by thousands of users worldwide.",
		},
	];

	return (
		<section className="py-8 md:py-12 lg:py-16 bg-neutral-50 dark:bg-dark-300">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-6 md:mb-8 lg:mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
							Why Choose Credix AI?
						</h2>
						<div className="w-20 h-1 bg-primary-600 mx-auto"></div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						{features.map((feature, index) => (
							<FeatureCard
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
