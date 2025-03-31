import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Bot,
	LineChart,
	Shield,
	Clock,
	Wallet,
	Lock,
	Headset,
	CheckCircle2,
	DollarSign,
} from "lucide-react";
import TradingPlans from "../home/pricing";

interface TradingPlan {
	range: string;
	daily: string;
	duration: string;
}

const ServiceList = () => {
	const services = [
		{
			title: "AI-Powered Crypto Trading",
			icon: Bot,
			features: [
				"Analyze market trends and patterns in real-time",
				"Predict profitable trading opportunities with high accuracy",
				"Execute trades instantly for maximum profit",
				"Manage risk automatically, reducing exposure to market volatility",
			],
			description:
				"With this automated AI system, investors enjoy daily passive income without needing any trading experience.",
		},
		{
			title: "Capital Protection & Insurance",
			icon: Shield,
			features: [
				"Capital Insurance – All tradings are insured against unexpected risks",
				"Extra Trading Days Guarantee – Coverage for any losing days",
				"Liquidity Reserve Fund – Supporting continuous withdrawals",
				"Advanced Risk Management – Minimizing risks while maximizing profits",
			],
			description:
				"Your trading is secure, insured, and continuously generating profits.",
		},
		{
			title: "24/7 Automated Trading & Earnings",
			icon: Clock,
			features: [
				"Constant trading activity for uninterrupted earnings",
				"No emotional trading mistakes – AI BOT trades based on logic and data",
				"Daily passive income – Your money keeps working for you",
			],
			description:
				"Once you invest, your funds start earning immediately while the AI BOT handles everything.",
		},
		{
			title: "Fast & Secure Withdrawals",
			icon: Wallet,
			features: [
				"Daily withdrawals available",
				"Instant processing within hours",
				"Multiple withdrawal options – Crypto and fiat payments",
				"No withdrawal limits – Withdraw as often as you like",
			],
			description:
				"We ensure that your profits are always accessible, giving you full control over your trading.",
		},
		{
			title: "Transparent & Secure Trading Platform",
			icon: Lock,
			features: [
				"Real-time trading tracking – See your earnings and transactions instantly",
				"Encrypted security system – Protecting your data and funds from cyber threats",
				"No hidden charges – What you see is what you get",
			],
			description:
				"Our reputation is built on trust, consistency, and investor success.",
		},
		{
			title: "Dedicated Investor Support",
			icon: Headset,
			features: [
				"24/7 Customer Support – Get help anytime",
				"Personal Account Managers – For high-tier investors",
				"Educational Resources – Learn how AI trading works",
			],
			description:
				"We ensure seamless communication and investor satisfaction at every step.",
		},
	];

	const highlights = [
		"94%+ AI Trading Accuracy – Maximizing your earnings daily",
		"Passive Income Without Effort – AI BOT trades for you",
		"Secure & Insured Trading – Protecting your capital",
		"Fast & Easy Withdrawals – Anytime, anywhere",
		"Extra Trading Days for Losses – We ensure you get your full returns",
		"Proven Track Record – Over $12 million paid out to investors",
	];

	return (
		<div className="container mx-auto space-y-12 py-12">
			{/* Services Section */}
			<div className="grid gap-6 md:grid-cols-2">
				{services.map((service, index) => (
					<Card
						key={index}
						className="border-none bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30">
						<CardHeader>
							<div className="flex items-center space-x-3">
								<service.icon className="h-6 w-6 text-primary-500" />
								<CardTitle className="text-xl">{service.title}</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<ul className="space-y-2">
								{service.features.map((feature, idx) => (
									<li key={idx} className="flex items-start space-x-2">
										<CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
										<span className="text-sm text-muted-foreground">
											{feature}
										</span>
									</li>
								))}
							</ul>
							<p className="text-sm text-muted-foreground italic">
								{service.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			<TradingPlans />

			{/* Why Choose Us Section */}
			<Card className="border-none bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30">
				<CardHeader>
					<CardTitle className="text-xl">Why Choose Credix AI?</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 md:grid-cols-2">
						{highlights.map((highlight, index) => (
							<div key={index} className="flex items-start space-x-2">
								<CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
								<span className="text-sm text-muted-foreground">
									{highlight}
								</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default ServiceList;
