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
			className="notranslate flex items-center gap-2 shrink-0"
			title="Translate this page">
			<Languages
				className="hidden sm:block h-4 w-4 shrink-0 text-slate-600 dark:text-slate-300 opacity-90"
				aria-hidden
			/>
			<div
				id="google_translate_element"
				className="google-translate-host flex min-h-9 items-center"
			/>
		</div>
	);
}
