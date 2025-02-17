import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Shield, Bot } from "lucide-react";

interface StatItemProps {
	value: string;
	label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
	<div className="flex flex-col items-center px-4 py-3 rounded-lg bg-dark-200/5 backdrop-blur-sm">
		<span className="text-2xl font-bold text-primary-500">{value}</span>
		<span className="text-sm text-neutral-600 dark:text-neutral-400">
			{label}
		</span>
	</div>
);

const HeroSection = () => {
	return (
		<div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-dark-300 dark:to-dark-400">
			{/* Background Gradient Orbs */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

			<div className="relative container mx-auto px-4 py-16 lg:py-24">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div className="space-y-8">
							<div className="space-y-6">
								<h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
									Welcome to{" "}
									<span className="text-primary-600">Fidelity Trades AI</span>
								</h1>
								<h2 className="text-2xl lg:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
									The Future of AI-Driven Crypto Trading
								</h2>
								<p className="text-lg text-neutral-700 dark:text-neutral-300">
									Your Gateway to Smart, Profitable, and Secure Crypto Trading
								</p>
							</div>

							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
								At Fidelity Trades AI, we have harnessed the power of artificial
								intelligence to transform cryptocurrency trading into a seamless
								and highly profitable experience for our investors. Our
								state-of-the-art AI trading BOT, trained with vast market data,
								executes trades with over 94% accuracy, ensuring consistent
								daily returns for our investors.
							</p>

							{/* Stats Grid */}
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<StatItem value="18,000+" label="Active Investors" />
								<StatItem value="$7M+" label="Total Invested" />
								<StatItem value="94%" label="Trading Accuracy" />
							</div>

							{/* CTA Buttons */}
							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-primary-600 hover:bg-primary-700 text-white">
									Start Trading Now
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-primary-600 text-primary-600 hover:bg-primary-50">
									Learn More
								</Button>
							</div>
						</div>

						{/* Right Content - Feature Cards */}
						<div className="grid gap-6">
							<div className="grid sm:grid-cols-2 gap-6">
								<div className="p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg">
									<Bot className="h-12 w-12 text-primary-600 mb-4" />
									<h3 className="text-lg font-semibold mb-2">
										AI-Powered Trading
									</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										Advanced algorithms making smart decisions 24/7
									</p>
								</div>
								<div className="p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg">
									<LineChart className="h-12 w-12 text-secondary-700 mb-4" />
									<h3 className="text-lg font-semibold mb-2">Daily Returns</h3>
									<p className="text-neutral-600 dark:text-neutral-400">
										Consistent profits with high accuracy trading
									</p>
								</div>
							</div>
							<div className="p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg">
								<Shield className="h-12 w-12 text-accent-600 mb-4" />
								<h3 className="text-lg font-semibold mb-2">
									Secure & Reliable
								</h3>
								<p className="text-neutral-600 dark:text-neutral-400">
									Enterprise-grade security protecting your investments
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
