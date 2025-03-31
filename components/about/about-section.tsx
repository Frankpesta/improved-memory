import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Users, DollarSign } from "lucide-react";

const Stats = () => {
	const stats = [
		{
			icon: <Users className="w-6 h-6 text-primary-600" />,
			value: "18,000+",
			label: "Active Investors",
			description: "Trusted by thousands worldwide",
		},
		{
			icon: <DollarSign className="w-6 h-6 text-primary-600" />,
			value: "$7M+",
			label: "Total Trading",
			description: "Invested and managed securely",
		},
		{
			icon: <Bot className="w-6 h-6 text-primary-600" />,
			label: "AI-Powered",
			value: "24/7",
			description: "Continuous trading operation",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
			{stats.map((stat) => (
				<Card
					key={stat.label}
					className="border-primary-200 dark:border-primary-800">
					<CardContent className="pt-6">
						<div className="text-center space-y-4">
							<div className="mx-auto w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800/50 flex items-center justify-center">
								{stat.icon}
							</div>
							<div className="space-y-2">
								<h3 className="text-3xl font-bold text-primary-700 dark:text-primary-300">
									{stat.value}
								</h3>
								<p className="text-lg font-medium text-primary-600 dark:text-primary-400">
									{stat.label}
								</p>
								<p className="text-sm text-primary-500 dark:text-primary-500">
									{stat.description}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

const AboutUs = () => {
	return (
		<section className="py-16 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950/50 dark:to-background">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					<h1 className="text-4xl font-bold tracking-tight text-primary-900 dark:text-primary-100">
						About Us – Credix AI
					</h1>

					<div className="space-y-6">
						<h2 className="text-2xl font-semibold text-primary-800 dark:text-primary-200">
							Who We Are
						</h2>

						<div className="space-y-4 text-black dark:text-primary-300">
							<p className="leading-relaxed">
								At Credix AI, we are revolutionizing the way people invest in
								trading trading. Our AI-powered trading BOT is designed to
								analyze, predict, and execute trades with precision, ensuring
								that investors earn passive income daily without needing any
								trading experience.
							</p>

							<p className="leading-relaxed">
								With over 18,000+ active investors and more than $7 million
								invested, we have built a trusted and transparent trading
								platform that offers secure and profitable AI-driven trading
								solutions. Our commitment to innovation, risk management, and
								investor success sets us apart as a leader in AI trading.
							</p>
						</div>
					</div>

					<Stats />
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
