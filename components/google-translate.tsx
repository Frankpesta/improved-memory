"use client";

import { useLayoutEffect } from "react";
import Script from "next/script";
import { Languages } from "lucide-react";

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
				className="notranslate google-translate-float pointer-events-auto fixed z-[99990] w-[min(19rem,calc(100vw-1.5rem))] overflow-visible rounded-2xl border border-slate-200/90 bg-white p-3 shadow-lg dark:border-slate-600 dark:bg-slate-900"
				style={{
					left: "max(1rem, env(safe-area-inset-left, 0px))",
					bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
				}}
				role="region"
				aria-label="Translate this page">
				<div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
					<Languages className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
					<span>Language</span>
				</div>
				<div
					id="google_translate_element"
					className="google-translate-slot min-h-[42px] w-full overflow-visible"
				/>
			</div>
		</>
	);
}
