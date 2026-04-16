"use client";

import { useEffect } from "react";
import { Languages } from "lucide-react";

const SCRIPT_ID = "google-translate-script";

declare global {
	interface Window {
		googleTranslateElementInit?: () => void;
		google?: {
			translate: {
				TranslateElement: {
					new (
						options: {
							pageLanguage: string;
							includedLanguages?: string;
							layout?: number;
						},
						elementId: string
					): void;
					InlineLayout: { SIMPLE: number };
				};
			};
		};
	}
}

export function GoogleTranslate() {
	useEffect(() => {
		const w = window;

		w.googleTranslateElementInit = () => {
			const container = document.getElementById("google_translate_element");
			if (container?.querySelector(".goog-te-combo") || !w.google?.translate) return;

			const TranslateElement = w.google.translate.TranslateElement;
			new TranslateElement(
				{
					pageLanguage: "en",
					includedLanguages:
						"en,es,fr,de,it,pt,zh-CN,ja,ko,ar,hi,ru,nl,pl,tr,vi,th,id,ms",
					layout: TranslateElement.InlineLayout.SIMPLE,
				},
				"google_translate_element"
			);
		};

		if (!document.getElementById(SCRIPT_ID)) {
			const script = document.createElement("script");
			script.id = SCRIPT_ID;
			script.src =
				"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
			script.async = true;
			document.body.appendChild(script);
		} else if (w.google?.translate?.TranslateElement) {
			window.googleTranslateElementInit?.();
		}
	}, []);

	return (
		<div
			className="notranslate google-translate-float pointer-events-auto fixed z-[99990] w-[min(18rem,calc(100vw-1.5rem))] overflow-visible rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-lg backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/95"
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
				className="google-translate-host google-translate-host--float flex min-h-10 w-full items-center overflow-visible"
			/>
		</div>
	);
}
