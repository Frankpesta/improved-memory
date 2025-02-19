"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StepCardProps {
	number: number;
	title: string;
	description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
	return (
		<div className="flex items-start">
			<div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
				{number}
			</div>
			<div>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};

export const GetStartedSection: React.FC = () => {
	const steps = [
		{
			title: "Log in to your account",
			description:
				"Log in to your Fidelity Trades AI account or sign up if you haven't.",
		},
		{
			title: "Copy your unique referral link",
			description: "Copy your unique referral link from your dashboard.",
		},
		{
			title: "Share it with potential investors",
			description:
				"Share it with potential investors via social media, email, blogs, forums, and direct messages.",
		},
		{
			title: "Earn commissions",
			description: "Earn commissions as your referrals deposit and invest.",
		},
		{
			title: "Withdraw or reinvest",
			description:
				"Withdraw or reinvest your earnings to maximize your profits.",
		},
	];

	return (
		<section className="py-16 px-4 bg-secondary/5">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						How to Get Started?
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Start earning referral bonuses with these simple steps
					</p>
				</div>

				<Card className="border border-primary/20">
					<CardContent className="p-8">
						<div className="space-y-8">
							{steps.map((step, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}>
									<StepCard
										number={index + 1}
										title={step.title}
										description={step.description}
									/>
								</motion.div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default GetStartedSection;
