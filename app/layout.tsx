import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const nunitoSans = Roboto_Condensed({
	variable: "--font-nunitp-sans",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://app.credixai.com/api/blogs"),
	title: {
		default: "Credixai",
		template: "%s | Credixai",
	},
	description: "AI trading platform | Maximizing your profits",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://credixai.com/blogs",
		siteName: "Credixai",
		images: [
			{
				url: "/logo.png",
				width: 1200,
				height: 630,
				alt: "CredixAI Blog",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "CredixAI | Ai powered trading at its best",
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
		<html lang="en">
			<link rel="preconnect" href="https://app.credixai.com/api/blogs" />
			<link rel="dns-prefetch" href="https://app.credixai.com/api/bogs" />
			<body className={`${nunitoSans.variable}  antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
			<script
				id="chatway"
				async={true}
				src="https://cdn.chatway.app/widget.js?id=MZ8gXTIFIiRE"></script>
		</html>
	);
}
