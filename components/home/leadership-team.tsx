import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check, Award, Clock, Shield, TrendingUp, Headset } from "lucide-react";
import Image from "next/image";

interface LeadershipMember {
	name: string;
	title: string;
	description: string;
	imagePath: string;
}

interface Benefit {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const LeadershipSection = () => {
	const leaders: LeadershipMember[] = [
		{
			name: "Michael Evans",
			title: "CEO",
			description: "Expert in AI-driven trading and financial management",
			imagePath: "/assets/p3.jpg",
		},
		{
			name: "Linda Carter",
			title: "COO",
			description: "Specialist in investment security and risk management",
			imagePath: "/assets/p6.jpg",
		},
		{
			name: "Robert Chan",
			title: "CTO",
			description: "AI architect with 10+ years in algorithmic trading",
			imagePath: "/assets/p7.jpg",
		},
		{
			name: "Emma Lewis",
			title: "Head of Investor Relations",
			description: "Ensuring seamless investor experience and satisfaction",
			imagePath: "/assets/p5.jpg",
		},
	];

	return (
		<section className="py-12 space-y-8">
			<div className="text-center space-y-4">
				<h2 className="text-3xl font-bold tracking-tight">
					Meet Our Leadership Team
				</h2>
				<p className="text-muted-foreground max-w-2xl mx-auto">
					Our company is led by a team of experienced financial experts and AI
					developers dedicated to ensuring the success and security of your
					investments.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{leaders.map((leader) => (
					<Card
						key={leader.name}
						className="border-primary/20 hover:border-primary/40 transition-colors">
						<div className="relative w-full pt-[100%] overflow-hidden rounded-t-lg">
							<Image
								src={leader.imagePath}
								alt={`${leader.name} - ${leader.title}`}
								fill
								className="object-cover hover:scale-105 transition-transform duration-300"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
								priority
							/>
						</div>
						<CardHeader>
							<CardTitle className="text-lg text-primary-500">
								{leader.name}
							</CardTitle>
							<CardDescription className="font-medium text-accent-700">
								{leader.title}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">{leader.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

const BenefitsSection = () => {
	const benefits: Benefit[] = [
		{
			title: "High Daily Returns",
			description: "Earn up to 2.5% daily for 90 days",
			icon: <TrendingUp className="w-6 h-6 text-primary-500" />,
		},
		{
			title: "No Trading Experience Needed",
			description: "The AI handles everything",
			icon: <Award className="w-6 h-6 text-primary-500" />,
		},
		{
			title: "Guaranteed Payouts",
			description: "Withdrawals processed quickly and securely",
			icon: <Shield className="w-6 h-6 text-primary-500" />,
		},
		{
			title: "Extra Trading Days for Losses",
			description: "Never lose a day's earnings",
			icon: <Clock className="w-6 h-6 text-primary-500" />,
		},
		{
			title: "Trusted & Transparent",
			description: "18,000+ investors and millions paid out",
			icon: <Check className="w-6 h-6 text-primary-500" />,
		},
		{
			title: "24/7 Trading & Support",
			description: "Your money works for you every second of the day",
			icon: <Headset className="w-6 h-6 text-primary-500" />,
		},
	];

	return (
		<section className="py-12 bg-secondary/5">
			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h2 className="text-3xl font-bold tracking-tight">
						Why You Should Invest with Credix AI
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{benefits.map((benefit) => (
						<Card
							key={benefit.title}
							className="border-primary/20 hover:border-primary/40 transition-colors">
							<CardContent className="pt-6">
								<div className="flex items-start space-x-4">
									<div className="p-2 rounded-lg bg-primary/10">
										{benefit.icon}
									</div>
									<div className="space-y-1">
										<h3 className="font-medium text-lg">{benefit.title}</h3>
										<p className="text-muted-foreground">
											{benefit.description}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

const MainContent = () => {
	return (
		<div className="container mx-auto px-4 bg-neutral-50 dark:bg-dark-300">
			<LeadershipSection />
			<BenefitsSection />
		</div>
	);
};

export default MainContent;
