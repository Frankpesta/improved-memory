"use client";

import { useLayoutEffect } from "react";
import Script from "next/script";

/** Do not include the page language (en) — Google’s widget misbehaves if it’s in this list */
const INCLUDED_LANGS =
	"es,fr,de,it,pt,zh-CN,ja,ko,ar,hi,ru,nl,pl,tr,vi,th,id,ms,uk,sv,da,no,fi,cs,el,he";

type TranslateElementCtor = {
	new (options: Record<string, unknown>, elementId: string): void;
	InlineLayout: { SIMPLE: number };
};

declare global {
	interface Window {
		googleTranslateElementInit?: () => void;
		google?: {
			translate: {
				TranslateElement: TranslateElementCtor;
			};
		};
	}
}

function mountTranslateWidget() {
	const w = window;
	const container = document.getElementById("google_translate_element");
	if (!container || !w.google?.translate?.TranslateElement) return;

	container.innerHTML = "";

	const TranslateElement = w.google.translate.TranslateElement;
	new TranslateElement(
		{
			pageLanguage: "en",
			includedLanguages: INCLUDED_LANGS,
			layout: TranslateElement.InlineLayout.SIMPLE,
		},
		"google_translate_element"
	);

	queueTranslateRowAlign();
}

/** Icon + label + native select on one row (Google’s SIMPLE layout omits the label). */
function alignTranslateRow() {
	const container = document.getElementById("google_translate_element");
	if (!container) return;

	const simple = container.querySelector<HTMLElement>(".goog-te-gadget-simple");
	const combo = container.querySelector<HTMLElement>(".goog-te-combo");
	if (!simple || !combo) return;

	if (!simple.querySelector(".google-translate-inline-label")) {
		const label = document.createElement("span");
		label.className = "google-translate-inline-label notranslate";
		label.textContent = "Select Language";
		simple.insertBefore(label, combo);
	}
}

function queueTranslateRowAlign() {
	const run = () => alignTranslateRow();
	run();
	requestAnimationFrame(run);
	setTimeout(run, 0);
	setTimeout(run, 50);
}

export function GoogleTranslate() {
	/* Ensure callback exists before Next injects translate.google.com (avoids race with cb=) */
	if (typeof window !== "undefined") {
		window.googleTranslateElementInit = mountTranslateWidget;
	}

	useLayoutEffect(() => {
		window.googleTranslateElementInit = mountTranslateWidget;
		if (window.google?.translate?.TranslateElement) {
			mountTranslateWidget();
		}
	}, []);

	return (
		<>
			<Script
				id="google-translate-script"
				src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
				strategy="afterInteractive"
				onLoad={() => {
					window.googleTranslateElementInit?.();
				}}
			/>
			<div
				className="notranslate google-translate-float pointer-events-auto fixed z-[99990] w-[min(22rem,calc(100vw-1.5rem))] overflow-visible bg-transparent p-0 shadow-none"
				style={{
					left: "max(1rem, env(safe-area-inset-left, 0px))",
					bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
				}}
				role="region"
				aria-label="Translate this page">
				<div
					id="google_translate_element"
					className="google-translate-slot flex min-h-[42px] w-full min-w-0 items-center overflow-visible"
				/>
			</div>
		</>
	);
}
