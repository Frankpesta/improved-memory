"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface BonusTierProps {
	level: string;
	percentage: string;
	description: string;
}

const BonusTier: React.FC<BonusTierProps> = ({
	level,
	percentage,
	description,
}) => {
	return (
		<Card className="border border-primary/20">
			<CardContent className="p-6">
				<h3 className="text-xl font-semibold mb-2">{level}</h3>
				<div className="text-3xl font-bold text-primary mb-3">{percentage}</div>
				<p className="text-muted-foreground">{description}</p>
			</CardContent>
		</Card>
	);
};

export const BonusStructureSection: React.FC = () => {
	const tiers = [
		{
			level: "Level 1",
			percentage: "5%",
			description: "Earn 5% of the deposit made by each investor you refer.",
		},
		{
			level: "Level 2",
			percentage: "2%",
			description: "Earn 2% from investors referred by your direct referrals.",
		},
		{
			level: "Level 3",
			percentage: "1%",
			description: "Earn 1% from referrals beyond the second level.",
		},
	];

	return (
		<section className="py-16 px-4 bg-secondary/5">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Referral Bonus Structure
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						We offer a multi-tier referral system that allows you to earn from
						direct and indirect referrals
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					{tiers.map((tier, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<BonusTier
								level={tier.level}
								percentage={tier.percentage}
								description={tier.description}
							/>
						</motion.div>
					))}
				</div>

				<div className="bg-card rounded-lg p-6 border border-primary/20">
					<h3 className="text-xl font-semibold mb-4">💡 Example:</h3>
					<p className="mb-4">
						If you refer an investor who deposits $10,000, you receive $500
						instantly. If that investor refers another person who deposits
						$5,000, you earn $100 from that referral. If that second-level
						referral invites another investor who deposits $2,000, you earn $20
						from that deposit.
					</p>
					<p className="font-semibold text-primary">
						The more you refer, the more you earn!
					</p>
				</div>
			</div>
		</section>
	);
};

export default BonusStructureSection;
