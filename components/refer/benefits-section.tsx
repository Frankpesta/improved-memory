"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCardProps {
	title: string;
	description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
	return (
		<Card className="h-full">
			<CardContent className="p-6 h-full flex flex-col">
				<div className="flex items-start mb-4">
					<CheckCircle2 className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
					<h3 className="text-xl font-semibold">{title}</h3>
				</div>
				<p className="text-muted-foreground flex-grow">{description}</p>
			</CardContent>
		</Card>
	);
};

export const BenefitsSection: React.FC = () => {
	const benefits = [
		{
			title: "Unlimited Earnings",
			description:
				"There's no limit to how much you can earn. The more people you invite, the more passive income you generate.",
		},
		{
			title: "Instant Payouts",
			description:
				"Your referral commissions are credited to your account immediately and can be withdrawn anytime.",
		},
		{
			title: "Help Others Earn",
			description:
				"By referring people to Credix AI, you're helping them gain access to a safe, automated, and highly profitable crypto trading opportunity.",
		},
		{
			title: "No Trading Required to Earn",
			description:
				"Even if you haven't invested, you can still earn by referring others to our platform.",
		},
		{
			title: "Powerful AI Trading System",
			description:
				"It's easy to refer when you know the AI BOT is tested, proven, and delivering daily returns.",
		},
	];

	return (
		<section className="py-16 px-4 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Why Join Our Referral Program?
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Take advantage of our industry-leading referral program
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{benefits.map((benefit, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<BenefitCard
								title={benefit.title}
								description={benefit.description}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
