"use client";

import type { MutableRefObject } from "react";
import { forwardRef, useCallback, useEffect, useRef } from "react";

const VIDEO_SRC = "/assets/zeroxvid.mp4";
const DEFAULT_POSTER = "/assets/ai-hero.jpeg";

export type IntroVideoPlayerProps = {
	className?: string;
	poster?: string;
};

/**
 * Standard HTML5 video (controls, poster, playsInline).
 * Plays muted when ~35% visible; pauses when scrolled away (autoplay-in-view).
 */
export const IntroVideoPlayer = forwardRef<
	HTMLVideoElement,
	IntroVideoPlayerProps
>(function IntroVideoPlayer({ className, poster = DEFAULT_POSTER }, ref) {
	const innerRef = useRef<HTMLVideoElement | null>(null);

	const setRefs = useCallback(
		(node: HTMLVideoElement | null) => {
			innerRef.current = node;
			if (typeof ref === "function") {
				ref(node);
			} else if (ref) {
				(ref as MutableRefObject<HTMLVideoElement | null>).current = node;
			}
		},
		[ref]
	);

	useEffect(() => {
		const video = innerRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						void video.play().catch(() => {});
					} else {
						video.pause();
					}
				}
			},
			{ threshold: 0.35, rootMargin: "0px 0px -5% 0px" }
		);

		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	return (
		<video
			ref={setRefs}
			className={className}
			controls
			playsInline
			preload="metadata"
			poster={poster}
			muted
			tabIndex={0}
			aria-label="Zelox AI intro video">
			<source src={VIDEO_SRC} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	);
});
