import type { Metadata } from "next";
import Link from "next/link";
import {
	Activity,
	AlertTriangle,
	BarChart3,
	Code2,
	Database,
	ExternalLink,
	FileText,
	Layers,
	Mail,
	Rocket,
	Shield,
	Users,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Whitepaper",
	description:
		"Zelox AI whitepaper — overview of our algorithmic cryptocurrency trading system, architecture, risk framework, and development roadmap.",
};

const WEBSITE = "https://www.zeloxai.com";
const SUPPORT_EMAIL = "support@zeloxai.com";

const sections = [
	{ id: "disclaimer", title: "1. Disclaimer" },
	{ id: "introduction", title: "2. Introduction" },
	{ id: "problem", title: "3. Problem Statement" },
	{ id: "overview", title: "4. System Overview" },
	{ id: "how-it-works", title: "5. How the System Works" },
	{ id: "features", title: "6. Early-Stage Features" },
	{ id: "trading-logic", title: "7. Trading Logic Approach" },
	{ id: "risk", title: "8. Risk Considerations" },
	{ id: "performance", title: "9. Performance Notes" },
	{ id: "architecture", title: "10. Technical Architecture" },
	{ id: "security", title: "11. Security Considerations" },
	{ id: "roadmap", title: "12. Roadmap (Early Stage)" },
	{ id: "team", title: "13. Development Team" },
	{ id: "conclusion", title: "14. Conclusion" },
	{ id: "contact", title: "15. Contact" },
] as const;

const pipelineSteps = [
	{
		title: "Market Data Input",
		body: "The system collects real-time and historical price data from supported cryptocurrency exchanges.",
	},
	{
		title: "Signal Generation",
		body: "Algorithms process price movement patterns, volume activity, and volatility indicators to generate trading signals.",
	},
	{
		title: "Strategy Application",
		body: "Predefined trading strategies are applied depending on market conditions.",
	},
	{
		title: "Execution Layer",
		body: "When conditions are met, trades are executed via exchange APIs.",
	},
	{
		title: "Risk Controls",
		body: "Basic safeguards are applied to limit exposure and manage downside risk.",
	},
] as const;

const roadmapPhases = [
	{
		phase: "Phase 1",
		title: "Prototype Development",
		items: [
			"Core trading logic design",
			"Basic system integration",
			"Internal testing",
		],
	},
	{
		phase: "Phase 2",
		title: "Simulation & Backtesting",
		items: [
			"Strategy evaluation",
			"Risk model testing",
			"Performance benchmarking",
		],
	},
	{
		phase: "Phase 3",
		title: "Live Market Testing",
		items: [
			"Limited capital deployment",
			"System monitoring",
			"Iterative improvements",
		],
	},
] as const;

function SectionDivider() {
	return (
		<hr
			className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
			aria-hidden
		/>
	);
}

