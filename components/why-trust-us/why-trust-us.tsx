"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Bot,
	Shield,
	LineChart,
	Users,
	Lock,
	Headset,
	MessageSquare,
	Rocket,
	CheckCircle2,
	ArrowRight,
	TrainTrack,
	DollarSignIcon,
	Key,
	ScanEye,
} from "lucide-react";

const WhyTrustUs = () => {
	const features = [
		{
			title: "Proven AI Trading Technology – 94%+ Accuracy",
			icon: Bot,
			points: [
				"Analyze market trends instantly and execute the most profitable trades",
				"Minimize risks through advanced risk management algorithms",
				"Trade 24/7 without human error, ensuring consistent profits",
				"Maintain a 94%+ accuracy rate",
			],
			gradient:
				"from-blue-500 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
		},
		{
			title: "Capital Protection & Trading Insurance",
			icon: Shield,
			points: [
				"Capital Insurance – Your trading is insured",
				"Liquidity Reserve Fund for timely withdrawals",
				"Extra Trading Days Guarantee",
				"Advanced Risk Management with stop-loss mechanisms",
			],
			gradient:
				"from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
		},
		{
			title: "Transparent & Reliable Payouts",
			icon: Lock,
			points: [
				"Real-time trading tracking – See your profits accumulate daily",
				"Fast and easy withdrawals – Request payouts anytime, with instant processing within hours",
				"No hidden fees or charges – What you see is what you get.",
				"Fully automated earnings distribution – Your profits are credited to your account every day",
			],
			gradient:
				"from-accent-500 to-accent-900 dark:from-accent-950/30 dark:to-accent-950/30",
		},
		{
			title: "Strong Track Record & Growing Investor Base",
			icon: TrainTrack,
			points: [
				"📈 250K+ active users worldwide",
				"✅ 90-day profitable cycles with consistent daily earnings",
				"Our growing investor base and high retention rate prove that we are a trusted and profitable trading platform.",
			],
			gradient:
				"from-secondary-500 to-secondary-900 dark:from-secondary-950/30 dark:to-secondary-950/30",
		},
		{
			title: "Flexible & Profitable Trading Plans",
			icon: DollarSignIcon,
			points: [
				"💰 $100 – $4,999 → 1% daily for 90 days",
				"💰 $5,000 – $9,999 → 1.5% daily for 90 days",
				"💰 $10,000 – $29,999 → 2% daily for 90 days",
				"💰 $30,000 – $49,999 → 2.5% daily for 90 days",
				"💰 $50,000 – $99,999 → 3% daily for 90 days",
				"💰 $100,000+ → 4% daily for 90 days",
			],
			gradient:
				"from-secondary-200 to-secondary-400 dark:from-secondary-950/30 dark:to-secondary-950/30",
		},
		{
			title: "Secure & Regulated Trading Platform",
			icon: Key,
			points: [
				"Encrypted transactions – All investor data and transactions are secured with military-grade encryption.",
				"Compliance with industry regulations – Our platform follows strict KYC and AML policies for a secure trading environment.",
				"Multi-layer authentication – To prevent unauthorized access and ensure account security.",
				"Secure crypto & fiat transactions – We support secure deposits and withdrawals through trusted payment processors.",

				"We operate transparently and legally, ensuring that your trading is protected at all times.",
			],
			gradient:
				"from-danger-500 to-danger-900 dark:from-danger-950/30 dark:to-danger-950/30",
		},
		{
			title: "Expert Team & Dedicated Support",
			icon: Headset,
			points: [
				"AI algorithm development",
				"Crypto trading strategies",
				"Blockchain security",
				"Wealth management",

				"Our 24/7 investor support team is always available to assist you with:",

				"Trading guidance",
				" Withdrawal processing",
				"Technical assistance",
				" Trading updates & reports",

				"You are never alone – our expert team is here to ensure a smooth and profitable trading journey.",
			],
			gradient:
				"from-neutral-500 to-neutral-900 dark:from-neutral-950/30 dark:to-neutral-950/30",
		},
		{
			title: "A Vision for Long-Term Success",
			icon: ScanEye,
			points: [
				"At Credix AI, our mission is to:",

				"🚀 Revolutionize AI trading – Making passive income accessible to everyone.",
				"🔒 Ensure investor security – Through insured tradings and risk-free trading strategies.",
				"💵 Deliver sustainable returns – With proven AI technology and market expertise.",

				"Our goal is to help you grow your wealth effortlessly, providing a stable and secure trading environment.",
			],
			gradient:
				"from-secondary-900 to-secondary-300 dark:from-secondary-600/30 dark:to-secondary-500/30",
		},
	];

	const metrics = [
		{ label: "Active Users", value: "250K+", icon: Users },
		{ label: "Trading Volume", value: "70B+", icon: LineChart },
		{ label: "Success Rate", value: "94%", icon: CheckCircle2 },
	];

	const testimonials = [
		{
			name: "James L.",
			location: "USA",
			trading: "$25,000",
			quote:
				"I started with $25,000, and in 90 days, I had earned over $11,000 in profits. The extra trading day guarantee gave me confidence in my trading. Withdrawals are smooth and fast!",
		},
		{
			name: "Sophia M.",
			location: "UK",
			trading: "$10,000",
			quote:
				"Credix AI is the best AI trading platform I've used. The 2% daily return is steady, and I've already reinvested for another 90-day cycle!",
		},
		{
			name: "Carlos R.",
			location: "Spain",
			trading: "$50,000",
			quote:
				"I was skeptical at first, but after receiving my first payout, I increased my trading to $50,000. Best decision ever – the returns are amazing!",
		},
		{
			name: "Anita D.",
			location: "Australia",
			trading: "$7,500",
			quote:
				"What I love most is the transparency and security. My funds are insured, and I see my earnings grow daily. I recommend this to anyone looking for passive income!",
		},
		{
			name: "David W.",
			location: "Canada",
			trading: "$15,000",
			quote:
				"I’ve tried other AI trading platforms, but Credix AI is the real deal. Withdrawals are fast, and the customer support is always there to help.",
		},
		{
			name: "Hassan O.",
			location: "UAE",
			trading: "$100,000",
			quote:
				"The 4% daily return on my trading has been life-changing. I’ve already reinvested for another 90-day cycle!",
		},
	];

	const handleLogin = () => {
		window.location.href = "https://app.credixhub.com/login";
	};

	return (
		<div className="space-y-12 px-4 py-6">
			{/* Metrics Section */}
			<h2 className="text-center py-1 text-bold text-xl md:text-3xl">
				Our Metrics
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{metrics.map((metric, index) => (
					<Card
						key={index}
						className="group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 hover:-translate-y-1">
						<CardContent className="p-6">
							<metric.icon className="h-8 w-8 text-accent-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
							<div className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
								{metric.value}
							</div>
							<div className="text-sm text-muted-foreground">
								{metric.label}
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Main Features */}
			<h2 className="text-center py-1 text-bold text-xl md:text-3xl">
				What we Offer
			</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{features.map((feature, index) => (
					<Card
						key={index}
						className={`group hover:shadow-xl transition-all duration-300 border-none bg-gradient-to-br ${feature.gradient} hover:-translate-y-1`}>
						<CardHeader>
							<div className="flex items-center space-x-3">
								<feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
								<CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
									{feature.title}
								</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<ul className="space-y-3">
								{feature.points.map((point, idx) => (
									<li
										key={idx}
										className="flex items-start space-x-2 group/item hover:text-primary transition-colors duration-200">
										<CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" />
										<span className="text-sm">{point}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Testimonials */}
			<h2 className="text-center py-1 text-bold text-xl md:text-3xl">
				Client Success Stories
			</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{testimonials.map((testimonial, index) => (
					<Card
						key={index}
						className="group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30 hover:-translate-y-1">
						<CardContent className="p-6 space-y-4">
							<div className="flex items-center space-x-2">
								<MessageSquare className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
								<span className="font-semibold">{testimonial.name}</span>
								<Badge
									variant="secondary"
									className="group-hover:bg-primary group-hover:text-white transition-colors duration-300">
									{testimonial.trading}
								</Badge>
								<span className="text-sm text-muted-foreground">
									({testimonial.location})
								</span>
							</div>
							<p className="text-sm text-muted-foreground italic">
								"{testimonial.quote}"
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			{/* CTA Section */}
			<Card className="border-none bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 hover:shadow-xl transition-all duration-300">
				<CardContent className="p-8 text-center space-y-6">
					<Rocket className="h-12 w-12 text-primary mx-auto animate-bounce" />
					<h3 className="text-2xl font-bold">
						Start Your Trading Journey Today
					</h3>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Join 250K+ users worldwide and start earning passive income
						with our AI-powered trading platform.
					</p>
					<Button
						onClick={handleLogin}
						className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
						Start Investing Now
						<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default WhyTrustUs;
