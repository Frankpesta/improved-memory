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
	title: "Credix AI",
	description: "AI trading platform | Maximizing your profits",
	icons: {
		icon: "/assets/ailogo.png", // Path to favicon in the public folder
		shortcut: "/assets/ailogo.png", // Path to shortcut icon in the public folder
		apple: "/assets/ailogo.png", // Optional for Apple devices
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
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
		</html>
	);
}
