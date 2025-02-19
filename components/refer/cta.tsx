"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const CTASection: React.FC = () => {
	const handleLogin = () => {
		window.location.href = "https://app.fidelitytradesai.com/login";
	};

	return (
		<section className="py-16 px-4 bg-primary/5">
			<div className="max-w-4xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Join Now & Start Earning! 🚀
					</h2>

					<p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
						Don't miss out on this incredible opportunity to earn unlimited
						passive income. Whether you're an investor or simply want to refer
						others, you can generate consistent earnings with our Refer & Earn
						program.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							onClick={handleLogin}
							size="lg"
							className="gap-2 text-lg px-6 py-6">
							<Rocket className="h-5 w-5" />
							Sign Up Today
						</Button>
						<Link href={"/services"}>
							<Button variant="outline" size="lg" className="text-lg px-6 py-6">
								Learn More
							</Button>
						</Link>
					</div>
					<p className="mt-8 font-medium text-lg">
						📌 Sign up today, start referring, and watch your earnings grow
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
