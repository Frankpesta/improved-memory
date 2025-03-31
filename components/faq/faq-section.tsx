import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail, MessageCircle } from "lucide-react";

const FAQAccordion = () => {
	const faqs = [
		{
			question: "What is Credix AI?",
			answer:
				"Credix AI is an AI-powered trading platform that trades the crypto market on behalf of investors. Our highly trained AI BOT, with a 94%+ accuracy rate, executes trades daily, generating consistent returns for investors over a 90-day trading period.",
		},
		{
			question: "How does the AI BOT trading system work?",
			answer:
				"Our AI BOT is designed to analyze the crypto market, detect profitable trading opportunities, and execute trades automatically with precision and speed. Investors deposit funds, and the AI BOT trades daily, earning them passive income without requiring manual effort.",
		},
		{
			question: "What are the trading plans?",
			answer: (
				<div className="space-y-4">
					<p>
						We offer multiple trading plans to suit different investor levels.
						Each plan earns a fixed daily percentage for 90 days, plus the
						return of your full capital at the end of the cycle.
					</p>
					<ul className="space-y-2">
						<li>$100 - $4,999 earns 0.5% daily for 90 days, plus capital.</li>
						<li>$5,000 - $9,999 earns 0.8% daily for 90 days, plus capital.</li>
						<li>$10,000 - $19,999 earns 1% daily for 90 days, plus capital.</li>
						<li>
							$20,000 - $29,999 earns 1.5% daily for 90 days, plus capital.
						</li>
						<li>
							$30,000 - $49,999 earns 1.8% daily for 90 days, plus capital.
						</li>
						<li>$50,000 - $99,999 earns 2% daily for 90 days, plus capital.</li>
						<li>
							$100,000 - $1,000,000 earns 2.5% daily for 90 days, plus capital.
						</li>
					</ul>
				</div>
			),
		},
		{
			question: "What happens if the AI BOT has an unprofitable trading day?",
			answer:
				"If there is an unprofitable day, we add an extra trading day to ensure you never miss out on your earnings. This means if your plan was for 90 days, and one day was unprofitable, your plan will extend to 91 days, ensuring you still get the full profit as expected.",
		},
		{
			question: "How is my capital protected?",
			answer: (
				<div className="space-y-4">
					<p>We prioritize capital security through:</p>
					<ul className="space-y-2">
						{[
							"Capital Insurance – Your trading is insured, ensuring your principal remains protected.",
							"Advanced AI Risk Management – The AI adjusts trades dynamically to reduce exposure.",
							"Reserve Liquidity Fund – We maintain a secure liquidity reserve to handle withdrawals.",
							"Extra Trading Days Guarantee – Losses are covered by additional trading days.",
						].map((item, index) => (
							<li key={index} className="flex items-start">
								<Check className="w-4 h-4 mt-1 mr-2 text-primary" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			),
		},
		{
			question: "Can I withdraw my profits before the 90-day period ends?",
			answer:
				"Yes, you can withdraw your daily earnings anytime. However, your initial capital is locked in until the end of the 90-day trading cycle, after which it is returned in full.",
		},
		{
			question: "How do I deposit funds?",
			answer: (
				<div className="space-y-2">
					<p>To get started:</p>
					<ol className="list-decimal pl-5 space-y-1">
						<li>Register on our platform.</li>
						<li>Choose an trading plan.</li>
						<li>
							Deposit crypto funds securely (Bitcoin, Ethereum, USDT, etc.).
						</li>
						<li>Start earning daily returns immediately.</li>
					</ol>
				</div>
			),
		},
		{
			question: "What cryptocurrencies can I use to invest?",
			answer:
				"We accept Bitcoin (BTC), Ethereum (ETH), USDT (TRC20 & ERC20), and other major cryptocurrencies.",
		},
		{
			question: "How do I withdraw my earnings?",
			answer: (
				<div className="space-y-2">
					<p>
						Withdrawals are processed instantly to your crypto wallet. Simply:
					</p>
					<ol className="list-decimal pl-5 space-y-1">
						<li>Log into your Credix AI account.</li>
						<li>Go to the withdrawal section.</li>
						<li>Enter your crypto wallet details.</li>
						<li>Withdraw your profits anytime.</li>
					</ol>
				</div>
			),
		},
		{
			question: "Is Credix AI available worldwide?",
			answer:
				"Yes! Credix AI is a global trading platform with over 18,000 investors worldwide and more than $7 million invested.",
		},
		{
			question: "Are there any hidden fees?",
			answer:
				"No, we do not charge any hidden fees. Deposits, withdrawals, and trading management are 100% transparent.",
		},
		{
			question: "How do I reinvest my earnings?",
			answer:
				"You can choose to withdraw your profits or reinvest them into a new trading cycle to continue compounding your returns.",
		},
		{
			question: "How secure is my account?",
			answer:
				"We implement advanced security protocols, including encryption, two-factor authentication (2FA), and wallet security, to keep your account safe.",
		},
		{
			question: "What makes Credix AI different from other trading platforms?",
			answer: (
				<div className="space-y-2">
					<ul className="space-y-2">
						{[
							"AI-Powered Trading with 94%+ accuracy.",
							"Daily Passive Income with guaranteed extra trading days.",
							"Full Capital Protection through insurance.",
							"Fast & Secure Withdrawals.",
							"Over 18,000+ Investors & $7M+ Invested.",
							"24/7 Customer Support.",
						].map((item, index) => (
							<li key={index} className="flex items-start">
								<Check className="w-4 h-4 mt-1 mr-2 text-primary" />
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			),
		},
		{
			question: "How do I contact support if I have issues?",
			answer: (
				<div className="space-y-3">
					<p>
						Our customer support team is available 24/7. You can reach us
						through:
					</p>
					<div className="space-y-2">
						<div className="flex items-center">
							<Mail className="w-4 h-4 mr-2 text-primary" />
							<span>Email Support – support@credixhub.com</span>
						</div>
						<div className="flex items-center">
							<MessageCircle className="w-4 h-4 mr-2 text-primary" />
							<span>Live Chat – Available on our website.</span>
						</div>
					</div>
				</div>
			),
		},
	];

	return (
		<section className="py-12 bg-muted/30 dark:bg-muted/10">
			<div className="container mx-auto px-4">
				<Card className="border-0 shadow-md bg-card dark:bg-card">
					<CardHeader className="text-center">
						<CardTitle className="text-3xl font-bold tracking-tight">
							Frequently Asked Questions
						</CardTitle>
					</CardHeader>
					<CardContent className="p-6">
						<Accordion
							type="single"
							collapsible
							className="w-full divide-y divide-border">
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="py-2 px-1">
									<AccordionTrigger className="text-left font-medium text-lg hover:text-primary data-[state=open]:text-primary transition-colors py-4">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="pt-1 pb-4 text-foreground/80">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default FAQAccordion;
