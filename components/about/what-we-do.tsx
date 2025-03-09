import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Bot, Clock, LineChart, Lock } from "lucide-react";

const FeatureItem = ({ children }: { children: React.ReactNode }) => (
	<div className="flex items-start space-x-3">
		<Check className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
		<span className="text-foreground">{children}</span>
	</div>
);

const TradingSection = () => {
	return (
		<section className="container py-12 bg-neutral-50 dark:bg-dark-300">
			<div className="mx-auto px-4">
				<div className="container mx-auto space-y-8">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
						<h3 className="text-2xl font-semibold text-primary">
							AI-Powered Trading for Passive Income
						</h3>
					</div>

					<div className="space-y-6">
						<p className="text-foreground/90 leading-relaxed">
							Credix AI has developed a state-of-the-art AI BOT that is trained
							to navigate the cryptocurrency market with over 94% accuracy. The
							BOT continuously scans market trends, predicts profitable
							opportunities, and executes trades, ensuring optimal returns for
							investors.
						</p>

						<div className="space-y-3">
							<FeatureItem>AI-Trading BOT with 94%+ accuracy</FeatureItem>
							<FeatureItem>24/7 trading for continuous earnings</FeatureItem>
							<FeatureItem>
								Fully automated system – no trading experience needed
							</FeatureItem>
						</div>

						<p className="text-foreground/90 leading-relaxed">
							Our investment plans are designed for investors of all levels,
							offering daily returns between 0.5% – 2.5% for 90 days, depending
							on the investment amount.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

const SecuritySection = () => {
	const securityFeatures = [
		{
			icon: <Shield className="w-6 h-6 text-primary-500" />,
			title: "Capital Insurance",
			description:
				"We have insurance policies that protect investors' funds from unexpected risks.",
		},
		{
			icon: <Clock className="w-6 h-6 text-primary-500" />,
			title: "Extra Trading Days Guarantee",
			description:
				"If the AI BOT encounters a loss on any given day, we add an extra day of earnings to ensure investors receive their full returns.",
		},
		{
			icon: <LineChart className="w-6 h-6 text-primary-500" />,
			title: "Secure Asset Reserves",
			description:
				"We maintain a liquidity fund to ensure smooth withdrawals and continued payouts.",
		},
		{
			icon: <Bot className="w-6 h-6 text-primary-500" />,
			title: "Advanced Risk Management",
			description:
				"Our AI BOT is designed with built-in risk mitigation, ensuring low-risk, high-accuracy trading.",
		},
	];

	return (
		<section className="container py-12 bg-neutral-50 dark:bg-dark-300">
			<div className="mx-auto px-4">
				<div className="container mx-auto space-y-8">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tight">
							Our Commitment to Security & Capital Protection
						</h2>
						<p className="text-foreground/90 leading-relaxed">
							We understand that security is a top priority for our investors.
							That's why Credix AI ensures your capital is protected through
							multiple security measures, including:
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{securityFeatures.map((feature) => (
							<Card key={feature.title} className="border-primary-500/10">
								<CardHeader className="space-y-4">
									<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center">
										{feature.icon}
									</div>
									<CardTitle className="text-lg">{feature.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-foreground/80">{feature.description}</p>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center">
						<p className="text-lg font-medium text-primary">
							With Credix AI, your capital is safe, and your returns are
							guaranteed.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

const WhatWeDo = () => {
	return (
		<div className=" bg-neutral-50 dark:bg-dark-300 container mx-auto px-4">
			<TradingSection />
			<SecuritySection />
		</div>
	);
};

export default WhatWeDo;
