"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Shield, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IntroVideoPlayer } from "@/components/home/intro-video-player";
import { ZELOX_APP_ORIGIN } from "@/constants";

const VIDEO_SECTION_ID = "zelox-video";

function shouldOpenVideoFromLocation(): boolean {
	if (typeof window === "undefined") return false;
	if (window.location.hash === `#${VIDEO_SECTION_ID}`) return true;
	const params = new URLSearchParams(window.location.search);
	const v = params.get("video");
	if (v === null) return false;
	return v === "" || v === "1" || v === "true";
}

interface StatItemProps {
	value: string;
	label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
	<div className="flex flex-col items-center px-4 py-3 rounded-lg bg-dark-200/5 backdrop-blur-sm">
		<span className="text-2xl font-bold text-primary-500">{value}</span>
		<span className="text-sm text-neutral-600 dark:text-neutral-400">
			{label}
		</span>
	</div>
);

const HeroSection = () => {
	const handleStartTrading = () => {
		window.location.href = `${ZELOX_APP_ORIGIN}/register`;
	};

	const videoSectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const scrollToVideo = useCallback((smooth: boolean) => {
		videoSectionRef.current?.scrollIntoView({
			behavior: smooth ? "smooth" : "auto",
			block: "center",
		});
		requestAnimationFrame(() => {
			videoRef.current?.focus({ preventScroll: true });
		});
	}, []);

	useEffect(() => {
		const onHashOrQuery = () => {
			if (shouldOpenVideoFromLocation()) {
				scrollToVideo(true);
			}
		};
		onHashOrQuery();
		window.addEventListener("hashchange", onHashOrQuery);
		return () => window.removeEventListener("hashchange", onHashOrQuery);
	}, [scrollToVideo]);

	return (
		<div className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-dark-300 dark:to-dark-400">
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

			<div className="relative container mx-auto px-4 py-8 md:py-12 lg:py-24">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
						{/* Image + badge: first on mobile */}
						<div className="space-y-4 md:space-y-5 lg:space-y-6 order-1 lg:order-2">
							<div
								className="relative rounded-2xl overflow-hidden p-[2px]"
								style={{
									background:
										"linear-gradient(135deg, rgba(139, 92, 246, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)",
									boxShadow:
										"0 0 24px rgba(139, 92, 246, 0.25), 0 0 48px rgba(59, 130, 246, 0.15)",
								}}>
								<div className="rounded-2xl bg-background/40 dark:bg-background/20 backdrop-blur-sm overflow-hidden">
									<div className="relative aspect-[4/3] w-full min-h-[200px]">
										<Image
											src="/assets/ai-hero.jpeg"
											alt="AI-driven crypto trading – Zelox AI"
											fill
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 50vw"
											priority
										/>
									</div>
								</div>
							</div>
							<div className="flex justify-center">
								<div className="inline-flex items-center gap-3 rounded-full border border-primary-500/30 dark:border-primary-400/30 bg-primary-500/5 dark:bg-primary-950/40 px-6 py-3 backdrop-blur-sm">
									<span className="h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0" />
									<span className="text-sm font-medium text-foreground dark:text-primary-200">
										Trusted By Crypto Investors Since 2020
									</span>
								</div>
							</div>
						</div>

						{/* Text column */}
						<div className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center">
							<div className="space-y-3 md:space-y-4 lg:space-y-6">
								<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
									The Future of AI-Driven Crypto Trading
								</h1>
								<p className="text-lg text-neutral-700 dark:text-neutral-300">
									Your Gateway to Smart, Profitable, and Secure Crypto Trading
								</p>
							</div>

							<div className="rounded-lg border border-primary-200/60 dark:border-primary-800/50 bg-primary-50/40 dark:bg-primary-950/30 backdrop-blur-sm px-4 py-2.5 inline-block mx-auto">
								<p className="text-xs text-neutral-600 dark:text-primary-300/80 leading-snug text-center max-w-xl">
									Developed and operated by{" "}
									<span className="font-medium text-primary-700 dark:text-primary-400">
										TOWER RESEARCH CAPITAL
									</span>{" "}
									a UK-registered research and technology company (Company Reg No.
									06005750)
								</p>
							</div>

							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
								At Zelox AI, we use artificial intelligence to support a clear,
								streamlined trading experience. Our AI trading system is trained
								on broad market data and is designed to execute trades with high
								accuracy, helping you stay informed and in control of your
								strategy.
							</p>
						</div>

						{/* Video: full width row; under hero copy on mobile, below grid on desktop */}
						<section
							ref={videoSectionRef}
							id={VIDEO_SECTION_ID}
							className="order-3 lg:col-span-2 w-full py-2 lg:py-4"
							aria-labelledby="zelox-video-heading">
							<div className="max-w-5xl mx-auto">
								<h2
									id="zelox-video-heading"
									className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4 md:mb-6 text-center">
									Watch this Quick Video to Understand How Zelox AI Works
								</h2>
								<div className="w-full overflow-hidden rounded-xl bg-black shadow-xl ring-1 ring-neutral-200/80 dark:ring-neutral-700">
									<IntroVideoPlayer
										ref={videoRef}
										className="w-full h-auto max-h-[85vh] mx-auto outline-none"
									/>
								</div>
							</div>
						</section>

						{/* Stats, CTA, feature cards */}
						<div className="order-4 lg:col-span-2 space-y-4 md:space-y-6 lg:space-y-8 text-center">
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
								<StatItem value="250K+" label="Active Users" />
								<StatItem value="$1.3B+" label="Trading Volume" />
								<StatItem value="94%" label="Trading Accuracy" />
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									onClick={handleStartTrading}
									size="lg"
									className="bg-primary-600 hover:bg-primary-700 text-white">
									Start Trading Now
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
								<Link href={"/our-services"}>
									<Button
										size="lg"
										variant="outline"
										className="border-primary-600 text-primary-600 hover:bg-primary-50">
										Learn More
									</Button>
								</Link>
							</div>

							<div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-5xl mx-auto">
								<div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg text-left">
									<Bot className="h-10 w-10 sm:h-12 sm:w-12 text-primary-600 mb-3 sm:mb-4" />
									<h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										AI-Powered Trading
									</h3>
									<p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
										Advanced algorithms making smart decisions 24/7
									</p>
								</div>
								<div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg text-left">
									<LineChart className="h-10 w-10 sm:h-12 sm:w-12 text-secondary-700 mb-3 sm:mb-4" />
									<h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
										Daily Returns
									</h3>
									<p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
										Consistent profits with high accuracy trading
									</p>
								</div>
							</div>
							<div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-dark-200 shadow-lg max-w-5xl mx-auto text-left">
								<Shield className="h-10 w-10 sm:h-12 sm:w-12 text-accent-600 mb-3 sm:mb-4" />
								<h3 className="text-lg font-semibold mb-2">
									Secure & Reliable
								</h3>
								<p className="text-neutral-600 dark:text-neutral-400">
									Enterprise-grade security protecting your tradings
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
