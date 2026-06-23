import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import { GoogleTranslate } from "@/components/google-translate";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://zeloxai.com"),
	title: {
		default: "Zelox AI",
		template: "%s | Zelox AI",
	},
	description: "AI trading platform | Maximizing your profits",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://zeloxai.com/blogs",
		siteName: "Zelox AI",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "Zelox AI Blog",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Zelox AI | AI-powered trading at its best",
		description:
			"Discover expert insights, trends, and in-depth analysis on topics that matter to you.",
		images: ["/logo.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/fav.png", // Path to favicon in the public folder
		shortcut: "/fav.png", // Path to shortcut icon in the public folder
		apple: "/fav.png", // Optional for Apple devices
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="preconnect" href="https://zeloxai.com" />
			<link rel="dns-prefetch" href="https://zeloxai.com" />
			<body className={`${plusJakartaSans.variable} font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					disableTransitionOnChange>
					<Navbar />
					{children}
					<Footer />
					{/* <GoogleTranslate /> */}
				</ThemeProvider>
			</body>
			<Script id="livechat" strategy="afterInteractive">{`
				window.__lc = window.__lc || {};
				window.__lc.license = 19806182;
				window.__lc.integration_name = "manual_onboarding";
				window.__lc.product_name = "livechat";
				;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
			`}</Script>
		</html>
	);
}
