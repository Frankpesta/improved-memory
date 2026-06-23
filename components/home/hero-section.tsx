"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Shield, Bot } from "lucide-react";
import Link from "next/link";
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
					<div className="flex flex-col gap-8 md:gap-10 lg:gap-14 items-center">
						{/* Hero text block */}
						<div className="w-full max-w-4xl mx-auto text-center space-y-5 md:space-y-6 lg:space-y-8">
							{/* Gift banner */}
							<div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 dark:border-primary-400/30 bg-primary-500/5 dark:bg-primary-950/40 px-5 py-2.5 backdrop-blur-sm">
								<span className="text-sm font-medium text-neutral-700 dark:text-primary-200">
									🎁 Register Today and Get a Free{" "}
									<span className="text-primary-600 dark:text-primary-400 font-semibold">
										$10 Welcome Gift
									</span>{" "}
									Instantly
								</span>
							</div>

							<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
								The Future of{" "}
								<span className="text-primary-600 dark:text-primary-400">
									AI-Driven
								</span>{" "}
								Crypto Trading
							</h1>

							<p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-medium">
								Your Gateway to{" "}
								<span className="text-primary-600 dark:text-primary-400">
									Smart, Profitable, and Secure
								</span>{" "}
								Crypto Trading
							</p>

							{/* Trusted badge */}
							<div className="flex justify-center">
								<div className="inline-flex items-center gap-3 rounded-full border border-primary-500/30 dark:border-primary-400/30 bg-primary-500/5 dark:bg-primary-950/40 px-6 py-3 backdrop-blur-sm">
									<span className="h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0" />
									<span className="text-sm font-medium text-foreground dark:text-primary-200">
										Trusted By Crypto Investors Since 2020
									</span>
								</div>
							</div>

							<p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
								Zelox AI helps crypto investors trade the cryptocurrency market
								automatically using advanced artificial intelligence. Our AI
								analyzes market opportunities{" "}
								<span className="text-primary-600 dark:text-primary-400 font-semibold">
									24/7
								</span>
								, executes trades without emotions, and delivers over{" "}
								<span className="text-primary-600 dark:text-primary-400 font-semibold">
									94% trade decision accuracy
								</span>{" "}
								in selected market conditions, helping investors trade smarter
								while saving time.
							</p>

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
						</div>

						{/* Video */}
						<section
							ref={videoSectionRef}
							id={VIDEO_SECTION_ID}
							className="w-full py-2 lg:py-4"
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
						<div className="w-full space-y-4 md:space-y-6 lg:space-y-8 text-center">
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
								<StatItem value="250K+" label="Active Users" />
								<StatItem value="$1.3B+" label="Trading Volume" />
								<StatItem value="94%" label="Trading Accuracy" />
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
