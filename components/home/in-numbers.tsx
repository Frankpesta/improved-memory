"use client";
import React, { useState, useEffect, useRef } from "react";
import {
	Shield,
	Clock,
	Wallet,
	LockKeyhole,
	Users,
	Building2,
	Banknote,
	BarChart2,
	Clock4,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProtectionFeatureProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const ProtectionFeature: React.FC<ProtectionFeatureProps> = ({
	icon,
	title,
	description,
}) => (
	<div className="flex items-start space-x-4">
		<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
			{icon}
		</div>
		<div className="flex-1">
			<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
				{title}
			</h3>
			<p className="text-neutral-600 dark:text-neutral-400">{description}</p>
		</div>
	</div>
);

interface AnimatedNumberProps {
	end: number;
	duration: number;
	suffix?: string;
	prefix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
	end,
	duration,
	suffix = "",
	prefix = "",
}) => {
	const [count, setCount] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!isVisible) return;

		let startTimestamp: number;
		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);

			setCount(Math.floor(progress * end));

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	}, [end, duration, isVisible]);

	return (
		<div ref={elementRef} className="inline-flex items-center">
			<span className="text-2xl font-bold text-primary-600">
				{prefix}
				{count.toLocaleString()}
				{suffix}
			</span>
		</div>
	);
};

interface StatCardProps {
	icon: React.ReactNode;
	value: string;
	label: string;
	animationValue?: {
		end: number;
		suffix?: string;
		prefix?: string;
	};
}

const StatCard: React.FC<StatCardProps> = ({
	icon,
	value,
	label,
	animationValue,
}) => (
	<Card className="bg-white dark:bg-dark-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
		<CardContent className="p-6">
			<div className="flex items-center space-x-4">
				<div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
					{icon}
				</div>
				<div>
					<div className="h-8">
						{animationValue ? (
							<AnimatedNumber
								end={animationValue.end}
								duration={2000}
								suffix={animationValue.suffix}
								prefix={animationValue.prefix}
							/>
						) : (
							<span className="text-2xl font-bold text-primary-600">
								{value}
							</span>
						)}
					</div>
					<div className="text-sm text-neutral-600 dark:text-neutral-400">
						{label}
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
);

const CapitalProtectionStats = () => {
	const protectionFeatures = [
		{
			icon: <Shield className="h-6 w-6 text-primary-600" />,
			title: "Advanced Risk Management",
			description: "Our AI adapts to market conditions to minimize losses.",
		},
		{
			icon: <Clock className="h-6 w-6 text-primary-600" />,
			title: "Extra Trading Days Guarantee",
			description:
				"If our AI has a losing trade, we add extra trading days to ensure you don't lose out on profits.",
		},
		{
			icon: <Wallet className="h-6 w-6 text-primary-600" />,
			title: "Secure Asset Reserves",
			description:
				"We maintain a liquidity fund to cover investor withdrawals and guarantee payout reliability.",
		},
		{
			icon: <LockKeyhole className="h-6 w-6 text-primary-600" />,
			title: "Insurance Coverage",
			description:
				"Our assets are backed by insurance policies to safeguard investors' capital in case of unexpected events.",
		},
	];

	const statistics = [
		{
			icon: <Users className="h-6 w-6 text-primary-600" />,
			value: "250K+",
			label: "Users Worldwide",
			animationValue: { end: 250, suffix: "K+", prefix: "" },
		},
		{
			icon: <Banknote className="h-6 w-6 text-primary-600" />,
			value: "$1.3B+",
			label: "Trading Volume",
			animationValue: { end: 1.3, suffix: "B+", prefix: "$" },
		},
		{
			icon: <BarChart2 className="h-6 w-6 text-primary-600" />,
			value: "94%+",
			label: "Trading Accuracy",
			animationValue: { end: 94, suffix: "%+" },
		},
		{
			icon: <Clock4 className="h-6 w-6 text-primary-600" />,
			value: "5+ Years",
			label: "AI Trading Experience",
			animationValue: { end: 5, suffix: "+ Years" },
		},
	];

	return (
		<section className="py-8 md:py-12 lg:py-16 bg-neutral-50 dark:bg-dark-300">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					{/* Capital Protection Section */}
					<div className="mb-8 md:mb-12 lg:mb-16">
						<div className="text-center mb-6 md:mb-8 lg:mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
								Capital Protection & Insurance
							</h2>
							<p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
								At Credix AI, your trading is insured and protected.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{protectionFeatures.map((feature, index) => (
								<ProtectionFeature key={index} {...feature} />
							))}
						</div>

						<div className="mt-8 p-6 bg-primary-600 rounded-lg text-center">
							<p className="text-xl text-white font-semibold">
								With us, your capital is 100% safe, and your profits are
								secured.
							</p>
						</div>
					</div>

					{/* Statistics Section */}
					<div>
						<div className="text-center mb-6 md:mb-8 lg:mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
								Credix AI in Numbers
							</h2>
							<div className="w-20 h-1 bg-primary-600 mx-auto"></div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-6">
							{statistics.map((stat, index) => (
								<StatCard key={index} {...stat} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CapitalProtectionStats;
