import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms and Conditions",
	description:
		"Terms and conditions for using Zelox AI services, website, and related offerings.",
};

const sections: { id: string; title: string }[] = [
	{ id: "introduction", title: "1. Introduction & Agreement" },
	{ id: "definitions", title: "2. Definitions" },
	{ id: "services", title: "3. Description of Services" },
	{ id: "eligibility", title: "4. Eligibility & Registration" },
	{ id: "accounts", title: "5. Accounts & Security" },
	{ id: "deposits", title: "6. Deposits, Trading & Withdrawals" },
	{ id: "risk", title: "7. Risk Disclosures" },
	{ id: "fees", title: "8. Fees & Taxes" },
	{ id: "ip", title: "9. Intellectual Property" },
	{ id: "prohibited", title: "10. Prohibited Conduct" },
	{ id: "disclaimers", title: "11. Disclaimers & Limitation of Liability" },
	{ id: "indemnity", title: "12. Indemnification" },
	{ id: "termination", title: "13. Suspension & Termination" },
	{ id: "disputes", title: "14. Dispute Resolution & Governing Law" },
	{ id: "general", title: "15. General Provisions" },
	{ id: "contact", title: "16. Contact" },
];

export default function TermsAndConditionsPage() {
	return (
		<div className="container py-10 md:py-14 mx-auto px-4 max-w-4xl">
			<h1 className="text-3xl md:text-4xl font-bold mb-2">Terms and Conditions</h1>
			<p className="text-muted-foreground mb-8">
				<strong>Effective date:</strong> April 12, 2026 · <strong>Website:</strong>{" "}
				<a
					href="https://zeloxai.com"
					className="text-primary underline underline-offset-2">
					zeloxai.com
				</a>
			</p>

			<nav
				aria-label="Table of contents"
				className="mb-10 p-4 rounded-lg border bg-muted/30">
				<p className="font-semibold mb-3">Table of contents</p>
				<ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
					{sections.map((s) => (
						<li key={s.id}>
							<a href={`#${s.id}`} className="text-primary hover:underline">
								{s.title.replace(/^\d+\.\s*/, "")}
							</a>
						</li>
					))}
				</ol>
			</nav>

			<article className="prose prose-neutral dark:prose-invert max-w-none text-foreground space-y-10 [&_h2]:scroll-mt-24">
				<section id="introduction">
					<h2 className="text-2xl font-semibold mb-3">1. Introduction & Agreement</h2>
					<p>
						These Terms and Conditions (“Terms”) govern your access to and use of
						the websites, applications, and related services (collectively, the
						“Services”) offered by Zelox AI and its operators (“we,” “us,” or “our”).
						By accessing or using the Services, creating an account, or clicking an
						acceptance button where provided, you agree to be bound by these Terms
						and our{" "}
						<Link
							href="/privacy-policy"
							className="text-primary underline underline-offset-2">
							Privacy Policy
						</Link>
						. If you do not agree, do not use the Services.
					</p>
					<p className="mt-3">
						We may update these Terms from time to time. We will post the revised
						Terms on this page and update the effective date. Continued use after
						changes constitutes acceptance of the revised Terms, except where
						applicable law requires additional consent.
					</p>
				</section>

				<section id="definitions">
					<h2 className="text-2xl font-semibold mb-3">2. Definitions</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>
							<strong>“User,” “you,” “your”</strong> means any individual or entity
							that accesses or uses the Services.
						</li>
						<li>
							<strong>“Account”</strong> means the registered profile you create to
							access certain features.
						</li>
						<li>
							<strong>“Content”</strong> means text, graphics, software, data, and
							other materials made available through the Services.
						</li>
					</ul>
				</section>

				<section id="services">
					<h2 className="text-2xl font-semibold mb-3">3. Description of Services</h2>
					<p>
						Zelox AI provides informational and technology-related tools that may
						include educational content, account dashboards, and interfaces that
						describe automated or assisted trading concepts. Features and
						availability may change. We do not guarantee any particular result,
						return, or outcome. Nothing on the Services constitutes personalized
						investment, legal, or tax advice.
					</p>
				</section>

				<section id="eligibility">
					<h2 className="text-2xl font-semibold mb-3">4. Eligibility & Registration</h2>
					<p>You represent that you:</p>
					<ul className="list-disc pl-6 mt-2 space-y-2">
						<li>Are at least 18 years old (or the age of majority in your jurisdiction);</li>
						<li>
							Have full legal capacity to enter into these Terms where you live;
						</li>
						<li>
							Are not barred from using the Services under applicable laws (including
							sanctions or export controls);
						</li>
						<li>
							Will provide accurate registration information and keep it current.
						</li>
					</ul>
				</section>

				<section id="accounts">
					<h2 className="text-2xl font-semibold mb-3">5. Accounts & Security</h2>
					<p>
						You are responsible for safeguarding passwords, devices, and any
						two-factor credentials. Notify us promptly at{" "}
						<a
							href="mailto:support@zeloxai.com"
							className="text-primary underline underline-offset-2">
							support@zeloxai.com
						</a>{" "}
						if you suspect unauthorized access. We are not liable for losses caused
						by your failure to secure your Account or by third-party actions outside
						our reasonable control.
					</p>
				</section>

				<section id="deposits">
					<h2 className="text-2xl font-semibold mb-3">
						6. Deposits, Trading & Withdrawals
					</h2>
					<p>
						Where the Services describe deposits, balances, or withdrawals, actual
						timing and rules depend on the product, network confirmations, and
						compliance checks. Fees (including blockchain network fees) may apply.
						You are solely responsible for the legality of your use of crypto assets
						in your jurisdiction.
					</p>
				</section>

				<section id="risk">
					<h2 className="text-2xl font-semibold mb-3">7. Risk Disclosures</h2>
					<p>
						Digital assets and trading involve substantial risk, including possible
						total loss of principal. Markets are volatile. Past performance (including
						any statistics shown on the site) does not guarantee future results. You
						should only risk capital you can afford to lose and should seek
						independent professional advice as needed.
					</p>
				</section>

				<section id="fees">
					<h2 className="text-2xl font-semibold mb-3">8. Fees & Taxes</h2>
					<p>
						We may charge service or withdrawal fees as disclosed in the product flow
						or fee schedule. You are responsible for all taxes associated with your
						use of the Services.
					</p>
				</section>

				<section id="ip">
					<h2 className="text-2xl font-semibold mb-3">9. Intellectual Property</h2>
					<p>
						The Services, including branding, logos, software, and Content, are owned
						by us or our licensors and are protected by intellectual property laws.
						Except for the limited right to use the Services in accordance with these
						Terms, no rights are granted. You may not copy, scrape, reverse engineer,
						or create derivative works except as permitted by law.
					</p>
				</section>

				<section id="prohibited">
					<h2 className="text-2xl font-semibold mb-3">10. Prohibited Conduct</h2>
					<p>You agree not to:</p>
					<ul className="list-disc pl-6 mt-2 space-y-2">
						<li>Violate any law or third-party rights;</li>
						<li>Use the Services for fraud, market manipulation, or money laundering;</li>
						<li>
							Interfere with or disrupt the Services, servers, or networks, or bypass
							security measures;
						</li>
						<li>
							Use automated means to access the Services in a manner that overloads or
							harms our systems without permission;
						</li>
						<li>Impersonate another person or misrepresent your affiliation.</li>
					</ul>
				</section>

				<section id="disclaimers">
					<h2 className="text-2xl font-semibold mb-3">
						11. Disclaimers & Limitation of Liability
					</h2>
					<p>
						<strong>Disclaimer.</strong> THE SERVICES ARE PROVIDED “AS IS” AND “AS
						AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
						WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
						MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
					</p>
					<p className="mt-3">
						<strong>Limitation.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE
						WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
						CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR
						GOODWILL, ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES. OUR
						AGGREGATE LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS SHALL NOT
						EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN FEES FOR THE SERVICES
						IN THE TWELVE (12) MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS
						(US $100), EXCEPT WHERE PROHIBITED BY LAW.
					</p>
				</section>

				<section id="indemnity">
					<h2 className="text-2xl font-semibold mb-3">12. Indemnification</h2>
					<p>
						You will defend, indemnify, and hold harmless Zelox AI and its affiliates,
						officers, and employees from any claims, damages, or expenses (including
						reasonable attorneys’ fees) arising from your use of the Services, your
						violation of these Terms, or your violation of third-party rights.
					</p>
				</section>

				<section id="termination">
					<h2 className="text-2xl font-semibold mb-3">13. Suspension & Termination</h2>
					<p>
						We may suspend or terminate your access to the Services at any time for
						violation of these Terms, legal or risk concerns, or operational reasons.
						You may stop using the Services at any time. Provisions that by their nature
						should survive (including disclaimers, limitations, indemnity, and
						dispute resolution) will survive termination.
					</p>
				</section>

				<section id="disputes">
					<h2 className="text-2xl font-semibold mb-3">
						14. Dispute Resolution & Governing Law
					</h2>
					<p>
						These Terms are governed by the laws of the State of Delaware, United
						States, excluding conflict-of-law rules, unless mandatory consumer
						protections in your country of residence apply. You agree that courts in
						Delaware have exclusive jurisdiction for disputes, subject to mandatory
						arbitration or small-claims rules where you cannot waive them under
						applicable law. If arbitration applies, it will be conducted under the
						rules of a recognized arbitration body, in English, with one arbitrator.
					</p>
					<p className="mt-3">
						<strong>Class action waiver.</strong> Where permitted, disputes must be
						brought on an individual basis only.
					</p>
				</section>

				<section id="general">
					<h2 className="text-2xl font-semibold mb-3">15. General Provisions</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>
							<strong>Entire agreement.</strong> These Terms and the Privacy Policy
							are the entire agreement regarding the Services.
						</li>
						<li>
							<strong>Severability.</strong> If a provision is invalid, the remainder
							stays in effect.
						</li>
						<li>
							<strong>No waiver.</strong> Failure to enforce a provision is not a
							waiver.
						</li>
						<li>
							<strong>Assignment.</strong> You may not assign these Terms without our
							consent; we may assign them in connection with a merger or sale.
						</li>
					</ul>
				</section>

				<section id="contact">
					<h2 className="text-2xl font-semibold mb-3">16. Contact</h2>
					<p>
						Questions about these Terms:{" "}
						<a
							href="mailto:support@zeloxai.com"
							className="text-primary underline underline-offset-2">
							support@zeloxai.com
						</a>
					</p>
				</section>
			</article>
		</div>
	);
}
