import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/page-header";
import { ArrowUpRight, Bot, LineChart, Shield } from "lucide-react";

export default function ServicesPage() {
	const features = [
		{
			title: "AI-Powered Trading Bot",
			description:
				"Our advanced AI BOT operates 24/7, analyzing market trends and executing trades with 94%+ accuracy.",
			icon: Bot,
		},
		{
			title: "Market Analysis",
			description:
				"Comprehensive market analysis powered by machine learning algorithms to identify profitable trading opportunities.",
			icon: LineChart,
		},
		{
			title: "Secure Platform",
			description:
				"Enterprise-grade security measures to protect your tradings and personal information.",
			icon: Shield,
		},
	];

	return (
		<div className="container mx-auto px-4">
			<PageHeader
				title="Our Services"
				description="At Credix AI, we provide cutting-edge AI-powered trading services designed to help investors grow their wealth effortlessly."
				align="center"
			/>

			<div className="mt-8 bg-dark-300">
				<Card className="border-none bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
					<CardHeader className="space-y-1">
						<div className="flex items-center justify-between">
							<CardTitle className="text-2xl font-bold">
								AI Trading Bot
							</CardTitle>
							<Badge variant="secondary" className="h-6">
								94%+ Accuracy
							</Badge>
						</div>
						<CardDescription className="text-base">
							Experience automated crypto trading with our state-of-the-art AI
							technology
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-6 md:grid-cols-3 lg:gap-8">
							{features.map((feature, index) => (
								<Card key={index} className="bg-background/60 backdrop-blur-sm">
									<CardHeader>
										<div className="flex items-center space-x-2">
											<feature.icon className="h-5 w-5 text-primary" />
											<CardTitle className="text-lg">{feature.title}</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground">
											{feature.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>

						<div className="mt-8 rounded-lg bg-primary/5 p-6">
							<h3 className="flex items-center text-lg font-semibold">
								Perfect for All Investors
								<ArrowUpRight className="ml-2 h-5 w-5" />
							</h3>
							<p className="mt-2 text-muted-foreground">
								Whether you're new to crypto or an experienced investor, our
								platform provides a secure, profitable, and hands-free trading
								experience.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
