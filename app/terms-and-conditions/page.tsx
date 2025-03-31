"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const TermsAndConditionsPage: React.FC = () => {
	const [acceptedTerms, setAcceptedTerms] = useState(false);

	const sections = [
		{
			id: "acceptance",
			title: "1. Acceptance of Terms",
			content:
				"By using Credix AI, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree, please refrain from using our services.",
		},
		{
			id: "eligibility",
			title: "2. Eligibility",
			content: (
				<div className="space-y-2">
					<p>To use our services, you must:</p>
					<ul className="list-none space-y-1">
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>
								Be at least 18 years old or the legal age in your jurisdiction.
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>
								Have the legal capacity to enter into a binding agreement.
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>
								Provide accurate and complete information during registration.
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>
								Not use our services for any illegal or fraudulent activity.
							</span>
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "trading",
			title: "3. Trading and Returns",
			content: (
				<div className="space-y-4">
					<div>
						<h4 className="text-lg font-medium mb-2">3.1 Trading Plans</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								Investors deposit funds into our AI trading system, and our AI
								BOT trades on their behalf.
							</li>
							<li>Daily returns are based on the selected trading plan.</li>
							<li>Returns are credited daily for a 90-day period.</li>
							<li>
								If the AI BOT experiences a loss on any trading day, an
								additional trading day is added to ensure the investor receives
								their full earnings.
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-medium mb-2">3.2 Withdrawals</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								Investors can withdraw their profits at any time during the
								trading period.
							</li>
							<li>
								The initial capital is released at the end of the 90-day cycle.
							</li>
							<li>
								Withdrawals are processed promptly but may take up to 24-48
								hours depending on blockchain confirmations.
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-medium mb-2">3.3 Risk Disclaimer</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								Trading cryptocurrencies involves risks. While our AI BOT has
								over 94% accuracy, market fluctuations can impact results.
							</li>
							<li>We implement strict risk management to minimize losses.</li>
							<li>
								We provide capital protection insurance to secure investors'
								funds.
							</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			id: "security",
			title: "4. Security and Account Responsibility",
			content: (
				<div className="space-y-2">
					<ul className="list-disc pl-5 space-y-1">
						<li>
							Investors must keep their login credentials secure and not share
							them with anyone.
						</li>
						<li>
							Two-Factor Authentication (2FA) is recommended for additional
							account security.
						</li>
						<li>
							Credix AI is not responsible for losses resulting from
							unauthorized access due to weak passwords or user negligence.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "prohibited",
			title: "5. Prohibited Activities",
			content: (
				<div className="space-y-2">
					<p>You agree not to:</p>
					<ul className="list-none space-y-1">
						<li className="flex items-start">
							<span className="text-red-500 mr-2">🚫</span>
							<span>
								Use our platform for any fraudulent or illegal activity.
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-red-500 mr-2">🚫</span>
							<span>
								Attempt to hack, disrupt, or reverse-engineer our AI BOT.
							</span>
						</li>
						<li className="flex items-start">
							<span className="text-red-500 mr-2">🚫</span>
							<span>Create multiple accounts to manipulate the system.</span>
						</li>
						<li className="flex items-start">
							<span className="text-red-500 mr-2">🚫</span>
							<span>Post false or misleading information about Credix AI.</span>
						</li>
					</ul>
					<p className="mt-2">
						Violation of these terms may result in account suspension or
						termination without prior notice.
					</p>
				</div>
			),
		},
		{
			id: "protection",
			title: "6. Capital Protection & Insurance",
			content: (
				<div className="space-y-2">
					<ul className="list-disc pl-5 space-y-1">
						<li>
							We provide capital protection insurance, ensuring investors'
							initial capital is covered in case of unforeseen market
							volatility.
						</li>
						<li>
							Funds are secured in cold storage wallets to prevent hacking
							threats.
						</li>
						<li>
							Our risk management strategy includes automated stop-loss
							mechanisms to safeguard tradings.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "fees",
			title: "7. Fees and Charges",
			content: (
				<div className="space-y-2">
					<ul className="list-disc pl-5 space-y-1">
						<li>No hidden fees—all transaction costs are transparent.</li>
						<li>
							A small withdrawal fee may apply depending on network conditions.
						</li>
						<li>
							Investors agree to cover any applicable blockchain transaction
							fees.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "termination",
			title: "8. Termination of Services",
			content: (
				<div className="space-y-2">
					<p>
						We reserve the right to suspend or terminate accounts under the
						following conditions:
					</p>
					<ul className="list-none space-y-1">
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>Violation of these terms and conditions.</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>Engaging in fraudulent activities.</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>Attempts to manipulate our AI trading system.</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✔</span>
							<span>Providing false or misleading information.</span>
						</li>
					</ul>
					<p className="mt-2">
						Upon termination, investors will receive their remaining balances
						(if applicable) within a reasonable processing period.
					</p>
				</div>
			),
		},
		{
			id: "liability",
			title: "9. Limitation of Liability",
			content: (
				<div className="space-y-2">
					<ul className="list-disc pl-5 space-y-1">
						<li>
							Credix AI is not liable for losses due to market volatility.
						</li>
						<li>
							We are not responsible for technical failures, hacks, or
							blockchain network delays.
						</li>
						<li>
							Investors acknowledge that all tradings carry potential risks.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "privacy",
			title: "10. Privacy and Data Protection",
			content: (
				<div className="space-y-2">
					<ul className="list-disc pl-5 space-y-1">
						<li>
							We collect and store personal data in accordance with our Privacy
							Policy.
						</li>
						<li>
							User data is never shared, sold, or rented to third parties.
						</li>
						<li>
							Communications, transactions, and sensitive details are protected
							by end-to-end encryption.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "amendments",
			title: "11. Amendments to Terms",
			content: (
				<div className="space-y-2">
					<ul className="list-disc pl-5 space-y-1">
						<li>
							Credix AI reserves the right to modify these terms at any time.
						</li>
						<li>
							Updates will be posted on our website, and users are responsible
							for reviewing them.
						</li>
						<li>
							Continued use of our platform after changes implies acceptance of
							new terms.
						</li>
					</ul>
				</div>
			),
		},
		{
			id: "governing",
			title: "12. Governing Law",
			content:
				"These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the United States of America. Any disputes shall be resolved through arbitration in the United States of America.",
		},
		{
			id: "contact",
			title: "13. Contact Information",
			content: (
				<div className="space-y-2">
					<p>
						For any questions or concerns regarding these terms, please contact
						us at:
					</p>
					<p className="flex items-center">
						<span className="mr-2">📩</span>
						<span>Email: support@credixai.com</span>
					</p>
					<p className="mt-2">
						By using Credix AI, you agree to these Terms and Conditions and
						accept the responsibilities outlined above.
					</p>
				</div>
			),
		},
	];

	return (
		<div className="container py-8 mx-auto px-4">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold">Terms and Conditions</h1>
			</div>

			<Card className="mb-6">
				<CardHeader>
					<CardTitle>Effective Date: 2024</CardTitle>
				</CardHeader>
				<CardContent>
					<p>
						Welcome to Credix AI. By accessing and using our website and
						services, you agree to comply with the terms and conditions outlined
						below. Please read them carefully before investing or using our
						platform.
					</p>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				<div className="md:col-span-9">
					<Tabs defaultValue="acceptance" className="w-full">
						<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
							{/* Sidebar */}
							<div className="md:col-span-3">
								<Card className="sticky top-4">
									<CardHeader>
										<CardTitle className="text-lg">Sections</CardTitle>
									</CardHeader>
									<CardContent className="p-0">
										<TabsList className="flex flex-col w-full h-auto rounded-none">
											{sections.map((section) => (
												<TabsTrigger
													key={section.id}
													value={section.id}
													className="justify-start py-2 px-4 w-full">
													{section.title}
												</TabsTrigger>
											))}
										</TabsList>
									</CardContent>
								</Card>
							</div>

							{/* Main Content */}
							<div className="md:col-span-9">
								<Card>
									<CardContent className="p-6">
										<ScrollArea className="h-[60vh]">
											{sections.map((section) => (
												<TabsContent
													key={section.id}
													value={section.id}
													className="mt-0">
													<div className="mb-8">
														<h2 className="text-2xl font-semibold mb-4">
															{section.title}
														</h2>
														<div className="prose dark:prose-invert max-w-none">
															{typeof section.content === "string" ? (
																<p>{section.content}</p>
															) : (
																section.content
															)}
														</div>
													</div>
												</TabsContent>
											))}
										</ScrollArea>
									</CardContent>
								</Card>
							</div>
						</div>
					</Tabs>
				</div>
			</div>

			<Card className="mt-8">
				<CardContent className="p-6">
					<div className="flex items-center space-x-2 mb-6">
						<Checkbox
							id="terms"
							checked={acceptedTerms}
							onCheckedChange={(checked: boolean | "indeterminate") =>
								setAcceptedTerms(checked as boolean)
							}
						/>
						<Label htmlFor="terms" className="text-base">
							I have read and agree to the Terms and Conditions
						</Label>
					</div>
					<Button
						size="lg"
						className="w-full md:w-auto"
						disabled={!acceptedTerms}>
						Accept Terms
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default TermsAndConditionsPage;
