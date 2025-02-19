"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

interface TipCardProps {
	title: string;
	description: string;
}

const TipCard: React.FC<TipCardProps> = ({ title, description }) => {
	return (
		<div className="flex items-start">
			<Lightbulb className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
			<div>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};

export const TipsSection: React.FC = () => {
	const tips = [
		{
			title: "Use Social Media",
			description:
				"Post about Fidelity Trades AI on platforms like Facebook, Twitter, LinkedIn, Instagram, and Telegram. Share your success stories and earnings screenshots.",
		},
		{
			title: "Educate Potential Investors",
			description:
				"Explain how AI BOT trading works, its 94% accuracy rate, and how they can earn daily passive income.",
		},
		{
			title: "Share Testimonials",
			description:
				"Show real investor experiences to build trust and attract more people.",
		},
		{
			title: "Leverage Email Marketing",
			description:
				"Send emails to contacts interested in crypto and AI trading.",
		},
		{
			title: "Network with Investors",
			description:
				"Join crypto investment groups and introduce them to Fidelity Trades AI.",
		},
		{
			title: "Stay Consistent",
			description:
				"The more you promote, the higher your referral earnings will be.",
		},
	];

	return (
		<section className="py-16 px-4 bg-background">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Tips to Maximize Your Referral Earnings
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Optimize your strategy to increase your referral income
					</p>
				</div>

				<Card className="border border-primary/20">
					<CardContent className="p-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{tips.map((tip, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}>
									<TipCard title={tip.title} description={tip.description} />
								</motion.div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default TipsSection;
