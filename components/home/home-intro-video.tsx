"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Link2 } from "lucide-react";

const VIDEO_SECTION_ID = "zelox-video";

function shouldOpenVideoFromLocation(): boolean {
	if (typeof window === "undefined") return false;
	if (window.location.hash === `#${VIDEO_SECTION_ID}`) return true;
	const params = new URLSearchParams(window.location.search);
	const v = params.get("video");
	if (v === null) return false;
	return v === "" || v === "1" || v === "true";
}

export default function HomeIntroVideo() {
	const sectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [copied, setCopied] = useState(false);

	const focusVideo = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;
		video.focus({ preventScroll: true });
		void video.play().catch(() => {});
	}, []);

	const scrollToVideo = useCallback(
		(smooth: boolean) => {
			sectionRef.current?.scrollIntoView({
				behavior: smooth ? "smooth" : "auto",
				block: "center",
			});
			requestAnimationFrame(() => focusVideo());
		},
		[focusVideo]
	);

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

	const copyShareLink = async () => {
		const url = `${window.location.origin}${window.location.pathname}#${VIDEO_SECTION_ID}`;
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2000);
		} catch {
			// Clipboard may be denied; still useful to select for manual copy
		}
	};

	return (
		<section
			ref={sectionRef}
			id={VIDEO_SECTION_ID}
			className="py-8 md:py-12 lg:py-16 bg-white dark:bg-dark-200"
			aria-labelledby="zelox-video-heading">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 md:mb-8">
						<div className="text-center sm:text-left">
							<h2
								id="zelox-video-heading"
								className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
								See Zelox AI in action
							</h2>
							<p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
								Watch our intro video. Share the link so others land here directly.
							</p>
						</div>
						<Button
							type="button"
							variant="outline"
							className="shrink-0 gap-2 self-center sm:self-auto"
							onClick={copyShareLink}>
							{copied ? (
								<>
									<Check className="h-4 w-4" />
									Link copied
								</>
							) : (
								<>
									<Link2 className="h-4 w-4" />
									Copy link to video
								</>
							)}
						</Button>
					</div>

					<div className="w-full overflow-hidden rounded-xl bg-black shadow-xl ring-1 ring-neutral-200/80 dark:ring-neutral-700">
						<video
							ref={videoRef}
							className="w-full h-auto max-h-[85vh] mx-auto outline-none"
							controls
							playsInline
							preload="metadata"
							tabIndex={0}
							aria-describedby="zelox-video-heading">
							<source src="/assets/zeroxvid.mp4" type="video/mp4" />
							Your browser does not support playing this video. Try opening the
							page in another browser or download the file from /assets/zeroxvid.mp4.
						</video>
					</div>
				</div>
			</div>
		</section>
	);
}
