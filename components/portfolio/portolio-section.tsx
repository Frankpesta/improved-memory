"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	PieChart,
	Pie,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from "recharts";
import {
	Bitcoin,
	Wallet,
	TrendingUp,
	Users,
	ArrowRight,
	CheckCircle2,
	ChartPie,
	Trophy,
} from "lucide-react";

const PortfolioPage = () => {
	const cryptoAssets = [
		{ name: "Bitcoin (BTC)", icon: "₿" },
		{ name: "Ethereum (ETH)", icon: "Ξ" },
		{ name: "XRP", icon: "✗" },
		{ name: "Cardano (ADA)", icon: "₳" },
		{ name: "Binance Coin (BNB)", icon: "Ƀ" },
		{ name: "Solana (SOL)", icon: "S" },
		{ name: "Polkadot (DOT)", icon: "●" },
		{ name: "MATIC", icon: "M" },
	];

	const portfolioAllocation = [
		{ name: "AI Crypto Trading", value: 60, color: "#4F46E5" },
		{ name: "Arbitrage Trading", value: 20, color: "#06B6D4" },
		{ name: "Liquidity Pool Staking", value: 10, color: "#10B981" },
		{ name: "DeFi & NFT", value: 5, color: "#8B5CF6" },
		{ name: "Other Tradings", value: 5, color: "#EC4899" },
	];

	const historicalReturns = [
		{ year: "2022", roi: 245, payout: 3.8 },
		{ year: "2023", roi: 270, payout: 6.2 },
		{ year: "2024", roi: 290, payout: 9.5 },
		{ year: "2025", roi: 310, payout: 12 },
	];

	const tradingStrategies = [
		{
			title: "AI Scalping & HFT",
			description:
				"Rapid short-term trades with quick profits. High win rate with minimal exposure to volatility.",
			color:
				"from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30",
		},
		{
			title: "AI Arbitrage Trading",
			description:
				"Profits from price differences across crypto exchanges. Risk-free trading strategy with guaranteed returns.",
			color:
				"from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30",
		},
		{
			title: "AI Futures & Options",
			description:
				"Long & short positions with leveraged trading. AI-driven entry & exit points for maximum profitability.",
			color:
				"from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
		},
		{
			title: "AI Trend Following",
			description:
				"Uses deep learning models to predict bull & bear trends. Reduces risk by exiting positions before market downturns.",
			color:
				"from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
		},
	];

	const handleLogin = () => {
		window.location.href = "https://app.credixhub.com/login";
	};

	return (
		<div className="space-y-12 px-4 py-6">
			{/* Crypto Assets Section */}
			<Card className="border-none bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30">
				<CardHeader>
					<div className="flex items-center space-x-3">
						<Bitcoin className="h-6 w-6 text-primary" />
						<CardTitle>AI-Powered Crypto Trading</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{cryptoAssets.map((crypto, index) => (
							<div
								key={index}
								className="flex items-center p-4 bg-background/60 rounded-lg backdrop-blur-sm hover:bg-background/80 transition-colors duration-200">
								<span className="text-2xl mr-3">{crypto.icon}</span>
								<span className="text-sm font-medium">{crypto.name}</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Portfolio Allocation */}
			<div className="grid md:grid-cols-2 gap-6">
				<Card className="border-none bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/30 dark:to-pink-950/30">
					<CardHeader>
						<div className="flex items-center space-x-3">
							<ChartPie className="h-6 w-6 text-primary" />
							<CardTitle>Portfolio Allocation</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<div className="h-[300px]">
							<ResponsiveContainer width="100%" height="100%">
								<PieChart>
									<Pie
										data={portfolioAllocation}
										dataKey="value"
										nameKey="name"
										cx="50%"
										cy="50%"
										outerRadius={80}
										label>
										{portfolioAllocation.map((entry, index) => (
											<Cell key={index} fill={entry.color} />
										))}
									</Pie>
									<Tooltip />
								</PieChart>
							</ResponsiveContainer>
						</div>
					</CardContent>
				</Card>

				{/* Historical Returns */}
				<Card className="border-none bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/30 dark:to-emerald-950/30">
					<CardHeader>
						<div className="flex items-center space-x-3">
							<TrendingUp className="h-6 w-6 text-primary" />
							<CardTitle>Historical Returns</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<div className="h-[300px]">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={historicalReturns}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="year" />
									<YAxis />
									<Tooltip />
									<Line
										type="monotone"
										dataKey="roi"
										stroke="#4F46E5"
										name="ROI %"
									/>
									<Line
										type="monotone"
										dataKey="payout"
										stroke="#10B981"
										name="Payout (M$)"
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Trading Strategies */}
			<div className="grid md:grid-cols-2 gap-6">
				{tradingStrategies.map((strategy, index) => (
					<Card
						key={index}
						className={`group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br ${strategy.color}`}>
						<CardContent className="p-6">
							<h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
								{strategy.title}
							</h3>
							<p className="text-sm text-muted-foreground">
								{strategy.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Success Metrics */}
			<Card className="border-none bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30">
				<CardContent className="p-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center space-y-2">
							<Users className="h-8 w-8 mx-auto text-primary" />
							<div className="text-2xl font-bold">250M+</div>
							<div className="text-sm text-muted-foreground">
								Active Users
							</div>
						</div>
						<div className="text-center space-y-2">
							<Wallet className="h-8 w-8 mx-auto text-primary" />
							<div className="text-2xl font-bold">$12M+</div>
							<div className="text-sm text-muted-foreground">Total Payouts</div>
						</div>
						<div className="text-center space-y-2">
							<Trophy className="h-8 w-8 mx-auto text-primary" />
							<div className="text-2xl font-bold">94%+</div>
							<div className="text-sm text-muted-foreground">Success Rate</div>
						</div>
						<div className="text-center space-y-2">
							<CheckCircle2 className="h-8 w-8 mx-auto text-primary" />
							<div className="text-2xl font-bold">100%</div>
							<div className="text-sm text-muted-foreground">Payout Rate</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* CTA Section */}
			<Card className="text-center border-none bg-gradient-to-br from-indigo-100/50 to-blue-100/50 dark:from-indigo-900/30 dark:to-blue-900/30">
				<CardContent className="p-8 space-y-6">
					<h3 className="text-2xl font-bold">
						Start Your Trading Journey Today
					</h3>
					<Button
						onClick={handleLogin}
						className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
						Get Started Now
						<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default PortfolioPage;
