"use client";

import { forwardRef, useEffect, useState } from "react";

const VIDEO_SRC = "/assets/zeroxvid.mp4";
const DEFAULT_POSTER = "/assets/ai-hero.jpeg";

export type IntroVideoPlayerProps = {
	className?: string;
	poster?: string;
};

export const IntroVideoPlayer = forwardRef<
	HTMLVideoElement,
	IntroVideoPlayerProps
>(function IntroVideoPlayer({ className, poster = DEFAULT_POSTER }, ref) {
	const [autoPlay, setAutoPlay] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia("(max-width: 1023px)");
		const apply = () => setAutoPlay(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);

	return (
		<video
			ref={ref}
			className={className}
			controls
			playsInline
			preload="auto"
			poster={poster}
			muted={autoPlay}
			autoPlay={autoPlay}
			tabIndex={0}
			aria-label="Zelox AI intro video">
			<source src={VIDEO_SRC} type="video/mp4" />
		</video>
	);
});
