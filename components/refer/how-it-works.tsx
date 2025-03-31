"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StepCardProps {
	number: number;
	title: string;
	description: string;
	className?: string;
}

const StepCard: React.FC<StepCardProps> = ({
	number,
	title,
	description,
	className,
}) => {
	return (
		<Card className={`h-full ${className}`}>
			<CardContent className="p-6 flex flex-col h-full">
				<div className="mb-4 flex items-center">
					<div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
						{number}
					</div>
					<h3 className="text-xl font-semibold">{title}</h3>
				</div>
				<p className="text-muted-foreground flex-grow">{description}</p>
			</CardContent>
		</Card>
	);
};

export const HowItWorksSection: React.FC = () => {
	const steps = [
		{
			title: "Get Your Unique Referral Link",
			description:
				"Once you register and activate your account, you'll receive a unique referral link in your dashboard.",
		},
		{
			title: "Invite Friends & Investors",
			description:
				"Share your referral link with friends, family, social media followers, and investors who are interested in earning consistent daily returns through AI trading.",
		},
		{
			title: "Earn Referral Bonuses",
			description:
				"Each time someone registers using your link and makes a deposit, you earn a percentage of their trading as a referral bonus.",
		},
		{
			title: "Withdraw or Reinvest",
			description:
				"Your referral earnings are credited instantly and can be withdrawn anytime or reinvested to increase your returns.",
		},
	];

	return (
		<section className="py-16 px-4 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Start earning referral bonuses in just a few simple steps
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((step, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<StepCard
								number={index + 1}
								title={step.title}
								description={step.description}
								className={index % 2 === 0 ? "border-primary/20" : ""}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;
