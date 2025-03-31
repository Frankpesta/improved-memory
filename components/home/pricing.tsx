"use client";
import React, { useState, useEffect } from "react";
import { Calculator, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface PlanTier {
	minTrading: number;
	maxTrading: number;
	dailyReturn: number;
}

const planTiers: PlanTier[] = [
	{ minTrading: 100, maxTrading: 4999, dailyReturn: 0.5 },
	{ minTrading: 5000, maxTrading: 9999, dailyReturn: 0.8 },
	{ minTrading: 10000, maxTrading: 19999, dailyReturn: 1.0 },
	{ minTrading: 20000, maxTrading: 29999, dailyReturn: 1.5 },
	{ minTrading: 30000, maxTrading: 49999, dailyReturn: 1.8 },
	{ minTrading: 50000, maxTrading: 99999, dailyReturn: 2.0 },
	{ minTrading: 100000, maxTrading: 1000000, dailyReturn: 2.5 },
];

const handleLogin = () => {
	window.location.href = "https://app.credixai.com/login";
};

const TradingPlanCard: React.FC<PlanTier> = ({
	minTrading,
	maxTrading,
	dailyReturn,
}) => (
	<Card className="hover:shadow-lg transition-shadow">
		<CardHeader>
			<CardTitle className="flex items-center justify-between">
				<span className="text-xl font-bold text-primary-600">
					{dailyReturn}% Daily
				</span>
				<DollarSign className="h-6 w-6 text-primary-600" />
			</CardTitle>
			<CardDescription>
				{minTrading === 100000
					? "$100K+"
					: `$${minTrading.toLocaleString()} - $${maxTrading.toLocaleString()}`}
			</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="space-y-4">
				<div className="space-y-2">
					<div className="flex justify-between">
						<span className="text-neutral-600 dark:text-neutral-400">
							Daily Profit
						</span>
						<span className="font-semibold">{dailyReturn}%</span>
					</div>
					<div className="flex justify-between">
						<span className="text-neutral-600 dark:text-neutral-400">
							Duration
						</span>
						<span className="font-semibold">90 Days</span>
					</div>
					<div className="flex justify-between">
						<span className="text-neutral-600 dark:text-neutral-400">
							Capital Return
						</span>
						<span className="font-semibold">100%</span>
					</div>
				</div>
				<Button className="w-full" onClick={handleLogin}>
					Invest Now
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</CardContent>
	</Card>
);

const ProfitCalculator: React.FC = () => {
	const [trading, setTrading] = useState<number>(10000);
	const [dailyReturn, setDailyReturn] = useState<number>(1.0);
	const [dailyProfit, setDailyProfit] = useState<number>(0);
	const [totalProfit, setTotalProfit] = useState<number>(0);

	useEffect(() => {
		const tier = planTiers.find(
			(tier) => trading >= tier.minTrading && trading <= tier.maxTrading
		);
		if (tier) {
			setDailyReturn(tier.dailyReturn);
			const daily = (trading * tier.dailyReturn) / 100;
			setDailyProfit(daily);
			setTotalProfit(daily * 90);
		}
	}, [trading]);

	return (
		<Card className="bg-primary-50 dark:bg-dark-200">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Calculator className="h-6 w-6 text-primary-600" />
					Profit Calculator
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					<div>
						<label className="block text-sm font-medium mb-2">
							Trading Amount ($)
						</label>
						<input
							type="number"
							min="100"
							max="1000000"
							value={trading}
							onChange={(e) => setTrading(Number(e.target.value))}
							className="w-full p-2 border rounded-md dark:bg-dark-300 dark:border-dark-100"
						/>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="p-4 bg-white dark:bg-dark-300 rounded-lg">
							<div className="text-sm text-neutral-600 dark:text-neutral-400">
								Daily Profit
							</div>
							<div className="text-xl font-bold text-primary-600">
								$
								{dailyProfit.toLocaleString(undefined, {
									maximumFractionDigits: 2,
								})}
							</div>
						</div>
						<div className="p-4 bg-white dark:bg-dark-300 rounded-lg">
							<div className="text-sm text-neutral-600 dark:text-neutral-400">
								Total Profit (90 days)
							</div>
							<div className="text-xl font-bold text-primary-600">
								$
								{totalProfit.toLocaleString(undefined, {
									maximumFractionDigits: 2,
								})}
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const TradingPlans = () => {
	return (
		<section className="py-16 bg-neutral-50 dark:bg-dark-300">
			<div className="container mx-auto px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
							Trading Plans
						</h2>
						<p className="max-w-3xl mx-auto text-neutral-600 dark:text-neutral-400">
							At Credix AI, we offer a range of trading plans designed to suit
							all levels of investors. Your trading earns daily returns for 90
							days, and at the end of the cycle, you receive your full capital
							back along with your accumulated profits.
						</p>
					</div>

					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-12">
						{planTiers.map((tier, index) => (
							<TradingPlanCard key={index} {...tier} />
						))}
					</div>

					<div className="max-w-xl mx-auto">
						<ProfitCalculator />
					</div>
				</div>
			</div>
		</section>
	);
};

export default TradingPlans;
