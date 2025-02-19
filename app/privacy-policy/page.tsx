"use client";

import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Lock, Mail, Shield, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
	// You'd replace this with the actual date or fetch from an API
	const effectiveDate = "February 1, 2024";
	const supportEmail = "support@fidelitytradesai.com";

	return (
		<div className="min-h-screen bg-background text-foreground">
			<section className="py-12 px-4 bg-secondary/5">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
						Privacy Policy
					</h1>
					<p className="text-center text-muted-foreground">
						Effective Date: {effectiveDate}
					</p>
					<div className="flex justify-center mt-8">
						<Card className="w-full max-w-3xl shadow-md">
							<CardContent className="p-6">
								<p className="text-lg">
									Welcome to Fidelity Trades AI. Your privacy is important to
									us, and we are committed to protecting the personal and
									financial information you share with us. This Privacy Policy
									outlines how we collect, use, store, and safeguard your
									information when you use our website and services.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Main content */}
			<section className="py-12 px-4">
				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{/* Section 1: Information We Collect */}
						<AccordionItem value="section-1">
							<AccordionTrigger className="text-xl font-semibold py-4">
								1. Information We Collect
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">
									When you register and use Fidelity Trades AI, we collect the
									following types of information:
								</p>

								<h3 className="text-lg font-semibold mt-6 mb-2">
									1.1 Personal Information
								</h3>
								<ul className="list-disc pl-5 space-y-1">
									<li>Full name</li>
									<li>Email address</li>
									<li>Phone number</li>
									<li>Date of birth</li>
									<li>Country of residence</li>
								</ul>

								<h3 className="text-lg font-semibold mt-6 mb-2">
									1.2 Financial Information
								</h3>
								<ul className="list-disc pl-5 space-y-1">
									<li>Cryptocurrency wallet addresses</li>
									<li>Transaction details (deposits, withdrawals, earnings)</li>
								</ul>

								<h3 className="text-lg font-semibold mt-6 mb-2">
									1.3 Technical Information
								</h3>
								<ul className="list-disc pl-5 space-y-1">
									<li>IP address</li>
									<li>Device and browser type</li>
									<li>Login timestamps and session data</li>
								</ul>

								<h3 className="text-lg font-semibold mt-6 mb-2">
									1.4 Communication Data
								</h3>
								<ul className="list-disc pl-5 space-y-1">
									<li>
										Messages sent via live chat, email, or support requests
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>

						{/* Section 2: How We Use Your Information */}
						<AccordionItem value="section-2">
							<AccordionTrigger className="text-xl font-semibold py-4">
								2. How We Use Your Information
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">We use your data to:</p>
								<ul className="space-y-2">
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Provide and manage your investment account</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Process deposits, withdrawals, and transactions</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Enhance security and prevent fraud</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Improve our website and services</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>
											Send important updates and promotional offers (if opted
											in)
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Comply with legal and regulatory requirements</span>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>

						{/* Section 3: How We Protect Your Information */}
						<AccordionItem value="section-3">
							<AccordionTrigger className="text-xl font-semibold py-4">
								3. How We Protect Your Information
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">
									We implement strict security measures to safeguard your
									personal and financial data, including:
								</p>
								<ul className="space-y-4">
									<li className="flex items-start">
										<Lock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
										<div>
											<span className="font-semibold">
												Advanced Encryption:
											</span>
											<span className="ml-1">
												All transactions and sensitive data are encrypted.
											</span>
										</div>
									</li>
									<li className="flex items-start">
										<Lock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
										<div>
											<span className="font-semibold">
												Two-Factor Authentication (2FA):
											</span>
											<span className="ml-1">
												Extra layer of protection for your account.
											</span>
										</div>
									</li>
									<li className="flex items-start">
										<Lock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
										<div>
											<span className="font-semibold">Secure Storage:</span>
											<span className="ml-1">
												All information is stored on highly secure, encrypted
												servers.
											</span>
										</div>
									</li>
									<li className="flex items-start">
										<Lock className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
										<div>
											<span className="font-semibold">Fraud Monitoring:</span>
											<span className="ml-1">
												We continuously monitor for suspicious activity.
											</span>
										</div>
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>

						{/* Section 4: How We Share Your Information */}
						<AccordionItem value="section-4">
							<AccordionTrigger className="text-xl font-semibold py-4">
								4. How We Share Your Information
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">
									We do not sell, rent, or trade your information to third
									parties. However, we may share data with:
								</p>
								<ul className="list-disc pl-5 space-y-2">
									<li>Regulatory authorities if required by law.</li>
									<li>
										Trusted service providers (such as payment processors) to
										facilitate transactions securely.
									</li>
									<li>
										Fraud prevention agencies to protect against fraudulent
										activities.
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>

						{/* Section 5: Cookies and Tracking Technologies */}
						<AccordionItem value="section-5">
							<AccordionTrigger className="text-xl font-semibold py-4">
								5. Cookies and Tracking Technologies
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">We use cookies to:</p>
								<ul className="space-y-2">
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>
											Improve user experience and website performance.
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>
											Remember login details for a seamless experience.
										</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Analyze website traffic and improve services.</span>
									</li>
								</ul>
								<p className="mt-4">
									You can manage cookie settings through your browser
									preferences.
								</p>
							</AccordionContent>
						</AccordionItem>

						{/* Section 6: Third-Party Links */}
						<AccordionItem value="section-6">
							<AccordionTrigger className="text-xl font-semibold py-4">
								6. Third-Party Links
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p>
									Our website may contain links to third-party websites. We are
									not responsible for their privacy policies and recommend
									reviewing their terms before sharing any information.
								</p>
							</AccordionContent>
						</AccordionItem>

						{/* Section 7: Your Rights & Choices */}
						<AccordionItem value="section-7">
							<AccordionTrigger className="text-xl font-semibold py-4">
								7. Your Rights & Choices
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">As a user, you have the right to:</p>
								<ul className="space-y-2">
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Access the personal data we hold about you.</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Request corrections to inaccurate information.</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>Withdraw consent for marketing communications.</span>
									</li>
									<li className="flex items-start">
										<span className="text-primary mr-2">✓</span>
										<span>
											Request deletion of your account and data (subject to
											legal retention requirements).
										</span>
									</li>
								</ul>
								<p className="mt-4">
									To exercise these rights, contact {supportEmail}.
								</p>
							</AccordionContent>
						</AccordionItem>

						{/* Section 8: Data Retention */}
						<AccordionItem value="section-8">
							<AccordionTrigger className="text-xl font-semibold py-4">
								8. Data Retention
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">
									We retain your information for as long as necessary to:
								</p>
								<ul className="list-disc pl-5 space-y-1">
									<li>Provide our services</li>
									<li>Comply with legal obligations</li>
									<li>Resolve disputes</li>
									<li>Enforce agreements</li>
								</ul>
							</AccordionContent>
						</AccordionItem>

						{/* Section 9: Changes to This Privacy Policy */}
						<AccordionItem value="section-9">
							<AccordionTrigger className="text-xl font-semibold py-4">
								9. Changes to This Privacy Policy
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p>
									We may update this policy from time to time. Any changes will
									be posted on this page, and significant updates will be
									communicated via email.
								</p>
							</AccordionContent>
						</AccordionItem>

						{/* Section 10: Contact Us */}
						<AccordionItem value="section-10">
							<AccordionTrigger className="text-xl font-semibold py-4">
								10. Contact Us
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-6">
								<p className="mb-4">
									For any privacy-related questions or concerns, please contact
									us at:
								</p>
								<div className="flex items-center mt-2">
									<Mail className="h-5 w-5 text-primary mr-3" />
									<a
										href={`mailto:${supportEmail}`}
										className="text-primary hover:underline">
										{supportEmail}
									</a>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			{/* Security Assurance Banner */}
			<section className="py-12 px-4 bg-secondary/5">
				<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
					<div className="flex items-center">
						<Shield className="h-12 w-12 text-primary mr-4" />
						<div>
							<h3 className="text-xl font-semibold">Your Data is Protected</h3>
							<p className="text-muted-foreground">
								Industry-leading security measures
							</p>
						</div>
					</div>
					<div className="h-16 w-px bg-border hidden md:block"></div>
					<div className="flex items-center">
						<Lock className="h-12 w-12 text-primary mr-4" />
						<div>
							<h3 className="text-xl font-semibold">Privacy Guaranteed</h3>
							<p className="text-muted-foreground">
								We never sell your information
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Back to Top Button (Fixed Position) */}
			<div className="fixed bottom-8 right-8">
				<Button
					variant="secondary"
					size="icon"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="rounded-full shadow-md">
					<ChevronUp className="h-5 w-5" />
				</Button>
			</div>
		</div>
	);
}