export default function WhitepaperPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Hero */}
			<header className="relative overflow-hidden border-b border-border">
				<div
					className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 dark:from-primary/20 dark:via-background dark:to-secondary/15"
					aria-hidden
				/>
				<div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden />
				<div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" aria-hidden />

				<div className="relative container mx-auto px-4 py-14 md:py-20 max-w-5xl">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 dark:bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
						<FileText className="h-3.5 w-3.5" aria-hidden />
						Technical document
					</div>
					<p className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">
						Zelox AI Whitepaper
					</p>
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl">
						Algorithmic Crypto Trading System
					</h1>
					<p className="mt-4 text-muted-foreground text-lg max-w-2xl">
						An overview of the experimental trading system, its design principles,
						architecture, and early-stage development roadmap.
					</p>
					<dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
						<div>
							<dt className="text-muted-foreground">Version</dt>
							<dd className="font-medium">1.0 — December 2020</dd>
						</div>
						<div>
							<dt className="text-muted-foreground">Website</dt>
							<dd>
								<a
									href={WEBSITE}
									className="font-medium text-primary hover:underline underline-offset-2 inline-flex items-center gap-1">
									{WEBSITE.replace("https://", "")}
									<ExternalLink className="h-3.5 w-3.5" aria-hidden />
								</a>
							</dd>
						</div>
					</dl>
				</div>
			</header>

			<div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
				<div className="lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-12 xl:gap-16">
					{/* Table of contents */}
					<nav
						aria-label="Table of contents"
						className="lg:sticky lg:top-24 lg:self-start mb-10 lg:mb-0">
						<div className="rounded-xl border border-border bg-muted/30 p-5">
							<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
								Contents
							</p>
							<ol className="space-y-2 text-sm">
								{sections.map((s) => (
									<li key={s.id}>
										<a
											href={`#${s.id}`}
											className="text-muted-foreground hover:text-primary transition-colors leading-snug block py-0.5">
											{s.title.replace(/^\d+\.\s*/, "")}
										</a>
									</li>
								))}
							</ol>
						</div>
					</nav>

					{/* Main document */}
					<article className="min-w-0 text-foreground [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_li]:text-muted-foreground">
						<section id="disclaimer">
							<h2>1. Disclaimer</h2>
							<div className="rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 p-5 md:p-6 not-prose">
								<div className="flex gap-3">
									<AlertTriangle
										className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
										aria-hidden
									/>
									<div className="space-y-3 text-sm text-foreground/90 leading-relaxed">
										<p>
											Zelox AI is an early-stage software system designed for
											research and development in algorithmic cryptocurrency
											trading.
										</p>
										<p>
											This document is for informational purposes only and does
											not constitute financial advice, investment advice, or a
											solicitation to invest.
										</p>
										<p>
											Cryptocurrency markets are highly volatile and
											unpredictable. Users may experience significant losses. No
											performance outcomes, projections, or system outputs
											should be interpreted as guarantees.
										</p>
										<p>
											All trading activity involves risk, and users are solely
											responsible for their decisions and capital allocation.
										</p>
									</div>
								</div>
							</div>
						</section>

						<SectionDivider />

						<section id="introduction">
							<h2>2. Introduction</h2>
							<div className="space-y-4">
								<p>
									Zelox AI is an experimental algorithmic trading system built to
									explore automated strategies in cryptocurrency markets.
								</p>
								<p>
									The system is designed to analyze market data and execute trades
									based on predefined logic models, reducing reliance on manual
									decision-making and emotional trading behavior.
								</p>
								<p>
									The goal of Zelox AI is to study how automated systems can
									improve consistency and efficiency in fast-moving digital asset
									markets.
								</p>
							</div>
						</section>

						<SectionDivider />

						<section id="problem">
							<h2>3. Problem Statement</h2>
							<p className="mb-4">
								Cryptocurrency markets operate continuously and present several
								challenges for manual traders:
							</p>
							<ul className="grid sm:grid-cols-2 gap-3 list-none pl-0">
								{[
									"High volatility and rapid price changes",
									"Emotional and impulsive decision-making",
									"Inability to monitor markets 24/7",
									"Delayed reaction to market movements",
									"Fragmented and overwhelming data sources",
								].map((item) => (
									<li
										key={item}
										className="flex gap-2 rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm">
										<span
											className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
											aria-hidden
										/>
										{item}
									</li>
								))}
							</ul>
							<p className="mt-6">
								These limitations often result in inconsistent trading outcomes
								and inefficient execution.
							</p>
						</section>

						<SectionDivider />

						<section id="overview">
							<h2>4. System Overview (Zelox AI)</h2>
							<p className="mb-4">
								Zelox AI is built as a rule-based and algorithm-assisted trading
								system that aims to:
							</p>
							<ul className="list-disc pl-6 space-y-2 mb-6">
								<li>Monitor market conditions continuously</li>
								<li>Identify potential trading opportunities</li>
								<li>Execute trades based on predefined strategies</li>
								<li>Apply basic risk control mechanisms</li>
							</ul>
							<p className="rounded-lg border border-primary/20 bg-primary/5 dark:bg-primary/10 px-4 py-3 text-foreground/90 text-sm">
								The system is intended as a decision-support and automation tool
								rather than a fully autonomous profit-generating engine.
							</p>
						</section>

						<SectionDivider />

						<section id="how-it-works">
							<h2>5. How the System Works</h2>
							<p className="mb-8">
								Zelox AI operates through the following pipeline:
							</p>
							<ol className="relative space-y-0 list-none pl-0">
								{pipelineSteps.map((step, index) => (
									<li key={step.title} className="relative flex gap-5 pb-10 last:pb-0">
										{index < pipelineSteps.length - 1 && (
											<span
												className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent"
												aria-hidden
											/>
										)}
										<span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
											{index + 1}
										</span>
										<div className="pt-0.5 min-w-0">
											<h3 className="text-base font-semibold text-foreground mb-1.5">
												{step.title}
											</h3>
											<p className="text-sm">{step.body}</p>
										</div>
									</li>
								))}
							</ol>
						</section>

						<SectionDivider />

						<section id="features">
							<h2>6. Early-Stage Features</h2>
							<p className="mb-4">
								At this stage of development, Zelox AI includes:
							</p>
							<ul className="list-disc pl-6 space-y-2">
								<li>Automated trade execution via API integration</li>
								<li>Basic market monitoring system</li>
								<li>Rule-based trading logic</li>
								<li>Initial risk control framework</li>
								<li>Logging and performance tracking tools</li>
							</ul>
						</section>

						<SectionDivider />

						<section id="trading-logic">
							<h2>7. Trading Logic Approach</h2>
							<p className="mb-4">
								The system explores several foundational trading approaches,
								including:
							</p>
							<ul className="list-disc pl-6 space-y-2 mb-6">
								<li>Trend-following logic</li>
								<li>Momentum-based signals</li>
								<li>Simple volatility filters</li>
								<li>Entry and exit rule conditions</li>
							</ul>
							<p>
								These strategies are not static and are subject to ongoing testing
								and refinement.
							</p>
						</section>

						<SectionDivider />

						<section id="risk">
							<h2>8. Risk Considerations</h2>
							<p className="mb-6">
								Risk management in Zelox AI is in early development and includes:
							</p>
							<ul className="grid sm:grid-cols-2 gap-3 list-none pl-0 mb-6">
								{[
									{ icon: Shield, text: "Trade-level exposure limits" },
									{ icon: Activity, text: "Basic stop-loss conditions" },
									{ icon: BarChart3, text: "Position sizing rules" },
									{
										icon: AlertTriangle,
										text: "System-level monitoring of abnormal market conditions",
									},
								].map(({ icon: Icon, text }) => (
									<li
										key={text}
										className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3.5 shadow-sm">
										<Icon
											className="h-5 w-5 text-primary shrink-0 mt-0.5"
											aria-hidden
										/>
										<span className="text-sm text-foreground">{text}</span>
									</li>
								))}
							</ul>
							<p>
								The effectiveness of these mechanisms is still being evaluated in
								live and simulated environments.
							</p>
						</section>

						<SectionDivider />

						<section id="performance">
							<h2>9. Performance Notes</h2>
							<div className="space-y-4">
								<p>
									Any performance data, backtests, or simulations referenced by
									Zelox AI are experimental in nature.
								</p>
								<p>
									They are used strictly for system evaluation and should not be
									interpreted as guarantees of future performance.
								</p>
								<p>
									Live market conditions may differ significantly from historical
									or simulated environments.
								</p>
							</div>
						</section>

						<SectionDivider />

						<section id="architecture">
							<h2>10. Technical Architecture</h2>
							<p className="mb-6">
								Zelox AI is built using a modular architecture consisting of:
							</p>
							<ul className="space-y-3 list-none pl-0 mb-6">
								{[
									{
										icon: Database,
										label: "Data ingestion layer",
										desc: "market feeds",
									},
									{
										icon: Code2,
										label: "Strategy engine",
										desc: "rule-based logic",
									},
									{
										icon: Layers,
										label: "Execution module",
										desc: "exchange API integration",
									},
									{
										icon: Activity,
										label: "Logging and monitoring system",
										desc: "",
									},
								].map(({ icon: Icon, label, desc }) => (
									<li
										key={label}
										className="flex items-center gap-4 rounded-xl border border-border bg-muted/20 px-4 py-4">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
											<Icon className="h-5 w-5" aria-hidden />
										</div>
										<div>
											<p className="font-medium text-foreground text-sm">
												{label}
												{desc ? (
													<span className="font-normal text-muted-foreground">
														{" "}
														({desc})
													</span>
												) : null}
											</p>
										</div>
									</li>
								))}
							</ul>
							<p>
								The system is designed to be flexible for future upgrades and
								improvements.
							</p>
						</section>

						<SectionDivider />

						<section id="security">
							<h2>11. Security Considerations</h2>
							<p className="mb-4">
								Security is a key concern in system design. Current safeguards
								include:
							</p>
							<ul className="list-disc pl-6 space-y-2 mb-6">
								<li>API-based exchange connections</li>
								<li>
									Encrypted communication channels (where supported)
								</li>
								<li>Access-controlled system components</li>
							</ul>
							<p>
								Further enhancements are planned as the system matures.
							</p>
						</section>

						<SectionDivider />

						<section id="roadmap">
							<h2>12. Roadmap (Early Stage)</h2>
							<div className="grid md:grid-cols-3 gap-4 mt-6">
								{roadmapPhases.map((phase) => (
									<div
										key={phase.phase}
										className="relative flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
										<span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
											{phase.phase}
										</span>
										<h3 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
											<Rocket className="h-4 w-4 text-primary shrink-0" aria-hidden />
											{phase.title}
										</h3>
										<ul className="list-disc pl-5 space-y-2 text-sm flex-1">
											{phase.items.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</section>

						<SectionDivider />

						<section id="team">
							<h2>13. Development Team</h2>
							<p className="mb-4">
								Zelox AI is being developed by a small technical team focused on:
							</p>
							<ul className="list-disc pl-6 space-y-2 mb-6">
								<li>Algorithmic trading systems</li>
								<li>Software engineering</li>
								<li>Market data analysis</li>
							</ul>
							<div className="flex items-center gap-3 rounded-lg border border-border bg-muted/20 px-4 py-3">
								<Users className="h-5 w-5 text-primary shrink-0" aria-hidden />
								<p className="text-sm text-muted-foreground">
									The project is currently in an early-stage development phase.
								</p>
							</div>
						</section>

						<SectionDivider />

						<section id="conclusion">
							<h2>14. Conclusion</h2>
							<div className="space-y-4">
								<p>
									Zelox AI is an evolving experiment in automated cryptocurrency
									trading systems.
								</p>
								<p>
									The objective is to better understand how algorithmic strategies
									perform in real market environments and to refine systems that
									reduce human inefficiencies in trading.
								</p>
								<p>
									At this stage, the system remains under active development and
									should be considered experimental.
								</p>
							</div>
						</section>

						<SectionDivider />

						<section id="contact">
							<h2>15. Contact</h2>
							<div className="rounded-xl border border-border bg-gradient-to-br from-muted/40 to-muted/10 p-6 md:p-8 space-y-4">
								<p className="text-muted-foreground">
									For questions about this whitepaper or the Zelox AI project:
								</p>
								<ul className="space-y-3 list-none pl-0">
									<li>
										<span className="text-sm text-muted-foreground block mb-1">
											Website
										</span>
										<a
											href={WEBSITE}
											className="inline-flex items-center gap-2 font-medium text-primary hover:underline underline-offset-2">
											{WEBSITE}
											<ExternalLink className="h-4 w-4" aria-hidden />
										</a>
									</li>
									<li>
										<span className="text-sm text-muted-foreground block mb-1">
											Email
										</span>
										<a
											href={`mailto:${SUPPORT_EMAIL}`}
											className="inline-flex items-center gap-2 font-medium text-primary hover:underline underline-offset-2">
											<Mail className="h-4 w-4" aria-hidden />
											{SUPPORT_EMAIL}
										</a>
									</li>
								</ul>
								<p className="text-xs text-muted-foreground pt-2 border-t border-border">
									See also our{" "}
									<Link
										href="/terms-and-conditions"
										className="text-primary hover:underline underline-offset-2">
										Terms &amp; Conditions
									</Link>{" "}
									and{" "}
									<Link
										href="/privacy-policy"
										className="text-primary hover:underline underline-offset-2">
										Privacy Policy
									</Link>
									.
								</p>
							</div>
						</section>
					</article>
				</div>
			</div>
		</div>
	);
}
