"use client";

import { useEffect } from "react";

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
			id="google_translate_element"
			className="notranslate min-h-[40px] flex items-center [&_.goog-te-gadget]:!text-transparent [&_.goog-te-gadget]:!leading-none [&_.goog-te-gadget-simple]:!border-0 [&_.goog-te-gadget-icon]:!hidden [&_.goog-te-combo]:!m-0 [&_.goog-te-combo]:!rounded-md [&_.goog-te-combo]:!border [&_.goog-te-combo]:!border-border [&_.goog-te-combo]:!bg-background [&_.goog-te-combo]:!px-2 [&_.goog-te-combo]:!py-1.5 [&_.goog-te-combo]:!text-sm [&_.goog-te-combo]:!text-foreground max-w-[160px] sm:max-w-[180px]"
			aria-label="Translate this page"
		/>
	);
}
